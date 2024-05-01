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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n // Where the DOM manipulations and event listeners are\n\n\n//# sourceURL=webpack://todo-list-project/./src/index.js?");

/***/ }),

/***/ "./src/logic/Project.js":
/*!******************************!*\
  !*** ./src/logic/Project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.todos = [];\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n    \n    removeTodo(todo) {\n       this.todos = this.todos.filter(t => t !== todo);\n    }\n\n    // View all todos in each project\n    getTodos() {\n        return this.todos;\n    }\n\n    // updateTodo(todoTitle, updateProperties) {\n    //     const todo = this.getTodo(todoTitle);\n    //     if (todo) {\n    //         todo.editTodoDetails(updateProperties);\n    //     }\n    // }\n}\n\n\n//# sourceURL=webpack://todo-list-project/./src/logic/Project.js?");

/***/ }),

/***/ "./src/logic/projectManager.js":
/*!*************************************!*\
  !*** ./src/logic/projectManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/logic/Project.js\");\n\n\nclass ProjectManager {\n    constructor() {\n        this.projects = [];\n        this.createDefaultProject();\n    }\n\n    createDefaultProject() {\n        this.addProject(\"Default\");\n    }\n\n    addProject(name) {\n    if (!name || typeof name !== 'string' || this.findProjectByName(name)) {\n        console.error(\"Project name must be unique and valid string.\");\n        return;\n    }\n    const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    this.projects.push(newProject);\n    }\n    \n    findProjectByName(name) {\n        return this.projects.find(project => project.name === name);\n    }\n    \n    // View all projects//\n    getProjects() {\n        return this.projects;\n    }\n\n    removeProject(name) {\n        const projectIndex = this.projects.findIndex(project => project.name === name);\n        if (projectIndex !== -1) {\n            this.projects.splice(projectIndex, 1);\n            return true;\n        }\n        return false;\n    }\n\n    updateProjectName(oldName, newName) {\n        const project = this.findProjectByName(oldName);\n        if (project && !this.findProjectByName(newName)) {\n            project.name = newName;\n            return true;\n        }\n        return false;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);\n\n//# sourceURL=webpack://todo-list-project/./src/logic/projectManager.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/projectManager.js */ \"./src/logic/projectManager.js\");\n\n\nconst projectManager = new _logic_projectManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Function to render all projects\n\nconst renderProjects = () => {\n    const projectContainer = document.getElementById('project-list');\n    projectContainer.innerHTML = '';\n    projectManager.getProjects().forEach(project => {\n        const projectElement = document.createElement('li');\n        projectElement.textContent = project.name;\n        projectElement.addEventListener('click', () => selectProject(project));\n        projectContainer.appendChild(projectElement);\n    });\n};\n\nconst selectProject = project => {\n    const todoContainer = document.getElementById('todo-list');\n    todoContainer.innerHTML = '';\n    project.getTodos().forEach(todo => {\n        const todoElement = document.createElement('div');\n        todoElement.textContent = `${todo.title} - Due: ${todo.dueDate}`;\n        todoContainer.appendChild(todoElement);\n    });\n};\n\nconst addProject = () => {\n    const projectNameInput = document.getElementById('new-project-name');\n    const projectName = projectNameInput.value;\n    if (projectName) {\n        projectManager.addProject(projectName);\n        renderProjects();\n        projectNameInput.value = '';\n    }\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    renderProjects();\n});\n\ndocument.getElementById('add-project-btn').addEventListener('click', addProject)\n\n//# sourceURL=webpack://todo-list-project/./src/ui.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;