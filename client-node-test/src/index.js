const { BooksApi } = require("books_api");

const client = new BooksApi();
client.booksGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data));
  }
});
