/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/checkmark.png */ "./src/assets/checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Kristi&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,400;0,700;0,900;1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n  --main-green: #1abc9c;\n  --second-green: #2ecc71;\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #1f8d4d;\n  --accent: #2abd67;\n}\n\nbody {\n  height: 100%;\n}\n\nheader {\n  position: relative;\n  height: 70px;\n  background-color: var(--bgColor3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid var(--accentDark);\n  user-select: none;\n}\n\n.hamburger {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 6px;\n  left: 10px;\n  padding: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.hamburger:hover,\n.project-item > img:hover,\n.right img:hover {\n  background-color: rgba(128, 128, 128, 0.267);\n}\n\n.hamburger:active,\nbutton:active,\n.project-item img:active,\n.project-form .buttons > input:active,\n.right img:active,\n.todo-form .buttons > input:active {\n  transform: scale(0.95);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 600;\n  gap: 8px;\n  cursor: pointer;\n}\n\n.logo > span {\n  color: var(--second-green);\n}\n\n.container {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.sidebar {\n  background-color: var(--bgColor1);\n  box-sizing: border-box;\n  width: 350px;\n  user-select: none;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 15px;\n  transition: 1s ease-out;\n}\n\n.home,\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar button,\n.project-item,\n.content .add-todo {\n  display: flex;\n  justify-content: start;\n  height: 40px;\n  gap: 15px;\n  align-items: center;\n  font-size: 18px;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n\n.sidebar button:hover,\n.project-form:hover,\n.project-item:hover,\n.content .add-todo:hover {\n  border-radius: 5px;\n  background-color: var(--bgColor2);\n}\n\n.home > button.active {\n  border-radius: 0 5px 5px 0;\n  border-left: 5px solid var(--accent);\n  background-color: #2abd6770;\n}\n\n.home > button.active:hover,\n.project-form .buttons > input:hover,\n.todo-form .buttons > input:hover {\n  filter: brightness(90%) !important;\n}\n\n.sidebar h2 {\n  border-bottom: 1px solid black;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  font-weight: 600;\n}\n\n.hide {\n  display: none;\n  pointer-events: none !important;\n  position: absolute !important;\n  max-height: 0 !important;\n  transition: max-height 1s ease-out !important;\n  opacity: 0 !important;\n}\n\n.add-project {\n  transition: 1s ease-out;\n}\n\n.project-item {\n  justify-content: space-between;\n}\n\n.project-item > img,\n.right img {\n  padding: 3px;\n  border-radius: 4px;\n  margin-right: 5px;\n}\n\n.project-form form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: 0.5s ease-in-out;\n  gap: 15px;\n}\n\n.project-form input[type=\"text\"] {\n  width: 80%;\n  height: 30px;\n  border: black 2px solid;\n  border-radius: 2px;\n  padding-left: 5px;\n}\n\n.project-form .buttons,\n.todo-form .buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.project-form .buttons > input,\n.todo-form .buttons > input {\n  border: none;\n  width: 70px;\n  color: white;\n  font-size: 16px;\n  height: 35px;\n  border-radius: 4px;\n}\n\n.project-form .buttons > input[value=\"Add\"],\n.todo-form .buttons > input[value=\"Add\"] {\n  background-color: var(--accentDark);\n}\n\n.project-form .buttons > input[value=\"Cancel\"],\n.todo-form .buttons > input[value=\"Cancel\"] {\n  background-color: rgb(235, 80, 80);\n}\n\n.content {\n  background-color: var(--bgColor2);\n  padding: 30px 50px;\n  flex: 1;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.name {\n  background-color: var(--accent);\n  height: 60px;\n  padding: 20px;\n  font-size: 2rem;\n  color: #f7f5f5;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  cursor: pointer;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid var(--textColor);\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.todo-item:hover {\n  background-color: var(--bgColor1);\n}\n\n.todo-item:active,\n.content .add-todo:active {\n  transform: scale(0.995);\n}\n\n.left {\n  display: flex;\n  flex: 3;\n  gap: 10px;\n  flex-wrap: wrap;\n  color: var(--textColor);\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.left .text p:nth-child(2) {\n  font-size: 15px;\n}\n\n.item-checked {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n\n.right {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 20px;\n  padding-right: 15px;\n}\n\n.date {\n  font-size: 0.9rem;\n  padding: 3px 6px;\n  margin: 6px 5px;\n  border: solid 1.5px var(--textColor);\n  border-radius: 10px;\n}\n\n.unchecked {\n  width: 13px;\n  height: 13px;\n  border: solid 2px var(--textColor);\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-top: 10px;\n  flex-shrink: 0;\n}\n\n.checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-origin: border-box;\n  background-color: white;\n  border-color: var(--accent);\n}\n\n.todo-form {\n  background-color: var(--bgColor1);\n  color: var(--textColor);\n  border-radius: 10px;\n}\n\n.todo-form > form {\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  position: relative;\n  transition-delay: 1s;\n  max-height: 500px;\n  transition: max-height 0.8s ease-out, opacity 300ms ease-in-out;\n  padding: 15px 20px;\n  font-size: 1.2rem;\n}\n\n.todo-form input[type=\"text\"],\ntextarea,\ninput[type=\"date\"] {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 1rem;\n  background-color: white;\n  border: solid 2px #273746;\n  border-radius: 3px;\n  padding: 5px;\n  resize: none;\n}\n\n.todo-form .buttons {\n  margin-top: 10px;\n}\n\n.content .add-todo:hover {\n  background-color: var(--bgColor1);\n}\n\n.project-item p {\n  pointer-events: none;\n}\n.project-item.active{\n  background-color: var(--bgColor2);\n}\n@media (max-width: 930px) {\n  .container {\n    flex-direction: column;\n  }\n\n  .sidebar {\n    z-index: 3;\n    overflow: auto;\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Kristi&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,400;0,700;0,900;1,500&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n  --main-green: #1abc9c;\n  --second-green: #2ecc71;\n  --bgColor2: #ececec;\n  --bgColor3: #f2f3f5;\n  --bgColor1: #fefcfe;\n  --bgColorPopUp: #f3f1f3;\n  --textColor: #374958;\n  --accentDark: #1f8d4d;\n  --accent: #2abd67;\n}\n\nbody {\n  height: 100%;\n}\n\nheader {\n  position: relative;\n  height: 70px;\n  background-color: var(--bgColor3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2px solid var(--accentDark);\n  user-select: none;\n}\n\n.hamburger {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 6px;\n  left: 10px;\n  padding: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.hamburger:hover,\n.project-item > img:hover,\n.right img:hover {\n  background-color: rgba(128, 128, 128, 0.267);\n}\n\n.hamburger:active,\nbutton:active,\n.project-item img:active,\n.project-form .buttons > input:active,\n.right img:active,\n.todo-form .buttons > input:active {\n  transform: scale(0.95);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 600;\n  gap: 8px;\n  cursor: pointer;\n}\n\n.logo > span {\n  color: var(--second-green);\n}\n\n.container {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.sidebar {\n  background-color: var(--bgColor1);\n  box-sizing: border-box;\n  width: 350px;\n  user-select: none;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 15px;\n  transition: 1s ease-out;\n}\n\n.home,\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar button,\n.project-item,\n.content .add-todo {\n  display: flex;\n  justify-content: start;\n  height: 40px;\n  gap: 15px;\n  align-items: center;\n  font-size: 18px;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n\n.sidebar button:hover,\n.project-form:hover,\n.project-item:hover,\n.content .add-todo:hover {\n  border-radius: 5px;\n  background-color: var(--bgColor2);\n}\n\n.home > button.active {\n  border-radius: 0 5px 5px 0;\n  border-left: 5px solid var(--accent);\n  background-color: #2abd6770;\n}\n\n.home > button.active:hover,\n.project-form .buttons > input:hover,\n.todo-form .buttons > input:hover {\n  filter: brightness(90%) !important;\n}\n\n.sidebar h2 {\n  border-bottom: 1px solid black;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  font-weight: 600;\n}\n\n.hide {\n  display: none;\n  pointer-events: none !important;\n  position: absolute !important;\n  max-height: 0 !important;\n  transition: max-height 1s ease-out !important;\n  opacity: 0 !important;\n}\n\n.add-project {\n  transition: 1s ease-out;\n}\n\n.project-item {\n  justify-content: space-between;\n}\n\n.project-item > img,\n.right img {\n  padding: 3px;\n  border-radius: 4px;\n  margin-right: 5px;\n}\n\n.project-form form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: 0.5s ease-in-out;\n  gap: 15px;\n}\n\n.project-form input[type=\"text\"] {\n  width: 80%;\n  height: 30px;\n  border: black 2px solid;\n  border-radius: 2px;\n  padding-left: 5px;\n}\n\n.project-form .buttons,\n.todo-form .buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.project-form .buttons > input,\n.todo-form .buttons > input {\n  border: none;\n  width: 70px;\n  color: white;\n  font-size: 16px;\n  height: 35px;\n  border-radius: 4px;\n}\n\n.project-form .buttons > input[value=\"Add\"],\n.todo-form .buttons > input[value=\"Add\"] {\n  background-color: var(--accentDark);\n}\n\n.project-form .buttons > input[value=\"Cancel\"],\n.todo-form .buttons > input[value=\"Cancel\"] {\n  background-color: rgb(235, 80, 80);\n}\n\n.content {\n  background-color: var(--bgColor2);\n  padding: 30px 50px;\n  flex: 1;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.name {\n  background-color: var(--accent);\n  height: 60px;\n  padding: 20px;\n  font-size: 2rem;\n  color: #f7f5f5;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.todos {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  cursor: pointer;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid var(--textColor);\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.todo-item:hover {\n  background-color: var(--bgColor1);\n}\n\n.todo-item:active,\n.content .add-todo:active {\n  transform: scale(0.995);\n}\n\n.left {\n  display: flex;\n  flex: 3;\n  gap: 10px;\n  flex-wrap: wrap;\n  color: var(--textColor);\n  font-size: 17px;\n  font-weight: 500;\n}\n\n.left .text p:nth-child(2) {\n  font-size: 15px;\n}\n\n.item-checked {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n\n.right {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 20px;\n  padding-right: 15px;\n}\n\n.date {\n  font-size: 0.9rem;\n  padding: 3px 6px;\n  margin: 6px 5px;\n  border: solid 1.5px var(--textColor);\n  border-radius: 10px;\n}\n\n.unchecked {\n  width: 13px;\n  height: 13px;\n  border: solid 2px var(--textColor);\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-top: 10px;\n  flex-shrink: 0;\n}\n\n.checked {\n  background-image: url(../assets/checkmark.png);\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-origin: border-box;\n  background-color: white;\n  border-color: var(--accent);\n}\n\n.todo-form {\n  background-color: var(--bgColor1);\n  color: var(--textColor);\n  border-radius: 10px;\n}\n\n.todo-form > form {\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  position: relative;\n  transition-delay: 1s;\n  max-height: 500px;\n  transition: max-height 0.8s ease-out, opacity 300ms ease-in-out;\n  padding: 15px 20px;\n  font-size: 1.2rem;\n}\n\n.todo-form input[type=\"text\"],\ntextarea,\ninput[type=\"date\"] {\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 1rem;\n  background-color: white;\n  border: solid 2px #273746;\n  border-radius: 3px;\n  padding: 5px;\n  resize: none;\n}\n\n.todo-form .buttons {\n  margin-top: 10px;\n}\n\n.content .add-todo:hover {\n  background-color: var(--bgColor1);\n}\n\n.project-item p {\n  pointer-events: none;\n}\n.project-item.active{\n  background-color: var(--bgColor2);\n}\n@media (max-width: 930px) {\n  .container {\n    flex-direction: column;\n  }\n\n  .sidebar {\n    z-index: 3;\n    overflow: auto;\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/hamburger.png */ "./src/assets/hamburger.png");
/* harmony import */ var _assets_todo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/todo.png */ "./src/assets/todo.png");
/* harmony import */ var _assets_tasks_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/tasks.png */ "./src/assets/tasks.png");
/* harmony import */ var _assets_today_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/today.png */ "./src/assets/today.png");
/* harmony import */ var _assets_week_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/week.png */ "./src/assets/week.png");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/add.png */ "./src/assets/add.png");
/* harmony import */ var _assets_del_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/del.png */ "./src/assets/del.png");
/* harmony import */ var _assets_drag_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/drag.png */ "./src/assets/drag.png");
/* harmony import */ var _modules_projectController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/projectController */ "./src/modules/projectController.js");











