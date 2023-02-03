/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #f3f3f3;\n    /* overflow-y: hidden; */\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\n.hide {\n    display: none;\n}\n\n.game-title {\n    margin: 0;\n    padding: 0;\n    font-size: 4rem;\n    font-family: 'Black Ops One', cursive;\n}\n\n.game-buttons {\n    /* display: flex; */\n    display: none;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.game-buttons button {\n    font-size: 1rem;\n    text-align: start;\n    background-color: hsl(72, 5%, 79%);\n}\n\n.splash-battleship-img {\n    width: 100%;\n    pointer-events: none;\n    opacity: 0.25;\n    z-index: -999;\n}\n\n.battleship-grid {\n    margin: 2vmin;\n    display: grid;\n    /* grid-template-rows: repeat(10, 4.6vmin);\n    grid-template-columns: repeat(10, 4.6vmin); */\n    grid-template-rows: repeat(10, 3.6vmin);\n    grid-template-columns: repeat(10, 3.6vmin);\n    background-color: hsl(200, 100%, 50%);\n}\n\n.battleship-grid div {\n    border: 1px solid hsla(0, 0%, 100%, .2);\n}\n\n.battleship-grid .ship {\n    background-color: lightgray;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.submarine,\n.destroyer {\n    background-color: lightgray;\n}\n\n.battleship-grid .hit {\n    background-color: hsl(15, 100%, 50%);\n}\n\n.battleship-grid .miss {\n    background-color: hsl(0, 4%, 16%);\n}\n\n.main-gameplay-area {\n    display: grid;\n    grid-template-areas:\n        \"a b c\"\n        \"d e f\"\n        \"g h i\";\n}\n\n.player-mission-control,\n.enemy-mission-control {\n    display: grid;\n    flex-direction: column;\n}\n\n.player-mission-log,\n.enemy-mission-log {\n    margin: 2vmin;\n    padding: 10px;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    border: solid 1px black;\n    font-size: .8rem;\n    overflow: scroll;\n}\n\n.player-mission-log--list,\n.enemy-mission-log--list {\n    list-style-type: none;\n    padding: 0;\n}\n\n.player-mission-log--list li,\n.enemy-mission-log--list li {\n    margin: 8px 0;\n}\n\n.player-ships-area,\n.enemy-ships-area {\n    margin: 2vmin;\n    display: flex;\n    flex-direction: column;\n    align-self: end;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    color: white;\n}\n\n.player-ships-area {\n    background-color: hsl(240, 100%, 50%);\n}\n\n.enemy-ships-area {\n    background-color: hsl(0, 68%, 50%);\n}\n\n.enemy-ships-area button {\n    width: 150px;\n    height: 1.5rem;\n    border: none;\n    border-bottom: solid 1px black;\n    background-color: orangered;\n}\n\n.enemy-ships-area img {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.enemy-ship-container {\n    display: flex;\n    flex: row;\n    align-items: center;\n}\n\n.your-ships-heading {\n    padding: 0;\n    margin: 0;\n    color: white;\n}\n\n.legend-container {\n    display: flex;\n    flex-grow: 1;\n    align-items: end;\n}\n\n.legend-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1.5rem 1fr;\n    grid-template-rows: 1rem 1rem;\n    font-size: .7rem;\n}\n\n.legend-item img {\n    height: 1rem;\n    width: 1rem;\n}\n\n.legend-icon {\n    justify-self: end;\n    margin-right: 5px;\n}\n\n/* Bouncy Arrow Styling */\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    color: black;\n    font-size: 3rem;\n}\n\n.hide-arrow {\n    color: #f3f3f3;\n    pointer-events: none;\n    user-select: none;\n}\n\n.arrow {\n    text-align: center;\n    /* margin: 8% 0; */\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n.bounce {\n    animation: bounce 2s infinite;\n}\n\n@keyframes bounce {\n\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n        transform: translateY(0);\n    }\n\n    40% {\n        transform: translateY(-25px);\n    }\n\n    60% {\n        transform: translateY(-15px);\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;;;IAGI,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb;iDAC6C;IAC7C,uCAAuC;IACvC,0CAA0C;IAC1C,qCAAqC;AACzC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;;;;;IAKI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;;;eAGW;AACf;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,UAAU;AACd;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,wBAAwB;IACxB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iCAAiC;IACjC,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA,yBAAyB;AACzB;IACI;;;;iBAIa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;;IAEI;;;;;QAKI,wBAAwB;IAC5B;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');\n\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #f3f3f3;\n    /* overflow-y: hidden; */\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\n.hide {\n    display: none;\n}\n\n.game-title {\n    margin: 0;\n    padding: 0;\n    font-size: 4rem;\n    font-family: 'Black Ops One', cursive;\n}\n\n.game-buttons {\n    /* display: flex; */\n    display: none;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.game-buttons button {\n    font-size: 1rem;\n    text-align: start;\n    background-color: hsl(72, 5%, 79%);\n}\n\n.splash-battleship-img {\n    width: 100%;\n    pointer-events: none;\n    opacity: 0.25;\n    z-index: -999;\n}\n\n.battleship-grid {\n    margin: 2vmin;\n    display: grid;\n    /* grid-template-rows: repeat(10, 4.6vmin);\n    grid-template-columns: repeat(10, 4.6vmin); */\n    grid-template-rows: repeat(10, 3.6vmin);\n    grid-template-columns: repeat(10, 3.6vmin);\n    background-color: hsl(200, 100%, 50%);\n}\n\n.battleship-grid div {\n    border: 1px solid hsla(0, 0%, 100%, .2);\n}\n\n.battleship-grid .ship {\n    background-color: lightgray;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.submarine,\n.destroyer {\n    background-color: lightgray;\n}\n\n.battleship-grid .hit {\n    background-color: hsl(15, 100%, 50%);\n}\n\n.battleship-grid .miss {\n    background-color: hsl(0, 4%, 16%);\n}\n\n.main-gameplay-area {\n    display: grid;\n    grid-template-areas:\n        \"a b c\"\n        \"d e f\"\n        \"g h i\";\n}\n\n.player-mission-control,\n.enemy-mission-control {\n    display: grid;\n    flex-direction: column;\n}\n\n.player-mission-log,\n.enemy-mission-log {\n    margin: 2vmin;\n    padding: 10px;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    border: solid 1px black;\n    font-size: .8rem;\n    overflow: scroll;\n}\n\n.player-mission-log--list,\n.enemy-mission-log--list {\n    list-style-type: none;\n    padding: 0;\n}\n\n.player-mission-log--list li,\n.enemy-mission-log--list li {\n    margin: 8px 0;\n}\n\n.player-ships-area,\n.enemy-ships-area {\n    margin: 2vmin;\n    display: flex;\n    flex-direction: column;\n    align-self: end;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    color: white;\n}\n\n.player-ships-area {\n    background-color: hsl(240, 100%, 50%);\n}\n\n.enemy-ships-area {\n    background-color: hsl(0, 68%, 50%);\n}\n\n.enemy-ships-area button {\n    width: 150px;\n    height: 1.5rem;\n    border: none;\n    border-bottom: solid 1px black;\n    background-color: orangered;\n}\n\n.enemy-ships-area img {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.enemy-ship-container {\n    display: flex;\n    flex: row;\n    align-items: center;\n}\n\n.your-ships-heading {\n    padding: 0;\n    margin: 0;\n    color: white;\n}\n\n.legend-container {\n    display: flex;\n    flex-grow: 1;\n    align-items: end;\n}\n\n.legend-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1.5rem 1fr;\n    grid-template-rows: 1rem 1rem;\n    font-size: .7rem;\n}\n\n.legend-item img {\n    height: 1rem;\n    width: 1rem;\n}\n\n.legend-icon {\n    justify-self: end;\n    margin-right: 5px;\n}\n\n/* Bouncy Arrow Styling */\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    color: black;\n    font-size: 3rem;\n}\n\n.hide-arrow {\n    color: #f3f3f3;\n    pointer-events: none;\n    user-select: none;\n}\n\n.arrow {\n    text-align: center;\n    /* margin: 8% 0; */\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n.bounce {\n    animation: bounce 2s infinite;\n}\n\n@keyframes bounce {\n\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n        transform: translateY(0);\n    }\n\n    40% {\n        transform: translateY(-25px);\n    }\n\n    60% {\n        transform: translateY(-15px);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/Battleship.js":
/*!***************************!*\
  !*** ./src/Battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Battleship)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View */ "./src/View.js");





