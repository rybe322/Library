"use strict";
(self["webpackChunklibrary"] = self["webpackChunklibrary"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n  color: red;\n}\n\n#new-book-form {\n  display: block;\n}\n\n.book-card {\n  border: 1px solid;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".hello {\n  color: red;\n}\n\n#new-book-form {\n  display: block;\n}\n\n.book-card {\n  border: 1px solid;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Book */ "./src/models/Book.js");
/* harmony import */ var _models_BookContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/BookContainer */ "./src/models/BookContainer.js");
/* harmony import */ var _models_BookApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/BookApi */ "./src/models/BookApi.js");
/* harmony import */ var _models_AddBookForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/AddBookForm */ "./src/models/AddBookForm.js");
/* harmony import */ var _models_BookContainerElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/BookContainerElement */ "./src/models/BookContainerElement.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");








/*
BookContainer holds the actual book elements

BookContainerElement is the DOM drawer that uses BookContainer

*/

const body = document.querySelector('body')





body.appendChild((0,_models_AddBookForm__WEBPACK_IMPORTED_MODULE_3__.AddBookForm)())

for (let book in _models_BookApi__WEBPACK_IMPORTED_MODULE_2__.BookApi.books) {
  _models_BookContainer__WEBPACK_IMPORTED_MODULE_1__.BookContainer.addBook(_models_BookApi__WEBPACK_IMPORTED_MODULE_2__.BookApi.books[book])
}


body.appendChild(_models_BookContainerElement__WEBPACK_IMPORTED_MODULE_4__.BookContainerElement.getBookContainerElement())


/***/ }),

/***/ "./src/models/AddBookForm.js":
/*!***********************************!*\
  !*** ./src/models/AddBookForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookForm": () => (/* binding */ AddBookForm)
/* harmony export */ });
/* harmony import */ var _BookContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookContainer */ "./src/models/BookContainer.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book */ "./src/models/Book.js");
/* harmony import */ var _BookContainerElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookContainerElement */ "./src/models/BookContainerElement.js");




const AddBookForm = () => {
  /*
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
  */
  const formRow = (attrs) => {
    const rowDiv = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    label['for'] = attrs['for']
    label['textContent'] = attrs['textContent']
    input['type'] = attrs['type']
    input['id'] = attrs['id']


    rowDiv.appendChild(label)
    rowDiv.appendChild(input)

    return rowDiv
  }

  const resetForm = () => {
    const title = document.querySelector('#title').value = ''
    const author = document.querySelector('#author').value = ''
    const numPages = document.querySelector('#numPages').value = ''
  }

  const addButton = (text) => {
    const button = document.createElement('button')
    button.textContent = text
    button.onclick = handleAddButtonClick
    return button
  }
  
  const handleAddButtonClick = () => {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const numPages = document.querySelector('#numPages').value
    _BookContainer__WEBPACK_IMPORTED_MODULE_0__.BookContainer.addBook((0,_Book__WEBPACK_IMPORTED_MODULE_1__.Book)(title, author, numPages))
    _BookContainerElement__WEBPACK_IMPORTED_MODULE_2__.BookContainerElement.update()
    resetForm()
  }
  const formDiv = document.createElement('div')

  formDiv.id = 'new-book-form'
  formDiv.classList.add('show-form')

  formDiv.appendChild(formRow({
    'for': 'title',
    'textContent': 'Title',
    'type': 'text',
    'id': 'title'
  }))
  formDiv.appendChild(formRow({
    'for': 'author',
    'textContent': 'Author',
    'type': 'text',
    'id': 'author'
  }))
  formDiv.appendChild(formRow({
    'for': 'numPages',
    'textContent': 'Pages',
    'type': 'text',
    'id': 'numPages'
  }))
  
  formDiv.appendChild(addButton('Add'))

  return formDiv
}


/***/ }),

/***/ "./src/models/Book.js":
/*!****************************!*\
  !*** ./src/models/Book.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
const Book = (title, author, numPages, isRead=false) => {
  return {title, author, numPages, isRead}
}


/***/ }),

