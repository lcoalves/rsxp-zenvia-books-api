"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "Book", {
  enumerable: true,
  get: function get() {
    return _Book["default"];
  }
});
Object.defineProperty(exports, "BooksApi", {
  enumerable: true,
  get: function get() {
    return _BooksApi["default"];
  }
});

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _Book = _interopRequireDefault(require("./model/Book"));

var _BooksApi = _interopRequireDefault(require("./api/BooksApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }