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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-card */ \"./src/task-card.js\");\n\n\nlet mainDiv = document.getElementById('proj-container');\nmainDiv.appendChild((0,_task_card__WEBPACK_IMPORTED_MODULE_0__.default)(\"t1\",\"do the dishes\", \"3/4/2021\"));\n\nfunction addTaskFunc() {\n    console.log(\"In the event handler\");\n    let projContainer = document.getElementById('proj-container');\n    projContainer.style.display = \"none\";\n    let taskInput = document.getElementById(\"taskInput\");\n    taskInput.style.display = \"block\";\n    cardBtn.addEventListener(\"click\", addCard);\n    //console.log(\"Task name:\" + taskInput.taskTitle.textContent);\n    console.log(\"task name\"+taskInput.taskTitle.value);\n}\n\nfunction addCard() {\n    let taskForm = document.getElementById(\"taskInput\");\n    console.log(\"in add card\");\n    //console.log(\"date: \");\n    console.log(taskForm.taskTitle.value +\"--\"+taskForm.taskDesc.value+\"--\"+taskForm.endDate.value);\n    mainDiv.appendChild((0,_task_card__WEBPACK_IMPORTED_MODULE_0__.default)(taskForm.taskTitle.value, taskForm.taskDesc.value, taskForm.endDate.value));\n    const storeObj = {\"title\": taskForm.taskTitle.value, \"desc\":  taskForm.taskDesc.value, \"endDate\": taskForm.endDate.value}\n    storage.setItem(taskForm.taskTitle.value, JSON.stringify(storeObj));\n    console.log(storage);\n}\n\nfunction crossOut(e){\n    console.log(\"in crossOut\");\n    console.log(\"check box: \"+ e.target.checked);\n    if(e.target.checked === true){\n\n        //let taskText = document.getElementById(e.target.id);\n        taskText.strike();\n    }\n}\n\nconst taskBtn = document.getElementById(\"addTask\");\ntaskBtn.addEventListener(\"click\",addTaskFunc);\nconst cardBtn = document.getElementById(\"add-card\");\nlet storage = window.sessionStorage;\nconst keys = Object.keys(storage);\nconsole.log(keys);\nconsole.log(JSON.parse(storage[keys[1]]).title);\nkeys.forEach(key => {\n    if(!key.includes(\"IsThisFirst\"))\n    mainDiv.appendChild((0,_task_card__WEBPACK_IMPORTED_MODULE_0__.default)(JSON.parse(storage[key]).title, JSON.parse(storage[key]).desc, JSON.parse(storage[key]).endDate))});\nconst checkBoxes = document.querySelectorAll(\".check-task\");\nconsole.log(checkBoxes);\ncheckBoxes.forEach(cb => {\n    cb.addEventListener(\"change\", crossOut);\n});\n\n\n//# sourceURL=webpack://todo_w/./src/index.js?");

/***/ }),

/***/ "./src/task-card.js":
/*!**************************!*\
  !*** ./src/task-card.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTask = (name, desc, endDate) => {\n    let task = document.createElement('div');\n    task.classList.add('task');\n    let ip = document.createElement('input');\n    ip.type = 'checkbox';\n    ip.value = 't2';\n    ip.name = name;\n    ip.id = name;\n    ip.classList.add('check-task');\n    let label = document.createElement('label');\n    label.for = name;\n    label.textContent = name;\n    label.id = name;\n    let btn = document.createElement('button');\n    btn.class = 'expand';\n    btn.textContent = '+';\n    let d = document.createElement('p');\n    d.textContent = \"End: \"+endDate;\n    let dpar = document.createElement('p');\n    dpar.textContent = desc;\n\n    task.append(ip, label, btn, d, dpar);\n\n    return task;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n//# sourceURL=webpack://todo_w/./src/task-card.js?");

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