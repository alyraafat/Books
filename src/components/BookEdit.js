import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBooksContext()
  const [newTitle,setNewTitle] = useState(book.title)
  const handleEditedTitle= (event)=>{
    setNewTitle(event.target.value)
  }
  const handleFormSubmit = (event)=>{
    event.preventDefault()
    editBookById(book.id,newTitle)
    onSubmit()
  }
  return (
    <div>
      <label>Title</label>
      <form className="book-edit" onSubmit={handleFormSubmit}>
        <input className='input' value={newTitle} onChange={handleEditedTitle}/>
        <button className='button is-primary'>Edit</button>
      </form>
    </div>
  )
}

export default BookEdit
