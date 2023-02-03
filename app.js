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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #f3f3f3;\n    /* overflow-y: hidden; */\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\n.hide {\n    display: none;\n}\n\n.game-title {\n    margin: 0;\n    padding: 0;\n    font-size: 4rem;\n    font-family: 'Black Ops One', cursive;\n}\n\n.game-buttons {\n    /* display: flex; */\n    display: none;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.game-buttons button {\n    font-size: 1rem;\n    text-align: start;\n    background-color: hsl(72, 5%, 79%);\n}\n\n.splash-battleship-img {\n    width: 100%;\n    pointer-events: none;\n    opacity: 0.25;\n    z-index: -999;\n}\n\n.battleship-grid {\n    margin: 2vmin;\n    display: grid;\n    /* grid-template-rows: repeat(10, 4.6vmin);\n    grid-template-columns: repeat(10, 4.6vmin); */\n    grid-template-rows: repeat(10, 3.6vmin);\n    grid-template-columns: repeat(10, 3.6vmin);\n    background-color: hsl(200, 100%, 50%);\n}\n\n.battleship-grid div {\n    border: 1px solid hsla(0, 0%, 100%, .2);\n}\n\n.battleship-grid .ship {\n    background-color: lightgray;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.submarine,\n.destroyer {\n    background-color: lightgray;\n}\n\n.battleship-grid .hit {\n    background-color: hsl(15, 100%, 50%);\n}\n\n.battleship-grid .miss {\n    background-color: hsl(0, 4%, 16%);\n}\n\n.main-gameplay-area {\n    display: grid;\n    grid-template-areas:\n        \"a b c\"\n        \"d e f\"\n        \"g h i\";\n}\n\n.player-mission-control,\n.enemy-mission-control {\n    display: grid;\n    flex-direction: column;\n}\n\n.player-mission-log,\n.enemy-mission-log {\n    margin: 2vmin;\n    padding: 10px;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    border: solid 1px black;\n    font-size: .8rem;\n    overflow: scroll;\n}\n\n.player-mission-log--list,\n.enemy-mission-log--list {\n    list-style-type: none;\n    padding: 0;\n}\n\n.player-mission-log--list li,\n.enemy-mission-log--list li {\n    margin: 8px 0;\n}\n\n.player-ships-area,\n.enemy-ships-area {\n    margin: 2vmin;\n    display: flex;\n    flex-direction: column;\n    align-self: end;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    color: white;\n}\n\n.player-ships-area {\n    background-color: hsl(240, 100%, 50%);\n}\n\n.enemy-ships-area {\n    background-color: hsl(0, 68%, 50%);\n}\n\n.enemy-ships-area button {\n    width: 150px;\n    height: 1.5rem;\n    border: none;\n    border-bottom: solid 1px black;\n    background-color: orangered;\n}\n\n.enemy-ships-area img {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.enemy-ship-container {\n    display: flex;\n    flex: row;\n    align-items: center;\n}\n\n.your-ships-heading {\n    padding: 0;\n    margin: 0;\n    color: white;\n}\n\n.legend-container {\n    display: flex;\n    flex-grow: 1;\n    align-items: end;\n}\n\n.legend-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1.5rem 1fr;\n    grid-template-rows: 1rem 1rem;\n    font-size: .7rem;\n}\n\n.legend-item img {\n    height: 1rem;\n    width: 1rem;\n}\n\n.legend-icon {\n    justify-self: end;\n    margin-right: 5px;\n}\n\n/* Bouncy Arrow Styling */\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    color: black;\n    font-size: 3rem;\n}\n\n.hide-arrow {\n    color: #f3f3f3;\n    pointer-events: none;\n    user-select: none;\n}\n\n.arrow {\n    text-align: center;\n    /* margin: 8% 0; */\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n.bounce {\n    animation: bounce 2s infinite;\n}\n\n@keyframes bounce {\n\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n        transform: translateY(0);\n    }\n\n    40% {\n        transform: translateY(-25px);\n    }\n\n    60% {\n        transform: translateY(-15px);\n    }\n}\n\n#cta-player-bottom-grid {\n    display: flex;\n    justify-content: center;\n    font-size: .8rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;;;IAGI,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb;iDAC6C;IAC7C,uCAAuC;IACvC,0CAA0C;IAC1C,qCAAqC;AACzC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;;;;;IAKI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb;;;eAGW;AACf;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,UAAU;AACd;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,wBAAwB;IACxB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iCAAiC;IACjC,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA,yBAAyB;AACzB;IACI;;;;iBAIa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;;IAEI;;;;;QAKI,wBAAwB;IAC5B;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');\n\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #f3f3f3;\n    /* overflow-y: hidden; */\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\n.hide {\n    display: none;\n}\n\n.game-title {\n    margin: 0;\n    padding: 0;\n    font-size: 4rem;\n    font-family: 'Black Ops One', cursive;\n}\n\n.game-buttons {\n    /* display: flex; */\n    display: none;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.game-buttons button {\n    font-size: 1rem;\n    text-align: start;\n    background-color: hsl(72, 5%, 79%);\n}\n\n.splash-battleship-img {\n    width: 100%;\n    pointer-events: none;\n    opacity: 0.25;\n    z-index: -999;\n}\n\n.battleship-grid {\n    margin: 2vmin;\n    display: grid;\n    /* grid-template-rows: repeat(10, 4.6vmin);\n    grid-template-columns: repeat(10, 4.6vmin); */\n    grid-template-rows: repeat(10, 3.6vmin);\n    grid-template-columns: repeat(10, 3.6vmin);\n    background-color: hsl(200, 100%, 50%);\n}\n\n.battleship-grid div {\n    border: 1px solid hsla(0, 0%, 100%, .2);\n}\n\n.battleship-grid .ship {\n    background-color: lightgray;\n}\n\n.carrier,\n.battleship,\n.cruiser,\n.submarine,\n.destroyer {\n    background-color: lightgray;\n}\n\n.battleship-grid .hit {\n    background-color: hsl(15, 100%, 50%);\n}\n\n.battleship-grid .miss {\n    background-color: hsl(0, 4%, 16%);\n}\n\n.main-gameplay-area {\n    display: grid;\n    grid-template-areas:\n        \"a b c\"\n        \"d e f\"\n        \"g h i\";\n}\n\n.player-mission-control,\n.enemy-mission-control {\n    display: grid;\n    flex-direction: column;\n}\n\n.player-mission-log,\n.enemy-mission-log {\n    margin: 2vmin;\n    padding: 10px;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    border: solid 1px black;\n    font-size: .8rem;\n    overflow: scroll;\n}\n\n.player-mission-log--list,\n.enemy-mission-log--list {\n    list-style-type: none;\n    padding: 0;\n}\n\n.player-mission-log--list li,\n.enemy-mission-log--list li {\n    margin: 8px 0;\n}\n\n.player-ships-area,\n.enemy-ships-area {\n    margin: 2vmin;\n    display: flex;\n    flex-direction: column;\n    align-self: end;\n    height: calc(3.6vh * 10);\n    width: 200px;\n    color: white;\n}\n\n.player-ships-area {\n    background-color: hsl(240, 100%, 50%);\n}\n\n.enemy-ships-area {\n    background-color: hsl(0, 68%, 50%);\n}\n\n.enemy-ships-area button {\n    width: 150px;\n    height: 1.5rem;\n    border: none;\n    border-bottom: solid 1px black;\n    background-color: orangered;\n}\n\n.enemy-ships-area img {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.enemy-ship-container {\n    display: flex;\n    flex: row;\n    align-items: center;\n}\n\n.your-ships-heading {\n    padding: 0;\n    margin: 0;\n    color: white;\n}\n\n.legend-container {\n    display: flex;\n    flex-grow: 1;\n    align-items: end;\n}\n\n.legend-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1.5rem 1fr;\n    grid-template-rows: 1rem 1rem;\n    font-size: .7rem;\n}\n\n.legend-item img {\n    height: 1rem;\n    width: 1rem;\n}\n\n.legend-icon {\n    justify-self: end;\n    margin-right: 5px;\n}\n\n/* Bouncy Arrow Styling */\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 48;\n    color: black;\n    font-size: 3rem;\n}\n\n.hide-arrow {\n    color: #f3f3f3;\n    pointer-events: none;\n    user-select: none;\n}\n\n.arrow {\n    text-align: center;\n    /* margin: 8% 0; */\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n.bounce {\n    animation: bounce 2s infinite;\n}\n\n@keyframes bounce {\n\n    0%,\n    20%,\n    50%,\n    80%,\n    100% {\n        transform: translateY(0);\n    }\n\n    40% {\n        transform: translateY(-25px);\n    }\n\n    60% {\n        transform: translateY(-15px);\n    }\n}\n\n#cta-player-bottom-grid {\n    display: flex;\n    justify-content: center;\n    font-size: .8rem;\n}"],"sourceRoot":""}]);
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
                    // console.log(randCoords);
                    // console.log(`Orientation: ${orientation}`);
                    board.bottom.placeShip(ship, randCoords, orientation);
                    ships[ship.getName()].placed = true;
                    break;
                }
                catch (error) {
                    // console.log(error);
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
                    // console.log(`Currently selected ship: ${shipToPlace}`);
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

    function addImageAttributionLink() {
        const imageAttrAnchor = document.getElementById('image-attribution-link');
        console.log(imageAttrAnchor);
        imageAttrAnchor.href = './attribution.html';
    }

    return {
        createGrid,
        renderShips,
        addGridListeners,
        addEventListeners,
        addShipStatusIconLegend,
        addImageAttributionLink,
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
view.addImageAttributionLink();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURvRDtBQUNJOztBQUV4RDtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFhO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCLHFEQUFXO0FBQzNCO0FBQ0EsS0FBSztBQUNMOztBQUVB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SDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNZOztBQUVqQjtBQUMyQjs7QUFFaEQ7QUFDQTtBQUNBLGtCQUFrQixtREFBUztBQUMzQjtBQUNBOztBQUVBOztBQUVBLFlBQVksdURBQVU7QUFDdEIsYUFBYSxpREFBSTs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG4gICAgLyogb3ZlcmZsb3cteTogaGlkZGVuOyAqL1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmXFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdCbGFjayBPcHMgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmdhbWUtYnV0dG9ucyB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5nYW1lLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDcyLCA1JSwgNzklKTtcXG59XFxuXFxuLnNwbGFzaC1iYXR0bGVzaGlwLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgei1pbmRleDogLTk5OTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0LjZ2bWluKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQuNnZtaW4pOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMy42dm1pbik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzLjZ2bWluKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAxMDAlLCAuMik7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5jcnVpc2VyLFxcbi5zdWJtYXJpbmUsXFxuLmRlc3Ryb3llciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE1LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIC5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDQlLCAxNiUpO1xcbn1cXG5cXG4ubWFpbi1nYW1lcGxheS1hcmVhIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJhIGIgY1xcXCJcXG4gICAgICAgIFxcXCJkIGUgZlxcXCJcXG4gICAgICAgIFxcXCJnIGggaVxcXCI7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1jb250cm9sLFxcbi5lbmVteS1taXNzaW9uLWNvbnRyb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tbG9nLFxcbi5lbmVteS1taXNzaW9uLWxvZyB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogY2FsYygzLjZ2aCAqIDEwKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWxvZy0tbGlzdCxcXG4uZW5lbXktbWlzc2lvbi1sb2ctLWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QgbGksXFxuLmVuZW15LW1pc3Npb24tbG9nLS1saXN0IGxpIHtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG59XFxuXFxuLnBsYXllci1zaGlwcy1hcmVhLFxcbi5lbmVteS1zaGlwcy1hcmVhIHtcXG4gICAgbWFyZ2luOiAydm1pbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBoZWlnaHQ6IGNhbGMoMy42dmggKiAxMCk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzLWFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uZW5lbXktc2hpcHMtYXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA2OCUsIDUwJSk7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIGltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4uZW5lbXktc2hpcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55b3VyLXNoaXBzLWhlYWRpbmcge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxlZ2VuZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5sZWdlbmQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41cmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxcmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbi5sZWdlbmQtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ubGVnZW5kLWljb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi8qIEJvdW5jeSBBcnJvdyBTdHlsaW5nICovXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAwLFxcbiAgICAgICAgJ3dnaHQnIDQwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhpZGUtYXJyb3cge1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1hcmdpbjogOCUgMDsgKi9cXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYm91bmNlIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG5cXG4gICAgMCUsXFxuICAgIDIwJSxcXG4gICAgNTAlLFxcbiAgICA4MCUsXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuXFxuICAgIDQwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xcbiAgICB9XFxuXFxuICAgIDYwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcbiAgICB9XFxufVxcblxcbiNjdGEtcGxheWVyLWJvdHRvbS1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2I7aURBQzZDO0lBQzdDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOzs7OztJQUtJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7O2VBR1c7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0k7Ozs7aUJBSWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUk7Ozs7O1FBS0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbiAgICAvKiBvdmVyZmxvdy15OiBoaWRkZW47ICovXFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWZcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FtZS10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0JsYWNrIE9wcyBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZ2FtZS1idXR0b25zIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmdhbWUtYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNzIsIDUlLCA3OSUpO1xcbn1cXG5cXG4uc3BsYXNoLWJhdHRsZXNoaXAtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICB6LWluZGV4OiAtOTk5O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIHtcXG4gICAgbWFyZ2luOiAydm1pbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQuNnZtaW4pO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNC42dm1pbik7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzLjZ2bWluKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMuNnZtaW4pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIC4yKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNhcnJpZXIsXFxuLmJhdHRsZXNoaXAsXFxuLmNydWlzZXIsXFxuLnN1Ym1hcmluZSxcXG4uZGVzdHJveWVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTUsIDEwMCUsIDUwJSk7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNCUsIDE2JSk7XFxufVxcblxcbi5tYWluLWdhbWVwbGF5LWFyZWEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImEgYiBjXFxcIlxcbiAgICAgICAgXFxcImQgZSBmXFxcIlxcbiAgICAgICAgXFxcImcgaCBpXFxcIjtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWNvbnRyb2wsXFxuLmVuZW15LW1pc3Npb24tY29udHJvbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wbGF5ZXItbWlzc2lvbi1sb2csXFxuLmVuZW15LW1pc3Npb24tbG9nIHtcXG4gICAgbWFyZ2luOiAydm1pbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiBjYWxjKDMuNnZoICogMTApO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4ucGxheWVyLW1pc3Npb24tbG9nLS1saXN0LFxcbi5lbmVteS1taXNzaW9uLWxvZy0tbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBsYXllci1taXNzaW9uLWxvZy0tbGlzdCBsaSxcXG4uZW5lbXktbWlzc2lvbi1sb2ctLWxpc3QgbGkge1xcbiAgICBtYXJnaW46IDhweCAwO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzLWFyZWEsXFxuLmVuZW15LXNoaXBzLWFyZWEge1xcbiAgICBtYXJnaW46IDJ2bWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGhlaWdodDogY2FsYygzLjZ2aCAqIDEwKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMtYXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDEwMCUsIDUwJSk7XFxufVxcblxcbi5lbmVteS1zaGlwcy1hcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDY4JSwgNTAlKTtcXG59XFxuXFxuLmVuZW15LXNoaXBzLWFyZWEgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLmVuZW15LXNoaXBzLWFyZWEgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5lbmVteS1zaGlwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnlvdXItc2hpcHMtaGVhZGluZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGVnZW5kLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLmxlZ2VuZC1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVyZW0gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG59XFxuXFxuLmxlZ2VuZC1pdGVtIGltZyB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5sZWdlbmQtaWNvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLyogQm91bmN5IEFycm93IFN0eWxpbmcgKi9cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAgICAgJ0ZJTEwnIDAsXFxuICAgICAgICAnd2dodCcgNDAwLFxcbiAgICAgICAgJ0dSQUQnIDAsXFxuICAgICAgICAnb3BzeicgNDg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uaGlkZS1hcnJvdyB7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogbWFyZ2luOiA4JSAwOyAqL1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5ib3VuY2Uge1xcbiAgICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcblxcbiAgICAwJSxcXG4gICAgMjAlLFxcbiAgICA1MCUsXFxuICAgIDgwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgNDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XFxuICAgIH1cXG5cXG4gICAgNjAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxuICAgIH1cXG59XFxuXFxuI2N0YS1wbGF5ZXItYm90dG9tLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXR0bGVzaGlwKHBsYXllck5hbWUsIGlzQ29tcHV0ZXIsIGdyaWRYLCBncmlkWSkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBpc0NvbXB1dGVyID8gUGxheWVyKCdDb21wdXRlcicpIDogUGxheWVyKCdQbGF5ZXIgVHdvJyk7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG5cbiAgICBmdW5jdGlvbiBzZXR1cEdhbWUoKSB7XG4gICAgICAgIC8vIHBsYXllck9uZS5zZXR1cEJvdHRvbUJvYXJkU3ByZWFkT3V0KCk7XG4gICAgICAgIC8vIHBsYXllclR3by5zZXR1cEJvdHRvbUJvYXJkKCk7XG4gICAgICAgIHBsYXllclR3by5zZXR1cEJvdHRvbUJvYXJkUmFuZG9tKCk7XG4gICAgICAgIHBsYXllclR3by5yZW5kZXJQbGF5ZXJCb2FyZHMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgICAgIHBsYXllck9uZS5yZXNldEJvYXJkKCk7XG4gICAgICAgIHBsYXllck9uZS5yZXNldFNoaXBzKCk7XG5cbiAgICAgICAgcGxheWVyVHdvLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyVHdvLnJlc2V0U2hpcHMoKTtcblxuICAgICAgICBzZXR1cEdhbWUoKTtcblxuICAgICAgICBwcmludEJvYXJkcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1cyA9ICgpID0+ICh7XG4gICAgICAgIHBsYXllck9uZTogcGxheWVyT25lLm5hbWUsXG4gICAgICAgIHBsYXllclR3bzogcGxheWVyVHdvLm5hbWUsXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IGN1cnJlbnRQbGF5ZXIubmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmRzID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJPbmUucmVuZGVyUGxheWVyQm9hcmRzKCk7XG4gICAgICAgIHBsYXllclR3by5yZW5kZXJQbGF5ZXJCb2FyZHMoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0F0dGFja1Jlc3VsdChfcmVzdWx0LCBfbW92ZSwgdGhlUGxheWVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX3Jlc3VsdC5zdGF0dXMgPT09ICdIaXQnKSB7XG4gICAgICAgICAgICAgICAgLy8gY3VycmVudFBsYXllci5ib2FyZC50b3AuZ2V0Qm9hcmQoKVtfbW92ZVswXV1bX21vdmVbMV1dID0gJ0gnO1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5ib2FyZC50b3Auc2V0VGlsZShfbW92ZSwgJ0gnKTtcbiAgICAgICAgICAgICAgICB0aGVQbGF5ZXIuYWRkSGl0KF9tb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9yZXN1bHQuc3RhdHVzID09PSAnTWlzc2VkJykge1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5ib2FyZC50b3Auc2V0VGlsZShfbW92ZSwgJ3gnKTtcbiAgICAgICAgICAgICAgICB0aGVQbGF5ZXIuYWRkTWlzcyhfbW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcmVzdWx0LnN0YXR1cyA9PT0gJ0Vycm9yJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2sgZXJyb3I6ICR7X3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2F0Y2g6IHJlc3VsdCAke19yZXN1bHR9LCBtb3ZlOiAke19tb3ZlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxheVR1cm4gPSAobW92ZSwgY3B1TW92ZSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRQbGF5ZXIgPSBwbGF5ZXJUd28uYm9hcmQuYm90dG9tLnJlY2VpdmVBdHRhY2sobW92ZSk7XG4gICAgICAgIHByb2Nlc3NBdHRhY2tSZXN1bHQocmVzdWx0UGxheWVyLCBtb3ZlLCBwbGF5ZXJPbmUpO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHdvO1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyc01vdmUgPSBjcHVNb3ZlO1xuICAgICAgICBjb25zdCByZXN1bHRDb21wdXRlciA9IHBsYXllck9uZS5ib2FyZC5ib3R0b20ucmVjZWl2ZUF0dGFjayhjb21wdXRlcnNNb3ZlKTtcbiAgICAgICAgcHJvY2Vzc0F0dGFja1Jlc3VsdChyZXN1bHRDb21wdXRlciwgY29tcHV0ZXJzTW92ZSwgcGxheWVyVHdvKTtcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxheUNvbXB1dGVyTW92ZSA9ICgpID0+IHBsYXllclR3by5wbGF5TmV4dE1vdmUoKTtcblxuICAgIGNvbnN0IGdhbWVTdGF0cyA9ICgpID0+ICh7XG4gICAgICAgIHBsYXllck9uZTogcGxheWVyT25lLnN0YXRzKCksXG4gICAgICAgIHBsYXllclR3bzogcGxheWVyVHdvLnN0YXRzKCksXG4gICAgfSk7XG5cbiAgICBjb25zdCB2aWN0b3J5U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAvLyBwbGF5ZXIgd2lucyB3aGVuIEFJIGhhcyBsb3N0IGFsbCBzaGlwc1xuICAgICAgICBpZiAocGxheWVyVHdvLmJvYXJkLmJvdHRvbS5oYXZlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBsYXllciBsb3NlcyB3aGVuIHRoZXkgaGF2ZSBsb3N0IGFsbCBzaGlwc1xuICAgICAgICBpZiAocGxheWVyT25lLmJvYXJkLmJvdHRvbS5oYXZlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UgZ2FtZSBpcyBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgc2V0dXBHYW1lLFxuICAgICAgICByZXNldEdhbWUsXG4gICAgICAgIHByaW50Qm9hcmRzLFxuICAgICAgICBwbGF5VHVybixcbiAgICAgICAgcGxheUNvbXB1dGVyTW92ZSxcbiAgICAgICAgZ2FtZVN0YXRzLFxuICAgICAgICBwbGF5ZXJPbmUsXG4gICAgICAgIHBsYXllclR3byxcbiAgICAgICAgdmljdG9yeVN0YXR1cyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3NcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBzaGlwc1N1bmsgPSBbXTtcblxuICAgIC8vIHNoaXAgbGVuZ3RoIHVzZWQgdG8gcGVyZm9ybSBzaGlwIHBsYWNlbWVudFxuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IF9ib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBub3RlIHRoYXQgYm9hcmRbaV0gcmVmZXJzIHRvIFkgY29vcmRpbmF0ZXMsIGkuZS4gcm93c1xuICAgICAgICAgICAgX2JvYXJkLnB1c2goQXJyYXkoYm9hcmRTaXplKS5maWxsKCctJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9ib2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkID0gJyc7XG4gICAgICAgIGNvbnN0IGhpdFN5bWJvbCA9ICchJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICByZW5kZXJlZCArPSAnXFxuJztcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBib2FyZFtpXVtqXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgc2hpcCBwcmVzZW50IGF0IGN1cnJlbnQgY29vcmRzXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuZ2V0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGdyaWQuZ2V0U3ltYm9sKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNoaXAgaGl0IGF0IGxvY2F0aW9uLCB0aGVuIG1vZGlmeSBzaGlwIHN5bWJvbCB3aXRoICchJ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwU3ltYm9sID0gaGl0cy5oYXMoSlNPTi5zdHJpbmdpZnkoW2ksIGpdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2hpcE5hbWUgKyBoaXRTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2hpcE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgPSBgJHtyZW5kZXJlZH0gJHtTdHJpbmcoc2hpcFN5bWJvbCkucGFkU3RhcnQoMywgJyAnKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhIHNob3QgbWlzcyBoYXMgYmVlbiByZWdpc3RlcmVkIGF0IGN1cnJlbnQgY29vcmRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGAke3JlbmRlcmVkfSAke1N0cmluZyhncmlkKS5wYWRTdGFydCgzLCAnICcpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW5kZXJlZDtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVuZGVyZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGlsZShwb3NZLCBwb3NYKSB7XG4gICAgICAgIHJldHVybiBib2FyZFtwb3NZXVtwb3NYXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUaWxlKGdyaWRDb29yZCwgdmFsdWUpIHtcbiAgICAgICAgYm9hcmRbZ3JpZENvb3JkWzBdXVtncmlkQ29vcmRbMV1dID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWlzc2VzKCkge1xuICAgICAgICByZXR1cm4gbWlzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZFN0YXJ0LCBvcmllbnRhdGlvbikge1xuICAgICAgICAvLyBjdXJyZW50bHkgb25seSB3b3JrcyBmb3Igcm93cyAvIGhvcml6b250YWwgdHJhdmVyc2FsXG4gICAgICAgIGZ1bmN0aW9uKiBib2FyZFRpbGVHZW5lcmF0b3IoKSB7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0lkeCA9IGNvb3JkU3RhcnRbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgY29sU3RhcnQgPSBjb29yZFN0YXJ0WzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbEVuZCA9IGNvbFN0YXJ0ICsgc2hpcC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXggcm93LCB0cmF2ZXJzZSBjb2x1bW5zXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvbFN0YXJ0OyBpIDwgY29sRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJvYXJkW3Jvd0lkeF1baV0sXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dTdGFydCA9IGNvb3JkU3RhcnRbMF07XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93RW5kID0gY29vcmRTdGFydFswXSArIHNoaXAubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbElkeCA9IGNvb3JkU3RhcnRbMV07XG5cbiAgICAgICAgICAgICAgICAvLyBmaXggY29sdW1uLCB0cmF2ZXJzZSByb3dzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHJvd1N0YXJ0OyBpIDwgcm93RW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJvYXJkW2ldW2NvbElkeF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrUGxhY2VtZW50Rm9yRXhpc3RpbmdTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdlbiA9IGJvYXJkVGlsZUdlbmVyYXRvcigpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgZ2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUudmFsdWUgIT09ICctJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbGUgaXMgbm90IGVtcHR5IScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwZXJmb3JtU2hpcFBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdlbiA9IGJvYXJkVGlsZUdlbmVyYXRvcigpO1xuXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBnZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbdGlsZS5yb3dJZHhdW3RpbGUuaV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBfZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRpbGUgb2YgX2dlbikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt0aWxlLmldW3RpbGUuY29sSWR4XSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNoZWNrUGxhY2VtZW50Rm9yRXhpc3RpbmdTaGlwcygpO1xuICAgICAgICBwZXJmb3JtU2hpcFBsYWNlbWVudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ZWRUaWxlID0gYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXTtcblxuICAgICAgICAvLyBjaGVjayBwb3NpdGlvbiBmb3Igc2hpcCBvYmplY3RcbiAgICAgICAgaWYgKHRhcmdldGVkVGlsZS5nZXROYW1lKSB7XG4gICAgICAgICAgICAvLyBjaGVjayB0aWxlIGhhc24ndCBhbHJlYWR5IGJlZW4gaGl0IGFuZCBzaGlwIHN0aWxsIGFmbG9hdFxuICAgICAgICAgICAgaWYgKCFoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpICYmICF0YXJnZXRlZFRpbGUuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwQXRUaWxlID0gdGFyZ2V0ZWRUaWxlO1xuXG4gICAgICAgICAgICAgICAgc2hpcEF0VGlsZS5oaXQoKTtcbiAgICAgICAgICAgICAgICAvLyByZWdpc3RlciB0aGF0IHNoaXAgaGFzIGJlZW4gaGl0ICsxXG4gICAgICAgICAgICAgICAgaGl0cy5hZGQoSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcbiAgICAgICAgICAgICAgICAvLyByZWNvcmQgdGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBzaGlwIHdhcyBoaXRcbiAgICAgICAgICAgICAgICBzaGlwQXRUaWxlLnBvc2l0aW9uc0hpdC5hZGQoSlNPTi5zdHJpbmdpZnkoW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblsxXV0pKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaGlwQXRUaWxlLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzU3Vuay5wdXNoKHNoaXBBdFRpbGUuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdIaXQnLFxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGFuZGxlIG1pc3Nlc1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ZWRUaWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbWlzc2VzLmFkZChKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWlzc2VkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdNaXNzZWQnLFxuICAgICAgICAgICAgICAgIGNvb3JkczogcG9zaXRpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgY29vcmRzOiBwb3NpdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBzaGlwc1N1bms7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGF2ZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQoc2hpcHNTdW5rKS5zaXplID09PSA1O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBnZXRUaWxlLFxuICAgICAgICBzZXRUaWxlLFxuICAgICAgICBnZXRNaXNzZXMsXG4gICAgICAgIHJlbmRlckJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGdldFNoaXBzU3VuayxcbiAgICAgICAgaGF2ZUFsbFNoaXBzU3VuayxcbiAgICB9O1xufVxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICAgIC8vIEJPVFRPTSBncmlkOiBwbGF5ZXJzJyBvd24gc2hpcHNcbiAgICAvLyBUT1AgZ3JpZDogcGxheWVycycgdGFyZ2V0dGluZyBncmlkIGZvciByZWNvcmRpbmcgYXR0YWNrcyBvbiB0aGUgZW5lbXlcblxuICAgIGNvbnN0IHNoaXBzID0ge1xuICAgICAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJyksXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcbiAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxuICAgICAgICBkZXN0cm95ZXI6IFNoaXAoJ2Rlc3Ryb3llcicpLFxuICAgIH07XG5cbiAgICBjb25zdCBoaXRzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG1pc3NlcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBncmlkUm91bGV0dGUgPSBbXTtcblxuICAgIGNvbnN0IGJvYXJkID0ge1xuICAgICAgICB0b3A6IEdhbWVCb2FyZCgpLFxuICAgICAgICBib3R0b206IEdhbWVCb2FyZCgpLFxuICAgIH07XG5cbiAgICBjb25zdCBhbGxTaGlwc1BsYWNlZCA9ICgpID0+IE9iamVjdC52YWx1ZXMoc2hpcHMpLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnBsYWNlZCA9PT0gdHJ1ZSk7XG5cbiAgICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBib2FyZC50b3AgPSBHYW1lQm9hcmQoKTtcbiAgICAgICAgYm9hcmQuYm90dG9tID0gR2FtZUJvYXJkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzLmNhcnJpZXIgPSBTaGlwKCdjYXJyaWVyJyk7XG4gICAgICAgIHNoaXBzLmJhdHRsZXNoaXAgPSBTaGlwKCdiYXR0bGVzaGlwJyk7XG4gICAgICAgIHNoaXBzLmNydWlzZXIgPSBTaGlwKCdjcnVpc2VyJyk7XG4gICAgICAgIHNoaXBzLnN1Ym1hcmluZSA9IFNoaXAoJ3N1Ym1hcmluZScpO1xuICAgICAgICBzaGlwcy5kZXN0cm95ZXIgPSBTaGlwKCdkZXN0cm95ZXInKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBOYW1lLCBiYXNpc1Bvc2l0aW9uLCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXBzW3NoaXBOYW1lXSwgYmFzaXNQb3NpdGlvbiwgb3JpZW50YXRpb24pO1xuICAgICAgICBzaGlwc1tzaGlwTmFtZV0ucGxhY2VkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBCb3R0b21Cb2FyZFNwcmVhZE91dCA9ICgpID0+IHtcbiAgICAgICAgLy8gZnVsbCBmbGVldCB0byBiZSBwbGFjZWRcbiAgICAgICAgcGxhY2VTaGlwKCdjYXJyaWVyJywgWzIsIDRdLCAnaCcpO1xuICAgICAgICBwbGFjZVNoaXAoJ2JhdHRsZXNoaXAnLCBbOCwgNl0sICdoJyk7XG4gICAgICAgIHBsYWNlU2hpcCgnY3J1aXNlcicsIFsyLCAyXSwgJ3YnKTtcbiAgICAgICAgcGxhY2VTaGlwKCdzdWJtYXJpbmUnLCBbNSwgNF0sICd2Jyk7XG4gICAgICAgIHBsYWNlU2hpcCgnZGVzdHJveWVyJywgWzgsIDFdLCAndicpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cEJvdHRvbUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXBzLmNhcnJpZXIsIFswLCAwXSwgJ3YnKTtcbiAgICAgICAgYm9hcmQuYm90dG9tLnBsYWNlU2hpcChzaGlwcy5iYXR0bGVzaGlwLCBbMCwgMV0sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc2hpcHMuY3J1aXNlciwgWzAsIDJdLCAndicpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXBzLnN1Ym1hcmluZSwgWzAsIDNdLCAndicpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXBzLmRlc3Ryb3llciwgWzAsIDRdLCAndicpO1xuICAgIH07XG5cbiAgICBjb25zdCByYW5kQ29vcmQgPSAobWF4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgICAgICAgY29uc3QgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IFtyYW5kWSwgcmFuZFhdO1xuICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRzO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cEJvdHRvbUJvYXJkUmFuZG9tID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbk9wdGlvbnMgPSBbJ2gnLCAndiddO1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDA7XG5cbiAgICAgICAgICAgIHdoaWxlICh0cmllcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRDb29yZHMgPSByYW5kQ29vcmQoMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb25PcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9uT3B0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kQ29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYE9yaWVudGF0aW9uOiAke29yaWVudGF0aW9ufWApO1xuICAgICAgICAgICAgICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHNoaXAsIHJhbmRDb29yZHMsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNbc2hpcC5nZXROYW1lKCldLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZXMgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbGxTaGlwc1BsYWNlZCgpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgcmFuZG9taXNhdGlvbiBmYWlsZWQhJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcmVuZGVyIGJvdGggdG9wIGFuZCBib3R0b20gYm9hcmRzXG4gICAgY29uc3QgcmVuZGVyUGxheWVyQm9hcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3BCb2FyZFRpdGxlID0gJ1RBUkdFVFRJTkcnLnBhZFN0YXJ0KDI2LCAnICcpO1xuICAgICAgICBjb25zdCBib3R0b21Cb2FyZFRpdGxlID0gYCR7bmFtZS50b1VwcGVyQ2FzZSgpfSBTSElQU2AucGFkU3RhcnQoMjgsICcgJyk7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkUmVuZGVyID0gYCR7dG9wQm9hcmRUaXRsZX0ke2JvYXJkLnRvcC5yZW5kZXJCb2FyZCgpfVxcbiR7Ym90dG9tQm9hcmRUaXRsZX0ke2JvYXJkLmJvdHRvbS5yZW5kZXJCb2FyZCgpfWA7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uKiBwbGF5TmV4dE1vdmVQcmVzZXQoKSB7XG4gICAgICAgIHlpZWxkIFswLCA0XTtcbiAgICAgICAgeWllbGQgWzAsIDVdO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXlOZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gaXNNb3ZlTGVnYWwoX21vdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBfbW92ZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBfbW92ZVsxXTtcbiAgICAgICAgICAgIGlmICh4ID49IDAgJiYgeCA8IDEwICYmIHkgPj0gMCAmJiB5IDwgMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50IGhpdHNcbiAgICAgICAgY29uc3QgcGFyc2VIaXRzID0gQXJyYXkuZnJvbShoaXRzKS5tYXAoKGhpdCkgPT4gSlNPTi5wYXJzZShoaXQpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFyc2VIaXRzKTtcblxuICAgICAgICAvLyBtYWtlIGFuIGF0dGFjayBhZGphY2VudCB0byBhIGN1cnJlbnQgaGl0XG4gICAgICAgIHdoaWxlIChwYXJzZUhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IHBhcnNlSGl0cy5zaGlmdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBtb3ZlWzBdO1xuICAgICAgICAgICAgY29uc3QgeCA9IG1vdmVbMV07XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkTW92ZXMgPSBbXTtcblxuICAgICAgICAgICAgLy8gYWxsIG1vdmVzIGFkamFjZW50IHRvICh5LCB4KVxuICAgICAgICAgICAgY29uc3QgZW51bWVyYXRlTW92ZXMgPSBbXG4gICAgICAgICAgICAgICAgW3kgLSAxLCB4XSwgLy8gTm9ydGggb2ZcbiAgICAgICAgICAgICAgICBbeSwgeCArIDFdLCAvLyBFYXN0IG9mXG4gICAgICAgICAgICAgICAgW3kgKyAxLCB4XSwgLy8gU291dGggb2ZcbiAgICAgICAgICAgICAgICBbeSwgeCAtIDFdLCAvLyBXZXN0IG9mXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAvLyBmaW5kIGFkamFjZW50IG1vdmVzIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gcGxheWVkXG4gICAgICAgICAgICBlbnVtZXJhdGVNb3Zlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlTGVnYWwoY29vcmQpICYmXG4gICAgICAgICAgICAgICAgICAgICFoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShjb29yZCkpICYmXG4gICAgICAgICAgICAgICAgICAgICFtaXNzZXMuaGFzKEpTT04uc3RyaW5naWZ5KGNvb3JkKSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRNb3Zlcy5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBtb3ZlIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgaWYgKHZhbGlkTW92ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZE1vdmVzLnNoaWZ0KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm8gYWRqYWNlbnQtaGl0IG1vdmUgZXhpc3QsIGF0dGFjayBhIHJhbmRvbSBzcGFjZSB0aGF0IGhhc24ndCBwcmV2aW91c2x5IGJlZW4gYXR0YWNrZWRcbiAgICAgICAgbGV0IHNtYXJ0TW92ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgcmFuZG9tTW92ZTtcblxuICAgICAgICAvLyBjb250aW51ZSBnZW5lcmF0aW5nIHJhbmRvbSBjb29yZGluYXRlcyB1bnRpbCBhbiB1bnBsYXllZCBtb3ZlIGlzIGZvdW5kXG4gICAgICAgIHdoaWxlICghc21hcnRNb3ZlKSB7XG4gICAgICAgICAgICByYW5kb21Nb3ZlID0gcmFuZENvb3JkKDEwKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc01vdmVMZWdhbChyYW5kb21Nb3ZlKSAmJlxuICAgICAgICAgICAgICAgICFoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShyYW5kb21Nb3ZlKSkgJiZcbiAgICAgICAgICAgICAgICAhbWlzc2VzLmhhcyhKU09OLnN0cmluZ2lmeShyYW5kb21Nb3ZlKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUm91bGV0dGUucHVzaChyYW5kb21Nb3ZlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgTW92ZSAke3JhbmRvbU1vdmV9IHNlZW4gYmVmb3JlIWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzbWFydE1vdmUpIHJldHVybiByYW5kb21Nb3ZlO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRIaXQgPSAoY29vcmQpID0+IHtcbiAgICAgICAgaGl0cy5hZGQoSlNPTi5zdHJpbmdpZnkoY29vcmQpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkTWlzcyA9IChjb29yZCkgPT4ge1xuICAgICAgICBtaXNzZXMuYWRkKEpTT04uc3RyaW5naWZ5KGNvb3JkKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IG1pc3NlcztcbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcbiAgICBjb25zdCBnZXRSb3VsZXR0ZSA9ICgpID0+IGdyaWRSb3VsZXR0ZTtcblxuICAgIGNvbnN0IGdldEFsbFByZXZpb3VzQXR0YWNrcyA9ICgpID0+IG5ldyBTZXQoWy4uLmhpdHMsIC4uLm1pc3Nlc10pO1xuXG4gICAgY29uc3Qgc3RhdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsTWlzc2VzID0gZ2V0TWlzc2VzKCkuc2l6ZTtcbiAgICAgICAgY29uc3QgdG90YWxIaXRzID0gZ2V0SGl0cygpLnNpemU7XG4gICAgICAgIGNvbnN0IHRvdGFsQXR0YWNrcyA9IHRvdGFsTWlzc2VzICsgdG90YWxIaXRzO1xuICAgICAgICBjb25zdCB0b3RhbFJhbmRvbUF0dGVtcHRzID0gZ2V0Um91bGV0dGUoKS5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsTWlzc2VzLFxuICAgICAgICAgICAgdG90YWxIaXRzLFxuICAgICAgICAgICAgdG90YWxBdHRhY2tzLFxuICAgICAgICAgICAgdG90YWxSYW5kb21BdHRlbXB0cyxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBzZXR1cEJvdHRvbUJvYXJkLFxuICAgICAgICBzZXR1cEJvdHRvbUJvYXJkU3ByZWFkT3V0LFxuICAgICAgICBzZXR1cEJvdHRvbUJvYXJkUmFuZG9tLFxuICAgICAgICByZW5kZXJQbGF5ZXJCb2FyZHMsXG4gICAgICAgIHBsYXlOZXh0TW92ZSxcbiAgICAgICAgcGxheU5leHRNb3ZlUHJlc2V0LFxuICAgICAgICBhZGRIaXQsXG4gICAgICAgIGFkZE1pc3MsXG4gICAgICAgIGdldEFsbFByZXZpb3VzQXR0YWNrcyxcbiAgICAgICAgZ2V0TWlzc2VzLFxuICAgICAgICBnZXRIaXRzLFxuICAgICAgICBnZXRSb3VsZXR0ZSxcbiAgICAgICAgc3RhdHMsXG4gICAgICAgIHJlc2V0Qm9hcmQsXG4gICAgICAgIHJlc2V0U2hpcHMsXG4gICAgICAgIGFsbFNoaXBzUGxhY2VkLFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJjb25zdCBTSElQX0xFTkdUSCA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBzaGlwTmFtZTtcbiAgICAvLyByZXByZXNlbnRzIHNoaXAgc3ltYm9sIGFzIHJlcHJlc2VudGVkIGluIGJvYXJkIGFycmF5XG4gICAgY29uc3Qgc3ltYm9sID0gc2hpcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgLy8gdHJhY2tzIGlmIHNoaXAgaGFzIGJlZW4gcGxhY2VkIG9uIHRoZSBib2FyZFxuICAgIGxldCBfcGxhY2VkID0gZmFsc2U7XG4gICAgLy8gdG90YWwgbnVtYmVyIG9mIHRpbWVzIHNoaXAgaGFzIGJlZW4gaGl0XG4gICAgbGV0IHRpbWVzSGl0ID0gMDtcbiAgICAvLyB3aGVyZSB0aGUgc2hpcCBoYXMgYmVlbiBoaXQgb24gdGhlIGdyaWRcbiAgICBjb25zdCBwb3NpdGlvbnNIaXQgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBhbW91bnRzIG9mIGhpdHMgYSBzaGlwIGNhbiB0YWtlIGJlZm9yZSBpdCBzaW5rcyAod2hpY2ggZXF1YWxzIGl0cyBsZW5ndGgpXG4gICAgY29uc3Qgc2hpcEhpdFBvaW50cyA9IFNISVBfTEVOR1RIO1xuXG4gICAgaWYgKCEoc2hpcE5hbWUgaW4gc2hpcEhpdFBvaW50cykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICB0aW1lc0hpdCArPSAxO1xuICAgICAgICByZXR1cm4gdGltZXNIaXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGltZXNIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aW1lc0hpdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTeW1ib2woKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gc2hpcEhpdFBvaW50c1tuYW1lXSAtIHRpbWVzSGl0ID09PSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgcG9zaXRpb25zSGl0LFxuICAgICAgICBnZXRUaW1lc0hpdCxcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0U3ltYm9sLFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGxlbmd0aDogU0hJUF9MRU5HVEhbbmFtZV0sXG4gICAgICAgIHNldCBwbGFjZWQocGxhY2VkKSB7XG4gICAgICAgICAgICBfcGxhY2VkID0gcGxhY2VkO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcGxhY2VkKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9wbGFjZWQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiIsImltcG9ydCB0b3JwZWRvSWNvbiBmcm9tICcuL2ltYWdlcy90b3JwZWRvLWljb24ucG5nJztcbmltcG9ydCBjcm9zc2hhaXJJY29uIGZyb20gJy4vaW1hZ2VzL2Nyb3NzaGFpci1pY29uLnBuZyc7XG5cbmNvbnN0IFNISVBfU1RBVFVTX0xFR0VORCA9IHtcbiAgICBoaXQ6IHtcbiAgICAgICAgaW1nU3JjOiBjcm9zc2hhaXJJY29uLFxuICAgICAgICBsZWdlbmRUZXh0OiAnU2hpcCBoYXMgYmVlbiBoaXQnLFxuICAgIH0sXG4gICAgc3Vuazoge1xuICAgICAgICBpbWdTcmM6IHRvcnBlZG9JY29uLFxuICAgICAgICBsZWdlbmRUZXh0OiAnU2hpcCBoYXMgYmVlbiBzdW5rJyxcbiAgICB9LFxufTtcblxuLyogVmlldy5qcyBpcyBvdXIgRE9NIG1vZHVsZSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldygpIHtcbiAgICAvLyBpbml0aWFsIHBoYXNlIG9mIHRoZSBnYW1lIGlzIHNoaXAgcGxhY2VtZW50XG4gICAgbGV0IGdhbWVQaGFzZSA9ICdzaGlwX3BsYWNlbWVudCc7XG4gICAgbGV0IGdhbWVSZWFkeVRvU3RhcnQgPSBmYWxzZTtcbiAgICBsZXQgZmlyc3RUdXJuUGxheWVkID0gZmFsc2U7XG4gICAgbGV0IHNoaXBUb1BsYWNlID0gbnVsbDtcbiAgICBsZXQgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgIGNvbnN0IE1JU1NJT05fTE9HX1NJWkUgPSA2O1xuICAgIGNvbnN0IGxvZ1F1ZXVlID0gW107XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHcmlkKGdyaWRZLCBncmlkWCkge1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwR3JpZFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVzaGlwLWdyaWQudG9wJyk7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXBHcmlkQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZXNoaXAtZ3JpZC5ib3R0b20nKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRZICogZ3JpZFg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmF0dGxlc2hpcEdyaWRUb3AuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRZICogZ3JpZFg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmF0dGxlc2hpcEdyaWRCb3R0b20uYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTaGlwcyhib2FyZEFyciwgd2hpY2hET01HcmlkLCByZXNldCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGRpdkdyaWRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5iYXR0bGVzaGlwLWdyaWQuJHt3aGljaERPTUdyaWR9IGRpdmApLFxuICAgICAgICApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkR3JpZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZCA9IGJvYXJkQXJyW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgZGl2IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHBvc2l0aW9uIGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRpdkdyaWRzW2kgKiAxMCArIGpdO1xuICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBjb29yZHMgdG8gZGF0YSBhdHRyaWJ1dGUgKHVzZWQgbGF0ZXIgZm9yIGF0dGFja3MpXG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQuZ3JpZENvb3JkID0gSlNPTi5zdHJpbmdpZnkoW2ksIGpdKTtcblxuICAgICAgICAgICAgICAgIC8vIG1hcmsgaXQgYXMgYSBzaGlwIGRpdlxuICAgICAgICAgICAgICAgIGlmIChib2FyZEFyciAmJiBib2FyZEdyaWQuZ2V0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZEVycm9yVG9NaXNzaW9uTG9nKGVycm9yU3RyKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck1pc3Npb25Mb2dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1taXNzaW9uLWxvZy0tbGlzdCcpO1xuICAgICAgICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0VudHJ5LnRleHRDb250ZW50ID0gZXJyb3JTdHI7XG4gICAgICAgIHBsYXllck1pc3Npb25Mb2dMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aXRsZUNhc2Uoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUVuZW15U2hpcHNMaXN0KHNoaXBzT2JqLCB1cGRhdGUpIHtcbiAgICAgICAgY29uc3QgbXlTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1zaGlwcy1saXN0Jyk7XG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgIG15U2hpcHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXMoc2hpcHNPYmopO1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcGxheWVyIHR3byBzaGlwIG9iamVjdHNcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBzaGlwRGl2LmNsYXNzTmFtZSA9ICdlbmVteS1zaGlwLWNvbnRhaW5lcic7XG4gICAgICAgICAgICBzaGlwQnRuLnRleHRDb250ZW50ID0gdGl0bGVDYXNlKHNoaXAuZ2V0TmFtZSgpKTtcblxuICAgICAgICAgICAgY29uc3QgdG9ycGVkb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY29uc3QgY3Jvc3NoYWlySW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB0b3JwZWRvSW1nLnNyYyA9IHRvcnBlZG9JY29uO1xuICAgICAgICAgICAgY3Jvc3NoYWlySW1nLnNyYyA9IGNyb3NzaGFpckljb247XG5cbiAgICAgICAgICAgIHRvcnBlZG9JbWcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgY3Jvc3NoYWlySW1nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgY3Jvc3NoYWlyIGljb24gaWYgZW5lbXkgc2hpcCBoYXMgYmVlbiBoaXRcbiAgICAgICAgICAgIGlmIChzaGlwLmdldFRpbWVzSGl0KCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlySW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGlzcGxheSB0b3JwZWRvIGljb24gaWYgZW5lbXkgc2hpcCBoYXMgYmVlbiBzdW5rXG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRvcnBlZG9JbWcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaGlwRGl2LmFwcGVuZChzaGlwQnRuKTtcbiAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoY3Jvc3NoYWlySW1nKTtcbiAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQodG9ycGVkb0ltZyk7XG4gICAgICAgICAgICBteVNoaXBzLmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRHcmlkTGlzdGVuZXJzKGNhbGxiYWNrLCB0b3BCb2FyZCwgYm90dG9tQm9hcmQpIHtcbiAgICAgICAgY29uc3QgdG9wR3JpZERpdkVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5iYXR0bGVzaGlwLWdyaWQudG9wIGRpdmApLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBib3R0b21HcmlkRGl2RWxlbWVudHMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJhdHRsZXNoaXAtZ3JpZC5ib3R0b20gZGl2YCksXG4gICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyVGFyZ2V0dGluZ0dyaWQoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXZHcmlkcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJhdHRsZXNoaXAtZ3JpZC50b3AgZGl2YCkpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9hcmRHcmlkID0gdG9wQm9hcmRbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkaXZHcmlkc1tpICogMTAgKyBqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRHcmlkID09PSAnSCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYm9hcmRHcmlkID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQm90dG9tR3JpZCgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2FyZEdyaWQgPSBib3R0b21Cb2FyZFtpXVtqXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGRpdiB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBwb3NpdGlvbiBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gYm90dG9tR3JpZERpdkVsZW1lbnRzW2kgKiAxMCArIGpdO1xuICAgICAgICAgICAgICAgICAgICAvLyBhc3NpZ24gY29vcmRzIHRvIGRhdGEgYXR0cmlidXRlICh1c2VkIGxhdGVyIGZvciBhdHRhY2tzKVxuICAgICAgICAgICAgICAgICAgICAvLyBkaXYuZGF0YXNldC5ncmlkQ29vcmQgPSBKU09OLnN0cmluZ2lmeShbaSwgal0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZEdyaWQuZ2V0TmFtZSAmJiBib2FyZEdyaWQucG9zaXRpb25zSGl0LmhhcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkR2FtZUxvb3BDbGlja0xpc3RlbmVyID0gKF9ncmlkKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGUgbWFpbiBcImdhbWUgbG9vcFwiXG4gICAgICAgICAgICBfZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWdhbWVSZWFkeVRvU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEVycm9yVG9NaXNzaW9uTG9nKCdBbGwgc2hpcHMgbXVzdCBiZSBwbGFjZWQgYmVmb3JlIGdhbWUgY2FuIHN0YXJ0LicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9ncmlkLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgX2dyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLnBsYXlUdXJuKEpTT04ucGFyc2UoX2dyaWQuZGF0YXNldC5ncmlkQ29vcmQpLCBjYWxsYmFjay5wbGF5Q29tcHV0ZXJNb3ZlKCkpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLnByaW50Qm9hcmRzKCk7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB0YXJnZXR0aW5nICh0b3ApIGdyaWQgYWZ0ZXIgYXR0YWNrIGlzIHBsYXllZFxuICAgICAgICAgICAgICAgIHJlbmRlclRhcmdldHRpbmdHcmlkKCk7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHBsYXllcidzIHZpZXcgKGJvdHRvbSBncmlkKSAtIEFJIG1vdmVzIHN0cmFpZ2h0IGFmdGVyXG4gICAgICAgICAgICAgICAgdXBkYXRlQm90dG9tR3JpZCgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUVuZW15U2hpcHNMaXN0KGNhbGxiYWNrLnBsYXllclR3by5zaGlwcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5VHVybkNhbGxUb0FjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LXR1cm4tY3RhJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdFR1cm5QbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RUdXJuUGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVR1cm5DYWxsVG9BY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZS1hcnJvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFkZFZpY3RvcnlBbGVydExpc3RlbmVyID0gKF9ncmlkKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVja3MgaWYgcGxheWVyIGhhcyB3b24gb3IgbG9zdFxuICAgICAgICAgICAgX2dyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjYWxsYmFjay52aWN0b3J5U3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IGhhdmUgd29uIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAtMToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIGxvc3QhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9wR3JpZERpdkVsZW1lbnRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgICAgICAgIGFkZEdhbWVMb29wQ2xpY2tMaXN0ZW5lcihncmlkKTtcbiAgICAgICAgICAgIGFkZFZpY3RvcnlBbGVydExpc3RlbmVyKGdyaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3VuZFRvTmVhcmVzdDEwKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyIC8gMTApICogMTA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoYXBwKSB7XG4gICAgICAgIGNvbnN0IFNISVBfTEVOR1RIID0ge1xuICAgICAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICAgICAgZGVzdHJveWVyOiAyLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZS1idG4nKTtcbiAgICAgICAgY29uc3QgcmVzZXRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWdhbWUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZS1zaGlwcy1idG4nKTtcblxuICAgICAgICBjb25zdCBkZXJlZ2lzdGVyR3JpZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdkdyaWRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuYmF0dGxlc2hpcC1ncmlkLnRvcCBkaXZgKSk7XG4gICAgICAgICAgICBkaXZHcmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbGwgZXhpc3RpbmcgbGlzdGVuZXJzIGJ5IHJlcGxhY2luZyBkaXYgd2l0aCBvd24gZGVlcCBjbG9uZVxuICAgICAgICAgICAgICAgIGdyaWQucmVwbGFjZVdpdGgoZ3JpZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lID0gKHJlc2V0KSA9PiB7XG4gICAgICAgICAgICBhcHAucHJpbnRCb2FyZHMoKTtcblxuICAgICAgICAgICAgLy8gaWYoIWdhbWVSZWFkeVRvU3RhcnQpXG5cbiAgICAgICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0cyBib2FyZCBhbmQgc2hpcHMgZm9yIGJvdGggcGxheWVyc1xuICAgICAgICAgICAgICAgIGFwcC5yZXNldEdhbWUoKTtcbiAgICAgICAgICAgICAgICAvLyByZS1pbml0aWFsaXNlcyBET00gdmlldyBvZiB0b3AgYW5kIGJvdHRvbSBib2FyZFxuICAgICAgICAgICAgICAgIHJlbmRlclNoaXBzKG51bGwsICd0b3AnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZW5kZXJTaGlwcyhudWxsLCAnYm90dG9tJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIGdyaWRcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyR3JpZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIC8vIHJlLWFkZCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBwbGF5ZXJcbiAgICAgICAgICAgICAgICBhZGRHcmlkTGlzdGVuZXJzKFxuICAgICAgICAgICAgICAgICAgICBhcHAsXG4gICAgICAgICAgICAgICAgICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQudG9wLmdldEJvYXJkKCksXG4gICAgICAgICAgICAgICAgICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmdldEJvYXJkKCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBwbGFjZSBBSSdzIHNoaXBzXG4gICAgICAgICAgICAgICAgYXBwLnNldHVwR2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc2V0U2hpcFBsYWNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmF0dGxlc2hpcC1ncmlkLmJvdHRvbSBkaXYnKTtcbiAgICAgICAgICAgIGJvdHRvbURpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBUb1BsYWNlICYmIGRpdi5jbGFzc0xpc3QuY29udGFpbnMoc2hpcFRvUGxhY2UudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoc2hpcFRvUGxhY2UudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxhY2VTaGlwT25DbGljayA9IChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlbmRFcnJvclRvTWlzc2lvbkxvZygnQ2Fubm90IHBsYWNlIHNoaXAgd2hlbiBubyBzaGlwIGhhcyBiZWVuIHNlbGVjdGVkIScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwVG9QbGFjZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gSlNPTi5wYXJzZShldnQudGFyZ2V0LmRhdGFzZXQuZ3JpZENvb3JkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuYW1lOiAke3NoaXBOYW1lfSwgY29vcmQ6ICR7Y29vcmRzfSwgb3JpZW50YXRpb246ICR7c2hpcE9yaWVudGF0aW9ufWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXBwLnBsYXllck9uZS5zaGlwcyk7XG5cbiAgICAgICAgICAgIC8vIGRvIG5vdCBwbGFjZSB0aGUgc2hpcCBpZiBhbHJlYWR5IHBsYWNlZFxuICAgICAgICAgICAgaWYgKGFwcC5wbGF5ZXJPbmUuc2hpcHNbc2hpcE5hbWVdLnBsYWNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NoaXBOYW1lfSBhbHJlYWR5IHBsYWNlZCFgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IHRpbGUgaXMgb2NjdXBpZWQsIGRpc3BsYXkgZXJyb3IgaW4gdmlld1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIHBsYWNlIHNlbGVjdGVkIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgICAgICBhcHAucGxheWVyT25lLnBsYWNlU2hpcChzaGlwTmFtZSwgY29vcmRzLCBzaGlwT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBib3R0b20gZ3JpZCB0byBzaG93IG5ld2x5IHBsYWNlZCBzaGlwXG4gICAgICAgICAgICAgICAgcmVuZGVyU2hpcHMoYXBwLnBsYXllck9uZS5ib2FyZC5ib3R0b20uZ2V0Qm9hcmQoKSwgJ2JvdHRvbScpO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2FtZSBpcyByZWFkeSB0byBzdGFydCBhZnRlciBhbGwgc2hpcHMgcGxhY2VkXG4gICAgICAgICAgICAgICAgaWYgKGFwcC5wbGF5ZXJPbmUuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lUmVhZHlUb1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiBwaGFzZSB0byBnYW1lX3RpbWUgb25jZSBhbGwgc2hpcHMgcGxhY2VkXG4gICAgICAgICAgICAgICAgICAgIGdhbWVQaGFzZSA9ICdnYW1lX3RpbWUnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFjZVNoaXBDYWxsVG9BY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2Utc2hpcHMtY3RhJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlUdXJuQ2FsbFRvQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktdHVybi1jdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwQ2FsbFRvQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVR1cm5DYWxsVG9BY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1hcnJvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJNaXNzaW9uTG9nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbWlzc2lvbi1sb2ctLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbmV3RW50cnkudGV4dENvbnRlbnQgPSBgQ2Fubm90IHBsYWNlICR7c2hpcE5hbWV9OiB0aWxlIGlzIG9jY3VwaWVkIWA7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9nUXVldWUubGVuZ3RoID49IE1JU1NJT05fTE9HX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbG9nUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIG5ldyBlbnRyeSB0byBlbmQgb2YgcXVldWVcbiAgICAgICAgICAgICAgICAgICAgbG9nUXVldWUucHVzaChuZXdFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxsIG1pc3Npb24gbG9nIGNoaWxkcmVuIHdpdGggcXVldWVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1pc3Npb25Mb2dMaXN0LnJlcGxhY2VDaGlsZHJlbiguLi5sb2dRdWV1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dRdWV1ZS5wdXNoKG5ld0VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTWlzc2lvbkxvZ0xpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzaG93U2hpcE91dGxpbmVPbkhvdmVyID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgLy8gZG8gbm90IGdlbmVyYXRlIG91dGxpbmUgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgICAgICAgICAgIGlmIChhcHAucGxheWVyT25lLmFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzaGlwQ2xhc3M7XG5cbiAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSkge1xuICAgICAgICAgICAgICAgIHNoaXBDbGFzcyA9IHNoaXBUb1BsYWNlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gSlNPTi5wYXJzZShldnQudGFyZ2V0LmRhdGFzZXQuZ3JpZENvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmF0dGxlc2hpcC1ncmlkLmJvdHRvbSBkaXYnKTtcblxuICAgICAgICAgICAgY29uc3QgaSA9IGN1cnNvclBvc2l0aW9uWzBdO1xuICAgICAgICAgICAgY29uc3QgaiA9IGN1cnNvclBvc2l0aW9uWzFdO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlcyB0aGUgZmxhdCBhcnJheSBpbmRleCBnaXZlbiB0aGUgYXNzb2NpYXRlZCBbeSwgeF0gYXJyYXkgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGJhc2lzR3JpZEluZGV4ID0gaSAqIDEwICsgajtcblxuICAgICAgICAgICAgcmVzZXRTaGlwUGxhY2VtZW50KCk7XG5cbiAgICAgICAgICAgIC8vIGxlbmd0aCBkZXBlbmRzIG9uIHR5cGUgb2Ygc2hpcFxuICAgICAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IFNISVBfTEVOR1RIW3NoaXBDbGFzc107XG5cbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIGhvcml6b250YWwgc2hpcCBvdXRsaW5lXG4gICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gYmFzaXNHcmlkSW5kZXg7IGsgPCBiYXNpc0dyaWRJbmRleCArIHNoaXBMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHNob3cgaG92ZXIgaWYgd2hvbGUgc2hpcCBjYW4gZml0IGhvcml6b250YWxseVxuICAgICAgICAgICAgICAgICAgICBpZiAoayAvIHJvdW5kVG9OZWFyZXN0MTAoYmFzaXNHcmlkSW5kZXgpIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gYm90dG9tRGl2c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHNoaXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSB2ZXJ0aWNhbCBzaGlwIG91dGxpbmVcbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGJhc2lzR3JpZEluZGV4OyBrIDwgYmFzaXNHcmlkSW5kZXggKyBzaGlwTGVuZ3RoICogMTA7IGsgKz0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc2hpcCBib2R5IGlzIHdpdGhpbiBib3VuZHMgb2YgZ3JpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoayA8IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gYm90dG9tRGl2c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHNoaXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gKioqIHJlcXVpcmVzIHJlZmFjdG9yaW5nICoqKlxuICAgICAgICBjb25zdCBzZXR1cFNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBteVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwcy1hcmVhJyk7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llciddO1xuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBzaGlwQnRuLnRleHRDb250ZW50ID0gc2hpcDtcbiAgICAgICAgICAgICAgICBteVNoaXBzLmFwcGVuZENoaWxkKHNoaXBCdG4pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1zaGlwcy1hcmVhIGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAvLyBDbGlja2luZyBvbiBzaGlwIGJ1dHRvbiBzZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgc2hpcCB0byB0aGF0IHNoaXBcbiAgICAgICAgICAgIFsuLi5zaGlwQnV0dG9uc10uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJ0bi50ZXh0Q29udGVudCA9PT0gJ0NoYW5nZSBPcmllbnRhdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBUb1BsYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwT3JpZW50YXRpb24gPSAndic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFNoaXAgb3JpZW50YXRpb246ICR7c2hpcE9yaWVudGF0aW9ufWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwIG9yaWVudGF0aW9uOiAke3NoaXBPcmllbnRhdGlvbn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwVG9QbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzaGlwVG9QbGFjZSA9IGJ0bi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEN1cnJlbnRseSBzZWxlY3RlZCBzaGlwOiAke3NoaXBUb1BsYWNlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEVhY2ggZ3JpZCBjZWxsIGlzIGFzc2lnbmVkIGEgbGlzdGVuZXIgdGhhdCBzdXBwb3J0cyBzaGlwIHBsYWNlbWVudCBvbiBob3ZlclxuICAgICAgICAgICAgY29uc3QgYm90dG9tRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXR0bGVzaGlwLWdyaWQuYm90dG9tIGRpdicpO1xuXG4gICAgICAgICAgICAvLyBmb3IgZWFjaCBib3R0b20gZ3JpZCB0aWxlLCBhZGQgbGlzdGVuZXJzIGZvciBzaGlwIHBsYWNlbWVudFxuICAgICAgICAgICAgWy4uLmJvdHRvbURpdnNdLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93U2hpcE91dGxpbmVPbkhvdmVyKTtcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVNoaXBPbkNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0R2FtZUJ0bik7XG5cbiAgICAgICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RhcnRHYW1lKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc2V0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0YXJ0R2FtZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0dXBTaGlwUGxhY2VtZW50KCk7XG4gICAgICAgIHVwZGF0ZUVuZW15U2hpcHNMaXN0KGFwcC5wbGF5ZXJUd28uc2hpcHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoaXBTdGF0dXNJY29uTGVnZW5kKCkge1xuICAgICAgICBjb25zdCBsZWdlbmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVnZW5kLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBsZWdlbmRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhTSElQX1NUQVRVU19MRUdFTkQpLmZvckVhY2goKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVnZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBsZWdlbmRUZXh0LnRleHRDb250ZW50ID0gc3RhdHVzLmxlZ2VuZFRleHQ7XG4gICAgICAgICAgICBsZWdlbmRJdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZC1pdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHN0YXR1cy5pbWdTcmM7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbGVnZW5kLWljb24nKTtcblxuICAgICAgICAgICAgbGVnZW5kSXRlbS5hcHBlbmQoaW1nLCBsZWdlbmRUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxlZ2VuZENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmRJdGVtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbWFnZUF0dHJpYnV0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VBdHRyQW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWF0dHJpYnV0aW9uLWxpbmsnKTtcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2VBdHRyQW5jaG9yKTtcbiAgICAgICAgaW1hZ2VBdHRyQW5jaG9yLmhyZWYgPSAnLi9hdHRyaWJ1dGlvbi5odG1sJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVHcmlkLFxuICAgICAgICByZW5kZXJTaGlwcyxcbiAgICAgICAgYWRkR3JpZExpc3RlbmVycyxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMsXG4gICAgICAgIGFkZFNoaXBTdGF0dXNJY29uTGVnZW5kLFxuICAgICAgICBhZGRJbWFnZUF0dHJpYnV0aW9uTGluayxcbiAgICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuL0JhdHRsZXNoaXAnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzcGxhc2hJbWcgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcC5zdmcnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbXlTcGxhc2hJbWcgPSBuZXcgSW1hZ2UoKTtcbm15U3BsYXNoSW1nLnNyYyA9IHNwbGFzaEltZztcbm15U3BsYXNoSW1nLmNsYXNzTmFtZSA9ICdzcGxhc2gtYmF0dGxlc2hpcC1pbWcnO1xuYm9keS5hcHBlbmRDaGlsZChteVNwbGFzaEltZyk7XG5cbmNvbnNvbGUubG9nKCdMb2FkaW5nIGFwcC5qcycpO1xuXG5jb25zdCBhcHAgPSBCYXR0bGVzaGlwKCdQbGF5ZXInLCB0cnVlLCAxMCwgMTApO1xuY29uc3QgdmlldyA9IFZpZXcoKTtcblxuYXBwLnNldHVwR2FtZSgpO1xuY29uc3QgcGxheWVyVG9wR3JpZCA9IGFwcC5wbGF5ZXJPbmUuYm9hcmQudG9wLmdldEJvYXJkKCk7XG5jb25zdCBwbGF5ZXJCb3R0b21HcmlkID0gYXBwLnBsYXllck9uZS5ib2FyZC5ib3R0b20uZ2V0Qm9hcmQoKTtcblxudmlldy5jcmVhdGVHcmlkKDEwLCAxMCk7XG52aWV3LnJlbmRlclNoaXBzKHBsYXllckJvdHRvbUdyaWQsICdib3R0b20nKTtcbnZpZXcucmVuZGVyU2hpcHMocGxheWVyVG9wR3JpZCwgJ3RvcCcpO1xudmlldy5hZGRFdmVudExpc3RlbmVycyhhcHApO1xudmlldy5hZGRHcmlkTGlzdGVuZXJzKFxuICAgIGFwcCxcbiAgICBhcHAucGxheWVyT25lLmJvYXJkLnRvcC5nZXRCb2FyZCgpLFxuICAgIGFwcC5wbGF5ZXJPbmUuYm9hcmQuYm90dG9tLmdldEJvYXJkKCksXG4pO1xudmlldy5hZGRTaGlwU3RhdHVzSWNvbkxlZ2VuZCgpO1xudmlldy5hZGRJbWFnZUF0dHJpYnV0aW9uTGluaygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9