const displayController = (() => {
  addEvents();
  function addEvents() {
    var menu = document.querySelector(".hamburger");
    var addProjectButton = document.querySelector(".add-project");
    var cancelProject = document.querySelector(".cancel-project");

    var tasksButtons = document.querySelectorAll(".btn");

    var addTodoButton = document.querySelector(".add-todo");
    var cancelTodo = document.querySelector(".cancel-todo");

    var projectSubmit = document.querySelector('.project-add')
    projectSubmit.addEventListener('click',_modules_projectController__WEBPACK_IMPORTED_MODULE_9__.projectController.addProject);

    var todoSubmit = document.querySelector('.todo-add');
    todoSubmit.addEventListener('click',_modules_projectController__WEBPACK_IMPORTED_MODULE_9__.projectController.addTodoTask);

    menu.addEventListener("click", clickMenu);
    addProjectButton.addEventListener("click", toggleProjectForm);
    cancelProject.addEventListener("click", toggleProjectForm);

    addTodoButton.addEventListener("click", toggleTodoForm);
    cancelTodo.addEventListener("click", toggleTodoForm);

    tasksButtons.forEach((btn) => btn.addEventListener("click", changeTaskTab));
  }

  function clickMenu() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hide");
  }

  function changeTaskTab(e) {
    var btns = document.querySelectorAll(".btn");
    var projectItems = document.querySelectorAll(".project-item");
    var addTodo = document.querySelector('.add-todo')
    addTodo.setAttribute('data-project-name','')

    btns.forEach((btn) => btn.classList.remove("active"));
    projectItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    var heading = document.querySelector(".name");
    if (e.target.classList.contains("all-tasks")) {
      heading.innerText = "All Tasks";
      addTodo.classList.add('hide');
      _modules_projectController__WEBPACK_IMPORTED_MODULE_9__.projectController.showAllTasks();
    } else if (e.target.classList.contains("today")) {
      heading.innerText = "Today's Tasks";
      addTodo.classList.add('hide');

    } else if (e.target.classList.contains("week")) {
      heading.innerText = "This Week's Tasks";
      addTodo.classList.add('hide');

    }
    else if(e.target.classList.contains("project-item")){
      heading.innerText = e.target.querySelector('p').innerText;
      addTodo.classList.remove('hide');
      addTodo.setAttribute('data-project-name',e.target.querySelector('p').innerText)
      _modules_projectController__WEBPACK_IMPORTED_MODULE_9__.projectController.showProjects(e.target.querySelector('p').innerText);
    }
  }

  function toggleProjectForm(e) {
    if (e.target.classList.contains("add-project")) {
      e.target.classList.add("hide");
      var form = document.querySelector(".project-form");
      form.classList.remove("hide");
    } else if (e.target.classList.contains("cancel-project")) {
      var form = document.querySelector(".project-form");

      form.classList.add("hide");
      var input = document.querySelector(".project-name-inp");
      input.value = "";
      var projectButton = document.querySelector(".add-project");

      projectButton.classList.remove("hide");
    }
  }

  function toggleTodoForm(e) {
    if (e.target.classList.contains("add-todo")) {
      e.target.classList.add("hide");
      var form = document.querySelector(".todo-form");
      form.classList.remove("hide");
    } else if (e.target.classList.contains("cancel-todo")) {
      var form = document.querySelector(".todo-form");

      form.classList.add("hide");

      var todoButton = document.querySelector(".add-todo");

      todoButton.classList.remove("hide");
    }
  }
  

  return {changeTaskTab};
})();




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController */ "./src/modules/projectController.js");


