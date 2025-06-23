import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddBook.css'; 

const AddBook = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the book exists by ID
      const existingBookResponse = await axios.get(`http://localhost:5000/books/${id}`);

      if (existingBookResponse.status === 200) {
          alert('A book with this ID already exists. Please use a different ID.');
          return;
      }
  } catch (error) {
      if (error.response && error.response.status === 404) {
          // If the error is a 404, it means the book ID does not exist, so we can proceed to add the book
          try {
              const response = await axios.post(`http://localhost:5000/books`, { id, title, author });
              
              if (response.status === 201) {
                  alert('Book added successfully');
                  navigate('/viewbook'); // Redirect to the view page after successful addition
              } else {
                  alert('Failed to add book');
              }
          } catch (postError) {
              console.error('Error adding book:', postError);
              alert('Error adding book');
          }
      } else {
          console.error('Error checking if book exists:', error);
          alert('An error occurred while checking the book ID');
      }
  }
  };

  return (
    <div className="add-book-container">
      
      <form onSubmit={handleSubmit}>
      <h3>Add Book</h3>
      <a className="close" href="/admin">X</a>
      
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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Enter Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
