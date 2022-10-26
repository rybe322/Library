"use strict";
(self["webpackChunklibrary"] = self["webpackChunklibrary"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Book */ "./src/models/Book.js");
/* harmony import */ var _models_BookContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/BookContainer */ "./src/models/BookContainer.js");




_models_BookContainer__WEBPACK_IMPORTED_MODULE_1__.BookContainer.addBook((0,_models_Book__WEBPACK_IMPORTED_MODULE_0__.Book)('title1','author1','100',true))
_models_BookContainer__WEBPACK_IMPORTED_MODULE_1__.BookContainer.addBook((0,_models_Book__WEBPACK_IMPORTED_MODULE_0__.Book)('title2','author2','200'))

console.log(_models_BookContainer__WEBPACK_IMPORTED_MODULE_1__.BookContainer.getBooks())

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
  const container = []

  function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
  };

  const addBook = (book) => {
    book.id = uid()
    container.push(book)
  }
  const removeBook = (book) => {
    // code to remove book
  }
  const editBook = (book, attrs) => {
    for (let attr in attrs) {
      book[attr] = attrs[attr]
    }
  }
  const getBooks = () => {
    return container
  }
  return {addBook, removeBook, editBook, getBooks}
})()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNrQjs7O0FBR3BELHdFQUFxQixDQUFDLGtEQUFJO0FBQzFCLHdFQUFxQixDQUFDLGtEQUFJOztBQUUxQixZQUFZLHlFQUFzQjs7Ozs7Ozs7Ozs7Ozs7QUNQM0I7QUFDUCxVQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMkI7O0FBRXBCO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL21vZGVscy9Cb29rLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbW9kZWxzL0Jvb2tDb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb29rfSBmcm9tICcuL21vZGVscy9Cb29rJ1xuaW1wb3J0IHtCb29rQ29udGFpbmVyfSBmcm9tICcuL21vZGVscy9Cb29rQ29udGFpbmVyJ1xuXG5cbkJvb2tDb250YWluZXIuYWRkQm9vayhCb29rKCd0aXRsZTEnLCdhdXRob3IxJywnMTAwJyx0cnVlKSlcbkJvb2tDb250YWluZXIuYWRkQm9vayhCb29rKCd0aXRsZTInLCdhdXRob3IyJywnMjAwJykpXG5cbmNvbnNvbGUubG9nKEJvb2tDb250YWluZXIuZ2V0Qm9va3MoKSkiLCJleHBvcnQgY29uc3QgQm9vayA9ICh0aXRsZSwgYXV0aG9yLCBudW1QYWdlcywgaXNSZWFkPWZhbHNlKSA9PiB7XG4gIHJldHVybiB7dGl0bGUsIGF1dGhvciwgbnVtUGFnZXMsIGlzUmVhZH1cbn1cbiIsImltcG9ydCB7Qm9va30gZnJvbSAnLi9Cb29rJ1xuXG5leHBvcnQgY29uc3QgQm9va0NvbnRhaW5lciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IFtdXG5cbiAgZnVuY3Rpb24gdWlkKCkge1xuICAgIHJldHVybiAocGVyZm9ybWFuY2Uubm93KCkudG9TdHJpbmcoMzYpK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpKS5yZXBsYWNlKC9cXC4vZyxcIlwiKTtcbiAgfTtcblxuICBjb25zdCBhZGRCb29rID0gKGJvb2spID0+IHtcbiAgICBib29rLmlkID0gdWlkKClcbiAgICBjb250YWluZXIucHVzaChib29rKVxuICB9XG4gIGNvbnN0IHJlbW92ZUJvb2sgPSAoYm9vaykgPT4ge1xuICAgIC8vIGNvZGUgdG8gcmVtb3ZlIGJvb2tcbiAgfVxuICBjb25zdCBlZGl0Qm9vayA9IChib29rLCBhdHRycykgPT4ge1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGJvb2tbYXR0cl0gPSBhdHRyc1thdHRyXVxuICAgIH1cbiAgfVxuICBjb25zdCBnZXRCb29rcyA9ICgpID0+IHtcbiAgICByZXR1cm4gY29udGFpbmVyXG4gIH1cbiAgcmV0dXJuIHthZGRCb29rLCByZW1vdmVCb29rLCBlZGl0Qm9vaywgZ2V0Qm9va3N9XG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9