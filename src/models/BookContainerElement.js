import { BookContainer } from "./BookContainer"

const EditBookFormElement = (id) => {
  /*
  1. Get the div with the book to edit
  2. Replace the divs content with the edit elements
  3. Update BookContainer with the new book
  4. Replace the edit element view iwth the normal book view
  */
  let divToUpdate = document.querySelector(`[data-id='${id}']`)
  let bookToUpdate = BookContainer.findBook(id)

  
  while(divToUpdate.firstChild) {
    divToUpdate.removeChild(divToUpdate.firstChild)
  }

  const formRow = (attrs) => {
    const rowDiv = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    label['for'] = attrs['for']
    label['textContent'] = attrs['textContent']
    input['type'] = attrs['type']
    input['id'] = attrs['id']
    input.value = attrs['inputText']


    rowDiv.appendChild(label)
    rowDiv.appendChild(input)

    return rowDiv
  }

  const formRowCheckbox = (attrs) => {
    const rowDiv = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    
    label['for'] = attrs['for']
    label['textContent'] = attrs['textContent']
    input['type'] = attrs['type']
    input['id'] = attrs['id']
    input['checked'] = attrs['isChecked']
    rowDiv.appendChild(label)
    rowDiv.appendChild(input)

    return rowDiv
  }

  const resetForm = () => {
    document.querySelector('#update-title').value = ''
    document.querySelector('#update-author').value = ''
    document.querySelector('#update-numPages').value = ''
  }

  const handleUpdateButton = () => {
   const title = document.querySelector('#update-title').value
   const author = document.querySelector('#update-author').value
   const numPages = document.querySelector('#update-numPages').value
   const isRead = document.querySelector('#update-isRead').checked
   BookContainer.editBook(id, {title, author, numPages, isRead})
   BookContainerElement.update()
  }

  const updateButtonElement = () => {
    const updateButton = document.createElement('button')
    updateButton.classList.add('update-button')
    updateButton.textContent = 'Update'
    updateButton.onclick = handleUpdateButton
    return updateButton
  }


  divToUpdate.appendChild(formRow({
    'for': 'update-title',
    'textContent': 'Title',
    'type': 'text',
    'id': 'update-title',
    'inputText': bookToUpdate.title
  }))
  divToUpdate.appendChild(formRow({
    'for': 'update-author',
    'textContent': 'Author',
    'type': 'text',
    'id': 'update-author',
    'inputText': bookToUpdate.author
  }))
  divToUpdate.appendChild(formRow({
    'for': 'update-numPages',
    'textContent': 'Pages',
    'type': 'text',
    'id': 'update-numPages',
    'inputText': bookToUpdate.numPages
  }))
  divToUpdate.appendChild(formRowCheckbox({
    'for': 'update-isRead',
    'textContent': 'Read',
    'type': 'checkbox',
    'id': 'update-isRead',
    'isChecked': bookToUpdate.isRead
  }))
  divToUpdate.appendChild(updateButtonElement())

}




export const BookContainerElement =( () => {
  const bookContainerElement = document.createElement('div')
  bookContainerElement.classList.add('book-container')

  const BookElement = (id, title, author, numPages, isRead) => {
    const bookDivRow = (key, value) => {
      const rowDiv = document.createElement('div')
      const keySpan = document.createElement('span')
      const valueSpan = document.createElement('span')
      keySpan.textContent = `${key}: `
      valueSpan.textContent = value
      rowDiv.appendChild(keySpan)
      rowDiv.appendChild(valueSpan)
      return rowDiv
    }
    const bookDivEditRow = () => {
      const handleEditButton = () => {
        console.log(`hello from edit: ${id}`)
        EditBookFormElement(id)
      }
      const handleDeleteButton = () => {
        console.log(`hello from delete: ${id}`)
        BookContainer.removeBook(id)
        BookContainerElement.update()
      }


      const rowDiv = document.createElement('div')
      rowDiv.classList.add('edit-delete-button-row')
      const editButton = document.createElement('button')
      editButton.textContent = 'Edit'
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'
      editButton.classList.add('edit-button')
      deleteButton.classList.add('delete-button')
      editButton.dataset.id = id
      deleteButton.dataset.id = id
      editButton.onclick = handleEditButton
      deleteButton.onclick = handleDeleteButton
      rowDiv.appendChild(editButton)
      rowDiv.appendChild(deleteButton)
      return rowDiv
    }

    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book-card')
    bookDiv.dataset.id = id
    bookDiv.appendChild(bookDivRow('Title', title))
    bookDiv.appendChild(bookDivRow('Author', author))
    bookDiv.appendChild(bookDivRow('Pages', numPages))
    bookDiv.appendChild(bookDivRow('Read', isRead))
    bookDiv.appendChild(bookDivEditRow())
    return bookDiv
  }

  const emptyBookContainer = () => {
    while (bookContainerElement.firstChild) {
      bookContainerElement.removeChild(bookContainerElement.firstChild)
    }
  }
  
  const fillBookContainer = () => {
    BookContainer.getBooks().forEach(book => {
      bookContainerElement.appendChild(BookElement(book.id, book.title, book.author, book.numPages, book.isRead))
    })
  }
  const update = () => {
    emptyBookContainer()
    fillBookContainer()
  }
  const getBookContainerElement = () => {
    emptyBookContainer()
    fillBookContainer()
    return bookContainerElement
  }
  return {getBookContainerElement, update}
}

)()