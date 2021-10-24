(self["webpackChunk"] = self["webpackChunk"] || []).push([["search"],{

/***/ "./assets/js/jquery.instantSearch.js":
/*!*******************************************!*\
  !*** ./assets/js/jquery.instantSearch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * jQuery plugin for an instant searching.
 *
 * @author Oleg Voronkovich <oleg-voronkovich@yandex.ru>
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
(function ($) {
  'use strict';

  String.prototype.render = function (parameters) {
    return this.replace(/({{ (\w+) }})/g, function (match, pattern, name) {
      return parameters[name];
    });
  }; // INSTANTS SEARCH PUBLIC CLASS DEFINITION
  // =======================================


  var InstantSearch = function InstantSearch(element, options) {
    this.$input = $(element);
    this.$form = this.$input.closest('form');
    this.$preview = $('<ul class="search-preview list-group">').appendTo(this.$form);
    this.options = $.extend({}, InstantSearch.DEFAULTS, this.$input.data(), options);
    this.$input.keyup(this.debounce());
  };

  InstantSearch.DEFAULTS = {
    minQueryLength: 2,
    limit: 10,
    delay: 500,
    noResultsMessage: 'No results found',
    itemTemplate: '\
                <article class="post">\
                    <h2><a href="{{ url }}">{{ title }}</a></h2>\
                    <p class="post-metadata">\
                       <span class="metadata"><i class="fa fa-calendar"></i> {{ date }}</span>\
                       <span class="metadata"><i class="fa fa-user"></i> {{ author }}</span>\
                    </p>\
                    <p>{{ summary }}</p>\
                </article>'
  };

  InstantSearch.prototype.debounce = function () {
    var delay = this.options.delay;
    var search = this.search;
    var timer = null;
    var self = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        search.apply(self);
      }, delay);
    };
  };

  InstantSearch.prototype.search = function () {
    var query = $.trim(this.$input.val()).replace(/\s{2,}/g, ' ');

    if (query.length < this.options.minQueryLength) {
      this.$preview.empty();
      return;
    }

    var self = this;
    var data = this.$form.serializeArray();
    data['l'] = this.limit;
    $.getJSON(this.$form.attr('action'), data, function (items) {
      self.show(items);
    });
  };

  InstantSearch.prototype.show = function (items) {
    var $preview = this.$preview;
    var itemTemplate = this.options.itemTemplate;

    if (0 === items.length) {
      $preview.html(this.options.noResultsMessage);
    } else {
      $preview.empty();
      $.each(items, function (index, item) {
        $preview.append(itemTemplate.render(item));
      });
    }
  }; // INSTANTS SEARCH PLUGIN DEFINITION
  // =================================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var instance = $this.data('instantSearch');
      var options = _typeof(option) === 'object' && option;
      if (!instance) $this.data('instantSearch', instance = new InstantSearch(this, options));
      if (option === 'search') instance.search();
    });
  }

  $.fn.instantSearch = Plugin;
  $.fn.instantSearch.Constructor = InstantSearch;
})(__webpack_provided_window_dot_jQuery);

/***/ }),

/***/ "./assets/search.js":
/*!**************************!*\
  !*** ./assets/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery.instantSearch.js */ "./assets/js/jquery.instantSearch.js");
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(function () {
  $('.search-field').instantSearch({
    delay: 100
  }).keyup();
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-88c411","vendors-node_modules_core-js_internals_string-trim_js-node_modules_core-js_modules_es_object_-49a87d"], () => (__webpack_exec__("./assets/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvanF1ZXJ5Lmluc3RhbnRTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyIkIiwiU3RyaW5nIiwicHJvdG90eXBlIiwicmVuZGVyIiwicGFyYW1ldGVycyIsInJlcGxhY2UiLCJtYXRjaCIsInBhdHRlcm4iLCJuYW1lIiwiSW5zdGFudFNlYXJjaCIsImVsZW1lbnQiLCJvcHRpb25zIiwiJGlucHV0IiwiJGZvcm0iLCJjbG9zZXN0IiwiJHByZXZpZXciLCJhcHBlbmRUbyIsImV4dGVuZCIsIkRFRkFVTFRTIiwiZGF0YSIsImtleXVwIiwiZGVib3VuY2UiLCJtaW5RdWVyeUxlbmd0aCIsImxpbWl0IiwiZGVsYXkiLCJub1Jlc3VsdHNNZXNzYWdlIiwiaXRlbVRlbXBsYXRlIiwic2VhcmNoIiwidGltZXIiLCJzZWxmIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwicXVlcnkiLCJ0cmltIiwidmFsIiwibGVuZ3RoIiwiZW1wdHkiLCJzZXJpYWxpemVBcnJheSIsImdldEpTT04iLCJhdHRyIiwiaXRlbXMiLCJzaG93IiwiaHRtbCIsImVhY2giLCJpbmRleCIsIml0ZW0iLCJhcHBlbmQiLCJQbHVnaW4iLCJvcHRpb24iLCIkdGhpcyIsImluc3RhbmNlIiwiZm4iLCJpbnN0YW50U2VhcmNoIiwiQ29uc3RydWN0b3IiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxDQUFWLEVBQWE7QUFDVjs7QUFFQUMsUUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFqQixHQUEwQixVQUFVQyxVQUFWLEVBQXNCO0FBQzVDLFdBQU8sS0FBS0MsT0FBTCxDQUFhLGdCQUFiLEVBQStCLFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxJQUExQixFQUFnQztBQUNsRSxhQUFPSixVQUFVLENBQUNJLElBQUQsQ0FBakI7QUFDSCxLQUZNLENBQVA7QUFHSCxHQUpELENBSFUsQ0FTVjtBQUNBOzs7QUFFQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVDLE9BQVYsRUFBbUJDLE9BQW5CLEVBQTRCO0FBQzVDLFNBQUtDLE1BQUwsR0FBY1osQ0FBQyxDQUFDVSxPQUFELENBQWY7QUFDQSxTQUFLRyxLQUFMLEdBQWEsS0FBS0QsTUFBTCxDQUFZRSxPQUFaLENBQW9CLE1BQXBCLENBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCZixDQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0Q2dCLFFBQTVDLENBQXFELEtBQUtILEtBQTFELENBQWhCO0FBQ0EsU0FBS0YsT0FBTCxHQUFlWCxDQUFDLENBQUNpQixNQUFGLENBQVMsRUFBVCxFQUFhUixhQUFhLENBQUNTLFFBQTNCLEVBQXFDLEtBQUtOLE1BQUwsQ0FBWU8sSUFBWixFQUFyQyxFQUF5RFIsT0FBekQsQ0FBZjtBQUVBLFNBQUtDLE1BQUwsQ0FBWVEsS0FBWixDQUFrQixLQUFLQyxRQUFMLEVBQWxCO0FBQ0gsR0FQRDs7QUFTQVosZUFBYSxDQUFDUyxRQUFkLEdBQXlCO0FBQ3JCSSxrQkFBYyxFQUFFLENBREs7QUFFckJDLFNBQUssRUFB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NkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNYRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDOztBQUV4RDtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGpRdWVyeSBwbHVnaW4gZm9yIGFuIGluc3RhbnQgc2VhcmNoaW5nLlxuICpcbiAqIEBhdXRob3IgT2xlZyBWb3JvbmtvdmljaCA8b2xlZy12b3JvbmtvdmljaEB5YW5kZXgucnU+XG4gKiBAYXV0aG9yIFlvbmVsIENlcnV0byA8eW9uZWxjZXJ1dG9AZ21haWwuY29tPlxuICovXG4oZnVuY3Rpb24gKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBTdHJpbmcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLyh7eyAoXFx3KykgfX0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcGF0dGVybiwgbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNbbmFtZV07XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIC8vIElOU1RBTlRTIFNFQVJDSCBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFyIEluc3RhbnRTZWFyY2ggPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLiRpbnB1dCA9ICQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLiRpbnB1dC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIHRoaXMuJHByZXZpZXcgPSAkKCc8dWwgY2xhc3M9XCJzZWFyY2gtcHJldmlldyBsaXN0LWdyb3VwXCI+JykuYXBwZW5kVG8odGhpcy4kZm9ybSk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBJbnN0YW50U2VhcmNoLkRFRkFVTFRTLCB0aGlzLiRpbnB1dC5kYXRhKCksIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuJGlucHV0LmtleXVwKHRoaXMuZGVib3VuY2UoKSk7XG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2guREVGQVVMVFMgPSB7XG4gICAgICAgIG1pblF1ZXJ5TGVuZ3RoOiAyLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgIG5vUmVzdWx0c01lc3NhZ2U6ICdObyByZXN1bHRzIGZvdW5kJyxcbiAgICAgICAgaXRlbVRlbXBsYXRlOiAnXFxcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBvc3RcIj5cXFxuICAgICAgICAgICAgICAgICAgICA8aDI+PGEgaHJlZj1cInt7IHVybCB9fVwiPnt7IHRpdGxlIH19PC9hPjwvaDI+XFxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3N0LW1ldGFkYXRhXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXRhZGF0YVwiPjxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+IHt7IGRhdGUgfX08L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXRhZGF0YVwiPjxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT4ge3sgYXV0aG9yIH19PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cXFxuICAgICAgICAgICAgICAgICAgICA8cD57eyBzdW1tYXJ5IH19PC9wPlxcXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPidcbiAgICB9O1xuXG4gICAgSW5zdGFudFNlYXJjaC5wcm90b3R5cGUuZGVib3VuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWxheSA9IHRoaXMub3B0aW9ucy5kZWxheTtcbiAgICAgICAgdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoO1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaC5hcHBseShzZWxmKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgSW5zdGFudFNlYXJjaC5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVlcnkgPSAkLnRyaW0odGhpcy4kaW5wdXQudmFsKCkpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcbiAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA8IHRoaXMub3B0aW9ucy5taW5RdWVyeUxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy4kcHJldmlldy5lbXB0eSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgZGF0YVsnbCddID0gdGhpcy5saW1pdDtcblxuICAgICAgICAkLmdldEpTT04odGhpcy4kZm9ybS5hdHRyKCdhY3Rpb24nKSwgZGF0YSwgZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICBzZWxmLnNob3coaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgSW5zdGFudFNlYXJjaC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICB2YXIgJHByZXZpZXcgPSB0aGlzLiRwcmV2aWV3O1xuICAgICAgICB2YXIgaXRlbVRlbXBsYXRlID0gdGhpcy5vcHRpb25zLml0ZW1UZW1wbGF0ZTtcblxuICAgICAgICBpZiAoMCA9PT0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcHJldmlldy5odG1sKHRoaXMub3B0aW9ucy5ub1Jlc3VsdHNNZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRwcmV2aWV3LmVtcHR5KCk7XG4gICAgICAgICAgICAkLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgICAgICAgICRwcmV2aWV3LmFwcGVuZChpdGVtVGVtcGxhdGUucmVuZGVyKGl0ZW0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIElOU1RBTlRTIFNFQVJDSCBQTFVHSU4gREVGSU5JVElPTlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSAkdGhpcy5kYXRhKCdpbnN0YW50U2VhcmNoJyk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnICYmIG9wdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkgJHRoaXMuZGF0YSgnaW5zdGFudFNlYXJjaCcsIChpbnN0YW5jZSA9IG5ldyBJbnN0YW50U2VhcmNoKHRoaXMsIG9wdGlvbnMpKSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb24gPT09ICdzZWFyY2gnKSBpbnN0YW5jZS5zZWFyY2goKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAkLmZuLmluc3RhbnRTZWFyY2ggPSBQbHVnaW47XG4gICAgJC5mbi5pbnN0YW50U2VhcmNoLkNvbnN0cnVjdG9yID0gSW5zdGFudFNlYXJjaDtcblxufSkod2luZG93LmpRdWVyeSk7XG4iLCJpbXBvcnQgJy4vanMvanF1ZXJ5Lmluc3RhbnRTZWFyY2guanMnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5zZWFyY2gtZmllbGQnKVxuICAgICAgICAuaW5zdGFudFNlYXJjaCh7XG4gICAgICAgICAgICBkZWxheTogMTAwLFxuICAgICAgICB9KVxuICAgICAgICAua2V5dXAoKTtcbn0pO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCAxLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICAgIHJldHVybiBzZWFyY2hlciAhPT0gdW5kZWZpbmVkID8gc2VhcmNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBzcGVjIHJlcXVpcmVtZW50XG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9