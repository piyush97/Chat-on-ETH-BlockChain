webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./pages/chat.jsx":
/*!************************!*\
  !*** ./pages/chat.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/drawer/style/css */ "./node_modules/antd/lib/drawer/style/css.js");
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/antd/lib/breadcrumb/style/css.js");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _server_chat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../server/chat */ "./server/chat.js");
/* harmony import */ var _server_web3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../server/web3 */ "./server/web3.js");





















var _jsxFileName = "/Users/piyushmehta/with-ant-design-app/pages/chat.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_20___default.a.TextArea;


var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default.a.Footer,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default.a.Sider;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.SubMenu; // Dummy data for messages

var DUMMY_DATA = [{
  senderId: "perborgen",
  text: "who'll win?"
}, {
  senderId: "janedoe",
  text: "who'll win?"
}];

var Chat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chat).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showDrawer", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCollapse", function (collapsed) {
      console.log(collapsed);

      _this.setState({
        collapsed: collapsed
      });
    });

    _this.state = {
      value: "",
      collapsed: false,
      visible: false,
      messages: DUMMY_DATA,
      modalVisible: false,
      bountySetValue: [],
      ManagerName: "",
      BountyPaid: true,
      MessageArray: [],
      StateAccounts: [],
      messageToSend: ""
    };
    _this.messageSender = _this.messageSender.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setModalVisible = _this.setModalVisible.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.syncMessages = _this.syncMessages.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.calling = this.calling.bind(this);

    return _this;
  }

  _createClass(Chat, [{
    key: "messageSender",
    value: function messageSender(event) {
      //event.target.value;
      if (this.state.BountyPaid == true) {
        var localAccount = _server_web3__WEBPACK_IMPORTED_MODULE_24__["default"].eth.accounts[0];
        console.log(this.state.StateAccounts[0]);

        var _msg;

        if (this.state.StateAccounts[0] == this.state.ManagerName) {
          var _msg = "0" + this.state.messageToSend;
        } else {
          var _msg = "1" + this.state.messageToSend;
        }

        _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].methods.sendMessage(_msg).send({
          from: this.state.StateAccounts[0]
        });
      } else {//TODO pay bounty and refresh state
      }

      this.syncMessages();
    }
  }, {
    key: "setModalVisible",
    value: function setModalVisible(modalVisible) {
      this.setState({
        modalVisible: true
      });
    }
  }, {
    key: "stateSync",
    value: function () {
      var _stateSync = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee() {
        var _this2 = this;

        var accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].methods.bounty().call(function (error, response) {
                  if (error) {
                    console.log("error", error);
                  } else {
                    // console.log('response',response);
                    _this2.setState({
                      bountySetValue: _server_web3__WEBPACK_IMPORTED_MODULE_24__["default"].utils.fromWei(response, "ether")
                    });
                  }
                });

              case 2:
                _context.next = 4;
                return _server_web3__WEBPACK_IMPORTED_MODULE_24__["default"].eth.getAccounts();

              case 4:
                accounts = _context.sent;
                this.setState({
                  StateAccounts: accounts
                });
                _context.next = 8;
                return _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].methods.manager().call(function (error, response) {
                  if (error) {
                    console.log("managererror", error);
                  } else {
                    console.log("managerresponse", response);

                    _this2.setState({
                      ManagerName: response
                    });
                  }
                });

              case 8:
                _context.next = 10;
                return _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].methods.bountyPaid().call(function (error, response) {
                  if (error) {
                    console.log("BountyPaiderror", error);
                  } else {
                    console.log("BountyPaidresponse", response);

                    _this2.setState({
                      BountyPaid: response
                    });
                  }
                });

              case 10:
                _context.next = 12;
                return _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].methods.getMessages().call(function (error, response) {
                  if (error) {
                    console.log("GetMessagesPaiderror", error);
                  } else {
                    console.log("getMessagesResponse", response);

                    _this2.setState({
                      MessageArray: response
                    });
                  }
                });

              case 12:
                console.log("MessageArray", this.state.MessageArray);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function stateSync() {
        return _stateSync.apply(this, arguments);
      };
    }()
  }, {
    key: "syncMessages",
    value: function () {
      var _syncMessages = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee2() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].methods.getMessages().call(function (error, response) {
                  if (error) {
                    console.log("GetMessagesPaiderror", error);
                  } else {
                    console.log("getMessagesResponse", response);

                    _this3.setState({
                      MessageArray: response
                    });
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function syncMessages() {
        return _syncMessages.apply(this, arguments);
      };
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                //  console.log("2wlehwkufhdkdsahf");
                //  console.log("%%%%%",instance);
                //  console.log(instance.options.address);
                //  bountyPaid
                this.stateSync(); // await instance.newMessage().watch((error, response) => {
                //   if (!error) {
                //     this.stateSync();
                //   }
                // });

                _context3.next = 3;
                return _server_chat__WEBPACK_IMPORTED_MODULE_23__["default"].events.newMessage({}, function (error, data) {
                  if (error) console.log("Error: " + error);else console.log("Log data: " + data);
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default.a, {
        style: {
          minHeight: "100vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Sider, {
        collapsible: true,
        collapsed: this.state.collapsed,
        onCollapse: this.onCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a, {
        theme: "dark",
        defaultSelectedKeys: ["1"],
        mode: "inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "User")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Piyush"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
        href: "/profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Aditya"))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Hemant")), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
          type: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "Team")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Team Blume"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Team Hello")), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "File")), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "10",
        onClick: this.showDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "setting",
        theme: "outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Settings")), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_16___default.a.Item, {
        key: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "poweroff",
        theme: "outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Log Out")))))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Header, {
        style: {
          background: "#fff",
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Content, {
        style: {
          margin: "0 16px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_11___default.a, {
        style: {
          margin: "16px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("ul", {
        className: "message-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), this.state.MessageArray.map(function (message, index) {
        if (message.indexOf("1")) {
          return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
            xs: {
              span: 18
            },
            lg: {
              span: 4
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
            style: {
              borderRadius: 50,
              padding: 14,
              color: "#fff",
              background: "#438EF7",
              minHeight: 30,
              textAlign: "left"
            },
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            },
            __self: this
          }, "Hemant:"), " ", message.slice(1, message.length)))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            },
            __self: this
          }));
        } else {
          {
            return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 257
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 258
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
              xs: {
                span: 18
              },
              lg: {
                span: 50,
                offset: 10
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 259
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
              style: {
                borderRadius: 50,
                padding: 14,
                background: "#fff",
                minHeight: 30,
                textAlign: "right"
              },
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 260
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("b", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              },
              __self: this
            }, "Aditya:"), " ", message.slice(1, message.length)))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("br", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 274
              },
              __self: this
            }));
          }
        }
      })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        xs: {
          span: 18
        },
        lg: {
          span: 23
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(TextArea, {
        type: "text",
        onChange: function onChange(event) {
          return _this4.setState({
            messageToSend: event.target.value
          });
        },
        rows: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        xs: {
          span: 2
        },
        lg: {
          span: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: this.messageSender,
        type: "primary",
        style: {
          height: 95
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Send"))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(Footer, {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Created by Team blume"))), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        title: "User Settings",
        placement: "right",
        closable: true,
        onClose: this.onClose,
        visible: this.state.visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("p", {
        type: "primary",
        onClick: function onClick() {
          return _this4.setModalVisible(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Set Bounty"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("p", {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "Set Messaging limit"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("p", {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Control Privacy")), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "Set Bounty",
        style: {
          top: 20
        },
        visible: this.state.modalVisible,
        onOk: function onOk() {
          return _this4.setModalVisible(false);
        },
        onCancel: function onCancel() {
          return _this4.setModalVisible(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Your Current Bounty is ", this.state.bountySetValue, " Either"));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_21___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chat);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/chat")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=chat.js.12d25e4b0c4e430929ea.hot-update.js.map