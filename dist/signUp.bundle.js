/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/config.js":
/*!***************************!*\
  !*** ./scripts/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseURL: () => (/* binding */ baseURL),\n/* harmony export */   headerHtml: () => (/* binding */ headerHtml),\n/* harmony export */   headers: () => (/* binding */ headers),\n/* harmony export */   importDetailsHtml: () => (/* binding */ importDetailsHtml),\n/* harmony export */   importHtml: () => (/* binding */ importHtml),\n/* harmony export */   loginHtml: () => (/* binding */ loginHtml),\n/* harmony export */   navbarHtml: () => (/* binding */ navbarHtml),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   userEditHtml: () => (/* binding */ userEditHtml),\n/* harmony export */   usersHtml: () => (/* binding */ usersHtml)\n/* harmony export */ });\nlet baseURL = \"http://localhost:8083\";\nlet loginHtml = \"login.html\";\nlet headerHtml = \"header.html\";\nlet navbarHtml = \"navbar.html\";\nlet userEditHtml = \"userEdit.html\";\nlet importHtml = \"import.html\";\nlet importDetailsHtml = \"import-details.html\";\nlet usersHtml = \"users.html\";\n\nconst token = localStorage.getItem(\"token\");\n\n\nconst headers = {\n  \"Authorization\": `Bearer ${token}`,\n  \"Content-Type\": \"application/json\"\n};\n\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/config.js?");

/***/ }),

/***/ "./scripts/main/mainSignUp.js":
/*!************************************!*\
  !*** ./scripts/main/mainSignUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./scripts/config.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.js */ \"./scripts/navbar.js\");\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/main/mainSignUp.js?");

/***/ }),

/***/ "./scripts/navbar.js":
/*!***************************!*\
  !*** ./scripts/navbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    if (!localStorage.getItem(\"token\")) {\n        // Redirect to login if token is missing\n        return;\n    }\n    fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.navbarHtml)\n      .then(response => response.text())\n        .then(data => {\n            document.getElementById(\"navbar__container\").innerHTML = data;\n    // Get the current path\n    const currentPage = window.location.pathname.split(\"/\").pop();\n    \n    // Get all the navbar links\n    const navbarLinks = document.querySelectorAll(\".navbar__link\");\n\n    // Loop through the links and apply the font-weight to the active page\n    navbarLinks.forEach(link => {\n        if (link.getAttribute(\"href\") === currentPage) {\n            link.style.fontWeight = \"700\";\n        }\n    });\n})  \n.catch(error => console.error(\"Error loading navbar:\", error));\n});\n\nfunction logout() {\n    localStorage.removeItem(\"token\");\n    window.location.href = _config_js__WEBPACK_IMPORTED_MODULE_0__.loginHtml;\n}\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main/mainSignUp.js");
/******/ 	
/******/ })()
;