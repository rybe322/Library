import {Book} from './models/Book'
import {BookContainer} from './models/BookContainer'


BookContainer.addBook(Book('title1','author1','100',true))
BookContainer.addBook(Book('title2','author2','200'))

console.log(BookContainer.getBooks())