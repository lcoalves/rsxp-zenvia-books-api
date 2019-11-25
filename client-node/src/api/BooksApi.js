/**
 * Books API
 * # Introduction This is an **example** API to demonstrate features of OpenAPI specification 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Book from '../model/Book';

/**
* Books service.
* @module api/BooksApi
* @version 1.0.0
*/
export default class BooksApi {

    /**
    * Constructs a new BooksApi. 
    * @alias module:api/BooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    booksGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Book];
      return this.apiClient.callApi(
        '/books', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    booksPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['book'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Book;
      return this.apiClient.callApi(
        '/books', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
