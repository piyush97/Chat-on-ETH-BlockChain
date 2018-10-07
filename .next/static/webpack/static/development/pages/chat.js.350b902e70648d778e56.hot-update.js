webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./server/chat.js":
/*!************************!*\
  !*** ./server/chat.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./server/web3.js");
/* harmony import */ var _build_Chat_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Chat.json */ "./server/build/Chat.json");
var _build_Chat_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/Chat.json */ "./server/build/Chat.json", 1);


var contract = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(_build_Chat_json__WEBPACK_IMPORTED_MODULE_1__.interface);
var instance = contract.at('0x106034043d73AD3C02bA0b47eA15E18A7ba3E765');
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=chat.js.350b902e70648d778e56.hot-update.js.map