class Project{
    constructor(name){
        this.name = name;
        this.todos = [];
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    addDomElements(){
        var div = document.createElement('div');
        div.classList.add('project-item');

        var dragImg = document.createElement('img');
        dragImg.setAttribute('src','drag.png');
        dragImg.setAttribute('width','27px');

        var p = document.createElement('p');
        p.textContent = this.name;

        var delImg = document.createElement('img');
        delImg.setAttribute('src','del.png');
        delImg.addEventListener('click',_projectController__WEBPACK_IMPORTED_MODULE_0__.projectController.deleteProject);

        div.appendChild(dragImg);
        div.appendChild(p);
        div.appendChild(delImg);

        return div;
    }
}

/***/ }),

/***/ "./src/modules/projectController.js":
/*!******************************************!*\
  !*** ./src/modules/projectController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");




const projectController = (()=>{
    var projects = [];

    function addProject(e){
        e.preventDefault();
        var input = document.querySelector(".project-name-inp");

        if(input.value==""){
            return;
        }

        var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](e.target.parentNode.parentNode[0].value)
        projects.push(newProject);

        var projectList = document.querySelector('.project-items')
        var item = newProject.addDomElements()
        item.addEventListener('click',___WEBPACK_IMPORTED_MODULE_2__.displayController.changeTaskTab)
        projectList.appendChild(item)


        var form = document.querySelector(".project-form");

        form.classList.add("hide");
        input.value = "";
        var projectButton = document.querySelector(".add-project");

        projectButton.classList.remove("hide");

    }

    function addTodoTask(e){
        var form = e.target.parentNode.parentNode;
        if(form[0].value==''||form[2].value==''){
            return;
        }
        
        var addTodoButton = document.querySelector('.add-todo')
        var projectName = addTodoButton.getAttribute('data-project-name');
        var todo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](form[0].value,form[1].value,form[2].value,projectName,false)
        
        projects.forEach(project =>{
            if (project.name===projectName) {
                project.addTodo(todo);
            }
        })

        form[0].value = '';
        form[1].value = '';
        form[2].value = '';
        form.parentNode.classList.add('hide');

        addTodoButton.classList.remove('hide');

        var task = todo.addDomElements();
        var todoList = document.querySelector('.todos');
        todoList.appendChild(task);

    }

    function toggleTaskCheck(e){
        e.target.classList.toggle('checked');
        e.target.nextSibling.classList.toggle('item-checked');

        var title = e.target.nextSibling.querySelector('p').innerText

        projects.forEach(project=>{
            project.todos.forEach(todo => {
                if (todo.title == title) {
                    todo.checked = !todo.checked;
                }
            });
        })
    }

    function showAllTasks(){
        var todoList = document.querySelector('.todos');
        todoList.innerHTML = '';
        projects.forEach(project=>{
                project.todos.forEach(todo=>todoList.appendChild(todo.addDomElements()))
        })
    }

    function showProjects(name){
        var todoList = document.querySelector('.todos');
        todoList.innerHTML = '';

        projects.forEach(project=>{
            if(project.name == name){
                project.todos.forEach(todo=>todoList.appendChild(todo.addDomElements()))
            }
        })
    }

    function deleteTodo(e){

        var projectName = e.target.parentNode.parentNode.getAttribute('data-project-title');
        var taskTitle = e.target.parentNode.parentNode.querySelector('p');
        var todoItem;
        projects.forEach(project=>{
            if (project.name==projectName) {
                project.todos.forEach(todo=>{
                    if(todo.title==taskTitle){
                        todoItem = todo;
                    }
                })
                project.todos.splice(todoItem,1);
            }
        })

        showProjects(projectName);
        


    }
    function deleteProject(e){
        console.log(e.target.parentNode)
    }


    return {addProject,addTodoTask,toggleTaskCheck,showAllTasks,showProjects,deleteTodo,deleteProject}
})()



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController */ "./src/modules/projectController.js");


