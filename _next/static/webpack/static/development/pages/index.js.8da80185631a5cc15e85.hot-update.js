webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/*! exports provided: useTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var useTheme = function useTheme() {
  var prefersDarkMode = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useMediaQuery"])("(prefers-color-scheme: dark)");
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
      palette: {
        type: prefersDarkMode ? "dark" : "light"
      }
    });
  }, [prefersDarkMode]);
};

/***/ })

})
//# sourceMappingURL=index.js.8da80185631a5cc15e85.hot-update.js.map