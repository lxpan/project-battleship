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
        playerTwo.setupBottomBoard();
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

    const randCoord = (max) => {
        const randY = Math.floor(Math.random() * max);
        const randX = Math.floor(Math.random() * max);

        const attackCoords = [randY, randX];
        return attackCoords;
    };

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
                    isMoveLegal(coord)
                    && !hits.has(JSON.stringify(coord))
                    && !misses.has(JSON.stringify(coord))
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
                isMoveLegal(randomMove)
                && !hits.has(JSON.stringify(randomMove))
                && !misses.has(JSON.stringify(randomMove))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QixhQUFhLGlEQUFJOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG4gICAgLyogb3ZlcmZsb3cteTogaGlkZGVuOyAqL1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmXFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmdhbWUtYnV0dG9ucyB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5nYW1lLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDcyLCA1JSwgNzklKTtcXG59XFxuXFxuLnNwbGFzaC1iYXR0bGVzaGlwLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgei1pbmRleDogLTk5OTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0LjZ2bWluKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQuNnZtaW4pOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMy42dm1pbik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzLjZ2bWluKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAxMDAlLCAuMik7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5jcnVpc2VyLFxcbi5zdWJtYXJpbmUsXFxuLmRlc3Ryb3llciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE1LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDQlLCAxNiUpO1xcbn1cXG5cXG4ubWFpbi1nYW1lcGxheS1hcmVhIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJhIGIgY1xcXCJcXG4gICAgICAgIFxcXCJkIGUgZlxcXCJcXG4gICAgICAgIFxcXCJnIGggaVxcXCI7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1jb250cm9sLFxcbi5lbmVteS1taXNzaW9uLWNvbnRyb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tbG9nLFxcbi5lbmVteS1taXNzaW9uLWxvZyB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogY2FsYygzLjZ2aCAqIDEwKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWxvZy0tbGlzdCxcXG4uZW5lbXktbWlzc2lvbi1sb2ctLWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QgbGksXFxuLmVuZW15LW1pc3Npb24tbG9nLS1saXN0IGxpIHtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG59XFxuXFxuLnBsYXllci1zaGlwcy1hcmVhLFxcbi5lbmVteS1zaGlwcy1hcmVhIHtcXG4gICAgbWFyZ2luOiAydm1pbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBoZWlnaHQ6IGNhbGMoMy42dmggKiAxMCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzLWFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA2OCUsIDUwJSk7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIGltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4uZW5lbXktc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55b3VyLXNoaXBzLWhlYWRpbmcge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxlZ2VuZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5sZWdlbmQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41cmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxcmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbi5sZWdlbmQtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ubGVnZW5kLWljb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi8qIEJvdW5jeSBBcnJvdyBTdHlsaW5nICovXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhpZGUtYXJyb3cge1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1hcmdpbjogOCUgMDsgKi9cXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYm91bmNlIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG5cXG4gICAgMCUsXFxuICAgIDIwJSxcXG4gICAgNTAlLFxcbiAgICA4MCUsXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuXFxuICAgIDQwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xcbiAgICB9XFxuXFxuICAgIDYwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2I7aURBQzZDO0lBQzdDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOzs7OztJQUtJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7O2VBR1c7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0k7Ozs7aUJBSWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUk7Ozs7O1FBS0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG4gICAgLyogb3ZlcmZsb3cteTogaGlkZGVuOyAqL1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmXFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmdhbWUtYnV0dG9ucyB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5nYW1lLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDcyLCA1JSwgNzklKTtcXG59XFxuXFxuLnNwbGFzaC1iYXR0bGVzaGlwLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgei1pbmRleDogLTk5OTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0LjZ2bWluKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQuNnZtaW4pOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMy42dm1pbik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzLjZ2bWluKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAxMDAlLCAuMik7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5jcnVpc2VyLFxcbi5zdWJtYXJpbmUsXFxuLmRlc3Ryb3llciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE1LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDQlLCAxNiUpO1xcbn1cXG5cXG4ubWFpbi1nYW1lcGxheS1hcmVhIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJhIGIgY1xcXCJcXG4gICAgICAgIFxcXCJkIGUgZlxcXCJcXG4gICAgICAgIFxcXCJnIGggaVxcXCI7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1jb250cm9sLFxcbi5lbmVteS1taXNzaW9uLWNvbnRyb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tbG9nLFxcbi5lbmVteS1taXNzaW9uLWxvZyB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogY2FsYygzLjZ2aCAqIDEwKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWxvZy0tbGlzdCxcXG4uZW5lbXktbWlzc2lvbi1sb2ctLWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QgbGksXFxuLmVuZW15LW1pc3Npb24tbG9nLS1saXN0IGxpIHtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG59XFxuXFxuLnBsYXllci1zaGlwcy1hcmVhLFxcbi5lbmVteS1zaGlwcy1hcmVhIHtcXG4gICAgbWFyZ2luOiAydm1pbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBoZWlnaHQ6IGNhbGMoMy42dmggKiAxMCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzLWFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA2OCUsIDUwJSk7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIGltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4uZW5lbXktc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55b3VyLXNoaXBzLWhlYWRpbmcge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxlZ2VuZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5sZWdlbmQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41cmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxcmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbi5sZWdlbmQtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ubGVnZW5kLWljb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi8qIEJvdW5jeSBBcnJvdyBTdHlsaW5nICovXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhpZGUtYXJyb3cge1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1hcmdpbjogOCUgMDsgKi9cXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYm91bmNlIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG5cXG4gICAgMCUsXFxuICAgIDIwJSxcXG4gICAgNTAlLFxcbiAgICA4MCUsXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuXFxuICAgIDQwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xcbiAgICB9XFxuXFxuICAgIDYwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmF0dGxlc2hpcChwbGF5ZXJOYW1lLCBpc0NvbXB1dGVyLCBncmlkWCwgZ3JpZFkpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gaXNDb21wdXRlciA/IFBsYXllcignQ29tcHV0ZXInKSA6IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuXG4gICAgZnVuY3Rpb24gc2V0dXBHYW1lKCkge1xuICAgICAgICAvLyBwbGF5ZXJPbmUuc2V0dXBCb3R0b21Cb2FyZFNwcmVhZE91dCgpO1xuICAgICAgICBwbGF5ZXJUd28uc2V0dXBCb3R0b21Cb2FyZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgcGxheWVyT25lLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyT25lLnJlc2V0U2hpcHMoKTtcblxuICAgICAgICBwbGF5ZXJUd28ucmVzZXRCb2FyZCgpO1xuICAgICAgICBwbGF5ZXJUd28ucmVzZXRTaGlwcygpO1xuXG4gICAgICAgIHNldHVwR2FtZSgpO1xuXG4gICAgICAgIHByaW50Qm9hcmRzKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzID0gKCkgPT4gKHtcbiAgICAgICAgcGxheWVyT25lOiBwbGF5ZXJPbmUubmFtZSxcbiAgICAgICAgcGxheWVyVHdvOiBwbGF5ZXJUd28ubmFtZSxcbiAgICAgICAgY3VycmVudFBsYXllcjogY3VycmVudFBsYXllci5uYW1lLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJpbnRCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIHBsYXllck9uZS5yZW5kZXJQbGF5ZXJCb2FyZHMoKTtcbiAgICAgICAgcGxheWVyVHdvLnJlbmRlclBsYXllckJvYXJkcygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQXR0YWNrUmVzdWx0KF9yZXN1bHQsIF9tb3ZlLCB0aGVQbGF5ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfcmVzdWx0LnN0YXR1cyA9PT0gJ0hpdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50UGxheWVyLmJvYXJkLnRvcC5nZXRCb2FyZCgpW19tb3ZlWzBdXVtfbW92ZVsxXV0gPSAnSCc7XG4gICAgICAgICAgICAgICAgdGhlUGxheWVyLmJvYXJkLnRvcC5zZXRUaWxlKF9tb3ZlLCAnSCcpO1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5hZGRIaXQoX21vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3Jlc3VsdC5zdGF0dXMgPT09ICdNaXNzZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhlUGxheWVyLmJvYXJkLnRvcC5zZXRUaWxlKF9tb3ZlLCAneCcpO1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5hZGRNaXNzKF9tb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9yZXN1bHQuc3RhdHVzID09PSAnRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dGFjayBlcnJvcjogJHtfcmVzdWx0fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYXRjaDogcmVzdWx0ICR7X3Jlc3VsdH0sIG1vdmU6ICR7X21vdmV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5VHVybiA9IChtb3ZlLCBjcHVNb3ZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdFBsYXllciA9IHBsYXllclR3by5ib2FyZC5ib3R0b20ucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICAgICAgcHJvY2Vzc0F0dGFja1Jlc3VsdChyZXN1bHRQbGF5ZXIsIG1vdmUsIHBsYXllck9uZSk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUd287XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZXJzTW92ZSA9IGNwdU1vdmU7XG4gICAgICAgIGNvbnN0IHJlc3VsdENvbXB1dGVyID0gcGxheWVyT25lLmJvYXJkLmJvdHRvbS5yZWNlaXZlQXR0YWNrKGNvbXB1dGVyc01vdmUpO1xuICAgICAgICBwcm9jZXNzQXR0YWNrUmVzdWx0KHJlc3VsdENvbXB1dGVyLCBjb21wdXRlcnNNb3ZlLCBwbGF5ZXJUd28pO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5Q29tcHV0ZXJNb3ZlID0gKCkgPT4gcGxheWVyVHdvLnBsYXlOZXh0TW92ZSgpO1xuXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gKCkgPT4gKHtcbiAgICAgICAgcGxheWVyT25lOiBwbGF5ZXJPbmUuc3RhdHMoKSxcbiAgICAgICAgcGxheWVyVHdvOiBwbGF5ZXJUd28uc3RhdHMoKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpY3RvcnlTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIC8vIHBsYXllciB3aW5zIHdoZW4gQUkgaGFzIGxvc3QgYWxsIHNoaXBzXG4gICAgICAgIGlmIChwbGF5ZXJUd28uYm9hcmQuYm90dG9tLmhhdmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGxheWVyIGxvc2VzIHdoZW4gdGhleSBoYXZlIGxvc3QgYWxsIHNoaXBzXG4gICAgICAgIGlmIChwbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmhhdmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBnYW1lIGlzIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBzZXR1cEdhbWUsXG4gICAgICAgIHJlc2V0R2FtZSxcbiAgICAgICAgcHJpbnRCb2FyZHMsXG4gICAgICAgIHBsYXlUdXJuLFxuICAgICAgICBwbGF5Q29tcHV0ZXJNb3ZlLFxuICAgICAgICBnYW1lU3RhdHMsXG4gICAgICAgIHBsYXllck9uZSxcbiAgICAgICAgcGxheWVyVHdvLFxuICAgICAgICB2aWN0b3J5U3RhdHVzLFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrc1xuICAgIGNvbnN0IG1pc3NlcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBoaXRzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHNoaXBzU3VuayA9IFtdO1xuXG4gICAgLy8gc2hpcCBsZW5ndGggdXNlZCB0byBwZXJmb3JtIHNoaXAgcGxhY2VtZW50XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgX2JvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG5vdGUgdGhhdCBib2FyZFtpXSByZWZlcnMgdG8gWSBjb29yZGluYXRlcywgaS5lLiByb3dzXG4gICAgICAgICAgICBfYm9hcmQucHVzaChBcnJheShib2FyZFNpemUpLmZpbGwoJy0nKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2JvYXJkO1xuICAgIH1cblxuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlckJvYXJkKCkge1xuICAgICAgICBsZXQgcmVuZGVyZWQgPSAnJztcbiAgICAgICAgY29uc3QgaGl0U3ltYm9sID0gJyEnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpKyspIHtcbiAgICAgICAgICAgIHJlbmRlcmVkICs9ICdcXG4nO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkU2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGJvYXJkW2ldW2pdO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgYSBzaGlwIHByZXNlbnQgYXQgY3VycmVudCBjb29yZHNcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC5nZXROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZ3JpZC5nZXRTeW1ib2woKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc2hpcCBoaXQgYXQgbG9jYXRpb24sIHRoZW4gbW9kaWZ5IHNoaXAgc3ltYm9sIHdpdGggJyEnXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTeW1ib2wgPSBoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzaGlwTmFtZSArIGhpdFN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzaGlwTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGAke3JlbmRlcmVkfSAke1N0cmluZyhzaGlwU3ltYm9sKS5wYWRTdGFydCgzLCAnICcpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGEgc2hvdCBtaXNzIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYXQgY3VycmVudCBjb29yZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gYCR7cmVuZGVyZWR9ICR7U3RyaW5nKGdyaWQpLnBhZFN0YXJ0KDMsICcgJyl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZW5kZXJlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUaWxlKHBvc1ksIHBvc1gpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkW3Bvc1ldW3Bvc1hdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRpbGUoZ3JpZENvb3JkLCB2YWx1ZSkge1xuICAgICAgICBib2FyZFtncmlkQ29vcmRbMF1dW2dyaWRDb29yZFsxXV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNaXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBtaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkU3RhcnQsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IHdvcmtzIGZvciByb3dzIC8gaG9yaXpvbnRhbCB0cmF2ZXJzYWxcbiAgICAgICAgZnVuY3Rpb24qIGJvYXJkVGlsZUdlbmVyYXRvcigpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SWR4ID0gY29vcmRTdGFydFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xTdGFydCA9IGNvb3JkU3RhcnRbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29sRW5kID0gY29sU3RhcnQgKyBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIC8vIGZpeCByb3csIHRyYXZlcnNlIGNvbHVtbnNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29sU3RhcnQ7IGkgPCBjb2xFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9hcmRbcm93SWR4XVtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0lkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1N0YXJ0ID0gY29vcmRTdGFydFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dFbmQgPSBjb29yZFN0YXJ0WzBdICsgc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sSWR4ID0gY29vcmRTdGFydFsxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpeCBjb2x1bW4sIHRyYXZlcnNlIHJvd3NcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcm93U3RhcnQ7IGkgPCByb3dFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9hcmRbaV1bY29sSWR4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbElkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tQbGFjZW1lbnRGb3JFeGlzdGluZ1NoaXBzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBnZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS52YWx1ZSAhPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGlsZSBpcyBub3QgZW1wdHkhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBlcmZvcm1TaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIGdlbikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt0aWxlLnJvd0lkeF1bdGlsZS5pXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9nZW4gPSBib2FyZFRpbGVHZW5lcmF0b3IoKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBfZ2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3RpbGUuaV1bdGlsZS5jb2xJZHhdID0gc2hpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hlY2tQbGFjZW1lbnRGb3JFeGlzdGluZ1NoaXBzKCk7XG4gICAgICAgIHBlcmZvcm1TaGlwUGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRpbGUgPSBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dO1xuXG4gICAgICAgIC8vIGNoZWNrIHBvc2l0aW9uIGZvciBzaGlwIG9iamVjdFxuICAgICAgICBpZiAodGFyZ2V0ZWRUaWxlLmdldE5hbWUpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRpbGUgaGFzbid0IGFscmVhZHkgYmVlbiBoaXQgYW5kIHNoaXAgc3RpbGwgYWZsb2F0XG4gICAgICAgICAgICBpZiAoIWhpdHMuaGFzKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSkgJiYgIXRhcmdldGVkVGlsZS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBBdFRpbGUgPSB0YXJnZXRlZFRpbGU7XG5cbiAgICAgICAgICAgICAgICBzaGlwQXRUaWxlLmhpdCgpO1xuICAgICAgICAgICAgICAgIC8vIHJlZ2lzdGVyIHRoYXQgc2hpcCBoYXMgYmVlbiBoaXQgKzFcbiAgICAgICAgICAgICAgICBoaXRzLmFkZChKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIHNoaXAgd2FzIGhpdFxuICAgICAgICAgICAgICAgIHNoaXBBdFRpbGUucG9zaXRpb25zSGl0LmFkZChKU09OLnN0cmluZ2lmeShbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdXSkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBBdFRpbGUuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNTdW5rLnB1c2goc2hpcEF0VGlsZS5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0hpdCcsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbWlzc2VzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0YXJnZXRlZFRpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtaXNzZXMuYWRkKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtaXNzZWQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ01pc3NlZCcsXG4gICAgICAgICAgICAgICAgY29vcmRzOiBwb3NpdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICBjb29yZHM6IHBvc2l0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXZlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChzaGlwc1N1bmspLnNpemUgPT09IDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGdldFRpbGUsXG4gICAgICAgIHNldFRpbGUsXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgcmVuZGVyQm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0U2hpcHNTdW5rLFxuICAgICAgICBoYXZlQWxsU2hpcHNTdW5rLFxuICAgIH07XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gICAgLy8gQk9UVE9NIGdyaWQ6IHBsYXllcnMnIG93biBzaGlwc1xuICAgIC8vIFRPUCBncmlkOiBwbGF5ZXJzJyB0YXJnZXR0aW5nIGdyaWQgZm9yIHJlY29yZGluZyBhdHRhY2tzIG9uIHRoZSBlbmVteVxuXG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6IFNoaXAoJ2NhcnJpZXInKSxcbiAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICBjcnVpc2VyOiBTaGlwKCdjcnVpc2VyJyksXG4gICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXG4gICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgfTtcblxuICAgIGNvbnN0IGhpdHMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWlzc2VzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGdyaWRSb3VsZXR0ZSA9IFtdO1xuXG4gICAgY29uc3QgYm9hcmQgPSB7XG4gICAgICAgIHRvcDogR2FtZUJvYXJkKCksXG4gICAgICAgIGJvdHRvbTogR2FtZUJvYXJkKCksXG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFNoaXBzUGxhY2VkID0gKCkgPT4gT2JqZWN0LnZhbHVlcyhzaGlwcykuZXZlcnkoKHNoaXApID0+IHNoaXAucGxhY2VkID09PSB0cnVlKTtcblxuICAgIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGJvYXJkLnRvcCA9IEdhbWVCb2FyZCgpO1xuICAgICAgICBib2FyZC5ib3R0b20gPSBHYW1lQm9hcmQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgc2hpcHMuY2FycmllciA9IFNoaXAoJ2NhcnJpZXInKTtcbiAgICAgICAgc2hpcHMuYmF0dGxlc2hpcCA9IFNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICAgICAgc2hpcHMuY3J1aXNlciA9IFNoaXAoJ2NydWlzZXInKTtcbiAgICAgICAgc2hpcHMuc3VibWFyaW5lID0gU2hpcCgnc3VibWFyaW5lJyk7XG4gICAgICAgIHNoaXBzLmRlc3Ryb3llciA9IFNoaXAoJ2Rlc3Ryb3llcicpO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcE5hbWUsIGJhc2lzUG9zaXRpb24sIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHNbc2hpcE5hbWVdLCBiYXNpc1Bvc2l0aW9uLCBvcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBzW3NoaXBOYW1lXS5wbGFjZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cEJvdHRvbUJvYXJkU3ByZWFkT3V0ID0gKCkgPT4ge1xuICAgICAgICAvLyBmdWxsIGZsZWV0IHRvIGJlIHBsYWNlZFxuICAgICAgICBwbGFjZVNoaXAoJ2NhcnJpZXInLCBbMiwgNF0sICdoJyk7XG4gICAgICAgIHBsYWNlU2hpcCgnYmF0dGxlc2hpcCcsIFs4LCA2XSwgJ2gnKTtcbiAgICAgICAgcGxhY2VTaGlwKCdjcnVpc2VyJywgWzIsIDJdLCAndicpO1xuICAgICAgICBwbGFjZVNoaXAoJ3N1Ym1hcmluZScsIFs1LCA0XSwgJ3YnKTtcbiAgICAgICAgcGxhY2VTaGlwKCdkZXN0cm95ZXInLCBbOCwgMV0sICd2Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwQm90dG9tQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuY2FycmllciwgWzAsIDBdLCAndicpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXBzLmJhdHRsZXNoaXAsIFswLCAxXSwgJ3YnKTtcbiAgICAgICAgYm9hcmQuYm90dG9tLnBsYWNlU2hpcChzaGlwcy5jcnVpc2VyLCBbMCwgMl0sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuc3VibWFyaW5lLCBbMCwgM10sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuZGVzdHJveWVyLCBbMCwgNF0sICd2Jyk7XG4gICAgfTtcblxuICAgIC8vIHJlbmRlciBib3RoIHRvcCBhbmQgYm90dG9tIGJvYXJkc1xuICAgIGNvbnN0IHJlbmRlclBsYXllckJvYXJkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9wQm9hcmRUaXRsZSA9ICdUQVJHRVRUSU5HJy5wYWRTdGFydCgyNiwgJyAnKTtcbiAgICAgICAgY29uc3QgYm90dG9tQm9hcmRUaXRsZSA9IGAke25hbWUudG9VcHBlckNhc2UoKX0gU0hJUFNgLnBhZFN0YXJ0KDI4LCAnICcpO1xuICAgICAgICBjb25zdCBjb21iaW5lZFJlbmRlciA9IGAke3RvcEJvYXJkVGl0bGV9JHtib2FyZC50b3AucmVuZGVyQm9hcmQoKX1cXG4ke2JvdHRvbUJvYXJkVGl0bGV9JHtib2FyZC5ib3R0b20ucmVuZGVyQm9hcmQoKX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21iaW5lZFJlbmRlcik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uKiBwbGF5TmV4dE1vdmVQcmVzZXQoKSB7XG4gICAgICAgIHlpZWxkIFswLCA0XTtcbiAgICAgICAgeWllbGQgWzAsIDVdO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRDb29yZCA9IChtYXgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICAgICAgICBjb25zdCByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cbiAgICAgICAgY29uc3QgYXR0YWNrQ29vcmRzID0gW3JhbmRZLCByYW5kWF07XG4gICAgICAgIHJldHVybiBhdHRhY2tDb29yZHM7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXlOZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gaXNNb3ZlTGVnYWwoX21vdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBfbW92ZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBfbW92ZVsxXTtcbiAgICAgICAgICAgIGlmICh4ID49IDAgJiYgeCA8IDEwICYmIHkgPj0gMCAmJiB5IDwgMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50IGhpdHNcbiAgICAgICAgY29uc3QgcGFyc2VIaXRzID0gQXJyYXkuZnJvbShoaXRzKS5tYXAoKGhpdCkgPT4gSlNPTi5wYXJzZShoaXQpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFyc2VIaXRzKTtcblxuICAgICAgICAvLyBtYWtlIGFuIGF0dGFjayBhZGphY2VudCB0byBhIGN1cnJlbnQgaGl0XG4gICAgICAgIHdoaWxlIChwYXJzZUhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IHBhcnNlSGl0cy5zaGlmdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBtb3ZlWzBdO1xuICAgICAgICAgICAgY29uc3QgeCA9IG1vdmVbMV07XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW92ZXMgPSBbXTtcblxuICAgICAgICAgICAgLy8gYWxsIG1vdmVzIGFkamFjZW50IHRvICh5LCB4KVxuICAgICAgICAgICAgY29uc3QgZW51bWVyYXRlTW92ZXMgPSBbXG4gICAgICAgICAgICAgICAgW3kgLSAxLCB4XSwgLy8gTm9ydGggb2ZcbiAgICAgICAgICAgICAgICBbeSwgeCArIDFdLCAvLyBFYXN0IG9mXG4gICAgICAgICAgICAgICAgW3kgKyAxLCB4XSwgLy8gU291dGggb2ZcbiAgICAgICAgICAgICAgICBbeSwgeCAtIDFdLCAvLyBXZXN0IG9mXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAvLyBmaW5kIGFkamFjZW50IG1vdmVzIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gcGxheWVkXG4gICAgICAgICAgICBlbnVtZXJhdGVNb3Zlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlTGVnYWwoY29vcmQpXG4gICAgICAgICAgICAgICAgICAgICYmICFoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShjb29yZCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFtaXNzZXMuaGFzKEpTT04uc3RyaW5naWZ5KGNvb3JkKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRNb3Zlcy5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBtb3ZlIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgaWYgKHZhbGlkTW92ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZE1vdmVzLnNoaWZ0KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm8gYWRqYWNlbnQtaGl0IG1vdmUgZXhpc3QsIGF0dGFjayBhIHJhbmRvbSBzcGFjZSB0aGF0IGhhc24ndCBwcmV2aW91c2x5IGJlZW4gYXR0YWNrZWRcbiAgICAgICAgbGV0IHNtYXJ0TW92ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgcmFuZG9tTW92ZTtcblxuICAgICAgICAvLyBjb250aW51ZSBnZW5lcmF0aW5nIHJhbmRvbSBjb29yZGluYXRlcyB1bnRpbCBhbiB1bnBsYXllZCBtb3ZlIGlzIGZvdW5kXG4gICAgICAgIHdoaWxlICghc21hcnRNb3ZlKSB7XG4gICAgICAgICAgICByYW5kb21Nb3ZlID0gcmFuZENvb3JkKDEwKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc01vdmVMZWdhbChyYW5kb21Nb3ZlKVxuICAgICAgICAgICAgICAgICYmICFoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShyYW5kb21Nb3ZlKSlcbiAgICAgICAgICAgICAgICAmJiAhbWlzc2VzLmhhcyhKU09OLnN0cmluZ2lmeShyYW5kb21Nb3ZlKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUm91bGV0dGUucHVzaChyYW5kb21Nb3ZlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgTW92ZSAke3JhbmRvbU1vdmV9IHNlZW4gYmVmb3JlIWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzbWFydE1vdmUpIHJldHVybiByYW5kb21Nb3ZlO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRIaXQgPSAoY29vcmQpID0+IHtcbiAgICAgICAgaGl0cy5hZGQoSlNPTi5zdHJpbmdpZnkoY29vcmQpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTWlzcyA9IChjb29yZCkgPT4ge1xuICAgICAgICBtaXNzZXMuYWRkKEpTT04uc3RyaW5naWZ5KGNvb3JkKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IG1pc3NlcztcbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgICBjb25zdCBnZXRSb3VsZXR0ZSA9ICgpID0+IGdyaWRSb3VsZXR0ZTtcblxuICAgIGNvbnN0IGdldEFsbFByZXZpb3VzQXR0YWNrcyA9ICgpID0+IG5ldyBTZXQoWy4uLmhpdHMsIC4uLm1pc3Nlc10pO1xuXG4gICAgY29uc3Qgc3RhdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsTWlzc2VzID0gZ2V0TWlzc2VzKCkuc2l6ZTtcbiAgICAgICAgY29uc3QgdG90YWxIaXRzID0gZ2V0SGl0cygpLnNpemU7XG4gICAgICAgIGNvbnN0IHRvdGFsQXR0YWNrcyA9IHRvdGFsTWlzc2VzICsgdG90YWxIaXRzO1xuICAgICAgICBjb25zdCB0b3RhbFJhbmRvbUF0dGVtcHRzID0gZ2V0Um91bGV0dGUoKS5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsTWlzc2VzLFxuICAgICAgICAgICAgdG90YWxIaXRzLFxuICAgICAgICAgICAgdG90YWxBdHRhY2tzLFxuICAgICAgICAgICAgdG90YWxSYW5kb21BdHRlbXB0cyxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBzZXR1cEJvdHRvbUJvYXJkLFxuICAgICAgICBzZXR1cEJvdHRvbUJvYXJkU3ByZWFkT3V0LFxuICAgICAgICByZW5kZXJQbGF5ZXJCb2FyZHMsXG4gICAgICAgIHBsYXlOZXh0TW92ZSxcbiAgICAgICAgcGxheU5leHRNb3ZlUHJlc2V0LFxuICAgICAgICBhZGRIaXQsXG4gICAgICAgIGFkZE1pc3MsXG4gICAgICAgIGdldEFsbFByZXZpb3VzQXR0YWNrcyxcbiAgICAgICAgZ2V0TWlzc2VzLFxuICAgICAgICBnZXRIaXRzLFxuICAgICAgICBnZXRSb3VsZXR0ZSxcbiAgICAgICAgc3RhdHMsXG4gICAgICAgIHJlc2V0Qm9hcmQsXG4gICAgICAgIHJlc2V0U2hpcHMsXG4gICAgICAgIGFsbFNoaXBzUGxhY2VkLFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJjb25zdCBTSElQX0xFTkdUSCA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBzaGlwTmFtZTtcbiAgICAvLyByZXByZXNlbnRzIHNoaXAgc3ltYm9sIGFzIHJlcHJlc2VudGVkIGluIGJvYXJkIGFycmF5XG4gICAgY29uc3Qgc3ltYm9sID0gc2hpcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgLy8gdHJhY2tzIGlmIHNoaXAgaGFzIGJlZW4gcGxhY2VkIG9uIHRoZSBib2FyZFxuICAgIGxldCBfcGxhY2VkID0gZmFsc2U7XG4gICAgLy8gdG90YWwgbnVtYmVyIG9mIHRpbWVzIHNoaXAgaGFzIGJlZW4gaGl0XG4gICAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgICAvLyB3aGVyZSB0aGUgc2hpcCBoYXMgYmVlbiBoaXQgb24gdGhlIGdyaWRcbiAgICBjb25zdCBwb3NpdGlvbnNIaXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBhbW91bnRzIG9mIGhpdHMgYSBzaGlwIGNhbiB0YWtlIGJlZm9yZSBpdCBzaW5rcyAod2hpY2ggZXF1YWxzIGl0cyBsZW5ndGgpXG4gICAgY29uc3Qgc2hpcEhpdFBvaW50cyA9IFNISVBfTEVOR1RIO1xuXG4gICAgaWYgKCEoc2hpcE5hbWUgaW4gc2hpcEhpdFBvaW50cykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICB0aW1lc0hpdCArPSAxO1xuICAgICAgICByZXR1cm4gdGltZXNIaXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGltZXNIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aW1lc0hpdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTeW1ib2woKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gc2hpcEhpdFBvaW50c1tuYW1lXSAtIHRpbWVzSGl0ID09PSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgcG9zaXRpb25zSGl0LFxuICAgICAgICBnZXRUaW1lc0hpdCxcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0U3ltYm9sLFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGxlbmd0aDogU0hJUF9MRU5HVEhbbmFtZV0sXG4gICAgICAgIHNldCBwbGFjZWQocGxhY2VkKSB7XG4gICAgICAgICAgICBfcGxhY2VkID0gcGxhY2VkO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcGxhY2VkKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wbGFjZWQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsImltcG9ydCB0b3JwZWRvSWNvbiBmcm9tICcuL2ltYWdlcy90b3JwZWRvLWljb24ucG5nJztcbmltcG9ydCBjcm9zc2hhaXJJY29uIGZyb20gJy4vaW1hZ2VzL2Nyb3NzaGFpci1pY29uLnBuZyc7XG5cbmNvbnN0IFNISVBfU1RBVFVTX0xFR0VORCA9IHtcbiAgICBoaXQ6IHtcbiAgICAgICAgaW1nU3JjOiBjcm9zc2hhaXJJY29uLFxuICAgICAgICBsZWdlbmRUZXh0OiAnU2hpcCBoYXMgYmVlbiBoaXQnLFxuICAgIH0sXG4gICAgc3Vuazoge1xuICAgICAgICBpbWdTcmM6IHRvcnBlZG9JY29uLFxuICAgICAgICBsZWdlbmRUZXh0OiAnU2hpcCBoYXMgYmVlbiBzdW5rJyxcbiAgICB9LFxufTtcblxuLyogVmlldy5qcyBpcyBvdXIgRE9NIG1vZHVsZSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldygpIHtcbiAgICAvLyBpbml0aWFsIHBoYXNlIG9mIHRoZSBnYW1lIGlzIHNoaXAgcGxhY2VtZW50XG4gICAgbGV0IGdhbWVQaGFzZSA9ICdzaGlwX3BsYWNlbWVudCc7XG4gICAgbGV0IGdhbWVSZWFkeVRvU3RhcnQgPSBmYWxzZTtcbiAgICBsZXQgZmlyc3RUdXJuUGxheWVkID0gZmFsc2U7XG4gICAgbGV0IHNoaXBUb1BsYWNlID0gbnVsbDtcbiAgICBsZXQgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgIGNvbnN0IE1JU1NJT05fTE9HX1NJWkUgPSA2O1xuICAgIGNvbnN0IGxvZ1F1ZXVlID0gW107XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHcmlkKGdyaWRZLCBncmlkWCkge1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwR3JpZFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVzaGlwLWdyaWQudG9wJyk7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXBHcmlkQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXAtZ3JpZC5ib3R0b20nKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRZICogZ3JpZFg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmF0dGxlc2hpcEdyaWRUb3AuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRZICogZ3JpZFg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmF0dGxlc2hpcEdyaWRCb3R0b20uYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTaGlwcyhib2FyZEFyciwgd2hpY2hET01HcmlkLCByZXNldCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGRpdkdyaWRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5iYXR0bGVzaGlwLWdyaWQuJHt3aGljaERPTUdyaWR9IGRpdmApLFxuICAgICAgICApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkR3JpZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZCA9IGJvYXJkQXJyW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgZGl2IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHBvc2l0aW9uIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRpdkdyaWRzW2kgKiAxMCArIGpdO1xuICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBjb29yZHMgdG8gZGF0YSBhdHRyaWJ1dGUgKHVzZWQgbGF0ZXIgZm9yIGF0dGFja3MpXG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQuZ3JpZENvb3JkID0gSlNPTi5zdHJpbmdpZnkoW2ksIGpdKTtcblxuICAgICAgICAgICAgICAgIC8vIG1hcmsgaXQgYXMgYSBzaGlwIGRpdlxuICAgICAgICAgICAgICAgIGlmIChib2FyZEFyciAmJiBib2FyZEdyaWQuZ2V0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZEVycm9yVG9NaXNzaW9uTG9nKGVycm9yU3RyKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck1pc3Npb25Mb2dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1taXNzaW9uLWxvZy0tbGlzdCcpO1xuICAgICAgICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0VudHJ5LnRleHRDb250ZW50ID0gZXJyb3JTdHI7XG4gICAgICAgIHBsYXllck1pc3Npb25Mb2dMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aXRsZUNhc2Uoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUVuZW15U2hpcHNMaXN0KHNoaXBzT2JqLCB1cGRhdGUpIHtcbiAgICAgICAgY29uc3QgbXlTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1zaGlwcy1saXN0Jyk7XG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgIG15U2hpcHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMoc2hpcHNPYmopO1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcGxheWVyIHR3byBzaGlwIG9iamVjdHNcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBzaGlwRGl2LmNsYXNzTmFtZSA9ICdlbmVteS1zaGlwLWNvbnRhaW5lcic7XG4gICAgICAgICAgICBzaGlwQnRuLnRleHRDb250ZW50ID0gdGl0bGVDYXNlKHNoaXAuZ2V0TmFtZSgpKTtcblxuICAgICAgICAgICAgY29uc3QgdG9ycGVkb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY29uc3QgY3Jvc3NoYWlySW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB0b3JwZWRvSW1nLnNyYyA9IHRvcnBlZG9JY29uO1xuICAgICAgICAgICAgY3Jvc3NoYWlySW1nLnNyYyA9IGNyb3NzaGFpckljb247XG5cbiAgICAgICAgICAgIHRvcnBlZG9JbWcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgY3Jvc3NoYWlySW1nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgY3Jvc3NoYWlyIGljb24gaWYgZW5lbXkgc2hpcCBoYXMgYmVlbiBoaXRcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFRpbWVzSGl0KCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlySW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGlzcGxheSB0b3JwZWRvIGljb24gaWYgZW5lbXkgc2hpcCBoYXMgYmVlbiBzdW5rXG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRvcnBlZG9JbWcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwRGl2LmFwcGVuZChzaGlwQnRuKTtcbiAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoY3Jvc3NoYWlySW1nKTtcbiAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQodG9ycGVkb0ltZyk7XG4gICAgICAgICAgICBteVNoaXBzLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRHcmlkTGlzdGVuZXJzKGNhbGxiYWNrLCB0b3BCb2FyZCwgYm90dG9tQm9hcmQpIHtcbiAgICAgICAgY29uc3QgdG9wR3JpZERpdkVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5iYXR0bGVzaGlwLWdyaWQudG9wIGRpdmApLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBib3R0b21HcmlkRGl2RWxlbWVudHMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJhdHRsZXNoaXAtZ3JpZC5ib3R0b20gZGl2YCksXG4gICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyVGFyZ2V0dGluZ0dyaWQoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXZHcmlkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJhdHRsZXNoaXAtZ3JpZC50b3AgZGl2YCkpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRHcmlkID0gdG9wQm9hcmRbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkaXZHcmlkc1tpICogMTAgKyBqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRHcmlkID09PSAnSCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmRHcmlkID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQm90dG9tR3JpZCgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZEdyaWQgPSBib3R0b21Cb2FyZFtpXVtqXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGRpdiB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBwb3NpdGlvbiBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gYm90dG9tR3JpZERpdkVsZW1lbnRzW2kgKiAxMCArIGpdO1xuICAgICAgICAgICAgICAgICAgICAvLyBhc3NpZ24gY29vcmRzIHRvIGRhdGEgYXR0cmlidXRlICh1c2VkIGxhdGVyIGZvciBhdHRhY2tzKVxuICAgICAgICAgICAgICAgICAgICAvLyBkaXYuZGF0YXNldC5ncmlkQ29vcmQgPSBKU09OLnN0cmluZ2lmeShbaSwgal0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZEdyaWQuZ2V0TmFtZSAmJiBib2FyZEdyaWQucG9zaXRpb25zSGl0LmhhcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkR2FtZUxvb3BDbGlja0xpc3RlbmVyID0gKF9ncmlkKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGUgbWFpbiBcImdhbWUgbG9vcFwiXG4gICAgICAgICAgICBfZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWdhbWVSZWFkeVRvU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yVG9NaXNzaW9uTG9nKCdBbGwgc2hpcHMgbXVzdCBiZSBwbGFjZWQgYmVmb3JlIGdhbWUgY2FuIHN0YXJ0LicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9ncmlkLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgX2dyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLnBsYXlUdXJuKEpTT04ucGFyc2UoX2dyaWQuZGF0YXNldC5ncmlkQ29vcmQpLCBjYWxsYmFjay5wbGF5Q29tcHV0ZXJNb3ZlKCkpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLnByaW50Qm9hcmRzKCk7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB0YXJnZXR0aW5nICh0b3ApIGdyaWQgYWZ0ZXIgYXR0YWNrIGlzIHBsYXllZFxuICAgICAgICAgICAgICAgIHJlbmRlclRhcmdldHRpbmdHcmlkKCk7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHBsYXllcidzIHZpZXcgKGJvdHRvbSBncmlkKSAtIEFJIG1vdmVzIHN0cmFpZ2h0IGFmdGVyXG4gICAgICAgICAgICAgICAgdXBkYXRlQm90dG9tR3JpZCgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUVuZW15U2hpcHNMaXN0KGNhbGxiYWNrLnBsYXllclR3by5zaGlwcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5VHVybkNhbGxUb0FjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LXR1cm4tY3RhJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdFR1cm5QbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RUdXJuUGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVR1cm5DYWxsVG9BY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZS1hcnJvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFkZFZpY3RvcnlBbGVydExpc3RlbmVyID0gKF9ncmlkKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVja3MgaWYgcGxheWVyIGhhcyB3b24gb3IgbG9zdFxuICAgICAgICAgICAgX2dyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjYWxsYmFjay52aWN0b3J5U3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IGhhdmUgd29uIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAtMToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIGxvc3QhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9wR3JpZERpdkVsZW1lbnRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgICAgICAgIGFkZEdhbWVMb29wQ2xpY2tMaXN0ZW5lcihncmlkKTtcbiAgICAgICAgICAgIGFkZFZpY3RvcnlBbGVydExpc3RlbmVyKGdyaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3VuZFRvTmVhcmVzdDEwKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyIC8gMTApICogMTA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoYXBwKSB7XG4gICAgICAgIGNvbnN0IFNISVBfTEVOR1RIID0ge1xuICAgICAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICAgICAgZGVzdHJveWVyOiAyLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZS1idG4nKTtcbiAgICAgICAgY29uc3QgcmVzZXRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWdhbWUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1zaGlwcy1idG4nKTtcblxuICAgICAgICBjb25zdCBkZXJlZ2lzdGVyR3JpZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdkdyaWRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYmF0dGxlc2hpcC1ncmlkLnRvcCBkaXZgKSk7XG4gICAgICAgICAgICBkaXZHcmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbGwgZXhpc3RpbmcgbGlzdGVuZXJzIGJ5IHJlcGxhY2luZyBkaXYgd2l0aCBvd24gZGVlcCBjbG9uZVxuICAgICAgICAgICAgICAgIGdyaWQucmVwbGFjZVdpdGgoZ3JpZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lID0gKHJlc2V0KSA9PiB7XG4gICAgICAgICAgICBhcHAucHJpbnRCb2FyZHMoKTtcblxuICAgICAgICAgICAgLy8gaWYoIWdhbWVSZWFkeVRvU3RhcnQpXG5cbiAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0cyBib2FyZCBhbmQgc2hpcHMgZm9yIGJvdGggcGxheWVyc1xuICAgICAgICAgICAgICAgIGFwcC5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAvLyByZS1pbml0aWFsaXNlcyBET00gdmlldyBvZiB0b3AgYW5kIGJvdHRvbSBib2FyZFxuICAgICAgICAgICAgICAgIHJlbmRlclNoaXBzKG51bGwsICd0b3AnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZW5kZXJTaGlwcyhudWxsLCAnYm90dG9tJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIGdyaWRcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyR3JpZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIC8vIHJlLWFkZCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBwbGF5ZXJcbiAgICAgICAgICAgICAgICBhZGRHcmlkTGlzdGVuZXJzKFxuICAgICAgICAgICAgICAgICAgICBhcHAsXG4gICAgICAgICAgICAgICAgICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQudG9wLmdldEJvYXJkKCksXG4gICAgICAgICAgICAgICAgICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmdldEJvYXJkKCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBwbGFjZSBBSSdzIHNoaXBzXG4gICAgICAgICAgICAgICAgYXBwLnNldHVwR2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc2V0U2hpcFBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmF0dGxlc2hpcC1ncmlkLmJvdHRvbSBkaXYnKTtcbiAgICAgICAgICAgIGJvdHRvbURpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBUb1BsYWNlICYmIGRpdi5jbGFzc0xpc3QuY29udGFpbnMoc2hpcFRvUGxhY2UudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoc2hpcFRvUGxhY2UudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxhY2VTaGlwT25DbGljayA9IChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbmRFcnJvclRvTWlzc2lvbkxvZygnQ2Fubm90IHBsYWNlIHNoaXAgd2hlbiBubyBzaGlwIGhhcyBiZWVuIHNlbGVjdGVkIScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwVG9QbGFjZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gSlNPTi5wYXJzZShldnQudGFyZ2V0LmRhdGFzZXQuZ3JpZENvb3JkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuYW1lOiAke3NoaXBOYW1lfSwgY29vcmQ6ICR7Y29vcmRzfSwgb3JpZW50YXRpb246ICR7c2hpcE9yaWVudGF0aW9ufWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXBwLnBsYXllck9uZS5zaGlwcyk7XG5cbiAgICAgICAgICAgIC8vIGRvIG5vdCBwbGFjZSB0aGUgc2hpcCBpZiBhbHJlYWR5IHBsYWNlZFxuICAgICAgICAgICAgaWYgKGFwcC5wbGF5ZXJPbmUuc2hpcHNbc2hpcE5hbWVdLnBsYWNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NoaXBOYW1lfSBhbHJlYWR5IHBsYWNlZCFgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IHRpbGUgaXMgb2NjdXBpZWQsIGRpc3BsYXkgZXJyb3IgaW4gdmlld1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIHBsYWNlIHNlbGVjdGVkIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgICAgICBhcHAucGxheWVyT25lLnBsYWNlU2hpcChzaGlwTmFtZSwgY29vcmRzLCBzaGlwT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBib3R0b20gZ3JpZCB0byBzaG93IG5ld2x5IHBsYWNlZCBzaGlwXG4gICAgICAgICAgICAgICAgcmVuZGVyU2hpcHMoYXBwLnBsYXllck9uZS5ib2FyZC5ib3R0b20uZ2V0Qm9hcmQoKSwgJ2JvdHRvbScpO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2FtZSBpcyByZWFkeSB0byBzdGFydCBhZnRlciBhbGwgc2hpcHMgcGxhY2VkXG4gICAgICAgICAgICAgICAgaWYgKGFwcC5wbGF5ZXJPbmUuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lUmVhZHlUb1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiBwaGFzZSB0byBnYW1lX3RpbWUgb25jZSBhbGwgc2hpcHMgcGxhY2VkXG4gICAgICAgICAgICAgICAgICAgIGdhbWVQaGFzZSA9ICdnYW1lX3RpbWUnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFjZVNoaXBDYWxsVG9BY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utc2hpcHMtY3RhJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlUdXJuQ2FsbFRvQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktdHVybi1jdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwQ2FsbFRvQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVR1cm5DYWxsVG9BY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1hcnJvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJNaXNzaW9uTG9nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbmV3RW50cnkudGV4dENvbnRlbnQgPSBgQ2Fubm90IHBsYWNlICR7c2hpcE5hbWV9OiB0aWxlIGlzIG9jY3VwaWVkIWA7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9nUXVldWUubGVuZ3RoID49IE1JU1NJT05fTE9HX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbG9nUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIG5ldyBlbnRyeSB0byBlbmQgb2YgcXVldWVcbiAgICAgICAgICAgICAgICAgICAgbG9nUXVldWUucHVzaChuZXdFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxsIG1pc3Npb24gbG9nIGNoaWxkcmVuIHdpdGggcXVldWVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1pc3Npb25Mb2dMaXN0LnJlcGxhY2VDaGlsZHJlbiguLi5sb2dRdWV1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dRdWV1ZS5wdXNoKG5ld0VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTWlzc2lvbkxvZ0xpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaG93U2hpcE91dGxpbmVPbkhvdmVyID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgLy8gZG8gbm90IGdlbmVyYXRlIG91dGxpbmUgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgICAgICAgICAgIGlmIChhcHAucGxheWVyT25lLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzaGlwQ2xhc3M7XG5cbiAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSkge1xuICAgICAgICAgICAgICAgIHNoaXBDbGFzcyA9IHNoaXBUb1BsYWNlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gSlNPTi5wYXJzZShldnQudGFyZ2V0LmRhdGFzZXQuZ3JpZENvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmF0dGxlc2hpcC1ncmlkLmJvdHRvbSBkaXYnKTtcblxuICAgICAgICAgICAgY29uc3QgaSA9IGN1cnNvclBvc2l0aW9uWzBdO1xuICAgICAgICAgICAgY29uc3QgaiA9IGN1cnNvclBvc2l0aW9uWzFdO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlcyB0aGUgZmxhdCBhcnJheSBpbmRleCBnaXZlbiB0aGUgYXNzb2NpYXRlZCBbeSwgeF0gYXJyYXkgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGJhc2lzR3JpZEluZGV4ID0gaSAqIDEwICsgajtcblxuICAgICAgICAgICAgcmVzZXRTaGlwUGxhY2VtZW50KCk7XG5cbiAgICAgICAgICAgIC8vIGxlbmd0aCBkZXBlbmRzIG9uIHR5cGUgb2Ygc2hpcFxuICAgICAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IFNISVBfTEVOR1RIW3NoaXBDbGFzc107XG5cbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIGhvcml6b250YWwgc2hpcCBvdXRsaW5lXG4gICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gYmFzaXNHcmlkSW5kZXg7IGsgPCBiYXNpc0dyaWRJbmRleCArIHNoaXBMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHNob3cgaG92ZXIgaWYgd2hvbGUgc2hpcCBjYW4gZml0IGhvcml6b250YWxseVxuICAgICAgICAgICAgICAgICAgICBpZiAoayAvIHJvdW5kVG9OZWFyZXN0MTAoYmFzaXNHcmlkSW5kZXgpIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gYm90dG9tRGl2c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHNoaXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSB2ZXJ0aWNhbCBzaGlwIG91dGxpbmVcbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGJhc2lzR3JpZEluZGV4OyBrIDwgYmFzaXNHcmlkSW5kZXggKyBzaGlwTGVuZ3RoICogMTA7IGsgKz0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc2hpcCBib2R5IGlzIHdpdGhpbiBib3VuZHMgb2YgZ3JpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoayA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gYm90dG9tRGl2c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHNoaXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gKioqIHJlcXVpcmVzIHJlZmFjdG9yaW5nICoqKlxuICAgICAgICBjb25zdCBzZXR1cFNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBteVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwcy1hcmVhJyk7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llciddO1xuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBzaGlwQnRuLnRleHRDb250ZW50ID0gc2hpcDtcbiAgICAgICAgICAgICAgICBteVNoaXBzLmFwcGVuZENoaWxkKHNoaXBCdG4pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1zaGlwcy1hcmVhIGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAvLyBDbGlja2luZyBvbiBzaGlwIGJ1dHRvbiBzZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgc2hpcCB0byB0aGF0IHNoaXBcbiAgICAgICAgICAgIFsuLi5zaGlwQnV0dG9uc10uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJ0bi50ZXh0Q29udGVudCA9PT0gJ0NoYW5nZSBPcmllbnRhdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBUb1BsYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXAgb3JpZW50YXRpb246ICR7c2hpcE9yaWVudGF0aW9ufWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwIG9yaWVudGF0aW9uOiAke3NoaXBPcmllbnRhdGlvbn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzaGlwVG9QbGFjZSA9IGJ0bi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnRseSBzZWxlY3RlZCBzaGlwOiAke3NoaXBUb1BsYWNlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEVhY2ggZ3JpZCBjZWxsIGlzIGFzc2lnbmVkIGEgbGlzdGVuZXIgdGhhdCBzdXBwb3J0cyBzaGlwIHBsYWNlbWVudCBvbiBob3ZlclxuICAgICAgICAgICAgY29uc3QgYm90dG9tRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXR0bGVzaGlwLWdyaWQuYm90dG9tIGRpdicpO1xuXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBib3R0b20gZ3JpZCB0aWxlLCBhZGQgbGlzdGVuZXJzIGZvciBzaGlwIHBsYWNlbWVudFxuICAgICAgICAgICAgWy4uLmJvdHRvbURpdnNdLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93U2hpcE91dGxpbmVPbkhvdmVyKTtcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBPbkNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0R2FtZUJ0bik7XG5cbiAgICAgICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RhcnRHYW1lKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2V0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0YXJ0R2FtZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0dXBTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgIHVwZGF0ZUVuZW15U2hpcHNMaXN0KGFwcC5wbGF5ZXJUd28uc2hpcHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoaXBTdGF0dXNJY29uTGVnZW5kKCkge1xuICAgICAgICBjb25zdCBsZWdlbmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVnZW5kLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBsZWdlbmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhTSElQX1NUQVRVU19MRUdFTkQpLmZvckVhY2goKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVnZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBsZWdlbmRUZXh0LnRleHRDb250ZW50ID0gc3RhdHVzLmxlZ2VuZFRleHQ7XG4gICAgICAgICAgICBsZWdlbmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZC1pdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHN0YXR1cy5pbWdTcmM7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbGVnZW5kLWljb24nKTtcblxuICAgICAgICAgICAgbGVnZW5kSXRlbS5hcHBlbmQoaW1nLCBsZWdlbmRUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxlZ2VuZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmRJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVHcmlkLFxuICAgICAgICByZW5kZXJTaGlwcyxcbiAgICAgICAgYWRkR3JpZExpc3RlbmVycyxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMsXG4gICAgICAgIGFkZFNoaXBTdGF0dXNJY29uTGVnZW5kLFxuICAgIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vQmF0dGxlc2hpcCc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNwbGFzaEltZyBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwLnN2Zyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBteVNwbGFzaEltZyA9IG5ldyBJbWFnZSgpO1xubXlTcGxhc2hJbWcuc3JjID0gc3BsYXNoSW1nO1xubXlTcGxhc2hJbWcuY2xhc3NOYW1lID0gJ3NwbGFzaC1iYXR0bGVzaGlwLWltZyc7XG5ib2R5LmFwcGVuZENoaWxkKG15U3BsYXNoSW1nKTtcblxuY29uc29sZS5sb2coJ0xvYWRpbmcgYXBwLmpzJyk7XG5cbmNvbnN0IGFwcCA9IEJhdHRsZXNoaXAoJ1BsYXllcicsIHRydWUsIDEwLCAxMCk7XG5jb25zdCB2aWV3ID0gVmlldygpO1xuXG5hcHAuc2V0dXBHYW1lKCk7XG5jb25zdCBwbGF5ZXJUb3BHcmlkID0gYXBwLnBsYXllck9uZS5ib2FyZC50b3AuZ2V0Qm9hcmQoKTtcbmNvbnN0IHBsYXllckJvdHRvbUdyaWQgPSBhcHAucGxheWVyT25lLmJvYXJkLmJvdHRvbS5nZXRCb2FyZCgpO1xuXG52aWV3LmNyZWF0ZUdyaWQoMTAsIDEwKTtcbnZpZXcucmVuZGVyU2hpcHMocGxheWVyQm90dG9tR3JpZCwgJ2JvdHRvbScpO1xudmlldy5yZW5kZXJTaGlwcyhwbGF5ZXJUb3BHcmlkLCAndG9wJyk7XG52aWV3LmFkZEV2ZW50TGlzdGVuZXJzKGFwcCk7XG52aWV3LmFkZEdyaWRMaXN0ZW5lcnMoXG4gICAgYXBwLFxuICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQudG9wLmdldEJvYXJkKCksXG4gICAgYXBwLnBsYXllck9uZS5ib2FyZC5ib3R0b20uZ2V0Qm9hcmQoKSxcbik7XG52aWV3LmFkZFNoaXBTdGF0dXNJY29uTGVnZW5kKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=