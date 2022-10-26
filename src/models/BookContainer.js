import {Book} from './Book'

export const BookContainer = (() => {
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