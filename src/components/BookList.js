import React from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';
function BookList() {
  const { books } = useBooksContext()
  const renderedbooks = books.map((book) => {
    return <BookShow key={book.id} book={book}/>;
  })
  return (
    <div className="book-list">
      {renderedbooks}
    </div>
  )
}

export default BookList
