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

/***/ "./scripts/GetDataUsers.js":
/*!*********************************!*\
  !*** ./scripts/GetDataUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n/* harmony import */ var _userEdit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userEdit.js */ \"./scripts/userEdit.js\");\n/* harmony import */ var _HttpRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpRequest.js */ \"./scripts/HttpRequest.js\");\n\n\n\nconst endpoint = \"/users\";\nconst url = `${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}${endpoint}`;\n    \n    fetch(url, {\n        method: \"GET\",\n        headers: _config_js__WEBPACK_IMPORTED_MODULE_0__.headers\n\n    })\n    .then(async (response) => {\n        if (response.status === 401) {\n            // Redirect to login if token is invalid or expired\n            window.location.href = _config_js__WEBPACK_IMPORTED_MODULE_0__.loginHtml;\n        }\n        if (!response.ok) {\n            // Parse error response\n            const errorData = await response.json();\n            \n            throw new Error(`Error fetching users: ${errorData.error}`);\n          }          \n        return response.json();\n    })\n    \n        .then(users => {\n            const list = document.querySelector(\".list__div ul\");\n            list.innerHTML = \"\";\n\n\n            users.forEach(user => {\n                const listItem = document.createElement(\"li\");\n                listItem.classList.add(\"even__menu\");\n\n                const id = document.createElement(\"p\");\n                id.textContent = `${(user.id).toLocaleString()}`;\n                \n                const name = document.createElement(\"p\");\n                name.textContent = `${(user.name).toLocaleString()}`\n\n                const email = document.createElement(\"p\");\n                email.textContent = `${(user.email).toLocaleString()}`;\n\n                const editButton = document.createElement(\"button\");\n                editButton.textContent = \"Edit\";\n                editButton.classList.add(\"user__button\");\n                editButton.addEventListener(\"click\", async () => {\n                    await (0,_userEdit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(user.id, user.name, user.email, user.status)\n                });\n\n                const deleteButton = document.createElement(\"button\");\n                deleteButton.textContent = \"Delete\";\n                deleteButton.classList.add(\"user__button\" ,\"red\");\n                deleteButton.addEventListener(\"click\", async () => {\n                    await (0,_HttpRequest_js__WEBPACK_IMPORTED_MODULE_2__.deleteUser)((user.id));\n                })\n                \n\n                const div = document.createElement(\"div\");\n                div.classList.add(\"button__div\");\n                div.appendChild(editButton);\n                div.appendChild(deleteButton);\n\n                listItem.appendChild(id);\n                listItem.appendChild(name)\n                listItem.appendChild(email);\n                listItem.appendChild(div);\n                list.appendChild(listItem);\n            });\n        })\n        .catch(error => console.error(\"Error fetching users:\", error));\n\n \n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/GetDataUsers.js?");

/***/ }),

