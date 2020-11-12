module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contato.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\elton\\Documents\\Aplicacoes\\semana-imersao-tres\\site\\components\\Menu.js";



const Menu = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      color: "dark",
      dark: true,
      expand: "md",
      className: "fixed-top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
          href: "/",
          children: "Celke"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
            className: "mr-auto",
            navbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                href: "/",
                children: "Index"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                href: "/sobre-empresa",
                children: "Sobre Empresa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                href: "/contato",
                children: "Contato"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Rodape.js":
/*!******************************!*\
  !*** ./components/Rodape.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\elton\\Documents\\Aplicacoes\\semana-imersao-tres\\site\\components\\Rodape.js";



const Rodape = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    fluid: true,
    className: "rodape",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      children: `.rodape{
                    background-color: #000;
                    color: #fed136;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      className: "text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "lead",
        children: "Rodap\xE9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Rodape);

/***/ }),

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Rodape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Rodape */ "./components/Rodape.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\elton\\Documents\\Aplicacoes\\semana-imersao-tres\\site\\pages\\contato.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Home() {
  const {
    0: contato,
    1: setContato
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    email: '',
    subject: '',
    content: ''
  });
  const {
    0: response,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    formSave: false,
    type: '',
    message: ''
  });

  const onChangeInput = e => setContato(_objectSpread(_objectSpread({}, contato), {}, {
    [e.target.name]: e.target.value
  }));

  const sendMsg = async e => {
    e.preventDefault();
    setResponse({
      formSave: true
    });

    try {
      const res = await fetch('http://localhost:3333/contato', {
        method: 'POST',
        body: JSON.stringify(contato),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseEnv = await res.json();

      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        });
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        });
      }
    } catch (err) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Erro: Mensagem não enviada com sucesso, tente mais tarde!'
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Contato - Celke"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Contato com a empresa ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "author",
        content: "Celke"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: `.descr-top{
                        background-color: #000;
                        color: #fed136;
                        padding-top: 100px;
                        padding-bottom: 50;
                        margin-bottom: 0rem !important;
                    }`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4",
          children: "Contato"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      fluid: true,
      className: "form-contato",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: `.form-contato{
                        padding-top: 80px;
                        padding-bottom: 80px;
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        children: [response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-danger",
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 46
        }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-success",
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 48
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          onSubmit: sendMsg,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              for: "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              for: "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Melhor e-mail",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              for: "subject",
              children: "Assunto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "text",
              name: "subject",
              id: "subject",
              placeholder: "Assunto da mensagem",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
              for: "content",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              type: "textarea",
              name: "content",
              id: "content",
              placeholder: "Conte\xFAdo da mensagem",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            type: "submit",
            outline: true,
            color: "warning",
            disabled: true,
            children: "Enviando..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 46
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            type: "submit",
            outline: true,
            color: "warning",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 124
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9kYXBlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbnRhdG8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiTWVudSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlIiwiUm9kYXBlIiwiSG9tZSIsImNvbnRhdG8iLCJzZXRDb250YXRvIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsImNvbnRlbnQiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsIm9uQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTXNnIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlRW52IiwianNvbiIsImVycm9yIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwQixnQkFBa0cscUVBQUMsaURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQU8sTUFBN0I7QUFBOEIsaUJBQUssRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQnZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUFnRUkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhFSjtBQUFBLGtCQURKO0FBb0VIOztBQUFBO0FBRWNULG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDaElBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2NvbnRhdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvbnRhdG8uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29sbGFwc2UsXHJcbiAgICBOYXZiYXIsXHJcbiAgICBOYXZiYXJUb2dnbGVyLFxyXG4gICAgTmF2YmFyQnJhbmQsXHJcbiAgICBOYXYsXHJcbiAgICBOYXZJdGVtLFxyXG4gICAgTmF2TGluayxcclxuICAgIENvbnRhaW5lclxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkNlbGtlPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+SW5kZXg8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3NvYnJlLWVtcHJlc2FcIj5Tb2JyZSBFbXByZXNhPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb250YXRvXCI+Q29udGF0bzwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgUm9kYXBlID0gKCkgPT4geyAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cInJvZGFwZVwiPlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YC5yb2RhcGV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZlZDEzNjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxlYWRcIj5Sb2RhcMOpPC9oMj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9kYXBlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBSb2RhcGUgZnJvbSAnLi4vY29tcG9uZW50cy9Sb2RhcGUnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBKdW1ib3Ryb24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgY29uc3QgW2NvbnRhdG8sIHNldENvbnRhdG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBjb250ZW50OiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRDb250YXRvKHsgLi4uY29udGF0bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBzZW5kTXNnID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXRSZXNwb25zZSh7Zm9ybVNhdmU6IHRydWV9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2NvbnRhdG8nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhdG8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlRW52LmVycm9yKXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm86IE1lbnNhZ2VtIG7Do28gZW52aWFkYSBjb20gc3VjZXNzbywgdGVudGUgbWFpcyB0YXJkZSEnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q29udGF0byAtIENlbGtlPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YXRvIGNvbSBhIGVtcHJlc2EgLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQ2Vsa2VcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJkZXNjci10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7YC5kZXNjci10b3B7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmVkMTM2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+Q29udGF0bzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tY29udGF0b1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgLmZvcm0tY29udGF0b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+OiBcIlwifVxyXG4gICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz57cmVzcG9uc2UubWVzc2FnZX08L2Rpdj46IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5hbWVcIj5Ob21lPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGNvbXBsZXRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiTWVsaG9yIGUtbWFpbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwic3ViamVjdFwiPkFzc3VudG88L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIkFzc3VudG8gZGEgbWVuc2FnZW1cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZcO6ZG88L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJjb250ZW50XCIgaWQ9XCJjb250ZW50XCIgcGxhY2Vob2xkZXI9XCJDb250ZcO6ZG8gZGEgbWVuc2FnZW1cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UuZm9ybVNhdmUgPyA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiIGRpc2FibGVkPkVudmlhbmRvLi4uPC9CdXR0b24+IDogPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cIndhcm5pbmdcIj5FbnZpYXI8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICAgICA8Um9kYXBlIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==