// import React from 'react';
// import './Admin.css'; 

// const Admin = () => {
  
//   return (
//     <div>
//       <nav className="navbar">
//         Admin Panel
//         <div className="logout">
//           <a href="/">Logout</a>
//         </div>
//       </nav>
//       <div className="grid-container">
//         <a href="/addbook">
//           <div className="grid-item">
//             <i className="fa-regular fa-square-plus"></i>
//             <br />
//             Add Book
//           </div>
//         </a>
//         <a href="/viewbook">
//           <div className="grid-item">
//             <i className="fa-regular fa-eye"></i>
//             <br />
//             View Book
//           </div>
//         </a>
//         <a href="/editbook">
//           <div className="grid-item">
//             <i className="fa-regular fa-pen-to-square"></i>
//             <br />
//             Edit Book
//           </div>
//         </a>
//         <a href="/issuebook">
//           <div className="grid-item">
//             <i className="fa-solid fa-arrow-right"></i>
//             <br />
//             Issue Book
//           </div>
//         </a>
//         <a href="/deletebook">
//           <div className="grid-item">
//             <i className="fa-regular fa-trash-can"></i>
//             <br />
//             Delete Book
//           </div>
//         </a>
//       </div>
//       <footer>
//         <p>&copy; 2024 Library Management System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Admin;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; 

const Admin = () => {
  const [requests, setRequests] = useState([]);
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    const fetchReturns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/returns');
        setReturns(response.data);
      } catch (error) {
        console.error('Error fetching returns:', error);
      }
    };

    // Polling for new requests and returns every 10 seconds
    const intervalId = setInterval(() => {
      fetchRequests();
      fetchReturns();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRequestsAlert = async (request) => {
    if (window.confirm(`New Request: ${request.username} requested "${request.bookTitle}"`)) {
      try {
        await axios.delete(`http://localhost:5000/requests/${request.id}`);
        setRequests((prevRequests) => prevRequests.filter((r) => r.id !== request.id));
      } catch (error) {
        console.error('Error deleting request:', error);
      }
    }
  };

  const handleReturnsAlert = async (returned) => {
    if (window.confirm(`${returned.message}`)) {
      try {
        await axios.delete(`http://localhost:5000/returns/${returned.id}`);
        setReturns((prevReturns) => prevReturns.filter((r) => r.id !== returned.id));
      } catch (error) {
        console.error('Error deleting return:', error);
      }
    }
  };

  useEffect(() => {
    requests.forEach(handleRequestsAlert);
  }, [requests]);

  useEffect(() => {
    returns.forEach(handleReturnsAlert);
  }, [returns]);

  return (
    <div>
      <nav className="navbar">
        Admin Panel
        <div className="logout">
          <a href="/">Logout</a>
        </div>
      </nav>
      <div className="grid-container">
        <a href="/addbook">
          <div className="grid-item">
            <i className="fa-regular fa-square-plus"></i>
            <br />
            Add Book
          </div>
        </a>
        <a href="/viewbook">
          <div className="grid-item">
            <i className="fa-regular fa-eye"></i>
            <br />
            View Book
          </div>
        </a>
        <a href="/editbook">
          <div className="grid-item">
            <i className="fa-regular fa-pen-to-square"></i>
            <br />
            Edit Book
          </div>
        </a>
        <a href="/issuebook">
          <div className="grid-item">
            <i className="fa-solid fa-arrow-right"></i>
            <br />
            Issue Book
          </div>
        </a>
        <a href="/deletebook">
          <div className="grid-item">
            <i className="fa-regular fa-trash-can"></i>
            <br />
            Delete Book
          </div>
        </a>
      </div>
      <footer>
        <p>&copy; 2024 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;
