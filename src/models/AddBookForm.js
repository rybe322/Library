import { BookContainer } from "./BookContainer"
import { Book } from "./Book"
import { BookContainerElement } from "./BookContainerElement"

export const AddBookForm = () => {
  /*
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
  */
  const formRow = (attrs) => {
    const rowDiv = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    label['for'] = attrs['for']
    label['textContent'] = attrs['textContent']
    input['type'] = attrs['type']
    input['id'] = attrs['id']


    rowDiv.appendChild(label)
    rowDiv.appendChild(input)

    return rowDiv
  }

  const resetForm = () => {
    const title = document.querySelector('#title').value = ''
    const author = document.querySelector('#author').value = ''
    const numPages = document.querySelector('#numPages').value = ''
  }

  const addButton = (text) => {
    const button = document.createElement('button')
    button.textContent = text
    button.onclick = handleAddButtonClick
    return button
  }
  
  const handleAddButtonClick = () => {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const numPages = document.querySelector('#numPages').value
    BookContainer.addBook(Book(title, author, numPages))
    BookContainerElement.update()
    resetForm()
  }
  const formDiv = document.createElement('div')

  formDiv.id = 'new-book-form'
  formDiv.classList.add('show-form')

  formDiv.appendChild(formRow({
    'for': 'title',
    'textContent': 'Title',
    'type': 'text',
    'id': 'title'
  }))
  formDiv.appendChild(formRow({
    'for': 'author',
    'textContent': 'Author',
    'type': 'text',
    'id': 'author'
  }))
  formDiv.appendChild(formRow({
    'for': 'numPages',
    'textContent': 'Pages',
    'type': 'text',
    'id': 'numPages'
  }))
  
  formDiv.appendChild(addButton('Add'))

  return formDiv
}
