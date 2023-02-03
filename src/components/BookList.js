import React from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';
function BookList() {
  const { books } = useBooksContext()
  const renderedbooks = books.map((book)=>{
    <BookShow book={book}/>
  })
  return (
    <div>
      {renderedbooks}
    </div>
  )
}

export default BookList
