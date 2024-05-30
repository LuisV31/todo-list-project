/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #212529;
    --white: #ffffff;
    --black: #000000;
    --light-gray: #f9f9f9;
    --dark-gray: #e9e9e9;
    --dark-blue: #1f4068;
    --hover-blue: #0056b3;
    --modal-overlay-bg: rgba(0, 0, 0, 0.5);
    --modal-bg: #fff;
    --modal-header-bg: #007bff; /* Changed for better contrast */
    --modal-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    --modal-border-radius: 8px;
    --close-button-color: #aaa;
    --close-button-hover: #000;
    --input-border: #ddd;
    --input-border-focus: #007bff;
    --input-bg: #dedcdc;
    --input-text-color: #000;
}

/* Base Styles */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
}

.app-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: min-content auto;
    grid-template-areas: 
        "header header"
        "sidebar main";
    height: 100vh;
}

.header {
    grid-area: header;
    background-color: var(--primary-color);
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    font-size: 24px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    padding: 40px 0px 0px 35px;
    color: var(--white);
}

.header h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
}

.header i {
    font-size: 1.5em;
}

.sidebar {
    grid-area: sidebar;
    background-color: var(--secondary-color);
    overflow-y: auto;
    padding: 20px;
}

h2 {
    margin: 0;
    font-size: 2.5em;
}

.sidebar button#add-project,
.main-content button#add-todo {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: var(--primary-color);
    border: none;
    cursor: pointer;
}

.hidden {
    display: none !important;
}

.visible {
    display: flex !important;
    align-items: center;
    justify-content: center;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: var(--modal-overlay-bg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: var(--modal-bg);
    border-radius: var(--modal-border-radius);
    box-shadow: var(--modal-shadow);
    padding: 20px;
    width: 50%;
    max-width: 600px;
    position: relative;
    animation: slide-down 0.3s ease-out;
}

@keyframes slide-down {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-header {
    background-color: var(--modal-header-bg);
    padding: 15px;
    border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -20px -20px 20px -20px;
    color: var(--white); /* Ensure the text color is readable */
}

.modal-header h2 {
    margin: 0;
    font-size: 1.5em;
}

.close-button {
    color: var(--close-button-color);
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;
}

.close-button:hover,
.close-button:focus {
    color: var(--close-button-hover);
}

.modal-body {
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Increased gap for more spacing */
}

form input,
form textarea,
form select,
form button {
    width: 100%; /* Make all form elements full width */
    padding: 12px; /* Consistent padding */
    margin-top: 10px; /* Consistent margin */
    border: 1px solid var(--input-border); /* Add border for inputs and textarea */
    border-radius: 4px; /* Add border radius for consistency */
    background-color: var(--input-bg);
    color: var(--input-text-color);
    transition: border-color 0.2s;
}

form button {
    background-color: var(--primary-color);
    color: var(--white);
    cursor: pointer;
    transition: background-color 0.2s;
    border: none; /* Remove border from button */
}

form button:hover {
    background-color: var(--hover-blue);
}

form input:focus,
form textarea:focus,
form select:focus {
    border-color: var(--input-border-focus);
    outline: none;
}

form textarea {
    resize: vertical; /* Allow vertical resize of textarea */
}


.main-content {
    grid-area: main;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 40px 40px;
}

.project-header,
.todo-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--primary-color);
    justify-content: space-between;
}

#project-title {
    margin-bottom: 20px;
    text-align: center;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.project-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.project-actions button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    font-size: 1.2em;
}

.project-actions button:hover {
    color: var(--primary-color);
}

.title-with-icon {
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: 10px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
}

.calendar-icon {
    margin-right: 10px;
    font-size: 48px;
    vertical-align: middle;
}

ul {
    list-style: none;
    margin-top: 0;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--light-gray);
    margin-bottom: 8px;
    padding: 10px 15px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
    color: var(--black);
}

li:hover, 
.task-filters li:hover,
.task-filters li.active {
    background-color: var(--dark-gray);
}

.task-filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.task-filters li {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Adjust the content justification */
    background-color: var(--dark-blue);
    padding: 10px 20px;
    color: var(--white);
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 4px; /* Optional: Add rounded corners */
}
 
