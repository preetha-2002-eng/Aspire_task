import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({ id: '', title: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${bookId}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
        if (error.response && error.response.status === 404) {
          alert('Book not found');
          navigate('/viewbook'); // Redirect or handle the not-found case
        }
      });
  }, [bookId, navigate]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/books/${bookId}`, book)
      .then(response => {
        alert('Book updated successfully');
        navigate('/viewbook');
      })
      .catch(error => {
        console.error('Error updating book:', error);
        alert('Error updating book');
    });
  };

  return (
    <div className="edit-book-details-container">
  
      <form onSubmit={handleSubmit}>
      <h3>Edit Book</h3>
      <a className="close" href="/admin">X</a>
      
        <label htmlFor="id"> Book ID</label>
        <input
          type="text"
          id="id"
          name="id"
          value={book.id}
          readOnly
        />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Enter Book Title"
          required
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Enter Author Name"
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBookDetails;