class Todo{
    constructor(title,desc,date,project,checked){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.project = project;
        this.checked = checked;
    }

    addDomElements(){
        var mainDiv = document.createElement('div');
        mainDiv.classList.add('todo-item');
        mainDiv.setAttribute('data-project-title',this.project);

        var left = document.createElement('div');
        left.classList.add('left');

        var box = document.createElement('div');
        box.classList.add("unchecked");

        box.addEventListener('click',_projectController__WEBPACK_IMPORTED_MODULE_0__.projectController.toggleTaskCheck)

        var texts = document.createElement('div');
        texts.classList.add('text');

        if(this.checked){
            box.classList.add('checked');
            texts.classList.add('item-checked');
        }

        var p1 = document.createElement('p');
        p1.innerText = this.title;
        var p2 = document.createElement('p');
        p2.innerText = this.desc;

        texts.appendChild(p1);
        texts.appendChild(p2);

        left.appendChild(box);
        left.appendChild(texts);

        mainDiv.appendChild(left);

        var right = document.createElement('div');
        right.classList.add('right');

        var date = document.createElement('p');
        date.classList.add('date');
        date.innerText = this.date;

        var delImg = document.createElement('img');
        delImg.setAttribute('src','del.png');

        delImg.addEventListener('click',_projectController__WEBPACK_IMPORTED_MODULE_0__.projectController.deleteTodo);

        right.appendChild(date);
        right.appendChild(delImg);

        mainDiv.appendChild(right);

        return mainDiv;

    }
}