.task-filters li i{
    margin-right: 10px;
}
.task-filters li.active {
    background-color: var(--primary-color);
}

.task-filters li:hover {
    background-color: var(--hover-blue);
}

li.active {
    background-color: var(--primary-color);
}

#todo-list li {
    color: var(--primary-color);
}

#todo-list li.active {
    background-color: var(--primary-color);
    color: var(--white);
}
#project-list li{
    color: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.3s;
}
#project-list li:hover {
    background-color: var(--dark-gray);
}

#project-list li.active {
    background-color: var(--primary-color);
    color: var(--white);
}

button, 
input[type="text"],
input[type="date"], 
select, 
textarea {
    width: 100%;
    padding: 12px; /* Increased padding for consistency */
    margin-top: 10px; /* Increased margin for consistency */
    border: none;
    background-color: var(--input-bg);
    color: var(--input-text-color);
    cursor: pointer;
}

button:hover {
    background-color: var(--hover-blue);
}

/* Todo Item Styles */
.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--light-gray);
    margin-bottom: 8px;
    padding: 10px 15px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s;
    color: var(--primary-color);
}

.priority-circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.priority-circle input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
}

.priority-circle.low {
    background-color: green;
}

.priority-circle.medium {
    background-color: yellow;
}

.priority-circle.high {
    background-color: red;
}

.todo-item.completed .priority-circle.low {
    background-color: lightgreen;
}

.todo-item.completed .priority-circle.medium {
    background-color: lightyellow;
}

.todo-item.completed .priority-circle.high {
    background-color: pink;
}

.todo-item.completed .todo-title, 
.todo-item.completed .todo-due-date,
.todo-item.completed .todo-description {
    text-decoration: line-through;
    opacity: 0.6;
}

.todo-item:hover {
    background-color: var(--dark-gray);
}

.todo-details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 10px;
}

.todo-title {
    font-size: 16px;
    font-weight: bold;
}

.todo-due-date {
    font-size: 14px;
    color: var(--secondary-color);
}

.todo-description {
    font-size: 14px;
    color: var(--secondary-color);
    margin-top: 5px;
}

.todo-actions {
    display: flex;
    gap: 10px;
}

.todo-actions button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    font-size: 1em;
    padding: 3px 5px;
    transition: color 0.3s;
    width: auto;
}

.todo-actions button:hover {
    color: var(--primary-color);
}

