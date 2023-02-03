import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';
function BookShow({ book }) {
  const [showToggle, setShowToggle] = useState(false)

  const { deleteBookById } = useBooksContext()

  const onSubmit = ()=>{
    setShowToggle(false)
  }
  const showEdit = showToggle?<BookEdit onSubmit={onSubmit} book={book}/>:<h3>{book.title}</h3>

  const handleEditClick = ()=>{
    setShowToggle(!showToggle)
  }

  const handleDeleteClick = ()=>{
    deleteBookById(book.id)
  }
  
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