function Battleship(playerName, isComputer, gridX, gridY) {
    const playerOne = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])(playerName);
    const playerTwo = isComputer ? (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])('Computer') : (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])('Player Two');
    let currentPlayer = playerOne;

    function setupGame() {
        // playerOne.setupBottomBoardSpreadOut();
        // playerTwo.setupBottomBoard();
        playerTwo.setupBottomBoardRandom();
        playerTwo.renderPlayerBoards();
    }

    function resetGame() {
        playerOne.resetBoard();
        playerOne.resetShips();

        playerTwo.resetBoard();
        playerTwo.resetShips();

        setupGame();

        printBoards();
    }

    const status = () => ({
        playerOne: playerOne.name,
        playerTwo: playerTwo.name,
        currentPlayer: currentPlayer.name,
    });

    const printBoards = () => {
        playerOne.renderPlayerBoards();
        playerTwo.renderPlayerBoards();
    };

    function processAttackResult(_result, _move, thePlayer) {
        try {
            if (_result.status === 'Hit') {
                // currentPlayer.board.top.getBoard()[_move[0]][_move[1]] = 'H';
                thePlayer.board.top.setTile(_move, 'H');
                thePlayer.addHit(_move);
            }
            else if (_result.status === 'Missed') {
                thePlayer.board.top.setTile(_move, 'x');
                thePlayer.addMiss(_move);
            }
            else if (_result.status === 'Error') {
                console.log(`Attack error: ${_result}`);
            }
        }
        catch {
            console.log(`Catch: result ${_result}, move: ${_move}`);
        }
    }

    const playTurn = (move, cpuMove) => {
        const resultPlayer = playerTwo.board.bottom.receiveAttack(move);
        processAttackResult(resultPlayer, move, playerOne);
        currentPlayer = playerTwo;

        const computersMove = cpuMove;
        const resultComputer = playerOne.board.bottom.receiveAttack(computersMove);
        processAttackResult(resultComputer, computersMove, playerTwo);
        currentPlayer = playerOne;
    };

    const playComputerMove = () => playerTwo.playNextMove();

    const gameStats = () => ({
        playerOne: playerOne.stats(),
        playerTwo: playerTwo.stats(),
    });

    const victoryStatus = () => {
        // player wins when AI has lost all ships
        if (playerTwo.board.bottom.haveAllShipsSunk()) {
            return 1;
        }
        // player loses when they have lost all ships
        if (playerOne.board.bottom.haveAllShipsSunk()) {
            return -1;
        }
        // otherwise game is still in progress
        return 0;
    };

    const instance = {
        status,
        currentPlayer,
        setupGame,
        resetGame,
        printBoards,
        playTurn,
        playComputerMove,
        gameStats,
        playerOne,
        playerTwo,
        victoryStatus,
    };

    return instance;
}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
function GameBoard() {
    // keep track of missed attacks
    const misses = new Set();
    const hits = new Set();
    const shipsSunk = [];

    // ship length used to perform ship placement
    const boardSize = 10;

    function createBoard() {
        const _board = [];
        for (let i = 0; i < boardSize; i++) {
            // note that board[i] refers to Y coordinates, i.e. rows
            _board.push(Array(boardSize).fill('-'));
        }

        return _board;
    }

    const board = createBoard();

    function renderBoard() {
        let rendered = '';
        const hitSymbol = '!';

        for (let i = 0; i < boardSize; i++) {
            rendered += '\n';

            for (let j = 0; j < boardSize; j++) {
                const grid = board[i][j];

                // check if a ship present at current coords
                if (grid.getName) {
                    const shipName = grid.getSymbol();
                    // if ship hit at location, then modify ship symbol with '!'
                    const shipSymbol = hits.has(JSON.stringify([i, j]))
                        ? shipName + hitSymbol
                        : shipName;

                    rendered = `${rendered} ${String(shipSymbol).padStart(3, ' ')}`;
                    // if a shot miss has been registered at current coords
                }
                else {
                    rendered = `${rendered} ${String(grid).padStart(3, ' ')}`;
                }
            }
        }
        return rendered;
        // console.log(rendered);
    }

    function getBoard() {
        return board;
    }

    function getTile(posY, posX) {
        return board[posY][posX];
    }

    function setTile(gridCoord, value) {
        board[gridCoord[0]][gridCoord[1]] = value;
    }

    function getMisses() {
        return misses;
    }

    function placeShip(ship, coordStart, orientation) {
        // currently only works for rows / horizontal traversal
        function* boardTileGenerator() {
            if (orientation === 'h') {
                const rowIdx = coordStart[0];
                const colStart = coordStart[1];
                const colEnd = colStart + ship.length;

                // fix row, traverse columns
                for (let i = colStart; i < colEnd; i++) {
                    yield {
                        value: board[rowIdx][i],
                        rowIdx,
                        i,
                    };
                }
            }
            else if (orientation === 'v') {
                const rowStart = coordStart[0];
                const rowEnd = coordStart[0] + ship.length;
                const colIdx = coordStart[1];

                // fix column, traverse rows
                for (let i = rowStart; i < rowEnd; i++) {
                    yield {
                        value: board[i][colIdx],
                        colIdx,
                        i,
                    };
                }
            }
        }

        const checkPlacementForExistingShips = () => {
            const gen = boardTileGenerator();

            for (const tile of gen) {
                if (tile.value !== '-') {
                    throw new Error('Tile is not empty!');
                }
            }
        };

        const performShipPlacement = () => {
            const gen = boardTileGenerator();

            if (orientation === 'h') {
                for (const tile of gen) {
                    board[tile.rowIdx][tile.i] = ship;
                }
            }
            else if (orientation === 'v') {
                const _gen = boardTileGenerator();

                for (const tile of _gen) {
                    board[tile.i][tile.colIdx] = ship;
                }
            }
        };

        checkPlacementForExistingShips();
        performShipPlacement();
    }

    function receiveAttack(position) {
        const targetedTile = board[position[0]][position[1]];

        // check position for ship object
        if (targetedTile.getName) {
            // check tile hasn't already been hit and ship still afloat
            if (!hits.has(JSON.stringify(position)) && !targetedTile.isSunk()) {
                const shipAtTile = targetedTile;

                shipAtTile.hit();
                // register that ship has been hit +1
                hits.add(JSON.stringify(position));
                // record the position where the ship was hit
                shipAtTile.positionsHit.add(JSON.stringify([position[0], position[1]]));

                if (shipAtTile.isSunk()) {
                    shipsSunk.push(shipAtTile.getName());
                }

                return {
                    status: 'Hit',
                    coords: position,
                };
            }
        }
        // handle misses
        else if (typeof targetedTile === 'string') {
            misses.add(JSON.stringify(position));
            // console.log(missed);

            return {
                status: 'Missed',
                coords: position,
            };
        }
        else {
            return {
                status: 'Error',
                coords: position,
            };
        }
    }

    function getShipsSunk() {
        return shipsSunk;
    }

    function haveAllShipsSunk() {
        return new Set(shipsSunk).size === 5;
    }

    return {
        getBoard,
        getTile,
        setTile,
        getMisses,
        renderBoard,
        placeShip,
        receiveAttack,
        getShipsSunk,
        haveAllShipsSunk,
    };
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");



function Player(name) {
    // BOTTOM grid: players' own ships
    // TOP grid: players' targetting grid for recording attacks on the enemy

    const ships = {
        carrier: (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier'),
        battleship: (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship'),
        cruiser: (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser'),
        submarine: (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine'),
        destroyer: (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer'),
    };

    const hits = new Set();
    const misses = new Set();
    const gridRoulette = [];

    const board = {
        top: (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        bottom: (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    };

    const allShipsPlaced = () => Object.values(ships).every((ship) => ship.placed === true);

    const resetBoard = () => {
        board.top = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
        board.bottom = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };

    const resetShips = () => {
        ships.carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier');
        ships.battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship');
        ships.cruiser = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser');
        ships.submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine');
        ships.destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer');
    };

    const placeShip = (shipName, basisPosition, orientation) => {
        board.bottom.placeShip(ships[shipName], basisPosition, orientation);
        ships[shipName].placed = true;
    };

    const setupBottomBoardSpreadOut = () => {
        // full fleet to be placed
        placeShip('carrier', [2, 4], 'h');
        placeShip('battleship', [8, 6], 'h');
        placeShip('cruiser', [2, 2], 'v');
        placeShip('submarine', [5, 4], 'v');
        placeShip('destroyer', [8, 1], 'v');
    };

    const setupBottomBoard = () => {
        board.bottom.placeShip(ships.carrier, [0, 0], 'v');
        board.bottom.placeShip(ships.battleship, [0, 1], 'v');
        board.bottom.placeShip(ships.cruiser, [0, 2], 'v');
        board.bottom.placeShip(ships.submarine, [0, 3], 'v');
        board.bottom.placeShip(ships.destroyer, [0, 4], 'v');
    };

    const randCoord = (max) => {
        const randY = Math.floor(Math.random() * max);
        const randX = Math.floor(Math.random() * max);

        const attackCoords = [randY, randX];
        return attackCoords;
    };

    const setupBottomBoardRandom = () => {
        const orientationOptions = ['h', 'v'];

        Object.values(ships).forEach((ship) => {
            let tries = 0;

            while (tries < 100) {
                const randCoords = randCoord(10);
                const orientation =
                    orientationOptions[Math.floor(Math.random() * orientationOptions.length)];
                try {
                    console.log(randCoords);
                    console.log(`Orientation: ${orientation}`);
                    board.bottom.placeShip(ship, randCoords, orientation);
                    ships[ship.getName()].placed = true;
                    break;
                }
                catch (error) {
                    console.log(error);
                }
                finally {
                    tries += 1;
                }
            }
        });

        if (allShipsPlaced() !== true) {
            throw new Error('Ship randomisation failed!');
        }
    };

    // render both top and bottom boards
    const renderPlayerBoards = () => {
        const topBoardTitle = 'TARGETTING'.padStart(26, ' ');
        const bottomBoardTitle = `${name.toUpperCase()} SHIPS`.padStart(28, ' ');
        const combinedRender = `${topBoardTitle}${board.top.renderBoard()}\n${bottomBoardTitle}${board.bottom.renderBoard()}`;
        console.log(combinedRender);
    };

    function* playNextMovePreset() {
        yield [0, 4];
        yield [0, 5];
    }

    const playNextMove = () => {
        function isMoveLegal(_move) {
            const y = _move[0];
            const x = _move[1];
            if (x >= 0 && x < 10 && y >= 0 && y < 10) {
                return true;
            }
            return false;
        }
        // find the current hits
        const parseHits = Array.from(hits).map((hit) => JSON.parse(hit));
        // console.log(parseHits);

        // make an attack adjacent to a current hit
        while (parseHits.length > 0) {
            const move = parseHits.shift(0);
            const y = move[0];
            const x = move[1];

            const validMoves = [];

            // all moves adjacent to (y, x)
            const enumerateMoves = [
                [y - 1, x], // North of
                [y, x + 1], // East of
                [y + 1, x], // South of
                [y, x - 1], // West of
            ];

            // find adjacent moves that haven't already been played
            enumerateMoves.forEach((coord) => {
                if (
                    isMoveLegal(coord) &&
                    !hits.has(JSON.stringify(coord)) &&
                    !misses.has(JSON.stringify(coord))
                ) {
                    validMoves.push(coord);
                }
            });

            // return the move if it exists
            if (validMoves.length > 0) {
                return validMoves.shift(0);
            }
        }

        // if no adjacent-hit move exist, attack a random space that hasn't previously been attacked
        let smartMove = false;
        let randomMove;

        // continue generating random coordinates until an unplayed move is found
        while (!smartMove) {
            randomMove = randCoord(10);
            if (
                isMoveLegal(randomMove) &&
                !hits.has(JSON.stringify(randomMove)) &&
                !misses.has(JSON.stringify(randomMove))
            ) {
                smartMove = true;
            }
            else {
                gridRoulette.push(randomMove);
                // console.log(`Move ${randomMove} seen before!`);
            }
        }
        if (smartMove) return randomMove;
    };

    const addHit = (coord) => {
        hits.add(JSON.stringify(coord));
    };

    const addMiss = (coord) => {
        misses.add(JSON.stringify(coord));
    };

    const getMisses = () => misses;
    const getHits = () => hits;
    const getRoulette = () => gridRoulette;

    const getAllPreviousAttacks = () => new Set([...hits, ...misses]);

    const stats = () => {
        const totalMisses = getMisses().size;
        const totalHits = getHits().size;
        const totalAttacks = totalMisses + totalHits;
        const totalRandomAttempts = getRoulette().length;

        return {
            totalMisses,
            totalHits,
            totalAttacks,
            totalRandomAttempts,
        };
    };

    const instance = {
        name,
        board,
        ships,
        placeShip,
        setupBottomBoard,
        setupBottomBoardSpreadOut,
        setupBottomBoardRandom,
        renderPlayerBoards,
        playNextMove,
        playNextMovePreset,
        addHit,
        addMiss,
        getAllPreviousAttacks,
        getMisses,
        getHits,
        getRoulette,
        stats,
        resetBoard,
        resetShips,
        allShipsPlaced,
    };

    return instance;
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
const SHIP_LENGTH = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};

function Ship(shipName) {
    const name = shipName;
    // represents ship symbol as represented in board array
    const symbol = shipName.charAt(0).toUpperCase();
    // tracks if ship has been placed on the board
    let _placed = false;
    // total number of times ship has been hit
    let timesHit = 0;
    // where the ship has been hit on the grid
    const positionsHit = new Set();

    // amounts of hits a ship can take before it sinks (which equals its length)
    const shipHitPoints = SHIP_LENGTH;

    if (!(shipName in shipHitPoints)) {
        throw new Error();
    }

    function hit() {
        timesHit += 1;
        return timesHit;
    }

    function getTimesHit() {
        return timesHit;
    }

    function getName() {
        return name;
    }

    function getSymbol() {
        return symbol;
    }

    function isSunk() {
        return shipHitPoints[name] - timesHit === 0;
    }

    return {
        hit,
        positionsHit,
        getTimesHit,
        getName,
        getSymbol,
        isSunk,
        length: SHIP_LENGTH[name],
        set placed(placed) {
            _placed = placed;
        },
        get placed() {
            return _placed;
        },
    };
}


/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _images_torpedo_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/torpedo-icon.png */ "./src/images/torpedo-icon.png");
/* harmony import */ var _images_crosshair_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/crosshair-icon.png */ "./src/images/crosshair-icon.png");



const SHIP_STATUS_LEGEND = {
    hit: {
        imgSrc: _images_crosshair_icon_png__WEBPACK_IMPORTED_MODULE_1__,
        legendText: 'Ship has been hit',
    },
    sunk: {
        imgSrc: _images_torpedo_icon_png__WEBPACK_IMPORTED_MODULE_0__,
        legendText: 'Ship has been sunk',
    },
};

/* View.js is our DOM module */
function View() {
    // initial phase of the game is ship placement
    let gamePhase = 'ship_placement';
    let gameReadyToStart = false;
    let firstTurnPlayed = false;
    let shipToPlace = null;
    let shipOrientation = 'h';
    const MISSION_LOG_SIZE = 6;
    const logQueue = [];

    function createGrid(gridY, gridX) {
        const battleshipGridTop = document.querySelector('.battleship-grid.top');
        const battleshipGridBottom = document.querySelector('.battleship-grid.bottom');

        for (let i = 0; i < gridY * gridX; i++) {
            const gridDiv = document.createElement('div');
            battleshipGridTop.appendChild(gridDiv);
        }

        for (let i = 0; i < gridY * gridX; i++) {
            const gridDiv = document.createElement('div');
            battleshipGridBottom.appendChild(gridDiv);
        }
    }

    function renderShips(boardArr, whichDOMGrid, reset = false) {
        const divGrids = Array.from(
            document.querySelectorAll(`.battleship-grid.${whichDOMGrid} div`),
        );

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let boardGrid = null;
                if (boardArr) {
                    boardGrid = boardArr[i][j];
                }

                // get the div that corresponds to the position in the array
                const div = divGrids[i * 10 + j];
                // assign coords to data attribute (used later for attacks)
                div.dataset.gridCoord = JSON.stringify([i, j]);

                // mark it as a ship div
                if (boardArr && boardGrid.getName) {
                    div.classList.add('ship');
                }

                if (reset) {
                    div.classList = '';
                }
            }
        }
    }

    function sendErrorToMissionLog(errorStr) {
        const playerMissionLogList = document.querySelector('.player-mission-log--list');
        const newEntry = document.createElement('li');
        newEntry.textContent = errorStr;
        playerMissionLogList.appendChild(newEntry);
    }

    function titleCase(string) {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    function updateEnemyShipsList(shipsObj, update) {
        const myShips = document.querySelector('.enemy-ships-list');
        if (update) {
            myShips.innerHTML = '';
        }

        const ships = Object.values(shipsObj);
        // iterate through player two ship objects
        ships.forEach((ship) => {
            const shipDiv = document.createElement('div');
            const shipBtn = document.createElement('button');

            shipDiv.className = 'enemy-ship-container';
            shipBtn.textContent = titleCase(ship.getName());

            const torpedoImg = new Image();
            const crosshairImg = new Image();
            torpedoImg.src = _images_torpedo_icon_png__WEBPACK_IMPORTED_MODULE_0__;
            crosshairImg.src = _images_crosshair_icon_png__WEBPACK_IMPORTED_MODULE_1__;

            torpedoImg.classList.add('hide');
            crosshairImg.classList.add('hide');
            // display crosshair icon if enemy ship has been hit
            if (ship.getTimesHit() > 0) {
                crosshairImg.classList.remove('hide');
            }

            // display torpedo icon if enemy ship has been sunk
            if (ship.isSunk() === true) {
                torpedoImg.classList.remove('hide');
            }

            shipDiv.append(shipBtn);
            shipDiv.appendChild(crosshairImg);
            shipDiv.appendChild(torpedoImg);
            myShips.appendChild(shipDiv);
        });
    }

    function addGridListeners(callback, topBoard, bottomBoard) {
        const topGridDivElements = Array.from(
            document.querySelectorAll(`.battleship-grid.top div`),
        );
        const bottomGridDivElements = Array.from(
            document.querySelectorAll(`.battleship-grid.bottom div`),
        );

        function renderTargettingGrid() {
            const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const boardGrid = topBoard[i][j];
                    const grid = divGrids[i * 10 + j];

                    if (boardGrid === 'H') {
                        grid.classList.add('hit');
                    }
                    else if (boardGrid === 'x') {
                        grid.classList.add('miss');
                    }
                }
            }
        }

        function updateBottomGrid() {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const boardGrid = bottomBoard[i][j];

                    // get the div that corresponds to the position in the array
                    const div = bottomGridDivElements[i * 10 + j];
                    // assign coords to data attribute (used later for attacks)
                    // div.dataset.gridCoord = JSON.stringify([i, j]);

                    if (boardGrid.getName && boardGrid.positionsHit.has(JSON.stringify([i, j]))) {
                        div.classList.add('hit');
                    }
                }
            }
        }

        const addGameLoopClickListener = (_grid) => {
            // the main "game loop"
            _grid.addEventListener('click', () => {
                if (!gameReadyToStart) {
                    sendErrorToMissionLog('All ships must be placed before game can start.');
                    return;
                }

                if (_grid.classList.contains('hit') || _grid.classList.contains('miss')) {
                    return;
                }

                callback.playTurn(JSON.parse(_grid.dataset.gridCoord), callback.playComputerMove());
                callback.printBoards();
                // update the targetting (top) grid after attack is played
                renderTargettingGrid();
                // update player's view (bottom grid) - AI moves straight after
                updateBottomGrid();
                updateEnemyShipsList(callback.playerTwo.ships, true);

                const playTurnCallToAction = document.getElementById('play-turn-cta');
                if (!firstTurnPlayed) {
                    firstTurnPlayed = true;
                    playTurnCallToAction.classList.add('hide-arrow');
                }
            });
        };

        const addVictoryAlertListener = (_grid) => {
            // checks if player has won or lost
            _grid.addEventListener('click', () => {
                switch (callback.victoryStatus()) {
                    case 1: {
                        alert('You have won!');
                        break;
                    }
                    case -1: {
                        alert('You have lost!');
                        break;
                    }
                    case 0: {
                        break;
                    }
                    default: {
                        break;
                    }
                }
            });
        };

        topGridDivElements.forEach((grid) => {
            addGameLoopClickListener(grid);
            addVictoryAlertListener(grid);
        });
    }

    function roundToNearest10(number) {
        if (number % 10 === 0) {
            return number + 10;
        }

        return Math.ceil(number / 10) * 10;
    }

    function addEventListeners(app) {
        const SHIP_LENGTH = {
            carrier: 5,
            battleship: 4,
            cruiser: 3,
            submarine: 3,
            destroyer: 2,
        };
        const startGameBtn = document.getElementById('start-game-btn');
        const resetGameBtn = document.getElementById('reset-game-btn');
        const placeShipBtn = document.getElementById('place-ships-btn');

        const deregisterGridListeners = () => {
            const divGrids = Array.from(document.querySelectorAll(`.battleship-grid.top div`));
            divGrids.forEach((grid) => {
                // get rid of all existing listeners by replacing div with own deep clone
                grid.replaceWith(grid.cloneNode(true));
            });
        };

        const startGame = (reset) => {
            app.printBoards();

            // if(!gameReadyToStart)

            if (reset) {
                // resets board and ships for both players
                app.resetGame();
                // re-initialises DOM view of top and bottom board
                renderShips(null, 'top', true);
                renderShips(null, 'bottom', true);
                // remove event listeners from grid
                deregisterGridListeners();
                // re-add the event listeners for player
                addGridListeners(
                    app,
                    app.playerOne.board.top.getBoard(),
                    app.playerOne.board.bottom.getBoard(),
                );
                // place AI's ships
                app.setupGame();
            }
        };

        const resetShipPlacement = () => {
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');
            bottomDivs.forEach((div) => {
                if (shipToPlace && div.classList.contains(shipToPlace.toLowerCase())) {
                    div.classList.remove(shipToPlace.toLowerCase());
                }
            });
        };

        const placeShipOnClick = (evt) => {
            if (shipToPlace === null) {
                sendErrorToMissionLog('Cannot place ship when no ship has been selected!');
                return;
            }

            const shipName = shipToPlace.toLowerCase();
            const coords = JSON.parse(evt.target.dataset.gridCoord);
            // console.log(`name: ${shipName}, coord: ${coords}, orientation: ${shipOrientation}`);
            // console.log(app.playerOne.ships);

            // do not place the ship if already placed
            if (app.playerOne.ships[shipName].placed === true) {
                console.log(`${shipName} already placed!`);
                return;
            }
            // if current tile is occupied, display error in view

            try {
                // place selected ship on board
                app.playerOne.placeShip(shipName, coords, shipOrientation);
                // update bottom grid to show newly placed ship
                renderShips(app.playerOne.board.bottom.getBoard(), 'bottom');

                // game is ready to start after all ships placed
                if (app.playerOne.allShipsPlaced()) {
                    gameReadyToStart = true;
                    // transition phase to game_time once all ships placed
                    gamePhase = 'game_time';
                    const placeShipCallToAction = document.getElementById('place-ships-cta');
                    const playTurnCallToAction = document.getElementById('play-turn-cta');
                    placeShipCallToAction.classList.add('hide');
                    playTurnCallToAction.classList.remove('hide-arrow');
                }
            }
            catch (err) {
                const playerMissionLogList = document.querySelector('.player-mission-log--list');
                const newEntry = document.createElement('li');
                newEntry.textContent = `Cannot place ${shipName}: tile is occupied!`;

                if (logQueue.length >= MISSION_LOG_SIZE) {
                    // remove first element
                    logQueue.shift();
                    // add new entry to end of queue
                    logQueue.push(newEntry);
                    // replace all mission log children with queued nodes
                    playerMissionLogList.replaceChildren(...logQueue);
                }
                else {
                    logQueue.push(newEntry);
                    playerMissionLogList.appendChild(newEntry);
                }
            }
        };

        const showShipOutlineOnHover = (evt) => {
            // do not generate outline if all ships have been placed
            if (app.playerOne.allShipsPlaced()) {
                return;
            }

            let shipClass;

            if (shipToPlace) {
                shipClass = shipToPlace.toLowerCase();
            }

            const cursorPosition = JSON.parse(evt.target.dataset.gridCoord);
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');

            const i = cursorPosition[0];
            const j = cursorPosition[1];
            // calculates the flat array index given the associated [y, x] array coordinates
            const basisGridIndex = i * 10 + j;

            resetShipPlacement();

            // length depends on type of ship
            const shipLength = SHIP_LENGTH[shipClass];

            // generate horizontal ship outline
            if (shipOrientation === 'h') {
                for (let k = basisGridIndex; k < basisGridIndex + shipLength; k++) {
                    // only show hover if whole ship can fit horizontally
                    if (k / roundToNearest10(basisGridIndex) < 1) {
                        const div = bottomDivs[k];
                        div.classList.add(shipClass);
                    }
                }
            }
            // generate vertical ship outline
            else if (shipOrientation === 'v') {
                for (let k = basisGridIndex; k < basisGridIndex + shipLength * 10; k += 10) {
                    // check if ship body is within bounds of grid
                    if (k < 100) {
                        const div = bottomDivs[k];
                        div.classList.add(shipClass);
                    }
                }
            }
        };

        // *** requires refactoring ***
        const setupShipPlacement = () => {
            const myShips = document.querySelector('.player-ships-area');
            const ships = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
            ships.forEach((ship) => {
                const shipBtn = document.createElement('button');
                shipBtn.textContent = ship;
                myShips.appendChild(shipBtn);
            });

            const shipButtons = document.querySelectorAll('.player-ships-area button');

            // Clicking on ship button sets the currently selected ship to that ship
            [...shipButtons].forEach((btn) => {
                if (btn.textContent === 'Change Orientation') {
                    btn.addEventListener('click', () => {
                        if (shipToPlace) {
                            resetShipPlacement();
                        }
                        if (shipOrientation === 'h') {
                            shipOrientation = 'v';
                            console.log(`Ship orientation: ${shipOrientation}`);
                        }
                        else {
                            shipOrientation = 'h';
                            console.log(`Ship orientation: ${shipOrientation}`);
                        }
                    });
                    return;
                }

                btn.addEventListener('click', () => {
                    if (shipToPlace) {
                        resetShipPlacement();
                    }

                    shipToPlace = btn.textContent;
                    console.log(`Currently selected ship: ${shipToPlace}`);
                });
            });

            // Each grid cell is assigned a listener that supports ship placement on hover
            const bottomDivs = document.querySelectorAll('.battleship-grid.bottom div');

            // for each bottom grid tile, add listeners for ship placement
            [...bottomDivs].forEach((div) => {
                div.addEventListener('mouseover', showShipOutlineOnHover);
                div.addEventListener('click', placeShipOnClick);
            });
        };

        // console.log(startGameBtn);

        startGameBtn.addEventListener('click', () => {
            startGame(false);
        });
        resetGameBtn.addEventListener('click', () => {
            startGame(true);
        });

        setupShipPlacement();
        updateEnemyShipsList(app.playerTwo.ships);
    }

    function addShipStatusIconLegend() {
        const legendContainer = document.querySelector('.legend-container');
        const legendItem = document.createElement('div');

        Object.values(SHIP_STATUS_LEGEND).forEach((status) => {
            const legendText = document.createElement('div');

            legendText.textContent = status.legendText;
            legendItem.classList.add('legend-item');

            const img = new Image();
            img.src = status.imgSrc;
            img.classList.add('legend-icon');

            legendItem.append(img, legendText);
        });
        legendContainer.appendChild(legendItem);
    }

    return {
        createGrid,
        renderShips,
        addGridListeners,
        addEventListeners,
        addShipStatusIconLegend,
    };
}


/***/ }),

