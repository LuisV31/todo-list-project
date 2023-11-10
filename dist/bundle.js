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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.todos = [];\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n\n    removeTodo(todoTitle) {\n        this.todos = this.todos.filter(todo => todo.title !== todoTitle);\n    }\n\n    getTodo(todoTitle) {\n        return this.todos.find(todo => todo.title === todoTitle);\n    }\n\n    getTodos() {\n        return this.todos;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list-project/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = '';\n        this.checklist = [];\n    }\n\n    addNote(note) {\n        this.notes = note;\n    }\n\n    addTaskToChecklist(task) {\n        this.checklist.push({ task: task, done: false });\n    }\n\n    markTaskAsDone(task) {\n        const taskItem = this.checklist.find(item => item.task === task);\n        if (taskItem) {\n            taskItem.done = true;\n        }\n    }\n\n}\n\n\n//# sourceURL=webpack://todo-list-project/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n // Where the DOM manipulations and event listeners are\n // Todo class definition.\n // this has createProject function.\n\n\n// Instantiate a default project\nconst defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Default');\n\n// Initialize selected project\nlet selectedProject = defaultProject;\n\n\n// Function to change seleceted project (this could be caled based on user input)\nfunction changeSelectedProject(newProject) {\n    selectedProject = newProject;\n}\n\n//# sourceURL=webpack://todo-list-project/./src/index.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nfunction createProject(name) {\n    return new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n}\n\n//# sourceURL=webpack://todo-list-project/./src/projectManager.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    setupCreateProjectButton();\n    setupTodoForm();\n});\n\nfunction setupCreateProjectButton() {\n    const createProjectButton = document.getElementById('create-project-button');\n    const projectList = document.getElementById('project-list');\n\n    createProjectButton.addEventListener('click', () => {\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            const newProject = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);\n            const projectElement = createProjectElement(newProject);\n            projectList.appendChild(projectElement);\n        }\n    });\n}\n\nfunction createProjectElement(project) {\n    console.log(\"creating new project element for:\", project.name);\n    const projectElement = document.createElement('div');\n    projectElement.textContent = project.name;\n\n    projectElement.addEventListener('click', () => {\n        handleProjectSelection(project);\n    });\n\n    return projectElement;\n}\n\nfunction handleProjectSelection(selectedProject) {\n    //implemet here//\n}\n\nfunction setupTodoForm() {\n    const todoForm = document.getElementById('todo-form');\n\n    todoForm.addEventListener('submit', event => {\n        event.preventDefault();\n        const selectedProject = getSelectedProject();\n        if (selectedProject) {\n            const newTodo = createNewTodo();\n            selectedProject.addTodo(newTodo);\n            // Optionally, update the UI here.\n        } else {\n            alert('Please select a project first');\n        }\n    });\n}\n\nfunction createNewTodo() {\n    const title = document.getElementById('todo-title').value;\n    const description = document.getElementById('todo-description').value;\n    const dueDate = document.getElementById('todo-dueDate').value;\n    const priority = document.getElementById('todo-priority').value;\n\n    return new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\n}\n\nfunction getSelectedProject() {\n    // Implement this function to treturn the currently selected project.\n    // This could involve retrieveing a reference to the project from a variable,\n    // or identifiying the selected project from the DOM\n}\n\n//# sourceURL=webpack://todo-list-project/./src/ui.js?");

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