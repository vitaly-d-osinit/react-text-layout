webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/TextArea.tsx":
/*!*************************************!*\
  !*** ./src/components/TextArea.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/store */ "./src/store/index.ts");
var _jsxFileName = "/home/vitaliy/Projects/react-text-layout/src/components/TextArea.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var TextArea = function TextArea(_ref) {
  var _ref$column = _ref.column,
      column = _ref$column === void 0 ? 0 : _ref$column;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var textArr = Object(src_store__WEBPACK_IMPORTED_MODULE_3__["useText"])();
  var text = textArr[column] || "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(text[column]),
      textValue = _useState[0],
      textValueChange = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    textValueChange(text);
  }, [text]);
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var target = _ref2.target;
    textValueChange(target.value);
  }, []);
  var handleBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(src_store__WEBPACK_IMPORTED_MODULE_3__["setTextAction"])(textValue, column));
  }, [column, dispatch, textValue]);
  return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Enter text",
    rows: "12",
    multiline: true,
    fullWidth: true,
    value: textValue,
    onBlur: handleBlur,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ })

})
//# sourceMappingURL=index.js.568efae173e71ea4d31e.hot-update.js.map