/***/ "./scripts/HttpRequest.js":
/*!********************************!*\
  !*** ./scripts/HttpRequest.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteUser: () => (/* binding */ deleteUser),\n/* harmony export */   updateUser: () => (/* binding */ updateUser)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n\nconst endpoint = \"/users\"\n\nasync function deleteUser(id){\n    // send a request for the security module instead.\n    const payloadBase64 = _config_js__WEBPACK_IMPORTED_MODULE_0__.token.split(\".\")[1];\n    const payload = JSON.parse(atob(payloadBase64));\n    const currentUser = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}${endpoint}/current-user`, {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Bearer ${_config_js__WEBPACK_IMPORTED_MODULE_0__.token}`,\n            \"Content-Type\": \"application/json\",\n        },\n        body: payload.sub\n    });\n    console.log(currentUser);\n\n    const currentUserData = await currentUser.json();\n\n    if (currentUserData.id === id) {\n        alert(\"You cannot delete your own account!\");\n        return;\n    }\n\n    const options = {\n        method: \"DELETE\",\n        headers: _config_js__WEBPACK_IMPORTED_MODULE_0__.headers\n    };\n    const url = `${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}${endpoint}/${id}`;\n    console.log(`${url}/${id}`)\n    const response = await fetch(url, options);\n    console.log(response.status);\n}\n\nasync function updateUser(id){\n\n    const url = `${_config_js__WEBPACK_IMPORTED_MODULE_0__.baseURL}${endpoint}`;\n    let updatedName = document.getElementById(\"update__name\").value;\n    let updatedEmail = document.getElementById(\"update__email\").value;\n    let updatedStatus = document.getElementById(\"current__status\").innerHTML;\n\n    let updatedUserData = {\n        id: id\n    };\n\n    if(updatedName !== \"\") {\n        updatedUserData.name = updatedName;\n    }\n    if (updatedEmail !== \"\") {\n        updatedUserData.email = updatedEmail;\n    }\n\n    if(document.querySelector(\"input[type = radio]:checked\") != null) {\n        updatedStatus = document.querySelector(\"input[type = radio]:checked\").value;\n        updatedUserData.status = updatedStatus;\n    }\n\n    const options = {\n        method: \"PUT\",\n        headers: _config_js__WEBPACK_IMPORTED_MODULE_0__.headers,\n        body: JSON.stringify(updatedUserData)};\n\n            try {\n                const response = await fetch(url, options);\n                if (response.ok) {\n                    const json = await response.text();\n                    console.log(\"User updated:\", json);\n                    document.getElementById(\"div__container\").innerHTML = \"\";\n                } else {\n                    console.log(\"Update failed with status:\", response.status);\n                }\n            } catch (error) {\n                console.error(\"Error updating user:\", error);\n            }\n}\n\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/HttpRequest.js?");

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

/***/ "./scripts/main/mainUsers.js":
/*!***********************************!*\
  !*** ./scripts/main/mainUsers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./scripts/config.js\");\n/* harmony import */ var _tokenValidation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokenValidation.js */ \"./scripts/tokenValidation.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.js */ \"./scripts/header.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar.js */ \"./scripts/navbar.js\");\n/* harmony import */ var _HttpRequest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HttpRequest.js */ \"./scripts/HttpRequest.js\");\n/* harmony import */ var _GetDataUsers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GetDataUsers.js */ \"./scripts/GetDataUsers.js\");\n/* harmony import */ var _userEdit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../userEdit.js */ \"./scripts/userEdit.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/main/mainUsers.js?");

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

/***/ }),

/***/ "./scripts/userEdit.js":
/*!*****************************!*\
  !*** ./scripts/userEdit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./scripts/config.js\");\n/* harmony import */ var _HttpRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpRequest.js */ \"./scripts/HttpRequest.js\");\n\n\n\nasync function showMenu(id, name, email, status) {\n\n    fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.userEditHtml)\n      .then(response => response.text())\n        .then(data => {\n            document.getElementById(\"div__container\").innerHTML = data;\n\n            document.getElementById(\"current__name\").innerHTML = name;\n            document.getElementById(\"current__email\").innerHTML = email;\n            document.getElementById(\"current__status\").innerHTML = status;\n\n            modal = document.getElementById(\"div__modal\");\n\n            modal.style.display = \"block\";\n\n\n            document.getElementById(\"update\").addEventListener(\"click\", ()=> (0,_HttpRequest_js__WEBPACK_IMPORTED_MODULE_1__.updateUser)(id));\n                }\n            )  \n             .catch(error => console.error(\"Error loading edit form:\", error));\n            ; \n            \n}\n\nvar modal = document.getElementById(\"div__modal\");\n\nwindow.onclick = function(event) {\n    // Check if the clicked target is the modal but NOT the form inside it\n    if (event.target == modal && !event.target.closest(\".edit__div\")) {\n        modal.style.display = \"none\";\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://financial-transactions-frontend/./scripts/userEdit.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main/mainUsers.js");
/******/ 	
/******/ })()
;