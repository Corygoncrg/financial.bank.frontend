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

/***/ "./scripts/TransactionRequests.js":
/*!****************************************!*\
  !*** ./scripts/TransactionRequests.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\nconst endpoint = \"/transactions\"\n\n    fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}${endpoint}`, {\n        method: \"GET\",\n        headers: _config_js__WEBPACK_IMPORTED_MODULE_0__.headers\n    })\n        .then(response => response.json())\n        .then(transactions => {\n            const list = document.querySelector(\".list__div ul\");\n            list.innerHTML = \"\";\n\n\n            transactions.forEach(transaction => {\n                console.log(transaction);\n                const listItem = document.createElement(\"li\");\n                listItem.classList.add(\"transaction__list\");\n\n                const transactionDate = document.createElement(\"p\");\n                transactionDate.textContent = `Transaction Date: ${new Date(transaction.transactionDate).toLocaleString()}`;\n\n                const rawImportDate = new Date(transaction.importDate);\n                const formattedImportDate = formatDateToISOString(rawImportDate);\n                const importDateText = document.createElement(\"p\");\n                importDateText.textContent = `Import Date: ${new Date(transaction.importDate).toLocaleString()}`;\n\n                const name = document.createElement(\"p\");\n                name.textContent = `User: ${(transaction.idUser).toLocaleString()}`;\n\n                const detailButton = document.createElement(\"button\");\n                detailButton.textContent = \"Details\";\n                detailButton.classList.add(\"user__button\");\n                detailButton.addEventListener(\"click\", async () => {\n                    sessionStorage.setItem(\"importDate\", formattedImportDate);\n                    window.location.href = _config_js__WEBPACK_IMPORTED_MODULE_0__.importDetailsHtml;\n                });\n\n                listItem.appendChild(transactionDate);\n                listItem.appendChild(importDateText);\n                listItem.appendChild(name);\n                listItem.appendChild(detailButton);\n                list.appendChild(listItem);\n            });\n        })\n        .catch(error => console.error(\"Error fetching transactions:\", error));\n\nfunction formatDateToISOString(date) {\n    const year = date.getFullYear();\n    const month = String(date.getMonth() + 1).padStart(2, \"0\");\n    const day = String(date.getDate()).padStart(2, \"0\");\n    const hours = String(date.getHours()).padStart(2, \"0\");\n    const minutes = String(date.getMinutes()).padStart(2, \"0\");\n    const seconds = String(date.getSeconds()).padStart(2, \"0\");\n    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;\n}\n\nconst form = document.querySelector(\"form\");\nform.addEventListener(\"submit\", handleUpload)\n\nfunction handleUpload(event) {\n    event.preventDefault();\n\n    PostTransaction();\n\n}\n\nasync function PostTransaction() {\n\n    const url = `${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}${endpoint}`;\n    const formData = new FormData(form)\n\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Bearer ${_config_js__WEBPACK_IMPORTED_MODULE_0__.token}`\n        },\n        body: formData};\n\n            try {\n                const response = await fetch(url, options);\n                if (response.ok) {\n                    const json = await response.text();\n                    console.log(\"User updated:\", json);\n                    document.getElementById(\"div__container\").innerHTML = \"\";\n                    window.location.href=_config_js__WEBPACK_IMPORTED_MODULE_0__.importHtml;\n                } else {\n                    console.log(\"Update failed with status:\", response.status);\n                }\n            } catch (error) {\n                console.error(\"Error updating user:\", error);\n            }\n    \n}\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/TransactionRequests.js?");

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

/***/ "./scripts/main/mainImport.js":
/*!************************************!*\
  !*** ./scripts/main/mainImport.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./scripts/config.js\");\n/* harmony import */ var _tokenValidation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokenValidation.js */ \"./scripts/tokenValidation.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.js */ \"./scripts/header.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar.js */ \"./scripts/navbar.js\");\n/* harmony import */ var _TransactionRequests_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TransactionRequests.js */ \"./scripts/TransactionRequests.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/main/mainImport.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main/mainImport.js");
/******/ 	
/******/ })()
;