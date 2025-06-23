import React from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div>
      <nav>Library Management System
        <div className="logout">
          <a href="/">Logout</a>
        </div>
      </nav>
      
      <div className="grid-container">
        <Link to={`/userviewbook/${id}`}>
          <div className="grid-item">
            <i className="fa-regular fa-eye"></i>
            <br />View Book
          </div>
        </Link>
        <Link to={`/issuedbook/${id}`}>
          <div className="grid-item">
            <i className="fa-solid fa-arrow-right"></i>
            <br />Issued Book
          </div>
        </Link>
      </div>
      
      <footer>
        <p>&copy; 2024 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default User;
