"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/courses/[slug].js":
/*!*********************************!*\
  !*** ./pages/courses/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_course__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/course */ \"./components/course/index.js\");\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common */ \"./components/common/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout */ \"./components/layout/index.js\");\n\n\n\n\nvar __N_SSG = true;\nfunction Course(param) {\n    var course = param.course;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_course__WEBPACK_IMPORTED_MODULE_1__.CourseHero, {\n                    title: course.title,\n                    description: course.description,\n                    cover: course.coverImage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jaime\\\\Desktop\\\\Front-End\\\\05-Projects\\\\web3-marketplace\\\\marketplace-eth\\\\pages\\\\courses\\\\[slug].js\",\n                    lineNumber: 14,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaime\\\\Desktop\\\\Front-End\\\\05-Projects\\\\web3-marketplace\\\\marketplace-eth\\\\pages\\\\courses\\\\[slug].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_course__WEBPACK_IMPORTED_MODULE_1__.Keypoints, {\n                points: course.wsl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaime\\\\Desktop\\\\Front-End\\\\05-Projects\\\\web3-marketplace\\\\marketplace-eth\\\\pages\\\\courses\\\\[slug].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_course__WEBPACK_IMPORTED_MODULE_1__.Curriculum, {\n                locked: false\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaime\\\\Desktop\\\\Front-End\\\\05-Projects\\\\web3-marketplace\\\\marketplace-eth\\\\pages\\\\courses\\\\[slug].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_2__.Modal, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaime\\\\Desktop\\\\Front-End\\\\05-Projects\\\\web3-marketplace\\\\marketplace-eth\\\\pages\\\\courses\\\\[slug].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Course;\nCourse.Layout = _components_layout__WEBPACK_IMPORTED_MODULE_3__.BaseLayout;\nvar _c;\n$RefreshReg$(_c, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2VzL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFDN0I7QUFDTTs7QUFHakMsU0FBU0ssTUFBTSxDQUFDLEtBQVEsRUFBRTtRQUFWLE1BQU8sR0FBUCxLQUFRLENBQVBDLE1BQU07SUFJcEMscUJBQ0U7OzBCQUVFLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTswQkFDbEIsNEVBQUNSLDBEQUFVO29CQUNYUyxLQUFLLEVBQUVILE1BQU0sQ0FBQ0csS0FBSztvQkFDbkJDLFdBQVcsRUFBRUosTUFBTSxDQUFDSSxXQUFXO29CQUMvQkMsS0FBSyxFQUFFTCxNQUFNLENBQUNNLFVBQVU7Ozs7O3dCQUN0Qjs7Ozs7b0JBQ0k7MEJBQ1QsOERBQUNWLHlEQUFTO2dCQUNWVyxNQUFNLEVBQUVQLE1BQU0sQ0FBQ1EsR0FBRzs7Ozs7b0JBQUc7MEJBQ3JCLDhEQUFDYiwwREFBVTtnQkFDWGMsTUFBTSxFQUFFLEtBQUs7Ozs7O29CQUFJOzBCQUNqQiw4REFBQ1oscURBQUs7Ozs7b0JBQUc7O29CQUNSLENBRUo7Q0FDRjtBQXRCdUJFLEtBQUFBLE1BQU07QUFnRDlCQSxNQUFNLENBQUNXLE1BQU0sR0FBR1osMERBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291cnNlcy9bc2x1Z10uanM/MDY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Vyc2VIZXJvLCBDdXJyaWN1bHVtLCBLZXlwb2ludHMgfSBmcm9tICdAY29tcG9uZW50cy9jb3Vyc2UnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcclxuaW1wb3J0IHsgQmFzZUxheW91dCB9IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IGdldEFsbENvdXJzZXMgfSBmcm9tICdAY29udGVudC9jb3Vyc2VzL2ZldGNoZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlKHtjb3Vyc2V9KSB7XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgIDxDb3Vyc2VIZXJvIFxyXG4gICAgICAgICB0aXRsZT17Y291cnNlLnRpdGxlfVxyXG4gICAgICAgICBkZXNjcmlwdGlvbj17Y291cnNlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICBjb3Zlcj17Y291cnNlLmNvdmVySW1hZ2V9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8S2V5cG9pbnRzIFxyXG4gICAgICBwb2ludHM9e2NvdXJzZS53c2x9Lz5cclxuICAgICAgPEN1cnJpY3VsdW1cclxuICAgICAgbG9ja2VkPXtmYWxzZX0gLz5cclxuICAgICAgPE1vZGFsIC8+XHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGdldEFsbENvdXJzZXMoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IGRhdGEubWFwKGMgPT4gKHtcclxuICAgICAgICAgICAgcGFyYW1zOlxyXG4gICAgICAgICAgICB7c2x1ZzogYy5zbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSksXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBnZXRBbGxDb3Vyc2VzKClcclxuICAgIGNvbnN0IGNvdXJzZSA9IGRhdGEuZmlsdGVyKGMgPT4gYy5zbHVnID09PSBwYXJhbXMuc2x1ZyApWzBdXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNvdXJzZVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuQ291cnNlLkxheW91dCA9IEJhc2VMYXlvdXQiXSwibmFtZXMiOlsiQ291cnNlSGVybyIsIkN1cnJpY3VsdW0iLCJLZXlwb2ludHMiLCJNb2RhbCIsIkJhc2VMYXlvdXQiLCJDb3Vyc2UiLCJjb3Vyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY292ZXIiLCJjb3ZlckltYWdlIiwicG9pbnRzIiwid3NsIiwibG9ja2VkIiwiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/courses/[slug].js\n");

/***/ })

});