/***/ "./src/images/battleship.svg":
/*!***********************************!*\
  !*** ./src/images/battleship.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28c6a2faa48f581b58fc.svg";

/***/ }),

/***/ "./src/images/crosshair-icon.png":
/*!***************************************!*\
  !*** ./src/images/crosshair-icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c20eabe243a3f6d5e235.png";

/***/ }),

/***/ "./src/images/torpedo-icon.png":
/*!*************************************!*\
  !*** ./src/images/torpedo-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00264dfb61ecfcbb57ac.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/View.js");
/* harmony import */ var _Battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Battleship */ "./src/Battleship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/battleship.svg */ "./src/images/battleship.svg");






const body = document.querySelector('body');
const mySplashImg = new Image();
mySplashImg.src = _images_battleship_svg__WEBPACK_IMPORTED_MODULE_3__;
mySplashImg.className = 'splash-battleship-img';
body.appendChild(mySplashImg);

console.log('Loading app.js');

const app = (0,_Battleship__WEBPACK_IMPORTED_MODULE_1__["default"])('Player', true, 10, 10);
const view = (0,_View__WEBPACK_IMPORTED_MODULE_0__["default"])();

app.setupGame();
const playerTopGrid = app.playerOne.board.top.getBoard();
const playerBottomGrid = app.playerOne.board.bottom.getBoard();

