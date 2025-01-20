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

/***/ "./scripts/GetDetailsTransaction.js":
/*!******************************************!*\
  !*** ./scripts/GetDetailsTransaction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\n\n    const importDate = sessionStorage.getItem(\"importDate\");\n\n\n    if (importDate) {\n        fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}/transactions/details/${importDate}`, {\n            method: \"GET\",\n            headers: _config_js__WEBPACK_IMPORTED_MODULE_0__.headers\n        })\n        .then(response => response.json())\n        .then(transactions => {\n            if (transactions.length > 0) {\n                const firstTransaction = transactions[0];\n    \n                const importedBy = document.getElementById(\"byJs\");\n                importedBy.innerText = firstTransaction.idUser || \"N/A\";\n    \n                const inportedIn = document.getElementById(\"inJs\");\n                inportedIn.innerText = new Date(firstTransaction.importDate).toLocaleString() || \"N/A\";\n    \n                const transactionDate = document.getElementById(\"dateJs\");\n                transactionDate.innerText = new Date(firstTransaction.transactionDate).toLocaleString() || \"N/A\";\n            } else {\n                console.error(\"No transactions available\");\n            }\n\n            const list = document.getElementById(\"import__grid\");\n            list.innerHTML = \"\";\n\n            transactions.forEach(transaction => {\n                const listItem = document.createElement(\"div\");\n                listItem.classList.add(\"import__row\");\n\n                const originBank = document.createElement(\"p\");\n                originBank.textContent = `${(transaction.originalBank).toLocaleString()}`;\n\n                const originAgency = document.createElement(\"p\");\n                originAgency.textContent = `${(transaction.originalAgency).toLocaleString()}`;\n\n                const originAccount = document.createElement(\"p\");\n                originAccount.textContent = `${(transaction.originalAccount).toLocaleString()}`;\n\n                const destinyBank = document.createElement(\"p\");\n                destinyBank.textContent = `${(transaction.destinyBank).toLocaleString()}`;\n\n                const destinyAgency = document.createElement(\"p\");\n                destinyAgency.textContent = `${(transaction.destinyAgency).toLocaleString()}`;\n\n                const destinyAccount = document.createElement(\"p\");\n                destinyAccount.textContent = `${(transaction.destinyAccount).toLocaleString()}`;\n\n                const amount = document.createElement(\"p\");\n                amount.textContent = `R$${(transaction.amount).toLocaleString()}`;\n\n                listItem.appendChild(originBank);\n                listItem.appendChild(originAgency);\n                listItem.appendChild(originAccount);\n                listItem.appendChild(destinyBank);\n                listItem.appendChild(destinyAgency);\n                listItem.appendChild(destinyAccount);\n                listItem.appendChild(amount);\n                list.appendChild(listItem);\n            });\n        })\n        .catch(error => console.error(\"Error fetching details:\", error));\n    } else {\n        console.error(\"Import date not found in sessionStorage\");\n    };\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/GetDetailsTransaction.js?");

/***/ }),

/***/ "./scripts/config.js":
/*!***************************!*\
  !*** ./scripts/config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseURL: () => (/* binding */ baseURL),\n/* harmony export */   headerHtml: () => (/* binding */ headerHtml),\n/* harmony export */   headers: () => (/* binding */ headers),\n/* harmony export */   importDetailsHtml: () => (/* binding */ importDetailsHtml),\n/* harmony export */   importHtml: () => (/* binding */ importHtml),\n/* harmony export */   loginHtml: () => (/* binding */ loginHtml),\n/* harmony export */   navbarHtml: () => (/* binding */ navbarHtml),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   userEditHtml: () => (/* binding */ userEditHtml),\n/* harmony export */   usersHtml: () => (/* binding */ usersHtml)\n/* harmony export */ });\nlet baseURL = \"http://localhost:8083\" || 0;\nlet loginHtml = \"login.html\" || 0;\nlet headerHtml = \"header.html\" || 0;\nlet navbarHtml = \"navbar.html\" || 0;\nlet userEditHtml = \"userEdit.html\" || 0;\nlet importHtml = \"import.html\" || 0;\nlet importDetailsHtml = \"import-details.html\" || 0;\nlet usersHtml = \"users.html\" || 0;\n\nconst token = localStorage.getItem(\"token\");\n\n\nconst headers = {\n  \"Authorization\": `Bearer ${token}`,\n  \"Content-Type\": \"application/json\"\n};\n\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/config.js?");

