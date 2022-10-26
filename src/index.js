import {Book} from './models/Book'
import {BookContainer} from './models/BookContainer'
import { BookApi } from './models/BookApi';
import { AddBookForm } from './models/AddBookForm';
import { BookContainerElement } from './models/BookContainerElement';

import './styles/meyer-reset.css'
import './styles/style.css'

/*
BookContainer holds the actual book elements

BookContainerElement is the DOM drawer that uses BookContainer

*/



for (let book in BookApi.books) {
  BookContainer.addBook(BookApi.books[book])
}

const body = document.querySelector('body')
const root = document.createElement('div')
root.id = 'root'
body.appendChild(root)

root.appendChild(AddBookForm())
root.appendChild(BookContainerElement.getBookContainerElement())


