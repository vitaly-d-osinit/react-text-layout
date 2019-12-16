webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/chunkTextArray.ts":
/*!*************************************!*\
  !*** ./src/utils/chunkTextArray.ts ***!
  \*************************************/
/*! exports provided: chunkTextArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkTextArray", function() { return chunkTextArray; });
/* harmony import */ var array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! array-chunk */ "./node_modules/array-chunk/index.js");
/* harmony import */ var array_chunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(array_chunk__WEBPACK_IMPORTED_MODULE_0__);

var chunkTextArray = function chunkTextArray(textArr, columns) {
  var text = textArr.join("");
  var textArrEvenly = text.split("");
  var size = Math.ceil(textArrEvenly.length / columns);
  console.log(textArrEvenly);
  var textArrChunked = array_chunk__WEBPACK_IMPORTED_MODULE_0___default()(textArrEvenly, size);
  return textArrChunked.map(function (arr) {
    return arr.join("");
  });
};

/***/ })

})
//# sourceMappingURL=index.js.1eead03c73254ab2e0db.hot-update.js.map