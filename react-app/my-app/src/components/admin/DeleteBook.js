import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './DeleteBook.css';


const DeleteBook = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a DELETE request to delete the book by ID
      const response = await axios.delete(`http://localhost:5000/books/${id}`);
      
      if (response.status === 200) {
        alert('Book deleted successfully');
        navigate('/viewbook'); // Redirect to the view page after successful deletion
      } else {
        alert('Failed to delete book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Error deleting book. Please make sure the Book ID is correct.');
    }
  };

  return (
    <div className="delete-book-container">
      <form id="delete" onSubmit={handleSubmit}>
        <div className="head">
          <h3>Delete Book</h3>
          <a className="close" href="/admin">X</a>
        </div>
        <div className="main">
          <label htmlFor="id">Book ID</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter Book ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <div style={{ textAlign: 'center' }}>
            <button type="submit">Delete</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteBook;
