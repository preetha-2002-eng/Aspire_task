import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EditBook = () => {
  const [bookId, setBookId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/editbook/${bookId}`);
  };

  return (
    <div className="edit-book-container">
      
      <form onSubmit={handleSubmit}>
      <h3>Edit Book</h3>
      <a className="close" href="/admin">X</a>
      
        <label htmlFor="bookId">Book ID</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          placeholder="Enter Book ID"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditBook;