/***/ "./src/models/BookApi.js":
/*!*******************************!*\
  !*** ./src/models/BookApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookApi": () => (/* binding */ BookApi)
/* harmony export */ });
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ "./src/models/Book.js");


const BookApi = (() => {
  const book1 = (0,_Book__WEBPACK_IMPORTED_MODULE_0__.Book)('title1','author1','100')
  const book2 = (0,_Book__WEBPACK_IMPORTED_MODULE_0__.Book)('title2','author2','300',true)
  const book3 = (0,_Book__WEBPACK_IMPORTED_MODULE_0__.Book)('title3','author3','300')
  const book4 = (0,_Book__WEBPACK_IMPORTED_MODULE_0__.Book)('title4','author4','400')

  const books = []
  books.push(book1)
  books.push(book2)
  books.push(book3)
  books.push(book4)

  return {books}
})()

/***/ }),

/***/ "./src/models/BookContainer.js":
/*!*************************************!*\
  !*** ./src/models/BookContainer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookContainer": () => (/* binding */ BookContainer)
/* harmony export */ });
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ "./src/models/Book.js");


const BookContainer = (() => {
  let container = []

  function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
  };
  const addBook = (book) => {
    book.id = uid()
    container.push(book)
  }
  
  const findBook = (id) => {
    for(let i = 0; i < container.length; i++) {
      if (container[i].id === id) return container[i]
    }
    return null
  }

  const removeBook = (id) => {
    // code to remove book
    console.log(`container before delete: ${container.length}`)
    container = container.filter(book => book.id !== id)
    console.log(`container after delete: ${container.length}`)
  }
  const editBook = (id, attrs) => {
    console.log(`container before: ${container}`)
    for(let i  = 0; i < container.length; i++) {
      if (container[i].id === id) {
        console.log(`book before update: ${container[i].author}`)
        for(let attr in attrs) {
          container[i][attr] = attrs[attr]
        }
        console.log(`book after update: ${container[i].author}`)
      }
    }
    console.log(`container after:`, container)
  }
  const getBooks = () => {
    return container
  }
  return {addBook, removeBook, findBook, editBook, getBooks}
})()

/***/ }),

/***/ "./src/models/BookContainerElement.js":
/*!********************************************!*\
  !*** ./src/models/BookContainerElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookContainerElement": () => (/* binding */ BookContainerElement)
/* harmony export */ });
/* harmony import */ var _BookContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookContainer */ "./src/models/BookContainer.js");


const EditBookFormElement = (id) => {
  /*
  1. Get the div with the book to edit
  2. Replace the divs content with the edit elements
  3. Update BookContainer with the new book
  4. Replace the edit element view iwth the normal book view
  */
  let divToUpdate = document.querySelector(`[data-id='${id}']`)
  let bookToUpdate = _BookContainer__WEBPACK_IMPORTED_MODULE_0__.BookContainer.findBook(id)

  
  while(divToUpdate.firstChild) {
    divToUpdate.removeChild(divToUpdate.firstChild)
  }

  const formRow = (attrs) => {
    const rowDiv = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    label['for'] = attrs['for']
    label['textContent'] = attrs['textContent']
    input['type'] = attrs['type']
    input['id'] = attrs['id']
    input.value = attrs['inputText']


    rowDiv.appendChild(label)
    rowDiv.appendChild(input)

    return rowDiv
  }

  const resetForm = () => {
    document.querySelector('#update-title').value = ''
    document.querySelector('#update-author').value = ''
    document.querySelector('#update-numPages').value = ''
  }

  const handleUpdateButton = () => {
    //update the book 
    // close the form
    // redraw the correct stuff int he div
    /*
    const author = document.querySelector('#author').value 
    const numPages = document.querySelector('#numPages').value 
    BookContainer.editBook(id, {title, author, numPages})
    */
   const title = document.querySelector('#update-title').value
   const author = document.querySelector('#update-author').value
   const numPages = document.querySelector('#update-numPages').value
   _BookContainer__WEBPACK_IMPORTED_MODULE_0__.BookContainer.editBook(id, {title, author, numPages})
   BookContainerElement.update()
  }

  const updateButtonElement = () => {
    const updateButton = document.createElement('button')
    updateButton.classList.add('update-button')
    updateButton.textContent = 'Update'
    updateButton.onclick = handleUpdateButton
    return updateButton
  }


  divToUpdate.appendChild(formRow({
    'for': 'update-title',
    'textContent': 'Title',
    'type': 'text',
    'id': 'update-title',
    'inputText': bookToUpdate.title
  }))
  divToUpdate.appendChild(formRow({
    'for': 'update-author',
    'textContent': 'Author',
    'type': 'text',
    'id': 'update-author',
    'inputText': bookToUpdate.author
  }))
  divToUpdate.appendChild(formRow({
    'for': 'update-numPages',
    'textContent': 'Pages',
    'type': 'text',
    'id': 'update-numPages',
    'inputText': bookToUpdate.numPages
  }))
  divToUpdate.appendChild(updateButtonElement())

}




