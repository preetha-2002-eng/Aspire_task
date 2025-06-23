// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './UserViewBook.css';

// const UserViewBook = () => {
//   const [books, setBooks] = useState([]);
//   const { id } = useParams(); // Get the id from the URL
  
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/books');
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleRequest = async (book) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users?id=${id}`);
//       const user = response.data[0]; // Assuming id is unique and returns a single user

//       const requestData = {
//         userId: user.id,
//         username: user.username,
//         bookId: book.id,
//         bookTitle: book.title,
//       };

//       await axios.post('http://localhost:5000/requests', requestData); // Adjust the endpoint as needed
//       alert('Request sent to the admin successfully');
//     } catch (error) {
//       console.error('Error sending request:', error);
//       alert('Error sending request');
//     }
//   };

//   return (
//     <div className="user-view-books-container">
//       <div className="main">
//         <h3>Book Table</h3>
//         <a className="close" href={`/user/${id}`}>X</a> 
        
//         <table>
//           <thead>
//             <tr>
//               <th>Book ID</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>Request</th>
//             </tr>
//           </thead>
//           <tbody>
//             {books.map((book) => (
//               <tr key={book.id}>
//                 <td>{book.id}</td>
//                 <td>{book.title}</td>
//                 <td>{book.author}</td>
//                 <td>
//                   <button onClick={() => handleRequest(book)}>Request</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserViewBook;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserViewBook.css';

const UserViewBook = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams(); // Get the user id from the URL
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleRequest = async (book) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?id=${id}`);
      const user = response.data[0]; // Assuming id is unique and returns a single user

      const requestData = {
        userId: user.id,
        username: user.username,
        bookId: book.id,
        bookTitle: book.title,
      };

      await axios.post('http://localhost:5000/requests', requestData);
      alert('Request sent to the admin successfully');
    } catch (error) {
      console.error('Error sending request:', error);
      alert('Error sending request');
    }
  };

  return (
    <div className="user-view-books-container">
      <div className="main">
        <h3>Book Table</h3>
        <a className="close" href={`/user/${id}`}>X</a>
        
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button onClick={() => handleRequest(book)}>Request</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserViewBook;

