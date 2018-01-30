webpackJsonp([1],{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_doggy_jpg__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_doggy_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_doggy_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sum__ = __webpack_require__(6);


// import '../stylesheets/index.less' => not working



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const total = Object(__WEBPACK_IMPORTED_MODULE_1__sum__["a" /* default */])(5,5);
  const image = document.createElement('img');
  
  console.log(total);
  console.log('hurray users index');
  
  image.src = __WEBPACK_IMPORTED_MODULE_0__images_doggy_jpg___default.a;
  document.body.appendChild(image);
});
  




/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const sum = (a,b) => a + b;

//module.exports = sum;
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c38245c659f4ba862b1970fb37338733.jpg";

/***/ })

});