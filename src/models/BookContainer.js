import {Book} from './Book'

export const BookContainer = (() => {
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