@media (max-width: 768px) {
    .app-container {
        grid-template-columns: 1fr;
        grid-template-areas: 
        "header" 
        "sidebar" 
        "main";
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary-color: #007bff;\n    --secondary-color: #6c757d;\n    --background-color: #f8f9fa;\n    --text-color: #212529;\n    --white: #ffffff;\n    --black: #000000;\n    --light-gray: #f9f9f9;\n    --dark-gray: #e9e9e9;\n    --dark-blue: #1f4068;\n    --hover-blue: #0056b3;\n    --modal-overlay-bg: rgba(0, 0, 0, 0.5);\n    --modal-bg: #fff;\n    --modal-header-bg: #007bff; /* Changed for better contrast */\n    --modal-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    --modal-border-radius: 8px;\n    --close-button-color: #aaa;\n    --close-button-hover: #000;\n    --input-border: #ddd;\n    --input-border-focus: #007bff;\n    --input-bg: #dedcdc;\n    --input-text-color: #000;\n}\n\n/* Base Styles */\nbody, html {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-family: Arial, sans-serif;\n    background-color: var(--background-color);\n    color: var(--text-color);\n}\n\n.app-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: min-content auto;\n    grid-template-areas: \n        \"header header\"\n        \"sidebar main\";\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-color: var(--primary-color);\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n    font-size: 24px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n    padding: 40px 0px 0px 35px;\n    color: var(--white);\n}\n\n.header h1 {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0;\n}\n\n.header i {\n    font-size: 1.5em;\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--secondary-color);\n    overflow-y: auto;\n    padding: 20px;\n}\n\nh2 {\n    margin: 0;\n    font-size: 2.5em;\n}\n\n.sidebar button#add-project,\n.main-content button#add-todo {\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    background-color: var(--primary-color);\n    border: none;\n    cursor: pointer;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.visible {\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: var(--modal-overlay-bg);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal-content {\n    background-color: var(--modal-bg);\n    border-radius: var(--modal-border-radius);\n    box-shadow: var(--modal-shadow);\n    padding: 20px;\n    width: 50%;\n    max-width: 600px;\n    position: relative;\n    animation: slide-down 0.3s ease-out;\n}\n\n@keyframes slide-down {\n    from {\n        transform: translateY(-50px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n.modal-header {\n    background-color: var(--modal-header-bg);\n    padding: 15px;\n    border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: -20px -20px 20px -20px;\n    color: var(--white); /* Ensure the text color is readable */\n}\n\n.modal-header h2 {\n    margin: 0;\n    font-size: 1.5em;\n}\n\n.close-button {\n    color: var(--close-button-color);\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: color 0.2s;\n}\n\n.close-button:hover,\n.close-button:focus {\n    color: var(--close-button-hover);\n}\n\n.modal-body {\n    padding: 20px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px; /* Increased gap for more spacing */\n}\n\nform input,\nform textarea,\nform select,\nform button {\n    width: 100%; /* Make all form elements full width */\n    padding: 12px; /* Consistent padding */\n    margin-top: 10px; /* Consistent margin */\n    border: 1px solid var(--input-border); /* Add border for inputs and textarea */\n    border-radius: 4px; /* Add border radius for consistency */\n    background-color: var(--input-bg);\n    color: var(--input-text-color);\n    transition: border-color 0.2s;\n}\n\nform button {\n    background-color: var(--primary-color);\n    color: var(--white);\n    cursor: pointer;\n    transition: background-color 0.2s;\n    border: none; /* Remove border from button */\n}\n\nform button:hover {\n    background-color: var(--hover-blue);\n}\n\nform input:focus,\nform textarea:focus,\nform select:focus {\n    border-color: var(--input-border-focus);\n    outline: none;\n}\n\nform textarea {\n    resize: vertical; /* Allow vertical resize of textarea */\n}\n\n\n.main-content {\n    grid-area: main;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    padding: 40px 40px;\n}\n\n.project-header,\n.todo-header {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--primary-color);\n    justify-content: space-between;\n}\n\n#project-title {\n    margin-bottom: 20px;\n    text-align: center;\n    padding-bottom: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.project-actions {\n    display: flex;\n    gap: 10px;\n    justify-content: flex-end;\n}\n\n.project-actions button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: var(--text-color);\n    font-size: 1.2em;\n}\n\n.project-actions button:hover {\n    color: var(--primary-color);\n}\n\n.title-with-icon {\n    border-bottom: 1px solid var(--primary-color);\n    padding-bottom: 10px;\n    display: inline-flex;\n    align-items: center;\n    gap: 10px;\n    justify-content: center;\n}\n\n.calendar-icon {\n    margin-right: 10px;\n    font-size: 48px;\n    vertical-align: middle;\n}\n\nul {\n    list-style: none;\n    margin-top: 0;\n    padding: 0;\n}\n\nli {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--light-gray);\n    margin-bottom: 8px;\n    padding: 10px 15px;\n    border-radius: 4px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    cursor: pointer;\n    transition: background-color 0.3s;\n    font-size: 16px;\n    color: var(--black);\n}\n\nli:hover, \n.task-filters li:hover,\n.task-filters li.active {\n    background-color: var(--dark-gray);\n}\n\n.task-filters {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.task-filters li {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; /* Adjust the content justification */\n    background-color: var(--dark-blue);\n    padding: 10px 20px;\n    color: var(--white);\n    cursor: pointer;\n    transition: background-color 0.3s;\n    border-radius: 4px; /* Optional: Add rounded corners */\n}\n \n.task-filters li i{\n    margin-right: 10px;\n}\n.task-filters li.active {\n    background-color: var(--primary-color);\n}\n\n.task-filters li:hover {\n    background-color: var(--hover-blue);\n}\n\nli.active {\n    background-color: var(--primary-color);\n}\n\n#todo-list li {\n    color: var(--primary-color);\n}\n\n#todo-list li.active {\n    background-color: var(--primary-color);\n    color: var(--white);\n}\n#project-list li{\n    color: var(--primary-color);\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n#project-list li:hover {\n    background-color: var(--dark-gray);\n}\n\n#project-list li.active {\n    background-color: var(--primary-color);\n    color: var(--white);\n}\n\nbutton, \ninput[type=\"text\"],\ninput[type=\"date\"], \nselect, \ntextarea {\n    width: 100%;\n    padding: 12px; /* Increased padding for consistency */\n    margin-top: 10px; /* Increased margin for consistency */\n    border: none;\n    background-color: var(--input-bg);\n    color: var(--input-text-color);\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: var(--hover-blue);\n}\n\n/* Todo Item Styles */\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--light-gray);\n    margin-bottom: 8px;\n    padding: 10px 15px;\n    border-radius: 4px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    transition: background-color 0.3s;\n    color: var(--primary-color);\n}\n\n.priority-circle {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    margin-right: 10px;\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.priority-circle input {\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    cursor: pointer;\n}\n\n.priority-circle.low {\n    background-color: green;\n}\n\n.priority-circle.medium {\n    background-color: yellow;\n}\n\n.priority-circle.high {\n    background-color: red;\n}\n\n.todo-item.completed .priority-circle.low {\n    background-color: lightgreen;\n}\n\n.todo-item.completed .priority-circle.medium {\n    background-color: lightyellow;\n}\n\n.todo-item.completed .priority-circle.high {\n    background-color: pink;\n}\n\n.todo-item.completed .todo-title, \n.todo-item.completed .todo-due-date,\n.todo-item.completed .todo-description {\n    text-decoration: line-through;\n    opacity: 0.6;\n}\n\n.todo-item:hover {\n    background-color: var(--dark-gray);\n}\n\n.todo-details {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    margin-left: 10px;\n}\n\n.todo-title {\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.todo-due-date {\n    font-size: 14px;\n    color: var(--secondary-color);\n}\n\n.todo-description {\n    font-size: 14px;\n    color: var(--secondary-color);\n    margin-top: 5px;\n}\n\n.todo-actions {\n    display: flex;\n    gap: 10px;\n}\n\n.todo-actions button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: var(--text-color);\n    font-size: 1em;\n    padding: 3px 5px;\n    transition: color 0.3s;\n    width: auto;\n}\n\n.todo-actions button:hover {\n    color: var(--primary-color);\n}\n\n@media (max-width: 768px) {\n    .app-container {\n        grid-template-columns: 1fr;\n        grid-template-areas: \n        \"header\" \n        \"sidebar\" \n        \"main\";\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic/Project.js":
/*!******************************!*\
  !*** ./src/logic/Project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        if (todo.title) {
            this.todos.push(todo);
        } else {
            console.error("Todo must have a title");
        }
    }
    
    removeTodo(todo) {
        this.todos = this.todos.filter(t => t.title !== todo.title);
    }

    getTodos() {
        return this.todos;
    }
}


/***/ }),