/***/ }),

/***/ "./scripts/header.js":
/*!***************************!*\
  !*** ./scripts/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.headerHtml)\n      .then(response => response.text())\n        .then(data => {\n            document.getElementById(\"header__container\").innerHTML = data;\n})  \n.catch(error => console.error(\"Error loading navbar:\", error));\n}); \n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/header.js?");

/***/ }),

/***/ "./scripts/main/mainImportDetails.js":
/*!*******************************************!*\
  !*** ./scripts/main/mainImportDetails.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./scripts/config.js\");\n/* harmony import */ var _tokenValidation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokenValidation.js */ \"./scripts/tokenValidation.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.js */ \"./scripts/header.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar.js */ \"./scripts/navbar.js\");\n/* harmony import */ var _GetDetailsTransaction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GetDetailsTransaction.js */ \"./scripts/GetDetailsTransaction.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/main/mainImportDetails.js?");

/***/ }),

/***/ "./scripts/navbar.js":
/*!***************************!*\
  !*** ./scripts/navbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    if (!localStorage.getItem(\"token\")) {\n        // Redirect to login if token is missing\n        return;\n    }\n    fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.navbarHtml)\n      .then(response => response.text())\n        .then(data => {\n            document.getElementById(\"navbar__container\").innerHTML = data;\n    // Get the current path\n    const currentPage = window.location.pathname.split(\"/\").pop();\n    \n    // Get all the navbar links\n    const navbarLinks = document.querySelectorAll(\".navbar__link\");\n\n    // Loop through the links and apply the font-weight to the active page\n    navbarLinks.forEach(link => {\n        if (link.getAttribute(\"href\") === currentPage) {\n            link.style.fontWeight = \"700\";\n        }\n    });\n})  \n.catch(error => console.error(\"Error loading navbar:\", error));\n});\n\nfunction logout() {\n    localStorage.removeItem(\"token\");\n    window.location.href = _config_js__WEBPACK_IMPORTED_MODULE_0__.loginHtml;\n}\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/navbar.js?");

/***/ }),

/***/ "./scripts/tokenValidation.js":
/*!************************************!*\
  !*** ./scripts/tokenValidation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\n\n(function() {\n    // Function to check if the token is expired\n    function isTokenExpired(token) {\n        if (!token) return true;\n\n        try {\n            // Decode the payload of the token (it\"s the second part of the JWT)\n            const payloadBase64 = token.split(\".\")[1];\n            const payload = JSON.parse(atob(payloadBase64));\n            \n            // Get the current time in seconds\n            const currentTime = Math.floor(Date.now() / 1000);\n            \n            // Check if `exp` exists and is valid\n            if (payload.exp && payload.exp < currentTime) {\n                return true; // Token is expired\n            }\n            return false; // Token is valid\n        } catch (error) {\n            console.error(\"Error decoding the token:\", error);\n            return true; // Consider the token invalid if decoding fails\n        }\n    }\n\n    // Check for the token in localStorage and handle accordingly\n    const token = localStorage.getItem(\"token\");\n    if (!token || isTokenExpired(token)) {\n        // Clear the token from localStorage and redirect if expired or missing\n        localStorage.removeItem(\"token\");\n        window.location.href = _config_js__WEBPACK_IMPORTED_MODULE_0__.loginHtml;\n    } else {\n        // Populate the hidden input field with the token if the DOM contains it\n        document.addEventListener(\"DOMContentLoaded\", () => {\n            const tokenInput = document.getElementById(\"token\");\n            if (tokenInput) {\n                tokenInput.value = token;\n            }\n        });\n    }\n})();\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/tokenValidation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main/mainImportDetails.js");
/******/ 	
/******/ })()
;