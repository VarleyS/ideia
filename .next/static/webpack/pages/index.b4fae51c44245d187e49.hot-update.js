webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");
var constants__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ "./node_modules/constants-browserify/constants.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Daniela\\Documents\\ideia\\pages\\index.js",
    _s = $RefreshSig$();




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "class": "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Home Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: " Texto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Contador, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

_c = Home;

function Contador() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      contador = _useState[0],
      setContador = _useState[1];

  function adicionarContador() {
    setContador(contador + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: contador
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: adicionarContador,
      children: "Adicionar nun"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(Contador, "htq0GImcYkhpZ1T/YaxJLJ8w18Q=");

_c2 = Contador;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Contador");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkNvbnRhZG9yIiwidXNlU3RhdGUiLCJjb250YWRvciIsInNldENvbnRhZG9yIiwiYWRpY2lvbmFyQ29udGFkb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixzQkFBTztBQUFLLGFBQU0sV0FBWDtBQUFBLDRCQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHLGVBR0gscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLSDs7S0FOUUEsSTs7QUFRVCxTQUFTQyxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLENBQUQsQ0FEeEI7QUFBQSxNQUNSQyxRQURRO0FBQUEsTUFDQ0MsV0FERDs7QUFHZixXQUFTQyxpQkFBVCxHQUE0QjtBQUN4QkQsZUFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQVEsYUFBTyxFQUFFRSxpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQVpRSixROztNQUFBQSxRO0FBY01ELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0ZmFlNTFjNDQyNDVkMTg3ZTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFT1BOT1RTVVBQIH0gZnJvbSAnY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDI+SG9tZSBQYWdlPC9oMj5cclxuICAgICAgICA8cD4gVGV4dG88L3A+XHJcbiAgICAgICAgPENvbnRhZG9yIC8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFkb3IoKXtcclxuICAgIGNvbnN0IFtjb250YWRvcixzZXRDb250YWRvcl0gPSB1c2VTdGF0ZSgxKTsgXHJcblxyXG4gICAgZnVuY3Rpb24gYWRpY2lvbmFyQ29udGFkb3IoKXtcclxuICAgICAgICBzZXRDb250YWRvcihjb250YWRvciArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2NvbnRhZG9yfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkaWNpb25hckNvbnRhZG9yfT5BZGljaW9uYXIgbnVuPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9