/***/ "./src/logic/Todo.js":
/*!***************************!*\
  !*** ./src/logic/Todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [];
        this.checklist = [];
        this.completed = false;
    }

    addNote(note) {
        if (note) {
            this.notes.push(note);
        }
    }

    addTaskToChecklist(task) {
        if(task) {
            this.checklist.push({ task: task, completed: false});
        }
    }

    markTaskAsComplete(task) {
        const taskItem = this.checklist.find(item => item.task === task);
        if (taskItem) {
            taskItem.completed = true;
        }
    }

    removeTaskFromChecklist(task) {
        this.checklist = this.checklist.filter(item => item.task !== task);
    }


    // Method to edit todo details
    editTodoDetails({ title, description, dueDate, priority }) {
        if (title) this.title = title; 
        if (description) this.description = description;
        if (dueDate) this.dueDate = dueDate;
        if (priority) this. priority = priority;
    }
}


/***/ }),

/***/ "./src/logic/projectManager.js":
/*!*************************************!*\
  !*** ./src/logic/projectManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/logic/Project.js");


class ProjectManager {
    constructor() {
        this.projects = [];
        this.currentProject = this.projects[0] || this.createDefaultProject();
    }

    createDefaultProject() {
        const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]("Default Project");
        this.addProject(defaultProject);
        return defaultProject;
    }

    addProject(project) {
    if (!project.name || typeof project.name !== 'string' || this.findProjectByName(project.name)) {
        console.error("Project name must be unique and valid string.");
        return;
    }
    this.projects.push(project);
    this.currentProject = project;
    // Uncommenting this when save is added
    // this.saveProjects();
    }
    
    findProjectByName(name) {
        return this.projects.find(project => project.name === name);
    }
    
    // View all projects//
    getProjects() {
        return this.projects;
    }

    removeProject(name) {
        const projectIndex = this.projects.findIndex(project => project.name === name);
        if (projectIndex !== -1) {
            this.projects.splice(projectIndex, 1);
            // If the current project is the one being removed, set currentProject to null or another project
            if (this.currentProject && this.currentProject.name === name) {
                this.currentProject = this.projects[0] || null;
            }
            // Uncomment this line when save is added
            // this.saveProjects();
            return true;
        }
        return false;
    }

    updateProjectName(oldName, newName) {
        const project = this.findProjectByName(oldName);
        if (project && !this.findProjectByName(newName)) {
            project.name = newName;
            // Uncomment this when save is added
            // this.saveProjects();
            return true;
        }
        return false;
    }

    setCurrentProject(name) {
        const project = this.findProjectByName(name);
        if (project) {
            this.currentProject = project;
        }
    }

    getCurrentProject() {
        return this.currentProject;
    }


    // Placeholder for future localStorage methods
    // saveProjects() {
    //     localStorage.setItem('projects', JSON.stringify(this.projects));
    // }

    // loadProjects() {
    //     const projects = localStorage.getItem('projects');
    //     return projects ? JSON.parse(projects).map(projData => new Project(projData.name)) : null;
    // }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/projectManager.js */ "./src/logic/projectManager.js");
