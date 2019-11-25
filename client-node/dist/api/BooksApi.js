"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Book = _interopRequireDefault(require("../model/Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Books service.
* @module api/BooksApi
* @version 1.0.0
*/
var BooksApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new BooksApi. 
  * @alias module:api/BooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BooksApi(apiClient) {
    _classCallCheck(this, BooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the booksGet operation.
   * @callback module:api/BooksApi~booksGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Book>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get book list
   * @param {module:api/BooksApi~booksGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Book>}
   */


  _createClass(BooksApi, [{
    key: "booksGet",
    value: function booksGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Book["default"]];
      return this.apiClient.callApi('/books', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the booksPost operation.
     * @callback module:api/BooksApi~booksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Book} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new book
     * @param {Object} opts Optional parameters
     * @param {module:model/Book} opts.book 
     * @param {module:api/BooksApi~booksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Book}
     */

  }, {
    key: "booksPost",
    value: function booksPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['book'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Book["default"];
      return this.apiClient.callApi('/books', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BooksApi;
}();

exports["default"] = BooksApi;