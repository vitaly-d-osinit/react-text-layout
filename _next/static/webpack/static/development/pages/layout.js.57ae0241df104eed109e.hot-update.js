webpackHotUpdate("static/development/pages/layout.js",{

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: setTitleAction, setActiveNavigationAction, setActiveNavigation, useTitle, useNavigationList, useActiveNavigation, setTextAction, setText, setActiveColumnAction, setActiveColumn, useText, useColumns, useActiveColumn, INITIAL_STATE, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _text_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text-layout */ "./src/store/text-layout.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page */ "./src/store/page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTitleAction", function() { return _page__WEBPACK_IMPORTED_MODULE_10__["setTitleAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setActiveNavigationAction", function() { return _page__WEBPACK_IMPORTED_MODULE_10__["setActiveNavigationAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setActiveNavigation", function() { return _page__WEBPACK_IMPORTED_MODULE_10__["setActiveNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitle", function() { return _page__WEBPACK_IMPORTED_MODULE_10__["useTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNavigationList", function() { return _page__WEBPACK_IMPORTED_MODULE_10__["useNavigationList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useActiveNavigation", function() { return _page__WEBPACK_IMPORTED_MODULE_10__["useActiveNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTextAction", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["setTextAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setActiveColumnAction", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["setActiveColumnAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setActiveColumn", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["setActiveColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useText", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["useText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useColumns", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["useColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useActiveColumn", function() { return _text_layout__WEBPACK_IMPORTED_MODULE_9__["useActiveColumn"]; });









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var INITIAL_STATE = {
  title: "React coding task «Text Layout»",
  navigationList: [{
    id: "text",
    pageTitle: "Text area",
    linkText: "Text",
    link: "/"
  }, {
    id: "columns",
    pageTitle: "Text columns area",
    linkText: "LAYOUT",
    link: "/layout"
  }],
  activeNavigation: "text",
  text: [],
  columns: 3,
  activeColumn: 1
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = action || {},
      type = _ref.type;

  switch (type) {
    case "SET_TITLE":
      return _objectSpread({}, state, {
        title: action.title
      });

    case "SET_ACTIVE_NAVIGATION":
      return Object(_page__WEBPACK_IMPORTED_MODULE_10__["setActiveNavigation"])(state, action);

    case "SET_TEXT":
      return Object(_text_layout__WEBPACK_IMPORTED_MODULE_9__["setText"])(state, action);

    case "SET_ACTIVE_COLUMN":
      return Object(_text_layout__WEBPACK_IMPORTED_MODULE_9__["setActiveColumn"])(state, action);

    default:
      return state;
  }
};

var initializeStore = function initializeStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])()));
};

/***/ })

})
//# sourceMappingURL=layout.js.57ae0241df104eed109e.hot-update.js.map