/* harmony import */ var _logic_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/Project.js */ "./src/logic/Project.js");
/* harmony import */ var _logic_Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/Todo.js */ "./src/logic/Todo.js");




class TodoApp {
    constructor() {
        this.projectManager = new _logic_projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.currentProject = this.projectManager.getCurrentProject();
        
        // Bind methods
        this.handleProjectClick = this.handleProjectClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.handleEditProject = this.handleEditProject.bind(this);
        this.handleDeleteProject = this.handleDeleteProject.bind(this);
        this.handleTodoAction = this.handleTodoAction.bind(this);
        this.addProject = this.addProject.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    init() {
        this.renderProjects();
        this.addEventListeners();
        this.renderTodos();
    }

    addEventListeners() {       
        // Project interactions
        document.getElementById('add-project').addEventListener('click', () => this.toggleModal('project-modal', true));
        document.getElementById('confirm-add-project').addEventListener('click', () => {
            this.addProject();
            this.toggleModal('project-modal', false); // Close modal explicitly here
        });
        document.getElementById('close-project-modal').addEventListener('click', () => this.toggleModal('project-modal', false));
    
        // Todo interactions
        document.getElementById('add-todo').addEventListener('click', () => this.showTodoModal());
        document.getElementById('close-todo-modal').addEventListener('click', () => this.toggleModal('todo-modal', false));
        document.getElementById('todo-form').addEventListener('submit', (event) => {
            event.preventDefault();
            this.saveTodo();
            this.toggleModal('todo-modal', false); // Close modal right after adding
        });

        // Delegate project edit and delete button clicks
        document.getElementById('project-list').addEventListener('click', (event) => {
            const projectItem = event.target.closest('li');
            if (event.target.matches('.edit-project')) {
                this.handleEditProject(event);
            } else if (event.target.matches('.delete-project')) {
                this.handleDeleteProject(event);
            } else if (projectItem) {
                this.handleProjectClick(event);
            }
        });
                
        // Delegate todo actions (edit, delete, mark complete)
        document.getElementById('todo-list').addEventListener('click', this.handleTodoAction);

        // Task filters 
        const taskFilters = document.querySelectorAll('.task-filters li');
        taskFilters.forEach(filter => {
            filter.addEventListener('click', this.handleFilterClick);
        });
    }
    
    renderProjects() {
        const projectContainer = document.getElementById('project-list');
        projectContainer.innerHTML = '';
        this.projectManager.getProjects().forEach(project => {
            const projectElement = document.createElement('li');
            projectElement.className = project === this.currentProject ? 'active' : '';
            projectElement.innerHTML = `
               <span class="project-name">${project.name}</span>
                <div class="project-actions">
                    <button class="edit-project"><i class="fas fa-edit"></i></button>
                    <button class="delete-project"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            projectContainer.appendChild(projectElement);
        });
        this.updateProjectHeader();
    }

    addProject() {
        const projectNameInput = document.getElementById('new-project-name');
        const projectName = projectNameInput.value;
        if (projectName) {
            const newProject = new _logic_Project_js__WEBPACK_IMPORTED_MODULE_1__["default"](projectName);
            this.projectManager.addProject(newProject);
            projectNameInput.value = '';
            this.renderProjects();
            this.selectCurrentProject(newProject);
        }
    }

    handleEditProject(event) {
        const projectElement = event.target.closest('li');
        const oldName = projectElement.querySelector('.project-name').textContent.trim();
        const newName = prompt("Enter the new project name:", oldName);
        if (newName && oldName !== newName) {
            if (this.projectManager.updateProjectName(oldName, newName)) {
                this.renderProjects();
                this.renderTodos();
            } else {
                alert("Project name must be unique and valid.");
            }
        }
    }

    handleDeleteProject(event) {
        const projectElement = event.target.closest('li');
        const projectName = projectElement.querySelector('.project-name').textContent.trim();
        if (confirm("Are you sure you want to delete this project?")) {
            this.projectManager.removeProject(projectName);
            this.renderProjects();
            if (this.currentProject && this.currentProject.name === projectName) {
                this.currentProject = this.projectManager.getProjects()[0] || null;
                this.renderTodos();
            }
        }
    }
    
    handleProjectClick(event) {
        const clickedElement = event.target.closest('li');
        const selectedProject = this.projectManager.getProjects().find(project => project.name === clickedElement.querySelector('.project-name').textContent.trim());
        if (selectedProject) {
            this.selectCurrentProject(selectedProject);
        }
    }
    
    handleFilterClick(event) {
        const taskFilters = document.querySelectorAll('.task-filters li');
        taskFilters.forEach(f => f.classList.remove('active'));
        event.target.classList.add('active');
        const filterType = event.target.getAttribute('data-filter');
        this.filterTasks(filterType);
    }

    filterTasks(filterType) {
        const todos = document.querySelectorAll('#todo-list li');
        const today = new Date().toISOString().split('T')[0]; 

        todos.forEach(todo => {
            const dueDate = todo.querySelector('.todo-due-date').textContent.replace('Due: ', '');
            const priority = todo.querySelector('.priority-circle').classList.contains('high') ? 'important' : '';
            const completed = todo.classList.contains('completed');

            switch (filterType) {
                case 'all': 
                    todo.style.display = 'flex';
                    break;
                case 'today':
                    todo.style.display = (dueDate === today) ? 'flex' : 'none';
                    break;
                case 'week':
                    const weekStart = new Date();
                    const weekEnd = new Date();
                    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                    weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()));
                    const dueDateObj = new Date(dueDate);
                    todo.style.display = (dueDateObj >= weekStart && dueDateObj <= weekEnd) ? 'flex' : 'none';
                    break;
                case 'important':
                    todo.style.display = (priority === 'important') ? 'flex' : 'none';
                    break
                case 'completed':
                    todo.style.display = completed ? 'flex' : 'none';
                    break;
            }
        });
    }

    selectCurrentProject(project) {
        this.currentProject = project; 
        this.renderProjects();
        this.renderTodos();
        this.updateProjectHeader();
    }

    toggleModal(modalId, show) {
        const modal = document.getElementById(modalId);
        if (show) {
            modal.classList.remove('hidden');
            modal.classList.add('visible');
        } else {
            modal.classList.remove('visible');
            modal.classList.add('hidden');
        }
    }
    

    updateProjectHeader() {
        const projectHeaderElement = document.getElementById('project-title');
        const projectHeaderText = projectHeaderElement.querySelector('.project-title-text');

        if (this.currentProject) {
            projectHeaderText.textContent = this.currentProject.name;
        } else {
            projectHeaderText.textContent = 'Select a Project';
        }
    }
    
    showTodoModal(todo = null) {
        // Fill the form with the todo details if editing, otherwise clear the form
        document.getElementById('todo-title').value = todo ? todo.title : '';
        document.getElementById('todo-description').value = todo ? todo.description : '';
        document.getElementById('todo-due-date').value = todo ? todo.dueDate : '';
        document.getElementById('todo-priority').value = todo ? todo.priority : '';

        // Save the todo being edited or indicate a new todo
        this.todoBeingEdited = todo;

        // Show the modal
        this.toggleModal('todo-modal', true);
    }
    
    saveTodo() {
        const titleElement = document.getElementById('todo-title');
        const descriptionElement = document.getElementById('todo-description');
        const dueDateElement = document.getElementById('todo-due-date');
        const priorityElement = document.getElementById('todo-priority');
        
        const title = titleElement.value;
        const description = descriptionElement.value;
        const dueDate = dueDateElement.value;
        const priority = priorityElement.value;
        
        if (this.currentProject) {
            if(this.todoBeingEdited) {
                // Edit the existing todo
                this.todoBeingEdited.editTodoDetails({
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    priority: priority
                });
            } else {
                // Add a new todo
                const newTodo = new _logic_Todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority);
                this.currentProject.addTodo(newTodo);
            }
            this.renderTodos();

            // Clear the form fields
            titleElement.value = '';
            descriptionElement.value = '';
            dueDateElement.value = '';
            priorityElement.selectedIndex = 0;
        } else {
            console.error("No current project selected");
        }
    }

    handleTodoAction(event) {
        const todoElement = event.target.closest('li');
        if (!todoElement) {
            console.error("No todo element found.");
            return;
        }

        const todoTitle = todoElement.querySelector('.todo-title').textContent;
        const todo = this.currentProject.getTodos().find(t => t.title === todoTitle);

        if (todo) {
            if (event.target.classList.contains('mark-complete') || event.target.closest('.mark-complete')) {
                todo.completed = !todo.completed;
                this.renderTodos();
            } else if (event.target.classList.contains('edit-todo') || event.target.closest('.edit-todo')) {
                this.showTodoModal(todo);
            } else if (event.target.classList.contains('delete-todo') || event.target.closest('.delete-todo')) {
                if (confirm("Are you sure you want to delete this todo?")) {
                    this.currentProject.removeTodo(todo);
                    this.renderTodos();
                }
            }
        } else {
            console.error("Todo not found for action.");
        }
    }

    renderTodos() {
        const todoContainer = document.getElementById('todo-list');
        todoContainer.innerHTML = '';
        if (this.currentProject) {
            this.currentProject.getTodos().forEach(todo => {
                const todoElement = document.createElement('li');
                todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                todoElement.innerHTML = `
                    <label class="priority-circle ${todo.priority}">
                        <input type="checkbox" class="mark-complete" ${todo.completed ? 'checked' : ''}>
                    </label>
                    <span class="todo-details">
                        <span class="todo-title">${todo.title}</span>
                        <span class="todo-due-date">Due: ${todo.dueDate}</span>
                        <span class="todo-description">${todo.description}</span>
                    </span>
                    <div class="todo-actions">
                        <button class="edit-todo"><i class="fas fa-edit"></i></button>
                        <button class="delete-todo"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `;
                todoContainer.appendChild(todoElement);
            });
        }
    }
}

// Initialize the TodoApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const app = new TodoApp();
    app.init();
});


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
 // Where the DOM manipulations and event listeners are

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map