const BookContainerElement =( () => {
  const bookContainerElement = document.createElement('div')
  bookContainerElement.classList.add('book-container')

  const BookElement = (id, title, author, numPages, isRead) => {
    const bookDivRow = (key, value) => {
      const rowDiv = document.createElement('div')
      const keySpan = document.createElement('span')
      const valueSpan = document.createElement('span')
      keySpan.textContent = `${key}: `
      valueSpan.textContent = value
      rowDiv.appendChild(keySpan)
      rowDiv.appendChild(valueSpan)
      return rowDiv
    }
    const bookDivEditRow = () => {
      const handleEditButton = () => {
        console.log(`hello from edit: ${id}`)
        EditBookFormElement(id)
      }
      const handleDeleteButton = () => {
        console.log(`hello from delete: ${id}`)
        _BookContainer__WEBPACK_IMPORTED_MODULE_0__.BookContainer.removeBook(id)
        BookContainerElement.update()
      }


      const rowDiv = document.createElement('div')
      rowDiv.classList.add('edit-delete-button-row')
      const editButton = document.createElement('button')
      editButton.textContent = 'Edit'
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'
      editButton.classList.add('edit-button')
      deleteButton.classList.add('delete-button')
      editButton.dataset.id = id
      deleteButton.dataset.id = id
      editButton.onclick = handleEditButton
      deleteButton.onclick = handleDeleteButton
      rowDiv.appendChild(editButton)
      rowDiv.appendChild(deleteButton)
      return rowDiv
    }

    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book-card')
    bookDiv.dataset.id = id
    bookDiv.appendChild(bookDivRow('Title', title))
    bookDiv.appendChild(bookDivRow('Author', author))
    bookDiv.appendChild(bookDivRow('Pages', numPages))
    bookDiv.appendChild(bookDivRow('Read', isRead))
    bookDiv.appendChild(bookDivEditRow())
    return bookDiv
  }

  const emptyBookContainer = () => {
    while (bookContainerElement.firstChild) {
      bookContainerElement.removeChild(bookContainerElement.firstChild)
    }
  }
  
  const fillBookContainer = () => {
    _BookContainer__WEBPACK_IMPORTED_MODULE_0__.BookContainer.getBooks().forEach(book => {
      bookContainerElement.appendChild(BookElement(book.id, book.title, book.author, book.numPages, book.isRead))
    })
  }
  const update = () => {
    emptyBookContainer()
    fillBookContainer()
  }
  const getBookContainerElement = () => {
    emptyBookContainer()
    fillBookContainer()
    return bookContainerElement
  }
  return {getBookContainerElement, update}
}

)()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbW9kZWxzL0FkZEJvb2tGb3JtLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbW9kZWxzL0Jvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9tb2RlbHMvQm9va0FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL21vZGVscy9Cb29rQ29udGFpbmVyLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbW9kZWxzL0Jvb2tDb250YWluZXJFbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNuZXctYm9vay1mb3JtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYm9vay1jYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNuZXctYm9vay1mb3JtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYm9vay1jYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Qm9va30gZnJvbSAnLi9tb2RlbHMvQm9vaydcbmltcG9ydCB7Qm9va0NvbnRhaW5lcn0gZnJvbSAnLi9tb2RlbHMvQm9va0NvbnRhaW5lcidcbmltcG9ydCB7IEJvb2tBcGkgfSBmcm9tICcuL21vZGVscy9Cb29rQXBpJztcbmltcG9ydCB7IEFkZEJvb2tGb3JtIH0gZnJvbSAnLi9tb2RlbHMvQWRkQm9va0Zvcm0nO1xuaW1wb3J0IHsgQm9va0NvbnRhaW5lckVsZW1lbnQgfSBmcm9tICcuL21vZGVscy9Cb29rQ29udGFpbmVyRWxlbWVudCc7XG5cbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xuXG4vKlxuQm9va0NvbnRhaW5lciBob2xkcyB0aGUgYWN0dWFsIGJvb2sgZWxlbWVudHNcblxuQm9va0NvbnRhaW5lckVsZW1lbnQgaXMgdGhlIERPTSBkcmF3ZXIgdGhhdCB1c2VzIEJvb2tDb250YWluZXJcblxuKi9cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG5cblxuXG5cbmJvZHkuYXBwZW5kQ2hpbGQoQWRkQm9va0Zvcm0oKSlcblxuZm9yIChsZXQgYm9vayBpbiBCb29rQXBpLmJvb2tzKSB7XG4gIEJvb2tDb250YWluZXIuYWRkQm9vayhCb29rQXBpLmJvb2tzW2Jvb2tdKVxufVxuXG5cbmJvZHkuYXBwZW5kQ2hpbGQoQm9va0NvbnRhaW5lckVsZW1lbnQuZ2V0Qm9va0NvbnRhaW5lckVsZW1lbnQoKSlcbiIsImltcG9ydCB7IEJvb2tDb250YWluZXIgfSBmcm9tIFwiLi9Cb29rQ29udGFpbmVyXCJcbmltcG9ydCB7IEJvb2sgfSBmcm9tIFwiLi9Cb29rXCJcbmltcG9ydCB7IEJvb2tDb250YWluZXJFbGVtZW50IH0gZnJvbSBcIi4vQm9va0NvbnRhaW5lckVsZW1lbnRcIlxuXG5leHBvcnQgY29uc3QgQWRkQm9va0Zvcm0gPSAoKSA9PiB7XG4gIC8qXG4gIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgTmFtZTo8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0X25hbWVcIj5cbiAgKi9cbiAgY29uc3QgZm9ybVJvdyA9IChhdHRycykgPT4ge1xuICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgXG4gICAgbGFiZWxbJ2ZvciddID0gYXR0cnNbJ2ZvciddXG4gICAgbGFiZWxbJ3RleHRDb250ZW50J10gPSBhdHRyc1sndGV4dENvbnRlbnQnXVxuICAgIGlucHV0Wyd0eXBlJ10gPSBhdHRyc1sndHlwZSddXG4gICAgaW5wdXRbJ2lkJ10gPSBhdHRyc1snaWQnXVxuXG5cbiAgICByb3dEaXYuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgcm93RGl2LmFwcGVuZENoaWxkKGlucHV0KVxuXG4gICAgcmV0dXJuIHJvd0RpdlxuICB9XG5cbiAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUgPSAnJ1xuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3InKS52YWx1ZSA9ICcnXG4gICAgY29uc3QgbnVtUGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtUGFnZXMnKS52YWx1ZSA9ICcnXG4gIH1cblxuICBjb25zdCBhZGRCdXR0b24gPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxuICAgIGJ1dHRvbi5vbmNsaWNrID0gaGFuZGxlQWRkQnV0dG9uQ2xpY2tcbiAgICByZXR1cm4gYnV0dG9uXG4gIH1cbiAgXG4gIGNvbnN0IGhhbmRsZUFkZEJ1dHRvbkNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWVcbiAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yJykudmFsdWVcbiAgICBjb25zdCBudW1QYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1QYWdlcycpLnZhbHVlXG4gICAgQm9va0NvbnRhaW5lci5hZGRCb29rKEJvb2sodGl0bGUsIGF1dGhvciwgbnVtUGFnZXMpKVxuICAgIEJvb2tDb250YWluZXJFbGVtZW50LnVwZGF0ZSgpXG4gICAgcmVzZXRGb3JtKClcbiAgfVxuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBmb3JtRGl2LmlkID0gJ25ldy1ib29rLWZvcm0nXG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnc2hvdy1mb3JtJylcblxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1Sb3coe1xuICAgICdmb3InOiAndGl0bGUnLFxuICAgICd0ZXh0Q29udGVudCc6ICdUaXRsZScsXG4gICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgJ2lkJzogJ3RpdGxlJ1xuICB9KSlcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtUm93KHtcbiAgICAnZm9yJzogJ2F1dGhvcicsXG4gICAgJ3RleHRDb250ZW50JzogJ0F1dGhvcicsXG4gICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgJ2lkJzogJ2F1dGhvcidcbiAgfSkpXG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybVJvdyh7XG4gICAgJ2Zvcic6ICdudW1QYWdlcycsXG4gICAgJ3RleHRDb250ZW50JzogJ1BhZ2VzJyxcbiAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAnaWQnOiAnbnVtUGFnZXMnXG4gIH0pKVxuICBcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24oJ0FkZCcpKVxuXG4gIHJldHVybiBmb3JtRGl2XG59XG4iLCJleHBvcnQgY29uc3QgQm9vayA9ICh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgaXNSZWFkPWZhbHNlKSA9PiB7XG4gIHJldHVybiB7dGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGlzUmVhZH1cbn1cbiIsImltcG9ydCB7IEJvb2sgfSBmcm9tIFwiLi9Cb29rXCJcblxuZXhwb3J0IGNvbnN0IEJvb2tBcGkgPSAoKCkgPT4ge1xuICBjb25zdCBib29rMSA9IEJvb2soJ3RpdGxlMScsJ2F1dGhvcjEnLCcxMDAnKVxuICBjb25zdCBib29rMiA9IEJvb2soJ3RpdGxlMicsJ2F1dGhvcjInLCczMDAnLHRydWUpXG4gIGNvbnN0IGJvb2szID0gQm9vaygndGl0bGUzJywnYXV0aG9yMycsJzMwMCcpXG4gIGNvbnN0IGJvb2s0ID0gQm9vaygndGl0bGU0JywnYXV0aG9yNCcsJzQwMCcpXG5cbiAgY29uc3QgYm9va3MgPSBbXVxuICBib29rcy5wdXNoKGJvb2sxKVxuICBib29rcy5wdXNoKGJvb2syKVxuICBib29rcy5wdXNoKGJvb2szKVxuICBib29rcy5wdXNoKGJvb2s0KVxuXG4gIHJldHVybiB7Ym9va3N9XG59KSgpIiwiaW1wb3J0IHtCb29rfSBmcm9tICcuL0Jvb2snXG5cbmV4cG9ydCBjb25zdCBCb29rQ29udGFpbmVyID0gKCgpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IFtdXG5cbiAgZnVuY3Rpb24gdWlkKCkge1xuICAgIHJldHVybiAocGVyZm9ybWFuY2Uubm93KCkudG9TdHJpbmcoMzYpK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpKS5yZXBsYWNlKC9cXC4vZyxcIlwiKTtcbiAgfTtcbiAgY29uc3QgYWRkQm9vayA9IChib29rKSA9PiB7XG4gICAgYm9vay5pZCA9IHVpZCgpXG4gICAgY29udGFpbmVyLnB1c2goYm9vaylcbiAgfVxuICBcbiAgY29uc3QgZmluZEJvb2sgPSAoaWQpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29udGFpbmVyW2ldLmlkID09PSBpZCkgcmV0dXJuIGNvbnRhaW5lcltpXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgcmVtb3ZlQm9vayA9IChpZCkgPT4ge1xuICAgIC8vIGNvZGUgdG8gcmVtb3ZlIGJvb2tcbiAgICBjb25zb2xlLmxvZyhgY29udGFpbmVyIGJlZm9yZSBkZWxldGU6ICR7Y29udGFpbmVyLmxlbmd0aH1gKVxuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5maWx0ZXIoYm9vayA9PiBib29rLmlkICE9PSBpZClcbiAgICBjb25zb2xlLmxvZyhgY29udGFpbmVyIGFmdGVyIGRlbGV0ZTogJHtjb250YWluZXIubGVuZ3RofWApXG4gIH1cbiAgY29uc3QgZWRpdEJvb2sgPSAoaWQsIGF0dHJzKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGNvbnRhaW5lciBiZWZvcmU6ICR7Y29udGFpbmVyfWApXG4gICAgZm9yKGxldCBpICA9IDA7IGkgPCBjb250YWluZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb250YWluZXJbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBib29rIGJlZm9yZSB1cGRhdGU6ICR7Y29udGFpbmVyW2ldLmF1dGhvcn1gKVxuICAgICAgICBmb3IobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgICAgICBjb250YWluZXJbaV1bYXR0cl0gPSBhdHRyc1thdHRyXVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBib29rIGFmdGVyIHVwZGF0ZTogJHtjb250YWluZXJbaV0uYXV0aG9yfWApXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBjb250YWluZXIgYWZ0ZXI6YCwgY29udGFpbmVyKVxuICB9XG4gIGNvbnN0IGdldEJvb2tzID0gKCkgPT4ge1xuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuICByZXR1cm4ge2FkZEJvb2ssIHJlbW92ZUJvb2ssIGZpbmRCb29rLCBlZGl0Qm9vaywgZ2V0Qm9va3N9XG59KSgpIiwiaW1wb3J0IHsgQm9va0NvbnRhaW5lciB9IGZyb20gXCIuL0Jvb2tDb250YWluZXJcIlxuXG5jb25zdCBFZGl0Qm9va0Zvcm1FbGVtZW50ID0gKGlkKSA9PiB7XG4gIC8qXG4gIDEuIEdldCB0aGUgZGl2IHdpdGggdGhlIGJvb2sgdG8gZWRpdFxuICAyLiBSZXBsYWNlIHRoZSBkaXZzIGNvbnRlbnQgd2l0aCB0aGUgZWRpdCBlbGVtZW50c1xuICAzLiBVcGRhdGUgQm9va0NvbnRhaW5lciB3aXRoIHRoZSBuZXcgYm9va1xuICA0LiBSZXBsYWNlIHRoZSBlZGl0IGVsZW1lbnQgdmlldyBpd3RoIHRoZSBub3JtYWwgYm9vayB2aWV3XG4gICovXG4gIGxldCBkaXZUb1VwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSddYClcbiAgbGV0IGJvb2tUb1VwZGF0ZSA9IEJvb2tDb250YWluZXIuZmluZEJvb2soaWQpXG5cbiAgXG4gIHdoaWxlKGRpdlRvVXBkYXRlLmZpcnN0Q2hpbGQpIHtcbiAgICBkaXZUb1VwZGF0ZS5yZW1vdmVDaGlsZChkaXZUb1VwZGF0ZS5maXJzdENoaWxkKVxuICB9XG5cbiAgY29uc3QgZm9ybVJvdyA9IChhdHRycykgPT4ge1xuICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgXG4gICAgbGFiZWxbJ2ZvciddID0gYXR0cnNbJ2ZvciddXG4gICAgbGFiZWxbJ3RleHRDb250ZW50J10gPSBhdHRyc1sndGV4dENvbnRlbnQnXVxuICAgIGlucHV0Wyd0eXBlJ10gPSBhdHRyc1sndHlwZSddXG4gICAgaW5wdXRbJ2lkJ10gPSBhdHRyc1snaWQnXVxuICAgIGlucHV0LnZhbHVlID0gYXR0cnNbJ2lucHV0VGV4dCddXG5cblxuICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICByb3dEaXYuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgICByZXR1cm4gcm93RGl2XG4gIH1cblxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS10aXRsZScpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLWF1dGhvcicpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLW51bVBhZ2VzJykudmFsdWUgPSAnJ1xuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIC8vdXBkYXRlIHRoZSBib29rIFxuICAgIC8vIGNsb3NlIHRoZSBmb3JtXG4gICAgLy8gcmVkcmF3IHRoZSBjb3JyZWN0IHN0dWZmIGludCBoZSBkaXZcbiAgICAvKlxuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3InKS52YWx1ZSBcbiAgICBjb25zdCBudW1QYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1QYWdlcycpLnZhbHVlIFxuICAgIEJvb2tDb250YWluZXIuZWRpdEJvb2soaWQsIHt0aXRsZSwgYXV0aG9yLCBudW1QYWdlc30pXG4gICAgKi9cbiAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZS10aXRsZScpLnZhbHVlXG4gICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLWF1dGhvcicpLnZhbHVlXG4gICBjb25zdCBudW1QYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtbnVtUGFnZXMnKS52YWx1ZVxuICAgQm9va0NvbnRhaW5lci5lZGl0Qm9vayhpZCwge3RpdGxlLCBhdXRob3IsIG51bVBhZ2VzfSlcbiAgIEJvb2tDb250YWluZXJFbGVtZW50LnVwZGF0ZSgpXG4gIH1cblxuICBjb25zdCB1cGRhdGVCdXR0b25FbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdXBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZS1idXR0b24nKVxuICAgIHVwZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVcGRhdGUnXG4gICAgdXBkYXRlQnV0dG9uLm9uY2xpY2sgPSBoYW5kbGVVcGRhdGVCdXR0b25cbiAgICByZXR1cm4gdXBkYXRlQnV0dG9uXG4gIH1cblxuXG4gIGRpdlRvVXBkYXRlLmFwcGVuZENoaWxkKGZvcm1Sb3coe1xuICAgICdmb3InOiAndXBkYXRlLXRpdGxlJyxcbiAgICAndGV4dENvbnRlbnQnOiAnVGl0bGUnLFxuICAgICd0eXBlJzogJ3RleHQnLFxuICAgICdpZCc6ICd1cGRhdGUtdGl0bGUnLFxuICAgICdpbnB1dFRleHQnOiBib29rVG9VcGRhdGUudGl0bGVcbiAgfSkpXG4gIGRpdlRvVXBkYXRlLmFwcGVuZENoaWxkKGZvcm1Sb3coe1xuICAgICdmb3InOiAndXBkYXRlLWF1dGhvcicsXG4gICAgJ3RleHRDb250ZW50JzogJ0F1dGhvcicsXG4gICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgJ2lkJzogJ3VwZGF0ZS1hdXRob3InLFxuICAgICdpbnB1dFRleHQnOiBib29rVG9VcGRhdGUuYXV0aG9yXG4gIH0pKVxuICBkaXZUb1VwZGF0ZS5hcHBlbmRDaGlsZChmb3JtUm93KHtcbiAgICAnZm9yJzogJ3VwZGF0ZS1udW1QYWdlcycsXG4gICAgJ3RleHRDb250ZW50JzogJ1BhZ2VzJyxcbiAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAnaWQnOiAndXBkYXRlLW51bVBhZ2VzJyxcbiAgICAnaW5wdXRUZXh0JzogYm9va1RvVXBkYXRlLm51bVBhZ2VzXG4gIH0pKVxuICBkaXZUb1VwZGF0ZS5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b25FbGVtZW50KCkpXG5cbn1cblxuXG5cblxuZXhwb3J0IGNvbnN0IEJvb2tDb250YWluZXJFbGVtZW50ID0oICgpID0+IHtcbiAgY29uc3QgYm9va0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBib29rQ29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib29rLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgQm9va0VsZW1lbnQgPSAoaWQsIHRpdGxlLCBhdXRob3IsIG51bVBhZ2VzLCBpc1JlYWQpID0+IHtcbiAgICBjb25zdCBib29rRGl2Um93ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBrZXlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBjb25zdCB2YWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGtleVNwYW4udGV4dENvbnRlbnQgPSBgJHtrZXl9OiBgXG4gICAgICB2YWx1ZVNwYW4udGV4dENvbnRlbnQgPSB2YWx1ZVxuICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGtleVNwYW4pXG4gICAgICByb3dEaXYuYXBwZW5kQ2hpbGQodmFsdWVTcGFuKVxuICAgICAgcmV0dXJuIHJvd0RpdlxuICAgIH1cbiAgICBjb25zdCBib29rRGl2RWRpdFJvdyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZUVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBoZWxsbyBmcm9tIGVkaXQ6ICR7aWR9YClcbiAgICAgICAgRWRpdEJvb2tGb3JtRWxlbWVudChpZClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhbmRsZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGhlbGxvIGZyb20gZGVsZXRlOiAke2lkfWApXG4gICAgICAgIEJvb2tDb250YWluZXIucmVtb3ZlQm9vayhpZClcbiAgICAgICAgQm9va0NvbnRhaW5lckVsZW1lbnQudXBkYXRlKClcbiAgICAgIH1cblxuXG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGVsZXRlLWJ1dHRvbi1yb3cnKVxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKVxuICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKVxuICAgICAgZWRpdEJ1dHRvbi5kYXRhc2V0LmlkID0gaWRcbiAgICAgIGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LmlkID0gaWRcbiAgICAgIGVkaXRCdXR0b24ub25jbGljayA9IGhhbmRsZUVkaXRCdXR0b25cbiAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gaGFuZGxlRGVsZXRlQnV0dG9uXG4gICAgICByb3dEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbilcbiAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gICAgICByZXR1cm4gcm93RGl2XG4gICAgfVxuXG4gICAgY29uc3QgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9va0Rpdi5jbGFzc0xpc3QuYWRkKCdib29rLWNhcmQnKVxuICAgIGJvb2tEaXYuZGF0YXNldC5pZCA9IGlkXG4gICAgYm9va0Rpdi5hcHBlbmRDaGlsZChib29rRGl2Um93KCdUaXRsZScsIHRpdGxlKSlcbiAgICBib29rRGl2LmFwcGVuZENoaWxkKGJvb2tEaXZSb3coJ0F1dGhvcicsIGF1dGhvcikpXG4gICAgYm9va0Rpdi5hcHBlbmRDaGlsZChib29rRGl2Um93KCdQYWdlcycsIG51bVBhZ2VzKSlcbiAgICBib29rRGl2LmFwcGVuZENoaWxkKGJvb2tEaXZSb3coJ1JlYWQnLCBpc1JlYWQpKVxuICAgIGJvb2tEaXYuYXBwZW5kQ2hpbGQoYm9va0RpdkVkaXRSb3coKSlcbiAgICByZXR1cm4gYm9va0RpdlxuICB9XG5cbiAgY29uc3QgZW1wdHlCb29rQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHdoaWxlIChib29rQ29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBib29rQ29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChib29rQ29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgZmlsbEJvb2tDb250YWluZXIgPSAoKSA9PiB7XG4gICAgQm9va0NvbnRhaW5lci5nZXRCb29rcygpLmZvckVhY2goYm9vayA9PiB7XG4gICAgICBib29rQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChCb29rRWxlbWVudChib29rLmlkLCBib29rLnRpdGxlLCBib29rLmF1dGhvciwgYm9vay5udW1QYWdlcywgYm9vay5pc1JlYWQpKVxuICAgIH0pXG4gIH1cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGVtcHR5Qm9va0NvbnRhaW5lcigpXG4gICAgZmlsbEJvb2tDb250YWluZXIoKVxuICB9XG4gIGNvbnN0IGdldEJvb2tDb250YWluZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgIGVtcHR5Qm9va0NvbnRhaW5lcigpXG4gICAgZmlsbEJvb2tDb250YWluZXIoKVxuICAgIHJldHVybiBib29rQ29udGFpbmVyRWxlbWVudFxuICB9XG4gIHJldHVybiB7Z2V0Qm9va0NvbnRhaW5lckVsZW1lbnQsIHVwZGF0ZX1cbn1cblxuKSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9