/***/ }),

/***/ "./src/assets/add.png":
/*!****************************!*\
  !*** ./src/assets/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add.png";

/***/ }),

/***/ "./src/assets/checkmark.png":
/*!**********************************!*\
  !*** ./src/assets/checkmark.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checkmark.png";

/***/ }),

/***/ "./src/assets/del.png":
/*!****************************!*\
  !*** ./src/assets/del.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "del.png";

/***/ }),

/***/ "./src/assets/drag.png":
/*!*****************************!*\
  !*** ./src/assets/drag.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "drag.png";

/***/ }),

/***/ "./src/assets/hamburger.png":
/*!**********************************!*\
  !*** ./src/assets/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hamburger.png";

/***/ }),

/***/ "./src/assets/tasks.png":
/*!******************************!*\
  !*** ./src/assets/tasks.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tasks.png";

/***/ }),

/***/ "./src/assets/today.png":
/*!******************************!*\
  !*** ./src/assets/today.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "today.png";

/***/ }),

/***/ "./src/assets/todo.png":
/*!*****************************!*\
  !*** ./src/assets/todo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "todo.png";

/***/ }),

/***/ "./src/assets/week.png":
/*!*****************************!*\
  !*** ./src/assets/week.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "week.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle3a5875e4503802c56a46.js.map