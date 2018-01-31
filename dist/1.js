webpackJsonp([1],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_walle_jpeg__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_walle_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_walle_jpeg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylesheets_index_less__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylesheets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylesheets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sum__ = __webpack_require__(18);


 



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const total = Object(__WEBPACK_IMPORTED_MODULE_2__sum__["a" /* default */])(10,5);
  const image = document.createElement('img');
  
  console.log(total);
  console.log('hurray walle index');
  
  image.src = __WEBPACK_IMPORTED_MODULE_0__images_walle_jpeg___default.a;
  document.body.appendChild(image);
});
  




/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const sum = (a,b) => a + b;

//module.exports = sum;
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "217c81e21da16fd47d29ecf053ebc78c.jpeg";

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(21);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "body .index-list {\n  background: green;\n}\n", ""]);

// exports


/***/ })

});