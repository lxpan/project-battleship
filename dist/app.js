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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n} */\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.battleship-grid {\n    margin: 2vmin;\n    display: grid;\n    grid-template-rows: repeat(10, 4.6vmin);\n    grid-template-columns: repeat(10, 4.6vmin);\n    background-color: hsl(200, 100%, 50%);\n}\n\n.battleship-grid div {\n    border: 1px solid hsla(0, 0%, 100%, .2);\n}\n\n.battleship-grid .ship div {\n    background-color: hsl(15, 100%, 50%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;GAIG;;AAEH;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uCAAuC;IACvC,0CAA0C;IAC1C,qCAAqC;AACzC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["/* * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n} */\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.battleship-grid {\n    margin: 2vmin;\n    display: grid;\n    grid-template-rows: repeat(10, 4.6vmin);\n    grid-template-columns: repeat(10, 4.6vmin);\n    background-color: hsl(200, 100%, 50%);\n}\n\n.battleship-grid div {\n    border: 1px solid hsla(0, 0%, 100%, .2);\n}\n\n.battleship-grid .ship div {\n    background-color: hsl(15, 100%, 50%);\n}"],"sourceRoot":""}]);
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
        playerOne.setupBottomBoardSpreadOut();
        playerTwo.setupBottomBoard();
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

    const playTurn = (move) => {
        if (currentPlayer.name === 'Player') {
            const result = playerTwo.board.bottom.receiveAttack(move);
            processAttackResult(result, move, playerOne);
            currentPlayer = playerTwo;
        }
        else if (currentPlayer.name === 'Computer') {
            const result = playerOne.board.bottom.receiveAttack(move);
            processAttackResult(result, move, playerTwo);
            currentPlayer = playerOne;
        }
    };

    const playComputerMove = () => playerTwo.playNextMove();

    const gameStats = () => ({
        playerOne: playerOne.stats(),
        playerTwo: playerTwo.stats(),
    });

    const instance = {
        status,
        currentPlayer,
        setupGame,
        printBoards,
        playTurn,
        playComputerMove,
        gameStats,
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
                    const shipName = grid.getName().charAt(0).toUpperCase();
                    // const shipSymbol = grid.isSunk() ? shipName + 'x' : shipName;
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
                hits.add(JSON.stringify(position));

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

    const hits = new Set();
    const misses = new Set();
    const gridRoulette = [];

    const board = {
        top: (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        bottom: (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    };

    const setupBottomBoardSpreadOut = () => {
        // full fleet to be placed
        const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier');
        const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship');
        const cruiser = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser');
        const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine');
        const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer');

        board.bottom.placeShip(carrier, [2, 4], 'h');
        board.bottom.placeShip(battleship, [8, 6], 'h');
        board.bottom.placeShip(cruiser, [2, 2], 'v');
        board.bottom.placeShip(submarine, [5, 4], 'v');
        board.bottom.placeShip(destroyer, [8, 1], 'v');
    };

    const setupBottomBoard = () => {
        const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier');
        const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship');
        const cruiser = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser');
        const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine');
        const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer');

        board.bottom.placeShip(carrier, [0, 0], 'v');
        board.bottom.placeShip(battleship, [0, 1], 'v');
        board.bottom.placeShip(cruiser, [0, 2], 'v');
        board.bottom.placeShip(submarine, [0, 3], 'v');
        board.bottom.placeShip(destroyer, [0, 4], 'v');
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
    let timesHit = 0;

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

    function isSunk() {
        return shipHitPoints[name] - timesHit === 0;
    }

    return {
        hit,
        getTimesHit,
        getName,
        isSunk,
        length: SHIP_LENGTH[name],
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* View.js is our DOM module */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function View() {
    function test() {
        console.log('Loading View');
    }

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

    return {
        createGrid,
        test,
    };
}());


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
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/View.js");
/* harmony import */ var _Battleship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Battleship */ "./src/Battleship.js");




console.log('Loading app.js');

_View__WEBPACK_IMPORTED_MODULE_1__["default"].test();
_View__WEBPACK_IMPORTED_MODULE_1__["default"].createGrid(10, 10);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7O0FBRUEsaUVBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRSxFQUFFOzs7Ozs7O1VDMUJMO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ1k7O0FBRXRDOztBQUVBLGtEQUFTO0FBQ1Qsd0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gKi9cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQge1xcbiAgICBtYXJnaW46IDJ2bWluO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNC42dm1pbik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0LjZ2bWluKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMCwgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAxMDAlLCAuMik7XFxufVxcblxcbi5iYXR0bGVzaGlwLWdyaWQgLnNoaXAgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE1LCAxMDAlLCA1MCUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7O0dBSUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSAqL1xcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCB7XFxuICAgIG1hcmdpbjogMnZtaW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0LjZ2bWluKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQuNnZtaW4pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAwLCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ncmlkIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIC4yKTtcXG59XFxuXFxuLmJhdHRsZXNoaXAtZ3JpZCAuc2hpcCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTUsIDEwMCUsIDUwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmF0dGxlc2hpcChwbGF5ZXJOYW1lLCBpc0NvbXB1dGVyLCBncmlkWCwgZ3JpZFkpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gaXNDb21wdXRlciA/IFBsYXllcignQ29tcHV0ZXInKSA6IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuXG4gICAgZnVuY3Rpb24gc2V0dXBHYW1lKCkge1xuICAgICAgICBwbGF5ZXJPbmUuc2V0dXBCb3R0b21Cb2FyZFNwcmVhZE91dCgpO1xuICAgICAgICBwbGF5ZXJUd28uc2V0dXBCb3R0b21Cb2FyZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1cyA9ICgpID0+ICh7XG4gICAgICAgIHBsYXllck9uZTogcGxheWVyT25lLm5hbWUsXG4gICAgICAgIHBsYXllclR3bzogcGxheWVyVHdvLm5hbWUsXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IGN1cnJlbnRQbGF5ZXIubmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmRzID0gKCkgPT4ge1xuICAgICAgICBwbGF5ZXJPbmUucmVuZGVyUGxheWVyQm9hcmRzKCk7XG4gICAgICAgIHBsYXllclR3by5yZW5kZXJQbGF5ZXJCb2FyZHMoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0F0dGFja1Jlc3VsdChfcmVzdWx0LCBfbW92ZSwgdGhlUGxheWVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX3Jlc3VsdC5zdGF0dXMgPT09ICdIaXQnKSB7XG4gICAgICAgICAgICAgICAgLy8gY3VycmVudFBsYXllci5ib2FyZC50b3AuZ2V0Qm9hcmQoKVtfbW92ZVswXV1bX21vdmVbMV1dID0gJ0gnO1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5ib2FyZC50b3Auc2V0VGlsZShfbW92ZSwgJ0gnKTtcbiAgICAgICAgICAgICAgICB0aGVQbGF5ZXIuYWRkSGl0KF9tb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9yZXN1bHQuc3RhdHVzID09PSAnTWlzc2VkJykge1xuICAgICAgICAgICAgICAgIHRoZVBsYXllci5ib2FyZC50b3Auc2V0VGlsZShfbW92ZSwgJ3gnKTtcbiAgICAgICAgICAgICAgICB0aGVQbGF5ZXIuYWRkTWlzcyhfbW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfcmVzdWx0LnN0YXR1cyA9PT0gJ0Vycm9yJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2sgZXJyb3I6ICR7X3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2F0Y2g6IHJlc3VsdCAke19yZXN1bHR9LCBtb3ZlOiAke19tb3ZlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxheVR1cm4gPSAobW92ZSkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFBsYXllci5uYW1lID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyVHdvLmJvYXJkLmJvdHRvbS5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgICAgICAgICAgcHJvY2Vzc0F0dGFja1Jlc3VsdChyZXN1bHQsIG1vdmUsIHBsYXllck9uZSk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHdvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIubmFtZSA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyT25lLmJvYXJkLmJvdHRvbS5yZWNlaXZlQXR0YWNrKG1vdmUpO1xuICAgICAgICAgICAgcHJvY2Vzc0F0dGFja1Jlc3VsdChyZXN1bHQsIG1vdmUsIHBsYXllclR3byk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXlDb21wdXRlck1vdmUgPSAoKSA9PiBwbGF5ZXJUd28ucGxheU5leHRNb3ZlKCk7XG5cbiAgICBjb25zdCBnYW1lU3RhdHMgPSAoKSA9PiAoe1xuICAgICAgICBwbGF5ZXJPbmU6IHBsYXllck9uZS5zdGF0cygpLFxuICAgICAgICBwbGF5ZXJUd286IHBsYXllclR3by5zdGF0cygpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgc2V0dXBHYW1lLFxuICAgICAgICBwcmludEJvYXJkcyxcbiAgICAgICAgcGxheVR1cm4sXG4gICAgICAgIHBsYXlDb21wdXRlck1vdmUsXG4gICAgICAgIGdhbWVTdGF0cyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3NcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBzaGlwc1N1bmsgPSBbXTtcblxuICAgIC8vIHNoaXAgbGVuZ3RoIHVzZWQgdG8gcGVyZm9ybSBzaGlwIHBsYWNlbWVudFxuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IF9ib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBub3RlIHRoYXQgYm9hcmRbaV0gcmVmZXJzIHRvIFkgY29vcmRpbmF0ZXMsIGkuZS4gcm93c1xuICAgICAgICAgICAgX2JvYXJkLnB1c2goQXJyYXkoYm9hcmRTaXplKS5maWxsKCctJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9ib2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkID0gJyc7XG4gICAgICAgIGNvbnN0IGhpdFN5bWJvbCA9ICchJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICByZW5kZXJlZCArPSAnXFxuJztcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBib2FyZFtpXVtqXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgc2hpcCBwcmVzZW50IGF0IGN1cnJlbnQgY29vcmRzXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQuZ2V0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGdyaWQuZ2V0TmFtZSgpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzaGlwU3ltYm9sID0gZ3JpZC5pc1N1bmsoKSA/IHNoaXBOYW1lICsgJ3gnIDogc2hpcE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTeW1ib2wgPSBoaXRzLmhhcyhKU09OLnN0cmluZ2lmeShbaSwgal0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzaGlwTmFtZSArIGhpdFN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzaGlwTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCA9IGAke3JlbmRlcmVkfSAke1N0cmluZyhzaGlwU3ltYm9sKS5wYWRTdGFydCgzLCAnICcpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGEgc2hvdCBtaXNzIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYXQgY3VycmVudCBjb29yZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkID0gYCR7cmVuZGVyZWR9ICR7U3RyaW5nKGdyaWQpLnBhZFN0YXJ0KDMsICcgJyl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZW5kZXJlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUaWxlKHBvc1ksIHBvc1gpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkW3Bvc1ldW3Bvc1hdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRpbGUoZ3JpZENvb3JkLCB2YWx1ZSkge1xuICAgICAgICBib2FyZFtncmlkQ29vcmRbMF1dW2dyaWRDb29yZFsxXV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNaXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBtaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3JkU3RhcnQsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IHdvcmtzIGZvciByb3dzIC8gaG9yaXpvbnRhbCB0cmF2ZXJzYWxcbiAgICAgICAgZnVuY3Rpb24qIGJvYXJkVGlsZUdlbmVyYXRvcigpIHtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SWR4ID0gY29vcmRTdGFydFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xTdGFydCA9IGNvb3JkU3RhcnRbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29sRW5kID0gY29sU3RhcnQgKyBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIC8vIGZpeCByb3csIHRyYXZlcnNlIGNvbHVtbnNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY29sU3RhcnQ7IGkgPCBjb2xFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9hcmRbcm93SWR4XVtpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0lkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1N0YXJ0ID0gY29vcmRTdGFydFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dFbmQgPSBjb29yZFN0YXJ0WzBdICsgc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sSWR4ID0gY29vcmRTdGFydFsxXTtcblxuICAgICAgICAgICAgICAgIC8vIGZpeCBjb2x1bW4sIHRyYXZlcnNlIHJvd3NcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcm93U3RhcnQ7IGkgPCByb3dFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9hcmRbaV1bY29sSWR4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbElkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tQbGFjZW1lbnRGb3JFeGlzdGluZ1NoaXBzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBnZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS52YWx1ZSAhPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGlsZSBpcyBub3QgZW1wdHkhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBlcmZvcm1TaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VuID0gYm9hcmRUaWxlR2VuZXJhdG9yKCk7XG5cbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIGdlbikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFt0aWxlLnJvd0lkeF1bdGlsZS5pXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9nZW4gPSBib2FyZFRpbGVHZW5lcmF0b3IoKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiBfZ2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3RpbGUuaV1bdGlsZS5jb2xJZHhdID0gc2hpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hlY2tQbGFjZW1lbnRGb3JFeGlzdGluZ1NoaXBzKCk7XG4gICAgICAgIHBlcmZvcm1TaGlwUGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgICBjb25zdCB0YXJnZXRlZFRpbGUgPSBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dO1xuXG4gICAgICAgIC8vIGNoZWNrIHBvc2l0aW9uIGZvciBzaGlwIG9iamVjdFxuICAgICAgICBpZiAodGFyZ2V0ZWRUaWxlLmdldE5hbWUpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRpbGUgaGFzbid0IGFscmVhZHkgYmVlbiBoaXQgYW5kIHNoaXAgc3RpbGwgYWZsb2F0XG4gICAgICAgICAgICBpZiAoIWhpdHMuaGFzKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSkgJiYgIXRhcmdldGVkVGlsZS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBBdFRpbGUgPSB0YXJnZXRlZFRpbGU7XG4gICAgICAgICAgICAgICAgc2hpcEF0VGlsZS5oaXQoKTtcbiAgICAgICAgICAgICAgICBoaXRzLmFkZChKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBBdFRpbGUuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcHNTdW5rLnB1c2goc2hpcEF0VGlsZS5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0hpdCcsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgbWlzc2VzXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0YXJnZXRlZFRpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtaXNzZXMuYWRkKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtaXNzZWQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ01pc3NlZCcsXG4gICAgICAgICAgICAgICAgY29vcmRzOiBwb3NpdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICBjb29yZHM6IHBvc2l0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBzU3VuaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXZlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldChzaGlwc1N1bmspLnNpemUgPT09IDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGdldFRpbGUsXG4gICAgICAgIHNldFRpbGUsXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgcmVuZGVyQm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgZ2V0U2hpcHNTdW5rLFxuICAgICAgICBoYXZlQWxsU2hpcHNTdW5rLFxuICAgIH07XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gICAgLy8gQk9UVE9NIGdyaWQ6IHBsYXllcnMnIG93biBzaGlwc1xuICAgIC8vIFRPUCBncmlkOiBwbGF5ZXJzJyB0YXJnZXR0aW5nIGdyaWQgZm9yIHJlY29yZGluZyBhdHRhY2tzIG9uIHRoZSBlbmVteVxuXG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZ3JpZFJvdWxldHRlID0gW107XG5cbiAgICBjb25zdCBib2FyZCA9IHtcbiAgICAgICAgdG9wOiBHYW1lQm9hcmQoKSxcbiAgICAgICAgYm90dG9tOiBHYW1lQm9hcmQoKSxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBCb3R0b21Cb2FyZFNwcmVhZE91dCA9ICgpID0+IHtcbiAgICAgICAgLy8gZnVsbCBmbGVldCB0byBiZSBwbGFjZWRcbiAgICAgICAgY29uc3QgY2FycmllciA9IFNoaXAoJ2NhcnJpZXInKTtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICAgICAgY29uc3QgY3J1aXNlciA9IFNoaXAoJ2NydWlzZXInKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgnc3VibWFyaW5lJyk7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoJ2Rlc3Ryb3llcicpO1xuXG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoY2FycmllciwgWzIsIDRdLCAnaCcpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKGJhdHRsZXNoaXAsIFs4LCA2XSwgJ2gnKTtcbiAgICAgICAgYm9hcmQuYm90dG9tLnBsYWNlU2hpcChjcnVpc2VyLCBbMiwgMl0sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoc3VibWFyaW5lLCBbNSwgNF0sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoZGVzdHJveWVyLCBbOCwgMV0sICd2Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwQm90dG9tQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKCdjYXJyaWVyJyk7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKCdiYXR0bGVzaGlwJyk7XG4gICAgICAgIGNvbnN0IGNydWlzZXIgPSBTaGlwKCdjcnVpc2VyJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ3N1Ym1hcmluZScpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdkZXN0cm95ZXInKTtcblxuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKGNhcnJpZXIsIFswLCAwXSwgJ3YnKTtcbiAgICAgICAgYm9hcmQuYm90dG9tLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBbMCwgMV0sICd2Jyk7XG4gICAgICAgIGJvYXJkLmJvdHRvbS5wbGFjZVNoaXAoY3J1aXNlciwgWzAsIDJdLCAndicpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKHN1Ym1hcmluZSwgWzAsIDNdLCAndicpO1xuICAgICAgICBib2FyZC5ib3R0b20ucGxhY2VTaGlwKGRlc3Ryb3llciwgWzAsIDRdLCAndicpO1xuICAgIH07XG5cbiAgICAvLyByZW5kZXIgYm90aCB0b3AgYW5kIGJvdHRvbSBib2FyZHNcbiAgICBjb25zdCByZW5kZXJQbGF5ZXJCb2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvcEJvYXJkVGl0bGUgPSAnVEFSR0VUVElORycucGFkU3RhcnQoMjYsICcgJyk7XG4gICAgICAgIGNvbnN0IGJvdHRvbUJvYXJkVGl0bGUgPSBgJHtuYW1lLnRvVXBwZXJDYXNlKCl9IFNISVBTYC5wYWRTdGFydCgyOCwgJyAnKTtcbiAgICAgICAgY29uc3QgY29tYmluZWRSZW5kZXIgPSBgJHt0b3BCb2FyZFRpdGxlfSR7Ym9hcmQudG9wLnJlbmRlckJvYXJkKCl9XFxuJHtib3R0b21Cb2FyZFRpdGxlfSR7Ym9hcmQuYm90dG9tLnJlbmRlckJvYXJkKCl9YDtcbiAgICAgICAgY29uc29sZS5sb2coY29tYmluZWRSZW5kZXIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiogcGxheU5leHRNb3ZlUHJlc2V0KCkge1xuICAgICAgICB5aWVsZCBbMCwgNF07XG4gICAgICAgIHlpZWxkIFswLCA1XTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5kQ29vcmQgPSAobWF4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgICAgICAgY29uc3QgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IFtyYW5kWSwgcmFuZFhdO1xuICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRzO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5TmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGlzTW92ZUxlZ2FsKF9tb3ZlKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gX21vdmVbMF07XG4gICAgICAgICAgICBjb25zdCB4ID0gX21vdmVbMV07XG4gICAgICAgICAgICBpZiAoeCA+PSAwICYmIHggPCAxMCAmJiB5ID49IDAgJiYgeSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudCBoaXRzXG4gICAgICAgIGNvbnN0IHBhcnNlSGl0cyA9IEFycmF5LmZyb20oaGl0cykubWFwKChoaXQpID0+IEpTT04ucGFyc2UoaGl0KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlSGl0cyk7XG5cbiAgICAgICAgLy8gbWFrZSBhbiBhdHRhY2sgYWRqYWNlbnQgdG8gYSBjdXJyZW50IGhpdFxuICAgICAgICB3aGlsZSAocGFyc2VIaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBwYXJzZUhpdHMuc2hpZnQoMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gbW92ZVswXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBtb3ZlWzFdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZE1vdmVzID0gW107XG5cbiAgICAgICAgICAgIC8vIGFsbCBtb3ZlcyBhZGphY2VudCB0byAoeSwgeClcbiAgICAgICAgICAgIGNvbnN0IGVudW1lcmF0ZU1vdmVzID0gW1xuICAgICAgICAgICAgICAgIFt5IC0gMSwgeF0sIC8vIE5vcnRoIG9mXG4gICAgICAgICAgICAgICAgW3ksIHggKyAxXSwgLy8gRWFzdCBvZlxuICAgICAgICAgICAgICAgIFt5ICsgMSwgeF0sIC8vIFNvdXRoIG9mXG4gICAgICAgICAgICAgICAgW3ksIHggLSAxXSwgLy8gV2VzdCBvZlxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgLy8gZmluZCBhZGphY2VudCBtb3ZlcyB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHBsYXllZFxuICAgICAgICAgICAgZW51bWVyYXRlTW92ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZUxlZ2FsKGNvb3JkKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaGl0cy5oYXMoSlNPTi5zdHJpbmdpZnkoY29vcmQpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhbWlzc2VzLmhhcyhKU09OLnN0cmluZ2lmeShjb29yZCkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkTW92ZXMucHVzaChjb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgbW92ZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGlmICh2YWxpZE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRNb3Zlcy5zaGlmdCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vIGFkamFjZW50LWhpdCBtb3ZlIGV4aXN0LCBhdHRhY2sgYSByYW5kb20gc3BhY2UgdGhhdCBoYXNuJ3QgcHJldmlvdXNseSBiZWVuIGF0dGFja2VkXG4gICAgICAgIGxldCBzbWFydE1vdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJhbmRvbU1vdmU7XG5cbiAgICAgICAgLy8gY29udGludWUgZ2VuZXJhdGluZyByYW5kb20gY29vcmRpbmF0ZXMgdW50aWwgYW4gdW5wbGF5ZWQgbW92ZSBpcyBmb3VuZFxuICAgICAgICB3aGlsZSAoIXNtYXJ0TW92ZSkge1xuICAgICAgICAgICAgcmFuZG9tTW92ZSA9IHJhbmRDb29yZCgxMCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaXNNb3ZlTGVnYWwocmFuZG9tTW92ZSlcbiAgICAgICAgICAgICAgICAmJiAhaGl0cy5oYXMoSlNPTi5zdHJpbmdpZnkocmFuZG9tTW92ZSkpXG4gICAgICAgICAgICAgICAgJiYgIW1pc3Nlcy5oYXMoSlNPTi5zdHJpbmdpZnkocmFuZG9tTW92ZSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbWFydE1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JpZFJvdWxldHRlLnB1c2gocmFuZG9tTW92ZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYE1vdmUgJHtyYW5kb21Nb3ZlfSBzZWVuIGJlZm9yZSFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc21hcnRNb3ZlKSByZXR1cm4gcmFuZG9tTW92ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkSGl0ID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGhpdHMuYWRkKEpTT04uc3RyaW5naWZ5KGNvb3JkKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZE1pc3MgPSAoY29vcmQpID0+IHtcbiAgICAgICAgbWlzc2VzLmFkZChKU09OLnN0cmluZ2lmeShjb29yZCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiBtaXNzZXM7XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gICAgY29uc3QgZ2V0Um91bGV0dGUgPSAoKSA9PiBncmlkUm91bGV0dGU7XG5cbiAgICBjb25zdCBnZXRBbGxQcmV2aW91c0F0dGFja3MgPSAoKSA9PiBuZXcgU2V0KFsuLi5oaXRzLCAuLi5taXNzZXNdKTtcblxuICAgIGNvbnN0IHN0YXRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbE1pc3NlcyA9IGdldE1pc3NlcygpLnNpemU7XG4gICAgICAgIGNvbnN0IHRvdGFsSGl0cyA9IGdldEhpdHMoKS5zaXplO1xuICAgICAgICBjb25zdCB0b3RhbEF0dGFja3MgPSB0b3RhbE1pc3NlcyArIHRvdGFsSGl0cztcbiAgICAgICAgY29uc3QgdG90YWxSYW5kb21BdHRlbXB0cyA9IGdldFJvdWxldHRlKCkubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbE1pc3NlcyxcbiAgICAgICAgICAgIHRvdGFsSGl0cyxcbiAgICAgICAgICAgIHRvdGFsQXR0YWNrcyxcbiAgICAgICAgICAgIHRvdGFsUmFuZG9tQXR0ZW1wdHMsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBib2FyZCxcbiAgICAgICAgc2V0dXBCb3R0b21Cb2FyZCxcbiAgICAgICAgc2V0dXBCb3R0b21Cb2FyZFNwcmVhZE91dCxcbiAgICAgICAgcmVuZGVyUGxheWVyQm9hcmRzLFxuICAgICAgICBwbGF5TmV4dE1vdmUsXG4gICAgICAgIHBsYXlOZXh0TW92ZVByZXNldCxcbiAgICAgICAgYWRkSGl0LFxuICAgICAgICBhZGRNaXNzLFxuICAgICAgICBnZXRBbGxQcmV2aW91c0F0dGFja3MsXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgZ2V0SGl0cyxcbiAgICAgICAgZ2V0Um91bGV0dGUsXG4gICAgICAgIHN0YXRzLFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJjb25zdCBTSElQX0xFTkdUSCA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChzaGlwTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBzaGlwTmFtZTtcbiAgICBsZXQgdGltZXNIaXQgPSAwO1xuXG4gICAgLy8gYW1vdW50cyBvZiBoaXRzIGEgc2hpcCBjYW4gdGFrZSBiZWZvcmUgaXQgc2lua3MgKHdoaWNoIGVxdWFscyBpdHMgbGVuZ3RoKVxuICAgIGNvbnN0IHNoaXBIaXRQb2ludHMgPSBTSElQX0xFTkdUSDtcblxuICAgIGlmICghKHNoaXBOYW1lIGluIHNoaXBIaXRQb2ludHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgdGltZXNIaXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRpbWVzSGl0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRpbWVzSGl0KCkge1xuICAgICAgICByZXR1cm4gdGltZXNIaXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gc2hpcEhpdFBvaW50c1tuYW1lXSAtIHRpbWVzSGl0ID09PSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgZ2V0VGltZXNIaXQsXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgbGVuZ3RoOiBTSElQX0xFTkdUSFtuYW1lXSxcbiAgICB9O1xufVxuIiwiLyogVmlldy5qcyBpcyBvdXIgRE9NIG1vZHVsZSAqL1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gVmlldygpIHtcbiAgICBmdW5jdGlvbiB0ZXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBWaWV3Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZChncmlkWSwgZ3JpZFgpIHtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcEdyaWRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcC1ncmlkLnRvcCcpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwR3JpZEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGVzaGlwLWdyaWQuYm90dG9tJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkWSAqIGdyaWRYOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXBHcmlkVG9wLmFwcGVuZENoaWxkKGdyaWREaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkWSAqIGdyaWRYOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhdHRsZXNoaXBHcmlkQm90dG9tLmFwcGVuZENoaWxkKGdyaWREaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlR3JpZCxcbiAgICAgICAgdGVzdCxcbiAgICB9O1xufSgpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vQmF0dGxlc2hpcCc7XG5cbmNvbnNvbGUubG9nKCdMb2FkaW5nIGFwcC5qcycpO1xuXG5WaWV3LnRlc3QoKTtcblZpZXcuY3JlYXRlR3JpZCgxMCwgMTApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9