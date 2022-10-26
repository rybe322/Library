import { Book } from "./Book"

export const BookApi = (() => {
  const book1 = Book('title1','author1','100')
  const book2 = Book('title2','author2','300',true)
  const book3 = Book('title3','author3','300')
  const book4 = Book('title4','author4','400')

  const books = []
  books.push(book1)
  books.push(book2)
  books.push(book3)
  books.push(book4)

  return {books}
})()