view.createGrid(10, 10);
view.renderShips(playerBottomGrid, 'bottom');
view.renderShips(playerTopGrid, 'top');
view.addEventListeners(app);
view.addGridListeners(
    app,
    app.playerOne.board.top.getBoard(),
    app.playerOne.board.bottom.getBoard(),
);
view.addShipStatusIconLegend();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNZOztBQUVqQjtBQUMyQjs7QUFFaEQ7QUFDQTtBQUNBLGtCQUFrQixtREFBUztBQUMzQjtBQUNBOztBQUVBOztBQUVBLFlBQVksdURBQVU7QUFDdEIsYUFBYSxpREFBSTs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9CYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxuICAgIC8qIG92ZXJmbG93LXk6IGhpZGRlbjsgKi9cXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZlxcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5nYW1lLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5nYW1lLWJ1dHRvbnMge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZ2FtZS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg3MiwgNSUsIDc5JSk7XFxufVxcblxcbi5zcGxhc2gtYmF0dGxlc2hpcC1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIHotaW5kZXg6IC05OTk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQge1xcbiAgICBtYXJnaW46IDJ2bWluO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNC42dm1pbik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0LjZ2bWluKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMuNnZtaW4pO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMy42dm1pbik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDEwMCUsIDUwJSk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSwgLjIpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uY3J1aXNlcixcXG4uc3VibWFyaW5lLFxcbi5kZXN0cm95ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNSwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA0JSwgMTYlKTtcXG59XFxuXFxuLm1haW4tZ2FtZXBsYXktYXJlYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiYSBiIGNcXFwiXFxuICAgICAgICBcXFwiZCBlIGZcXFwiXFxuICAgICAgICBcXFwiZyBoIGlcXFwiO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tY29udHJvbCxcXG4uZW5lbXktbWlzc2lvbi1jb250cm9sIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWxvZyxcXG4uZW5lbXktbWlzc2lvbi1sb2cge1xcbiAgICBtYXJnaW46IDJ2bWluO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMy42dmggKiAxMCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QsXFxuLmVuZW15LW1pc3Npb24tbG9nLS1saXN0IHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tbG9nLS1saXN0IGxpLFxcbi5lbmVteS1taXNzaW9uLWxvZy0tbGlzdCBsaSB7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMtYXJlYSxcXG4uZW5lbXktc2hpcHMtYXJlYSB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgaGVpZ2h0OiBjYWxjKDMuNnZoICogMTApO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYXllci1zaGlwcy1hcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmVuZW15LXNoaXBzLWFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNjglLCA1MCUpO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSBidXR0b24ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLmVuZW15LXNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueW91ci1zaGlwcy1oZWFkaW5nIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sZWdlbmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4ubGVnZW5kLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNXJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbn1cXG5cXG4ubGVnZW5kLWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmxlZ2VuZC1pY29uIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4vKiBCb3VuY3kgQXJyb3cgU3R5bGluZyAqL1xcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0ODtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oaWRlLWFycm93IHtcXG4gICAgY29sb3I6ICNmM2YzZjM7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBtYXJnaW46IDglIDA7ICovXFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmJvdW5jZSB7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFxuICAgIDAlLFxcbiAgICAyMCUsXFxuICAgIDUwJSxcXG4gICAgODAlLFxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICA0MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcXG4gICAgfVxcblxcbiAgICA2MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiO2lEQUM2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTs7Ozs7SUFLSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7OztlQUdXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJOzs7O2lCQUlhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJOzs7OztRQUtJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxuICAgIC8qIG92ZXJmbG93LXk6IGhpZGRlbjsgKi9cXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZlxcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5nYW1lLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQmxhY2sgT3BzIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5nYW1lLWJ1dHRvbnMge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZ2FtZS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg3MiwgNSUsIDc5JSk7XFxufVxcblxcbi5zcGxhc2gtYmF0dGxlc2hpcC1pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIHotaW5kZXg6IC05OTk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQge1xcbiAgICBtYXJnaW46IDJ2bWluO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNC42dm1pbik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0LjZ2bWluKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMuNnZtaW4pO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMy42dm1pbik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDAsIDEwMCUsIDUwJSk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSwgLjIpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uY3J1aXNlcixcXG4uc3VibWFyaW5lLFxcbi5kZXN0cm95ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNSwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA0JSwgMTYlKTtcXG59XFxuXFxuLm1haW4tZ2FtZXBsYXktYXJlYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiYSBiIGNcXFwiXFxuICAgICAgICBcXFwiZCBlIGZcXFwiXFxuICAgICAgICBcXFwiZyBoIGlcXFwiO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tY29udHJvbCxcXG4uZW5lbXktbWlzc2lvbi1jb250cm9sIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWxvZyxcXG4uZW5lbXktbWlzc2lvbi1sb2cge1xcbiAgICBtYXJnaW46IDJ2bWluO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGNhbGMoMy42dmggKiAxMCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QsXFxuLmVuZW15LW1pc3Npb24tbG9nLS1saXN0IHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tbG9nLS1saXN0IGxpLFxcbi5lbmVteS1taXNzaW9uLWxvZy0tbGlzdCBsaSB7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMtYXJlYSxcXG4uZW5lbXktc2hpcHMtYXJlYSB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgaGVpZ2h0OiBjYWxjKDMuNnZoICogMTApO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYXllci1zaGlwcy1hcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmVuZW15LXNoaXBzLWFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNjglLCA1MCUpO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSBidXR0b24ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLmVuZW15LXNoaXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueW91ci1zaGlwcy1oZWFkaW5nIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sZWdlbmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4ubGVnZW5kLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNXJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbn1cXG5cXG4ubGVnZW5kLWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmxlZ2VuZC1pY29uIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4vKiBCb3VuY3kgQXJyb3cgU3R5bGluZyAqL1xcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMCxcXG4gICAgICAgICd3Z2h0JyA0MDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0ODtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oaWRlLWFycm93IHtcXG4gICAgY29sb3I6ICNmM2YzZjM7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBtYXJnaW46IDglIDA7ICovXFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmJvdW5jZSB7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuXFxuICAgIDAlLFxcbiAgICAyMCUsXFxuICAgIDUwJSxcXG4gICAgODAlLFxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICA0MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcXG4gICAgfVxcblxcbiAgICA2MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhdHRsZXNoaXAocGxheWVyTmFtZSwgaXNDb21wdXRlciwgZ3JpZFgsIGdyaWRZKSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKHBsYXllck5hbWUpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IGlzQ29tcHV0ZXIgPyBQbGF5ZXIoJ0NvbXB1dGVyJykgOiBQbGF5ZXIoJ1BsYXllciBUd28nKTtcbiAgICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcblxuICAgIGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgICAgICAgLy8gcGxheWVyT25lLnNldHVwQm90dG9tQm9hcmRTcHJlYWRPdXQoKTtcbiAgICAgICAgLy8gcGxheWVyVHdvLnNldHVwQm90dG9tQm9hcmQoKTtcbiAgICAgICAgcGxheWVyVHdvLnNldHVwQm90dG9tQm9hcmRSYW5kb20oKTtcbiAgICAgICAgcGxheWVyVHdvLnJlbmRlclBsYXllckJvYXJkcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgcGxheWVyT25lLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyT25lLnJlc2V0U2hpcHMoKTtcblxuICAgICAgICBwbGF5ZXJUd28ucmVzZXRCb2FyZCgpO1xuICAgICAgICBwbGF5ZXJUd28ucmVzZXRTaGlwcygpO1xuXG4gICAgICAgIHNldHVwR2FtZSgpO1xuXG4gICAgICAgIHByaW50Qm9hcmRzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzID0gKCkgPT4gKHtcbiAgICAgICAgcGxheWVyT25lOiBwbGF5ZXJPbmUubmFtZSxcbiAgICAgICAgcGxheWVyVHdvOiBwbGF5ZXJUd28ubmFtZSxcbiAgICAgICAgY3VycmVudFBsYXllcjogY3VycmVudFBsYXllci5uYW1lLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJpbnRCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllck9uZS5yZW5kZXJQbGF5ZXJCb2FyZHMoKTtcbiAgICAgICAgcGxheWVyVHdvLnJlbmRlclBsYXllckJvYXJkcygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQXR0YWNrUmVzdWx0KF9yZXN1bHQsIF9tb3ZlLCB0aGVQbGF5ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfcmVzdWx0LnN0YXR1cyA9PT0gJ0hpdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50UGxheWVyLmJvYXJkLnRvcC5nZXRCb2FyZCgpW19tb3ZlWzBdXVtfbW92ZVsxXV0gPSAnSCc7XG4gICAgICAgICAgICAgICAgdGhlUGxheWVyLmJvYXJkLnRvcC5zZXRUaWxlKF9tb3ZlLCAnSCcpO1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5hZGRIaXQoX21vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3Jlc3VsdC5zdGF0dXMgPT09ICdNaXNzZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhlUGxheWVyLmJvYXJkLnRvcC5zZXRUaWxlKF9tb3ZlLCAneCcpO1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5hZGRNaXNzKF9tb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9yZXN1bHQuc3RhdHVzID09PSAnRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGFjayBlcnJvcjogJHtfcmVzdWx0fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYXRjaDogcmVzdWx0ICR7X3Jlc3VsdH0sIG1vdmU6ICR7X21vdmV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5VHVybiA9IChtb3ZlLCBjcHVNb3ZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdFBsYXllciA9IHBsYXllclR3by5ib2FyZC5ib3R0b20ucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICAgICAgcHJvY2Vzc0F0dGFja1Jlc3VsdChyZXN1bHRQbGF5ZXIsIG1vdmUsIHBsYXllck9uZSk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZXJzTW92ZSA9IGNwdU1vdmU7XG4gICAgICAgIGNvbnN0IHJlc3VsdENvbXB1dGVyID0gcGxheWVyT25lLmJvYXJkLmJvdHRvbS5yZWNlaXZlQXR0YWNrKGNvbXB1dGVyc01vdmUpO1xuICAgICAgICBwcm9jZXNzQXR0YWNrUmVzdWx0KHJlc3VsdENvbXB1dGVyLCBjb21wdXRlcnNNb3ZlLCBwbGF5ZXJUd28pO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5Q29tcHV0ZXJNb3ZlID0gKCkgPT4gcGxheWVyVHdvLnBsYXlOZXh0TW92ZSgpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gKCkgPT4gKHtcbiAgICAgICAgcGxheWVyT25lOiBwbGF5ZXJPbmUuc3RhdHMoKSxcbiAgICAgICAgcGxheWVyVHdvOiBwbGF5ZXJUd28uc3RhdHMoKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpY3RvcnlTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIC8vIHBsYXllciB3aW5zIHdoZW4gQUkgaGFzIGxvc3QgYWxsIHNoaXBzXG4gICAgICAgIGlmIChwbGF5ZXJUd28uYm9hcmQuYm90dG9tLmhhdmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGxheWVyIGxvc2VzIHdoZW4gdGhleSBoYXZlIGxvc3QgYWxsIHNoaXBzXG4gICAgICAgIGlmIChwbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmhhdmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBnYW1lIGlzIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBzZXR1cEdhbWUsXG4gICAgICAgIHJlc2V0R2FtZSxcbiAgICAgICAgcHJpbnRCb2FyZHMsXG4gICAgICAgIHBsYXlUdXJuLFxuICAgICAgICBwbGF5Q29tcHV0ZXJNb3ZlLFxuICAgICAgICBnYW1lU3RhdHMsXG4gICAgICAgIHBsYXllck9uZSxcbiAgICAgICAgcGxheWVyVHdvLFxuICAgICAgICB2aWN0b3J5U3RhdHVzLFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrc1xuICAgIGNvbnN0IG1pc3NlcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBoaXRzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHNoaXBzU3VuayA9IFtdO1xuXG4gICAgLy8gc2hpcCBsZW5ndGggdXNlZCB0byBwZXJmb3JtIHNoaXAgcGxhY2VtZW50XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgX2JvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG5vdGUgdGhhdCBib2FyZFtpXSByZWZlcnMgdG8gWSBjb29yZGluYXRlcywgaS5lLiByb3dzXG4gICAgICAgICAgICBfYm9hcmQucHVzaChBcnJheShib2FyZFNpemUpLmZpbGwoJy0nKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2JvYXJkO1xuICAgIH1cblxuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckJvYXJkKCkge1xuICAgICAgICBsZXQgcmVuZGVyZWQgPSAnJztcbiAgICAgICAgY29uc3QgaGl0U3ltYm9sID0gJyEnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIHJlbmRlcmVkICs9ICdcXG4nO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGJvYXJkW2ldW2pdO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgYSBzaGlwIHByZXNlbnQgYXQgY3VycmVudCBjb29yZHNcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5nZXROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZ3JpZC5nZXRTeW1ib2woKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc2hpcCBoaXQgYXQgbG9jYXRpb24sIHRoZW4gbW9kaWZ5IHNoaXAgc3ltYm9sIHdpdGggJyEnXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTeW1ib2wgPSBoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzaGlwTmFtZSArIGhpdFN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzaGlwTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGAke3JlbmRlcmVkfSAke1N0cmluZyhzaGlwU3ltYm9sKS5wYWRTdGFydCgzLCAnICcpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGEgc2hvdCBtaXNzIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYXQgY3VycmVudCBjb29yZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gYCR7cmVuZGVyZWR9ICR7U3RyaW5nKGdyaWQpLnBhZFN0YXJ0KDMsICcgJyl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZW5kZXJlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUaWxlKHBvc1ksIHBvc1gpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkW3Bvc1ldW3Bvc1hdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRpbGUoZ3JpZENvb3JkLCB2YWx1ZSkge1xuICAgICAgICBib2FyZFtncmlkQ29vcmRbMF1dW2dyaWRDb29yZFsxXV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNaXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBtaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkU3RhcnQsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IHdvcmtzIGZvciByb3dzIC8gaG9yaXpvbnRhbCB0cmF2ZXJzYWxcbiAgICAgICAgZnVuY3Rpb24qIGJvYXJkVGlsZUdlbmVyYXRvcigpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SWR4ID0gY29vcmRTdGFydFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xTdGFydCA9IGNvb3JkU3RhcnRbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29sRW5kID0gY29sU3RhcnQgKyBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIC8vIGZpeCByb3csIHRyYXZlcnNlIGNvbHVtbnNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29sU3RhcnQ7IGkgPCBjb2xFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9hcmRbcm93SWR4XVtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0lkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1N0YXJ0ID0gY29vcmRTdGFydFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dFbmQgPSBjb29yZFN0YXJ0WzBdICsgc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sSWR4ID0gY29vcmRTdGFydFsxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpeCBjb2x1bW4sIHRyYXZlcnNlIHJvd3NcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcm93U3RhcnQ7IGkgPCByb3dFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9hcmRbaV1bY29sSWR4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbElkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tQbGFjZW1lbnRGb3JFeGlzdGluZ1NoaXBzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBnZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS52YWx1ZSAhPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGlsZSBpcyBub3QgZW1wdHkhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBlcmZvcm1TaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIGdlbikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt0aWxlLnJvd0lkeF1bdGlsZS5pXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9nZW4gPSBib2FyZFRpbGVHZW5lcmF0b3IoKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBfZ2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3RpbGUuaV1bdGlsZS5jb2xJZHhdID0gc2hpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hlY2tQbGFjZW1lbnRGb3JFeGlzdGluZ1NoaXBzKCk7XG4gICAgICAgIHBlcmZvcm1TaGlwUGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRpbGUgPSBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dO1xuXG4gICAgICAgIC8vIGNoZWNrIHBvc2l0aW9uIGZvciBzaGlwIG9iamVjdFxuICAgICAgICBpZiAodGFyZ2V0ZWRUaWxlLmdldE5hbWUpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRpbGUgaGFzbid0IGFscmVhZHkgYmVlbiBoaXQgYW5kIHNoaXAgc3RpbGwgYWZsb2F0XG4gICAgICAgICAgICBpZiAoIWhpdHMuaGFzKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSkgJiYgIXRhcmdldGVkVGlsZS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBBdFRpbGUgPSB0YXJnZXRlZFRpbGU7XG5cbiAgICAgICAgICAgICAgICBzaGlwQXRUaWxlLmhpdCgpO1xuICAgICAgICAgICAgICAgIC8vIHJlZ2lzdGVyIHRoYXQgc2hpcCBoYXMgYmVlbiBoaXQgKzFcbiAgICAgICAgICAgICAgICBoaXRzLmFkZChKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIHNoaXAgd2FzIGhpdFxuICAgICAgICAgICAgICAgIHNoaXBBdFRpbGUucG9zaXRpb25zSGl0LmFkZChKU09OLnN0cmluZ2lmeShbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdXSkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBBdFRpbGUuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNTdW5rLnB1c2goc2hpcEF0VGlsZS5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0hpdCcsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbWlzc2VzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0YXJnZXRlZFRpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtaXNzZXMuYWRkKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtaXNzZWQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ01pc3NlZCcsXG4gICAgICAgICAgICAgICAgY29vcmRzOiBwb3NpdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICBjb29yZHM6IHBvc2l0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXZlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChzaGlwc1N1bmspLnNpemUgPT09IDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGdldFRpbGUsXG4gICAgICAgIHNldFRpbGUsXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgcmVuZGVyQm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0U2hpcHNTdW5rLFxuICAgICAgICBoYXZlQWxsU2hpcHNTdW5rLFxuICAgIH07XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gICAgLy8gQk9UVE9NIGdyaWQ6IHBsYXllcnMnIG93biBzaGlwc1xuICAgIC8vIFRPUCBncmlkOiBwbGF5ZXJzJyB0YXJnZXR0aW5nIGdyaWQgZm9yIHJlY29yZGluZyBhdHRhY2tzIG9uIHRoZSBlbmVteVxuXG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6IFNoaXAoJ2NhcnJpZXInKSxcbiAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICBjcnVpc2VyOiBTaGlwKCdjcnVpc2VyJyksXG4gICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXG4gICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgfTtcblxuICAgIGNvbnN0IGhpdHMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWlzc2VzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGdyaWRSb3VsZXR0ZSA9IFtdO1xuXG4gICAgY29uc3QgYm9hcmQgPSB7XG4gICAgICAgIHRvcDogR2FtZUJvYXJkKCksXG4gICAgICAgIGJvdHRvbTogR2FtZUJvYXJkKCksXG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4gT2JqZWN0LnZhbHVlcyhzaGlwcykuZXZlcnkoKHNoaXApID0+IHNoaXAucGxhY2VkID09PSB0cnVlKTtcblxuICAgIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGJvYXJkLnRvcCA9IEdhbWVCb2FyZCgpO1xuICAgICAgICBib2FyZC5ib3R0b20gPSBHYW1lQm9hcmQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgc2hpcHMuY2FycmllciA9IFNoaXAoJ2NhcnJpZXInKTtcbiAgICAgICAgc2hpcHMuYmF0dGxlc2hpcCA9IFNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICAgICAgc2hpcHMuY3J1aXNlciA9IFNoaXAoJ2NydWlzZXInKTtcbiAgICAgICAgc2hpcHMuc3VibWFyaW5lID0gU2hpcCgnc3VibWFyaW5lJyk7XG4gICAgICAgIHNoaXBzLmRlc3Ryb3llciA9IFNoaXAoJ2Rlc3Ryb3llcicpO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcE5hbWUsIGJhc2lzUG9zaXRpb24sIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHNbc2hpcE5hbWVdLCBiYXNpc1Bvc2l0aW9uLCBvcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBzW3NoaXBOYW1lXS5wbGFjZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cEJvdHRvbUJvYXJkU3ByZWFkT3V0ID0gKCkgPT4ge1xuICAgICAgICAvLyBmdWxsIGZsZWV0IHRvIGJlIHBsYWNlZFxuICAgICAgICBwbGFjZVNoaXAoJ2NhcnJpZXInLCBbMiwgNF0sICdoJyk7XG4gICAgICAgIHBsYWNlU2hpcCgnYmF0dGxlc2hpcCcsIFs4LCA2XSwgJ2gnKTtcbiAgICAgICAgcGxhY2VTaGlwKCdjcnVpc2VyJywgWzIsIDJdLCAndicpO1xuICAgICAgICBwbGFjZVNoaXAoJ3N1Ym1hcmluZScsIFs1LCA0XSwgJ3YnKTtcbiAgICAgICAgcGxhY2VTaGlwKCdkZXN0cm95ZXInLCBbOCwgMV0sICd2Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwQm90dG9tQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuY2FycmllciwgWzAsIDBdLCAndicpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXBzLmJhdHRsZXNoaXAsIFswLCAxXSwgJ3YnKTtcbiAgICAgICAgYm9hcmQuYm90dG9tLnBsYWNlU2hpcChzaGlwcy5jcnVpc2VyLCBbMCwgMl0sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuc3VibWFyaW5lLCBbMCwgM10sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuZGVzdHJveWVyLCBbMCwgNF0sICd2Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRDb29yZCA9IChtYXgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICAgICAgICBjb25zdCByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cbiAgICAgICAgY29uc3QgYXR0YWNrQ29vcmRzID0gW3JhbmRZLCByYW5kWF07XG4gICAgICAgIHJldHVybiBhdHRhY2tDb29yZHM7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwQm90dG9tQm9hcmRSYW5kb20gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uT3B0aW9ucyA9IFsnaCcsICd2J107XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRyaWVzID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKHRyaWVzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZENvb3JkcyA9IHJhbmRDb29yZCgxMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPVxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbk9wdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3JpZW50YXRpb25PcHRpb25zLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhbmRDb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgT3JpZW50YXRpb246ICR7b3JpZW50YXRpb259YCk7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcCwgcmFuZENvb3Jkcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzaGlwc1tzaGlwLmdldE5hbWUoKV0ucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cmllcyArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFsbFNoaXBzUGxhY2VkKCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCByYW5kb21pc2F0aW9uIGZhaWxlZCEnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyByZW5kZXIgYm90aCB0b3AgYW5kIGJvdHRvbSBib2FyZHNcbiAgICBjb25zdCByZW5kZXJQbGF5ZXJCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvcEJvYXJkVGl0bGUgPSAnVEFSR0VUVElORycucGFkU3RhcnQoMjYsICcgJyk7XG4gICAgICAgIGNvbnN0IGJvdHRvbUJvYXJkVGl0bGUgPSBgJHtuYW1lLnRvVXBwZXJDYXNlKCl9IFNISVBTYC5wYWRTdGFydCgyOCwgJyAnKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRSZW5kZXIgPSBgJHt0b3BCb2FyZFRpdGxlfSR7Ym9hcmQudG9wLnJlbmRlckJvYXJkKCl9XFxuJHtib3R0b21Cb2FyZFRpdGxlfSR7Ym9hcmQuYm90dG9tLnJlbmRlckJvYXJkKCl9YDtcbiAgICAgICAgY29uc29sZS5sb2coY29tYmluZWRSZW5kZXIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiogcGxheU5leHRNb3ZlUHJlc2V0KCkge1xuICAgICAgICB5aWVsZCBbMCwgNF07XG4gICAgICAgIHlpZWxkIFswLCA1XTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5TmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGlzTW92ZUxlZ2FsKF9tb3ZlKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gX21vdmVbMF07XG4gICAgICAgICAgICBjb25zdCB4ID0gX21vdmVbMV07XG4gICAgICAgICAgICBpZiAoeCA+PSAwICYmIHggPCAxMCAmJiB5ID49IDAgJiYgeSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudCBoaXRzXG4gICAgICAgIGNvbnN0IHBhcnNlSGl0cyA9IEFycmF5LmZyb20oaGl0cykubWFwKChoaXQpID0+IEpTT04ucGFyc2UoaGl0KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlSGl0cyk7XG5cbiAgICAgICAgLy8gbWFrZSBhbiBhdHRhY2sgYWRqYWNlbnQgdG8gYSBjdXJyZW50IGhpdFxuICAgICAgICB3aGlsZSAocGFyc2VIaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBwYXJzZUhpdHMuc2hpZnQoMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gbW92ZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBtb3ZlWzFdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vdmVzID0gW107XG5cbiAgICAgICAgICAgIC8vIGFsbCBtb3ZlcyBhZGphY2VudCB0byAoeSwgeClcbiAgICAgICAgICAgIGNvbnN0IGVudW1lcmF0ZU1vdmVzID0gW1xuICAgICAgICAgICAgICAgIFt5IC0gMSwgeF0sIC8vIE5vcnRoIG9mXG4gICAgICAgICAgICAgICAgW3ksIHggKyAxXSwgLy8gRWFzdCBvZlxuICAgICAgICAgICAgICAgIFt5ICsgMSwgeF0sIC8vIFNvdXRoIG9mXG4gICAgICAgICAgICAgICAgW3ksIHggLSAxXSwgLy8gV2VzdCBvZlxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgLy8gZmluZCBhZGphY2VudCBtb3ZlcyB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHBsYXllZFxuICAgICAgICAgICAgZW51bWVyYXRlTW92ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZUxlZ2FsKGNvb3JkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhaGl0cy5oYXMoSlNPTi5zdHJpbmdpZnkoY29vcmQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAhbWlzc2VzLmhhcyhKU09OLnN0cmluZ2lmeShjb29yZCkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkTW92ZXMucHVzaChjb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgbW92ZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGlmICh2YWxpZE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRNb3Zlcy5zaGlmdCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vIGFkamFjZW50LWhpdCBtb3ZlIGV4aXN0LCBhdHRhY2sgYSByYW5kb20gc3BhY2UgdGhhdCBoYXNuJ3QgcHJldmlvdXNseSBiZWVuIGF0dGFja2VkXG4gICAgICAgIGxldCBzbWFydE1vdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJhbmRvbU1vdmU7XG5cbiAgICAgICAgLy8gY29udGludWUgZ2VuZXJhdGluZyByYW5kb20gY29vcmRpbmF0ZXMgdW50aWwgYW4gdW5wbGF5ZWQgbW92ZSBpcyBmb3VuZFxuICAgICAgICB3aGlsZSAoIXNtYXJ0TW92ZSkge1xuICAgICAgICAgICAgcmFuZG9tTW92ZSA9IHJhbmRDb29yZCgxMCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaXNNb3ZlTGVnYWwocmFuZG9tTW92ZSkgJiZcbiAgICAgICAgICAgICAgICAhaGl0cy5oYXMoSlNPTi5zdHJpbmdpZnkocmFuZG9tTW92ZSkpICYmXG4gICAgICAgICAgICAgICAgIW1pc3Nlcy5oYXMoSlNPTi5zdHJpbmdpZnkocmFuZG9tTW92ZSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbWFydE1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JpZFJvdWxldHRlLnB1c2gocmFuZG9tTW92ZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYE1vdmUgJHtyYW5kb21Nb3ZlfSBzZWVuIGJlZm9yZSFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc21hcnRNb3ZlKSByZXR1cm4gcmFuZG9tTW92ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkSGl0ID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGhpdHMuYWRkKEpTT04uc3RyaW5naWZ5KGNvb3JkKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZE1pc3MgPSAoY29vcmQpID0+IHtcbiAgICAgICAgbWlzc2VzLmFkZChKU09OLnN0cmluZ2lmeShjb29yZCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiBtaXNzZXM7XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gICAgY29uc3QgZ2V0Um91bGV0dGUgPSAoKSA9PiBncmlkUm91bGV0dGU7XG5cbiAgICBjb25zdCBnZXRBbGxQcmV2aW91c0F0dGFja3MgPSAoKSA9PiBuZXcgU2V0KFsuLi5oaXRzLCAuLi5taXNzZXNdKTtcblxuICAgIGNvbnN0IHN0YXRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbE1pc3NlcyA9IGdldE1pc3NlcygpLnNpemU7XG4gICAgICAgIGNvbnN0IHRvdGFsSGl0cyA9IGdldEhpdHMoKS5zaXplO1xuICAgICAgICBjb25zdCB0b3RhbEF0dGFja3MgPSB0b3RhbE1pc3NlcyArIHRvdGFsSGl0cztcbiAgICAgICAgY29uc3QgdG90YWxSYW5kb21BdHRlbXB0cyA9IGdldFJvdWxldHRlKCkubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbE1pc3NlcyxcbiAgICAgICAgICAgIHRvdGFsSGl0cyxcbiAgICAgICAgICAgIHRvdGFsQXR0YWNrcyxcbiAgICAgICAgICAgIHRvdGFsUmFuZG9tQXR0ZW1wdHMsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBib2FyZCxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgc2V0dXBCb3R0b21Cb2FyZCxcbiAgICAgICAgc2V0dXBCb3R0b21Cb2FyZFNwcmVhZE91dCxcbiAgICAgICAgc2V0dXBCb3R0b21Cb2FyZFJhbmRvbSxcbiAgICAgICAgcmVuZGVyUGxheWVyQm9hcmRzLFxuICAgICAgICBwbGF5TmV4dE1vdmUsXG4gICAgICAgIHBsYXlOZXh0TW92ZVByZXNldCxcbiAgICAgICAgYWRkSGl0LFxuICAgICAgICBhZGRNaXNzLFxuICAgICAgICBnZXRBbGxQcmV2aW91c0F0dGFja3MsXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgZ2V0SGl0cyxcbiAgICAgICAgZ2V0Um91bGV0dGUsXG4gICAgICAgIHN0YXRzLFxuICAgICAgICByZXNldEJvYXJkLFxuICAgICAgICByZXNldFNoaXBzLFxuICAgICAgICBhbGxTaGlwc1BsYWNlZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuIiwiY29uc3QgU0hJUF9MRU5HVEggPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoc2hpcE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gc2hpcE5hbWU7XG4gICAgLy8gcmVwcmVzZW50cyBzaGlwIHN5bWJvbCBhcyByZXByZXNlbnRlZCBpbiBib2FyZCBhcnJheVxuICAgIGNvbnN0IHN5bWJvbCA9IHNoaXBOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgIC8vIHRyYWNrcyBpZiBzaGlwIGhhcyBiZWVuIHBsYWNlZCBvbiB0aGUgYm9hcmRcbiAgICBsZXQgX3BsYWNlZCA9IGZhbHNlO1xuICAgIC8vIHRvdGFsIG51bWJlciBvZiB0aW1lcyBzaGlwIGhhcyBiZWVuIGhpdFxuICAgIGxldCB0aW1lc0hpdCA9IDA7XG4gICAgLy8gd2hlcmUgdGhlIHNoaXAgaGFzIGJlZW4gaGl0IG9uIHRoZSBncmlkXG4gICAgY29uc3QgcG9zaXRpb25zSGl0ID0gbmV3IFNldCgpO1xuXG4gICAgLy8gYW1vdW50cyBvZiBoaXRzIGEgc2hpcCBjYW4gdGFrZSBiZWZvcmUgaXQgc2lua3MgKHdoaWNoIGVxdWFscyBpdHMgbGVuZ3RoKVxuICAgIGNvbnN0IHNoaXBIaXRQb2ludHMgPSBTSElQX0xFTkdUSDtcblxuICAgIGlmICghKHNoaXBOYW1lIGluIHNoaXBIaXRQb2ludHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgdGltZXNIaXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRpbWVzSGl0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRpbWVzSGl0KCkge1xuICAgICAgICByZXR1cm4gdGltZXNIaXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3ltYm9sKCkge1xuICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBIaXRQb2ludHNbbmFtZV0gLSB0aW1lc0hpdCA9PT0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIHBvc2l0aW9uc0hpdCxcbiAgICAgICAgZ2V0VGltZXNIaXQsXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGdldFN5bWJvbCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBsZW5ndGg6IFNISVBfTEVOR1RIW25hbWVdLFxuICAgICAgICBzZXQgcGxhY2VkKHBsYWNlZCkge1xuICAgICAgICAgICAgX3BsYWNlZCA9IHBsYWNlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHBsYWNlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcGxhY2VkO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iLCJpbXBvcnQgdG9ycGVkb0ljb24gZnJvbSAnLi9pbWFnZXMvdG9ycGVkby1pY29uLnBuZyc7XG5pbXBvcnQgY3Jvc3NoYWlySWNvbiBmcm9tICcuL2ltYWdlcy9jcm9zc2hhaXItaWNvbi5wbmcnO1xuXG5jb25zdCBTSElQX1NUQVRVU19MRUdFTkQgPSB7XG4gICAgaGl0OiB7XG4gICAgICAgIGltZ1NyYzogY3Jvc3NoYWlySWNvbixcbiAgICAgICAgbGVnZW5kVGV4dDogJ1NoaXAgaGFzIGJlZW4gaGl0JyxcbiAgICB9LFxuICAgIHN1bms6IHtcbiAgICAgICAgaW1nU3JjOiB0b3JwZWRvSWNvbixcbiAgICAgICAgbGVnZW5kVGV4dDogJ1NoaXAgaGFzIGJlZW4gc3VuaycsXG4gICAgfSxcbn07XG5cbi8qIFZpZXcuanMgaXMgb3VyIERPTSBtb2R1bGUgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcoKSB7XG4gICAgLy8gaW5pdGlhbCBwaGFzZSBvZiB0aGUgZ2FtZSBpcyBzaGlwIHBsYWNlbWVudFxuICAgIGxldCBnYW1lUGhhc2UgPSAnc2hpcF9wbGFjZW1lbnQnO1xuICAgIGxldCBnYW1lUmVhZHlUb1N0YXJ0ID0gZmFsc2U7XG4gICAgbGV0IGZpcnN0VHVyblBsYXllZCA9IGZhbHNlO1xuICAgIGxldCBzaGlwVG9QbGFjZSA9IG51bGw7XG4gICAgbGV0IHNoaXBPcmllbnRhdGlvbiA9ICdoJztcbiAgICBjb25zdCBNSVNTSU9OX0xPR19TSVpFID0gNjtcbiAgICBjb25zdCBsb2dRdWV1ZSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZChncmlkWSwgZ3JpZFgpIHtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcEdyaWRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcC1ncmlkLnRvcCcpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwR3JpZEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVzaGlwLWdyaWQuYm90dG9tJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkWSAqIGdyaWRYOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXBHcmlkVG9wLmFwcGVuZENoaWxkKGdyaWREaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkWSAqIGdyaWRYOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXBHcmlkQm90dG9tLmFwcGVuZENoaWxkKGdyaWREaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2hpcHMoYm9hcmRBcnIsIHdoaWNoRE9NR3JpZCwgcmVzZXQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkaXZHcmlkcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYmF0dGxlc2hpcC1ncmlkLiR7d2hpY2hET01HcmlkfSBkaXZgKSxcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBib2FyZEdyaWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZEFycikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQgPSBib2FyZEFycltpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGRpdiB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBwb3NpdGlvbiBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkaXZHcmlkc1tpICogMTAgKyBqXTtcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ24gY29vcmRzIHRvIGRhdGEgYXR0cmlidXRlICh1c2VkIGxhdGVyIGZvciBhdHRhY2tzKVxuICAgICAgICAgICAgICAgIGRpdi5kYXRhc2V0LmdyaWRDb29yZCA9IEpTT04uc3RyaW5naWZ5KFtpLCBqXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBtYXJrIGl0IGFzIGEgc2hpcCBkaXZcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnIgJiYgYm9hcmRHcmlkLmdldE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRFcnJvclRvTWlzc2lvbkxvZyhlcnJvclN0cikge1xuICAgICAgICBjb25zdCBwbGF5ZXJNaXNzaW9uTG9nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QnKTtcbiAgICAgICAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdFbnRyeS50ZXh0Q29udGVudCA9IGVycm9yU3RyO1xuICAgICAgICBwbGF5ZXJNaXNzaW9uTG9nTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGl0bGVDYXNlKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFbmVteVNoaXBzTGlzdChzaGlwc09iaiwgdXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IG15U2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktc2hpcHMtbGlzdCcpO1xuICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICBteVNoaXBzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKHNoaXBzT2JqKTtcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBsYXllciB0d28gc2hpcCBvYmplY3RzXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICAgICAgc2hpcERpdi5jbGFzc05hbWUgPSAnZW5lbXktc2hpcC1jb250YWluZXInO1xuICAgICAgICAgICAgc2hpcEJ0bi50ZXh0Q29udGVudCA9IHRpdGxlQ2FzZShzaGlwLmdldE5hbWUoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcnBlZG9JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGNyb3NzaGFpckltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdG9ycGVkb0ltZy5zcmMgPSB0b3JwZWRvSWNvbjtcbiAgICAgICAgICAgIGNyb3NzaGFpckltZy5zcmMgPSBjcm9zc2hhaXJJY29uO1xuXG4gICAgICAgICAgICB0b3JwZWRvSW1nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGNyb3NzaGFpckltZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAvLyBkaXNwbGF5IGNyb3NzaGFpciBpY29uIGlmIGVuZW15IHNoaXAgaGFzIGJlZW4gaGl0XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRUaW1lc0hpdCgpID4gMCkge1xuICAgICAgICAgICAgICAgIGNyb3NzaGFpckltZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdG9ycGVkbyBpY29uIGlmIGVuZW15IHNoaXAgaGFzIGJlZW4gc3Vua1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0b3JwZWRvSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcERpdi5hcHBlbmQoc2hpcEJ0bik7XG4gICAgICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKGNyb3NzaGFpckltZyk7XG4gICAgICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHRvcnBlZG9JbWcpO1xuICAgICAgICAgICAgbXlTaGlwcy5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkR3JpZExpc3RlbmVycyhjYWxsYmFjaywgdG9wQm9hcmQsIGJvdHRvbUJvYXJkKSB7XG4gICAgICAgIGNvbnN0IHRvcEdyaWREaXZFbGVtZW50cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYmF0dGxlc2hpcC1ncmlkLnRvcCBkaXZgKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYm90dG9tR3JpZERpdkVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5iYXR0bGVzaGlwLWdyaWQuYm90dG9tIGRpdmApLFxuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclRhcmdldHRpbmdHcmlkKCkge1xuICAgICAgICAgICAgY29uc3QgZGl2R3JpZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5iYXR0bGVzaGlwLWdyaWQudG9wIGRpdmApKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkR3JpZCA9IHRvcEJvYXJkW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZGl2R3JpZHNbaSAqIDEwICsgal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkR3JpZCA9PT0gJ0gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJvYXJkR3JpZCA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUJvdHRvbUdyaWQoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRHcmlkID0gYm90dG9tQm9hcmRbaV1bal07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBkaXYgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgcG9zaXRpb24gaW4gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGJvdHRvbUdyaWREaXZFbGVtZW50c1tpICogMTAgKyBqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXNzaWduIGNvb3JkcyB0byBkYXRhIGF0dHJpYnV0ZSAodXNlZCBsYXRlciBmb3IgYXR0YWNrcylcbiAgICAgICAgICAgICAgICAgICAgLy8gZGl2LmRhdGFzZXQuZ3JpZENvb3JkID0gSlNPTi5zdHJpbmdpZnkoW2ksIGpdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRHcmlkLmdldE5hbWUgJiYgYm9hcmRHcmlkLnBvc2l0aW9uc0hpdC5oYXMoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZEdhbWVMb29wQ2xpY2tMaXN0ZW5lciA9IChfZ3JpZCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhlIG1haW4gXCJnYW1lIGxvb3BcIlxuICAgICAgICAgICAgX2dyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFnYW1lUmVhZHlUb1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRFcnJvclRvTWlzc2lvbkxvZygnQWxsIHNoaXBzIG11c3QgYmUgcGxhY2VkIGJlZm9yZSBnYW1lIGNhbiBzdGFydC4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfZ3JpZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8IF9ncmlkLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjay5wbGF5VHVybihKU09OLnBhcnNlKF9ncmlkLmRhdGFzZXQuZ3JpZENvb3JkKSwgY2FsbGJhY2sucGxheUNvbXB1dGVyTW92ZSgpKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5wcmludEJvYXJkcygpO1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdGFyZ2V0dGluZyAodG9wKSBncmlkIGFmdGVyIGF0dGFjayBpcyBwbGF5ZWRcbiAgICAgICAgICAgICAgICByZW5kZXJUYXJnZXR0aW5nR3JpZCgpO1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBwbGF5ZXIncyB2aWV3IChib3R0b20gZ3JpZCkgLSBBSSBtb3ZlcyBzdHJhaWdodCBhZnRlclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJvdHRvbUdyaWQoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVFbmVteVNoaXBzTGlzdChjYWxsYmFjay5wbGF5ZXJUd28uc2hpcHMsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheVR1cm5DYWxsVG9BY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS10dXJuLWN0YScpO1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3RUdXJuUGxheWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0VHVyblBsYXllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlUdXJuQ2FsbFRvQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUtYXJyb3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhZGRWaWN0b3J5QWxlcnRMaXN0ZW5lciA9IChfZ3JpZCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2tzIGlmIHBsYXllciBoYXMgd29uIG9yIGxvc3RcbiAgICAgICAgICAgIF9ncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2FsbGJhY2sudmljdG9yeVN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIHdvbiEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgLTE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3UgaGF2ZSBsb3N0IScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvcEdyaWREaXZFbGVtZW50cy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICAgICAgICBhZGRHYW1lTG9vcENsaWNrTGlzdGVuZXIoZ3JpZCk7XG4gICAgICAgICAgICBhZGRWaWN0b3J5QWxlcnRMaXN0ZW5lcihncmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm91bmRUb05lYXJlc3QxMChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgMTA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlciAvIDEwKSAqIDEwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGFwcCkge1xuICAgICAgICBjb25zdCBTSElQX0xFTkdUSCA9IHtcbiAgICAgICAgICAgIGNhcnJpZXI6IDUsXG4gICAgICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgICAgICAgIGRlc3Ryb3llcjogMixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHJlc2V0R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1nYW1lLWJ0bicpO1xuICAgICAgICBjb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utc2hpcHMtYnRuJyk7XG5cbiAgICAgICAgY29uc3QgZGVyZWdpc3RlckdyaWRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXZHcmlkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJhdHRsZXNoaXAtZ3JpZC50b3AgZGl2YCkpO1xuICAgICAgICAgICAgZGl2R3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGdldCByaWQgb2YgYWxsIGV4aXN0aW5nIGxpc3RlbmVycyBieSByZXBsYWNpbmcgZGl2IHdpdGggb3duIGRlZXAgY2xvbmVcbiAgICAgICAgICAgICAgICBncmlkLnJlcGxhY2VXaXRoKGdyaWQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChyZXNldCkgPT4ge1xuICAgICAgICAgICAgYXBwLnByaW50Qm9hcmRzKCk7XG5cbiAgICAgICAgICAgIC8vIGlmKCFnYW1lUmVhZHlUb1N0YXJ0KVxuXG4gICAgICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyByZXNldHMgYm9hcmQgYW5kIHNoaXBzIGZvciBib3RoIHBsYXllcnNcbiAgICAgICAgICAgICAgICBhcHAucmVzZXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gcmUtaW5pdGlhbGlzZXMgRE9NIHZpZXcgb2YgdG9wIGFuZCBib3R0b20gYm9hcmRcbiAgICAgICAgICAgICAgICByZW5kZXJTaGlwcyhudWxsLCAndG9wJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyU2hpcHMobnVsbCwgJ2JvdHRvbScsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSBncmlkXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckdyaWRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICAvLyByZS1hZGQgdGhlIGV2ZW50IGxpc3RlbmVycyBmb3IgcGxheWVyXG4gICAgICAgICAgICAgICAgYWRkR3JpZExpc3RlbmVycyhcbiAgICAgICAgICAgICAgICAgICAgYXBwLFxuICAgICAgICAgICAgICAgICAgICBhcHAucGxheWVyT25lLmJvYXJkLnRvcC5nZXRCb2FyZCgpLFxuICAgICAgICAgICAgICAgICAgICBhcHAucGxheWVyT25lLmJvYXJkLmJvdHRvbS5nZXRCb2FyZCgpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gcGxhY2UgQUkncyBzaGlwc1xuICAgICAgICAgICAgICAgIGFwcC5zZXR1cEdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNldFNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib3R0b21EaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhdHRsZXNoaXAtZ3JpZC5ib3R0b20gZGl2Jyk7XG4gICAgICAgICAgICBib3R0b21EaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSAmJiBkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNoaXBUb1BsYWNlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKHNoaXBUb1BsYWNlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcE9uQ2xpY2sgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcFRvUGxhY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZW5kRXJyb3JUb01pc3Npb25Mb2coJ0Nhbm5vdCBwbGFjZSBzaGlwIHdoZW4gbm8gc2hpcCBoYXMgYmVlbiBzZWxlY3RlZCEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcFRvUGxhY2UudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IEpTT04ucGFyc2UoZXZ0LnRhcmdldC5kYXRhc2V0LmdyaWRDb29yZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmFtZTogJHtzaGlwTmFtZX0sIGNvb3JkOiAke2Nvb3Jkc30sIG9yaWVudGF0aW9uOiAke3NoaXBPcmllbnRhdGlvbn1gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFwcC5wbGF5ZXJPbmUuc2hpcHMpO1xuXG4gICAgICAgICAgICAvLyBkbyBub3QgcGxhY2UgdGhlIHNoaXAgaWYgYWxyZWFkeSBwbGFjZWRcbiAgICAgICAgICAgIGlmIChhcHAucGxheWVyT25lLnNoaXBzW3NoaXBOYW1lXS5wbGFjZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzaGlwTmFtZX0gYWxyZWFkeSBwbGFjZWQhYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgY3VycmVudCB0aWxlIGlzIG9jY3VwaWVkLCBkaXNwbGF5IGVycm9yIGluIHZpZXdcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBwbGFjZSBzZWxlY3RlZCBzaGlwIG9uIGJvYXJkXG4gICAgICAgICAgICAgICAgYXBwLnBsYXllck9uZS5wbGFjZVNoaXAoc2hpcE5hbWUsIGNvb3Jkcywgc2hpcE9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgYm90dG9tIGdyaWQgdG8gc2hvdyBuZXdseSBwbGFjZWQgc2hpcFxuICAgICAgICAgICAgICAgIHJlbmRlclNoaXBzKGFwcC5wbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmdldEJvYXJkKCksICdib3R0b20nKTtcblxuICAgICAgICAgICAgICAgIC8vIGdhbWUgaXMgcmVhZHkgdG8gc3RhcnQgYWZ0ZXIgYWxsIHNoaXBzIHBsYWNlZFxuICAgICAgICAgICAgICAgIGlmIChhcHAucGxheWVyT25lLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVJlYWR5VG9TdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb24gcGhhc2UgdG8gZ2FtZV90aW1lIG9uY2UgYWxsIHNoaXBzIHBsYWNlZFxuICAgICAgICAgICAgICAgICAgICBnYW1lUGhhc2UgPSAnZ2FtZV90aW1lJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhY2VTaGlwQ2FsbFRvQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlLXNoaXBzLWN0YScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5VHVybkNhbGxUb0FjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LXR1cm4tY3RhJyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcENhbGxUb0FjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlUdXJuQ2FsbFRvQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtYXJyb3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyTWlzc2lvbkxvZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW1pc3Npb24tbG9nLS1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIG5ld0VudHJ5LnRleHRDb250ZW50ID0gYENhbm5vdCBwbGFjZSAke3NoaXBOYW1lfTogdGlsZSBpcyBvY2N1cGllZCFgO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvZ1F1ZXVlLmxlbmd0aCA+PSBNSVNTSU9OX0xPR19TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxvZ1F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBuZXcgZW50cnkgdG8gZW5kIG9mIHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIGxvZ1F1ZXVlLnB1c2gobmV3RW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIGFsbCBtaXNzaW9uIGxvZyBjaGlsZHJlbiB3aXRoIHF1ZXVlZCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNaXNzaW9uTG9nTGlzdC5yZXBsYWNlQ2hpbGRyZW4oLi4ubG9nUXVldWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nUXVldWUucHVzaChuZXdFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1pc3Npb25Mb2dMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2hvd1NoaXBPdXRsaW5lT25Ib3ZlciA9IChldnQpID0+IHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBnZW5lcmF0ZSBvdXRsaW5lIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICAgICAgICAgICBpZiAoYXBwLnBsYXllck9uZS5hbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2hpcENsYXNzO1xuXG4gICAgICAgICAgICBpZiAoc2hpcFRvUGxhY2UpIHtcbiAgICAgICAgICAgICAgICBzaGlwQ2xhc3MgPSBzaGlwVG9QbGFjZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IEpTT04ucGFyc2UoZXZ0LnRhcmdldC5kYXRhc2V0LmdyaWRDb29yZCk7XG4gICAgICAgICAgICBjb25zdCBib3R0b21EaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhdHRsZXNoaXAtZ3JpZC5ib3R0b20gZGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGkgPSBjdXJzb3JQb3NpdGlvblswXTtcbiAgICAgICAgICAgIGNvbnN0IGogPSBjdXJzb3JQb3NpdGlvblsxXTtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZXMgdGhlIGZsYXQgYXJyYXkgaW5kZXggZ2l2ZW4gdGhlIGFzc29jaWF0ZWQgW3ksIHhdIGFycmF5IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBjb25zdCBiYXNpc0dyaWRJbmRleCA9IGkgKiAxMCArIGo7XG5cbiAgICAgICAgICAgIHJlc2V0U2hpcFBsYWNlbWVudCgpO1xuXG4gICAgICAgICAgICAvLyBsZW5ndGggZGVwZW5kcyBvbiB0eXBlIG9mIHNoaXBcbiAgICAgICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBTSElQX0xFTkdUSFtzaGlwQ2xhc3NdO1xuXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBob3Jpem9udGFsIHNoaXAgb3V0bGluZVxuICAgICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGJhc2lzR3JpZEluZGV4OyBrIDwgYmFzaXNHcmlkSW5kZXggKyBzaGlwTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBzaG93IGhvdmVyIGlmIHdob2xlIHNoaXAgY2FuIGZpdCBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgLyByb3VuZFRvTmVhcmVzdDEwKGJhc2lzR3JpZEluZGV4KSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGJvdHRvbURpdnNba107XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzaGlwQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgdmVydGljYWwgc2hpcCBvdXRsaW5lXG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBiYXNpc0dyaWRJbmRleDsgayA8IGJhc2lzR3JpZEluZGV4ICsgc2hpcExlbmd0aCAqIDEwOyBrICs9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHNoaXAgYm9keSBpcyB3aXRoaW4gYm91bmRzIG9mIGdyaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGJvdHRvbURpdnNba107XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChzaGlwQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vICoqKiByZXF1aXJlcyByZWZhY3RvcmluZyAqKipcbiAgICAgICAgY29uc3Qgc2V0dXBTaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXlTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2hpcHMtYXJlYScpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdDcnVpc2VyJywgJ1N1Ym1hcmluZScsICdEZXN0cm95ZXInXTtcbiAgICAgICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc2hpcEJ0bi50ZXh0Q29udGVudCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgbXlTaGlwcy5hcHBlbmRDaGlsZChzaGlwQnRuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItc2hpcHMtYXJlYSBidXR0b24nKTtcblxuICAgICAgICAgICAgLy8gQ2xpY2tpbmcgb24gc2hpcCBidXR0b24gc2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHNoaXAgdG8gdGhhdCBzaGlwXG4gICAgICAgICAgICBbLi4uc2hpcEJ1dHRvbnNdLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChidG4udGV4dENvbnRlbnQgPT09ICdDaGFuZ2UgT3JpZW50YXRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0U2hpcFBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ3YnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwIG9yaWVudGF0aW9uOiAke3NoaXBPcmllbnRhdGlvbn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICdoJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2hpcCBvcmllbnRhdGlvbjogJHtzaGlwT3JpZW50YXRpb259YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFRvUGxhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0U2hpcFBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2hpcFRvUGxhY2UgPSBidG4udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50bHkgc2VsZWN0ZWQgc2hpcDogJHtzaGlwVG9QbGFjZX1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBFYWNoIGdyaWQgY2VsbCBpcyBhc3NpZ25lZCBhIGxpc3RlbmVyIHRoYXQgc3VwcG9ydHMgc2hpcCBwbGFjZW1lbnQgb24gaG92ZXJcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmF0dGxlc2hpcC1ncmlkLmJvdHRvbSBkaXYnKTtcblxuICAgICAgICAgICAgLy8gZm9yIGVhY2ggYm90dG9tIGdyaWQgdGlsZSwgYWRkIGxpc3RlbmVycyBmb3Igc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIFsuLi5ib3R0b21EaXZzXS5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd1NoaXBPdXRsaW5lT25Ib3Zlcik7XG4gICAgICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwT25DbGljayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGFydEdhbWVCdG4pO1xuXG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0YXJ0R2FtZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNldEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzdGFydEdhbWUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldHVwU2hpcFBsYWNlbWVudCgpO1xuICAgICAgICB1cGRhdGVFbmVteVNoaXBzTGlzdChhcHAucGxheWVyVHdvLnNoaXBzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTaGlwU3RhdHVzSWNvbkxlZ2VuZCgpIHtcbiAgICAgICAgY29uc3QgbGVnZW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZ2VuZC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbGVnZW5kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXMoU0hJUF9TVEFUVVNfTEVHRU5EKS5mb3JFYWNoKChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGVnZW5kVGV4dC50ZXh0Q29udGVudCA9IHN0YXR1cy5sZWdlbmRUZXh0O1xuICAgICAgICAgICAgbGVnZW5kSXRlbS5jbGFzc0xpc3QuYWRkKCdsZWdlbmQtaXRlbScpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBzdGF0dXMuaW1nU3JjO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZC1pY29uJyk7XG5cbiAgICAgICAgICAgIGxlZ2VuZEl0ZW0uYXBwZW5kKGltZywgbGVnZW5kVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZWdlbmRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kSXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlR3JpZCxcbiAgICAgICAgcmVuZGVyU2hpcHMsXG4gICAgICAgIGFkZEdyaWRMaXN0ZW5lcnMsXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzLFxuICAgICAgICBhZGRTaGlwU3RhdHVzSWNvbkxlZ2VuZCxcbiAgICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuL0JhdHRsZXNoaXAnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzcGxhc2hJbWcgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcC5zdmcnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbXlTcGxhc2hJbWcgPSBuZXcgSW1hZ2UoKTtcbm15U3BsYXNoSW1nLnNyYyA9IHNwbGFzaEltZztcbm15U3BsYXNoSW1nLmNsYXNzTmFtZSA9ICdzcGxhc2gtYmF0dGxlc2hpcC1pbWcnO1xuYm9keS5hcHBlbmRDaGlsZChteVNwbGFzaEltZyk7XG5cbmNvbnNvbGUubG9nKCdMb2FkaW5nIGFwcC5qcycpO1xuXG5jb25zdCBhcHAgPSBCYXR0bGVzaGlwKCdQbGF5ZXInLCB0cnVlLCAxMCwgMTApO1xuY29uc3QgdmlldyA9IFZpZXcoKTtcblxuYXBwLnNldHVwR2FtZSgpO1xuY29uc3QgcGxheWVyVG9wR3JpZCA9IGFwcC5wbGF5ZXJPbmUuYm9hcmQudG9wLmdldEJvYXJkKCk7XG5jb25zdCBwbGF5ZXJCb3R0b21HcmlkID0gYXBwLnBsYXllck9uZS5ib2FyZC5ib3R0b20uZ2V0Qm9hcmQoKTtcblxudmlldy5jcmVhdGVHcmlkKDEwLCAxMCk7XG52aWV3LnJlbmRlclNoaXBzKHBsYXllckJvdHRvbUdyaWQsICdib3R0b20nKTtcbnZpZXcucmVuZGVyU2hpcHMocGxheWVyVG9wR3JpZCwgJ3RvcCcpO1xudmlldy5hZGRFdmVudExpc3RlbmVycyhhcHApO1xudmlldy5hZGRHcmlkTGlzdGVuZXJzKFxuICAgIGFwcCxcbiAgICBhcHAucGxheWVyT25lLmJvYXJkLnRvcC5nZXRCb2FyZCgpLFxuICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmdldEJvYXJkKCksXG4pO1xudmlldy5hZGRTaGlwU3RhdHVzSWNvbkxlZ2VuZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9