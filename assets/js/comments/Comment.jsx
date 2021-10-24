import React, {useState, useCallback, useEffect, useRef} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {useFetch, usePaginatedFetch} from "./hooks";
import {Icon} from "../components/Icon";
import {Field} from "../components/Form";

const dateFormat = {
    dateStyle: 'medium',
    timeStyle: 'short'
}

const VIEW = 'VIEW'
const EDIT = 'EDIT'

function Comments ({post, user}) {
    const {items: comments, setItems: setComments, load, loading, count, hasMore} = usePaginatedFetch('/api/comments?post=' + post)

    const addComment = useCallback(comment => {
        setComments(comments => [comment, ...comments])
    }, [])

    const deleteComment = useCallback(comment => {
        setComments(comments => comments.filter(c => c !== comment))
    }, [])

    const updateComment = useCallback((newComment, oldComment) => {
        setComments(comments => comments.map(c => c === oldComment ? newComment : c))
    }, [])

    useEffect(() => {
        load();
    }, []);

    return <div>
        <Title count={count}/>
        {user && <CommentForm post={post} onComment={addComment}/>}
        {comments.map(c =>
            <Comment
                key={c.id}
                comment={c}
                post={post}
                canEdit={c.author.id === user}
                onDelete={deleteComment}
                onUpdate={updateComment}
            />
        )}
        { hasMore && <button onClick={load} className="btn btn-primary" disabled={loading}>Charger plus de commentaires</button>}
    </div>
}

const Comment = React.memo(({comment, post, onDelete, onUpdate, canEdit}) => {
    const date = new Date(comment.publishedAt);

    //EVENTS
    const toggleEdit = useCallback(() => setState(state => state === VIEW ? EDIT : VIEW), [])

    const onDeleteCallback = useCallback(() => onDelete(comment), [comment]);

    const onComment = useCallback(newComment => {
        onUpdate(newComment, comment)
        toggleEdit()
    }, [comment]);

    // Hook
    const [state, setState] = useState(VIEW);
    const {loading: loadingDelete, load: callDelete} = useFetch(comment['@id'], 'DELETE', onDeleteCallback);

    // RENDU
    return <div className="row post-comment">
        <h4 className="col-sm-3">
            <strong>{comment.author.username}</strong>
            commenté le
            <strong>{date.toLocaleString(undefined, dateFormat)}</strong>
        </h4>
       <div className="col-sm-9">
           {state === VIEW
               ? <p>{comment.content}</p>
               : <CommentForm comment={comment} post={post} onComment={onComment} onCancel={toggleEdit}/>
           }

           {(canEdit && state !== EDIT) && <p>
               <button className="btn btn-danger" onClick={callDelete.bind(this, null)} disabled={loadingDelete}>
                   <Icon icon="trash"/> Supprimer
               </button>

               <button className="btn btn-secondary ml-1" onClick={toggleEdit}>
                   <Icon icon="pen"/> Editer
               </button>
           </p>}
       </div>
    </div>
})

const CommentForm = React.memo(({post = null, onComment, comment = null, onCancel = null}) => {
    // Variables
    const ref = useRef(null);

    // Methodes
    const onSuccess = useCallback(comment => {
        onComment(comment)
        ref.current.value = ''
    }, [ref, onComment])

    // Hooks
    const method = comment ? 'PUT' : 'POST';
    const url = comment ? comment['@id'] : '/api/comments';
    const {loading, errors, load, cleanError} = useFetch(url, method, onSuccess)

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        load({
            content: ref.current.value,
            post: "/api/posts/" + post
        });
    }, [load, ref, post])

    // Effets
    useEffect(() => {
        if (comment && comment.content && ref.current) {
            ref.current.value = comment.content
        }
    }, [comment, ref])

    // Rendu
    return <div className="well">
        <form onSubmit={onSubmit}>
            { comment === null && <fieldset>
                <legend><Icon icon="comment"/> Laisser un commentaire</legend>
            </fieldset> }
            <Field
                name="content"
                help="Les commentaires non conformes à notre code de conduite seront modérés."
                ref={ref}
                required
                minLength={5}
                error={errors['content']}
                onChange={cleanError.bind(this, 'content')}
            >
                Votre commentaire
            </Field>
            <div className="form-group">
                <button className="btn btn-primary" disabled={loading}>
                    <Icon icon="paper-plane" /> {comment === null ? 'Envoyer' : 'Editer'}
                </button>
                {onCancel && <button className="btn btn-secondary" onClick={onCancel}>Annuler</button>}
            </div>
        </form>
    </div>
})

const Title = ({count}) => {
    return <h3>
        <Icon icon="comments" />
        {count} Commentaire{count > 1 ? 's' : ''}
    </h3>
}

class CommentsElement extends HTMLElement {
    constructor() {
        super();
        this.observer = null
    }

    connectedCallback() {
        const post = parseInt(this.dataset.post, 10);
        const user = parseInt(this.dataset.user, 10) || null;

        if (this.observer === null) {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target === this) {
                        this.observer.disconnect()

                        render(<Comments post={post} user={user}/>, this)
                    }
                })
            })
        }
        this.observer.observe(this)
    }

    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect()
        }
        unmountComponentAtNode(this)
    }
}

customElements.define('post-comments', CommentsElement)