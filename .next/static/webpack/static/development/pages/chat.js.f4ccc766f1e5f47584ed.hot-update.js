webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./pages/chat.jsx":
/*!************************!*\
  !*** ./pages/chat.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style/css */ "./node_modules/antd/lib/drawer/style/css.js");
/* harmony import */ var antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/breadcrumb/style/css */ "./node_modules/antd/lib/breadcrumb/style/css.js");
/* harmony import */ var antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_21__);




















var _jsxFileName = "/Users/piyushmehta/with-ant-design-app/pages/chat.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_19___default.a.TextArea;
var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default.a.Footer,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default.a.Sider;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.SubMenu; // Dummy data for messages

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
      value: '',
      collapsed: false,
      visible: false,
      messages: DUMMY_DATA,
      modalVisible: false
    };
    _this.setModalVisible = _this.setModalVisible(bind);
    return _this;
  }

  _createClass(Chat, [{
    key: "setModalVisible",
    value: function setModalVisible(modalVisible) {
      this.setState({
        modalVisible: modalVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default.a, {
        style: {
          minHeight: "100vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_13___default.a, {
        title: "20px to Top",
        style: {
          top: 20
        },
        visible: this.state.modal1Visible,
        onOk: function onOk() {
          return _this2.setModal1Visible(false);
        },
        onCancel: function onCancel() {
          return _this2.setModal1Visible(false);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "some contents..."), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "some contents..."), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "some contents...")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Sider, {
        collapsible: true,
        collapsed: this.state.collapsed,
        onCollapse: this.onCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a, {
        theme: "dark",
        defaultSelectedKeys: ["1"],
        mode: "inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
          type: "user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "User")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Piyush"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
        href: "/profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Aditya"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Hemant")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
          type: "team",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Team")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Team Blume"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Team Hello")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "File")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "10",
        onClick: this.showDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "setting",
        theme: "outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Settings")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_15___default.a.Item, {
        key: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "poweroff",
        theme: "outlined",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Log Out")))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Header, {
        style: {
          background: "#fff",
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Content, {
        style: {
          margin: "0 16px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_9___default.a, {
        style: {
          margin: "16px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("ul", {
        className: "message-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.state.messages.map(function (message) {
        if (message.senderId === "perborgen") return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
          key: message.id,
          style: {
            padding: 24,
            background: "#fff",
            minHeight: 60,
            textAlign: "right"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, message.senderId, ":"), message.text), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }));else return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
          key: message.id,
          style: {
            padding: 24,
            background: "#fff",
            minHeight: 60,
            textAlign: "left"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, message.senderId, ":"), message.text), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        xs: {
          span: 18
        },
        lg: {
          span: 23
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(TextArea, {
        rows: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        xs: {
          span: 2
        },
        lg: {
          span: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "primary",
        style: {
          height: 95
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Send"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Footer, {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Created by Team blume"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "User Settings",
        placement: "right",
        closable: true,
        onClose: this.onClose,
        visible: this.state.visible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        type: "primary",
        onClick: function onClick() {
          return _this2.setModalVisible(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Set Bounty"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Set Messaging limit"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Control Privacy")));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_20___default.a.Component);

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
//# sourceMappingURL=chat.js.f4ccc766f1e5f47584ed.hot-update.js.map