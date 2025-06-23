import React, { useState } from 'react';
import axios from 'axios';

const IssueBook = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleIssueBook = async (e) => {
    e.preventDefault();

    try {
      // Ensure that both bookId and userId are provided
      if (!bookId || !userId) {
        alert('Please enter both Book ID and User ID');
        return;
      }

      // Fetch existing books and users from the server
      const [booksResponse, usersResponse] = await Promise.all([
        axios.get('http://localhost:5000/books'),
        axios.get('http://localhost:5000/users')
      ]);

      const books = booksResponse.data;
      const users = usersResponse.data;

      // Check if the book and user exist
      const book = books.find(b => b.id === bookId);
      const user = users.find(u => u.id === userId);

      if (!book) {
        alert('Book not found');
        return;
      }

      if (!user) {
        alert('User not found');
        return;
      }

      // Check if the book is already issued
      const issuedBooksResponse = await axios.get('http://localhost:5000/issuedBooks');
      const issuedBooks = issuedBooksResponse.data;
      const isBookIssued = issuedBooks.some(issued => issued.bookId === bookId);

      if (isBookIssued) {
        alert('Book is already issued');
        return;
      }

      // Issue the book
      await axios.post('http://localhost:5000/issuedBooks', {
        bookId,
        userId
      });

      alert('Book issued successfully');
      setBookId('');
      setUserId('');
    } catch (error) {
      console.error('Error issuing book:', error);
      alert('Error issuing the book');
    }
  };

  return (
    <div className="issue-book-container">
      <form onSubmit={handleIssueBook}>
        <h3>Issue Book</h3>
        <a className="close" href="/admin">X</a>
        <label htmlFor="bookId">Book ID</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          placeholder="Enter Book ID"
          onChange={(e) => setBookId(e.target.value)}
          required
        />
        
        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          id="userId"
          value={userId}
          placeholder="Enter User ID"
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
};

export default IssueBook;
