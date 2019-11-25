# BooksApi.BooksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**booksGet**](BooksApi.md#booksGet) | **GET** /books | Get book list
[**booksPost**](BooksApi.md#booksPost) | **POST** /books | Create a new book



## booksGet

> [Book] booksGet()

Get book list

### Example

```javascript
import BooksApi from 'books_api';

let apiInstance = new BooksApi.BooksApi();
apiInstance.booksGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Book]**](Book.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## booksPost

> Book booksPost(opts)

Create a new book

### Example

```javascript
import BooksApi from 'books_api';

let apiInstance = new BooksApi.BooksApi();
let opts = {
  'book': new BooksApi.Book() // Book | 
};
apiInstance.booksPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **book** | [**Book**](Book.md)|  | [optional] 

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

