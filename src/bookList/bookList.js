import React from 'react';
import './bookList.css'
const BookList = () => {
  // Array of books
  const books = [
    {
      title: 'Math',
      author: 'R S Agarwal',
      genre: 'Genre 1',
    },
    {
      title: 'English',
      author: 'William Shakespear',
      genre: 'Genre 2',
    },
    {
      title: 'Sanskrit',
      author: 'TulsiDas',
      genre: 'Genre 3',
    },
  ];

  return (
    <div className="book-list">
      <h1 className="book-list-title">Book List</h1>
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-info">Author: {book.author}</p>
          <p className="book-info">Genre: {book.genre}</p>
          <hr className="book-divider" />
        </div>
      ))}
    </div>
  );
};

export default BookList;