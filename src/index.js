import {Book} from './models/Book'
import {BookContainer} from './models/BookContainer'
import { BookApi } from './models/BookApi';
import { AddBookForm } from './models/AddBookForm';
import { BookContainerElement } from './models/BookContainerElement';

import './styles/style.css'

/*
BookContainer holds the actual book elements

BookContainerElement is the DOM drawer that uses BookContainer

*/

const body = document.querySelector('body')





body.appendChild(AddBookForm())

for (let book in BookApi.books) {
  BookContainer.addBook(BookApi.books[book])
}


body.appendChild(BookContainerElement.getBookContainerElement())
