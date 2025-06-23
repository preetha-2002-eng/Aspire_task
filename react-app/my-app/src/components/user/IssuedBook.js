// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './IssuedBook.css';

// const IssuedBook = () => {
//     const { id } = useParams(); // Get the user id from the URL
//     const [issuedBooks, setIssuedBooks] = useState([]);

//     useEffect(() => {
//         // Fetch the books issued to this specific user from the server
//         const fetchIssuedBooks = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/issuedBooks?userId=${id}`);
                
//                 // To get book details (title, author), you might need to fetch from the books endpoint or ensure it's part of issuedBooks.
//                 const issuedBooksWithDetails = await Promise.all(response.data.map(async (issuedBook) => {
//                     const bookResponse = await axios.get(`http://localhost:5000/books/${issuedBook.bookId}`);
//                     return {
//                         ...issuedBook,
//                         title: bookResponse.data.title,
//                         author: bookResponse.data.author
//                     };
//                 }));
                
//                 setIssuedBooks(issuedBooksWithDetails);
//             } catch (error) {
//                 console.error('Error fetching issued books:', error);
//             }
//         };

//         fetchIssuedBooks();
//     }, [id]);

//     const handleReturnBook = async (issuedBookId) => {
//         try {
//             await axios.delete(`http://localhost:5000/issuedBooks/${issuedBookId}`);
//             setIssuedBooks((prevBooks) => prevBooks.filter((book) => book.id !== issuedBookId));
//             alert('Book returned successfully');
//         } catch (error) {
//             console.error('Error returning book:', error);
//             alert('Error returning book');
//         }
//     };

//     return (
//         <div className="issued-books-container">
//             <div className="main">
//                 <h3>Book Table</h3>
//                 <a className="close" href={`/user/${id}`}>X</a>
//                 {issuedBooks.length > 0 ? (
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Book ID</th>
//                                 <th>Title</th>
//                                 <th>Author</th>
//                                 <th>Return</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {issuedBooks.map((book) => (
//                                 <tr key={book.id}>
//                                     <td>{book.bookId}</td>
//                                     <td>{book.title}</td>
//                                     <td>{book.author}</td>
//                                     <td>
//                                         <button onClick={() => handleReturnBook(book.id)}>Return</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>No books issued.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default IssuedBook;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './IssuedBook.css';

const IssuedBook = () => {
    const { id } = useParams(); // Get the user id from the URL
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [user, setUser] = useState(null); // Store user details

    useEffect(() => {
        // Fetch user details
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        // Fetch the books issued to this specific user from the server
        const fetchIssuedBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/issuedBooks?userId=${id}`);
                
                // Fetch book details (title, author)
                const issuedBooksWithDetails = await Promise.all(response.data.map(async (issuedBook) => {
                    const bookResponse = await axios.get(`http://localhost:5000/books/${issuedBook.bookId}`);
                    return {
                        ...issuedBook,
                        title: bookResponse.data.title,
                        author: bookResponse.data.author
                    };
                }));
                
                setIssuedBooks(issuedBooksWithDetails);
            } catch (error) {
                console.error('Error fetching issued books:', error);
            }
        };

        fetchUser();
        fetchIssuedBooks();
    }, [id]);

    const handleReturnBook = async (issuedBookId, bookTitle) => {
        try {
            await axios.delete(`http://localhost:5000/issuedBooks/${issuedBookId}`);
            setIssuedBooks((prevBooks) => prevBooks.filter((book) => book.id !== issuedBookId));

            // Notify admin
            const adminNotification = {
                message: `${user.username} returned the book ${bookTitle}`,
            };
            await axios.post('http://localhost:5000/returns', adminNotification);

            alert('Book returned successfully');
        } catch (error) {
            console.error('Error returning book:', error);
            alert('Error returning book');
        }
    };

    return (
        <div className="issued-books-container">
            <div className="main">
                <h3>Book Table</h3>
                <a className="close" href={`/user/${id}`}>X</a>
                {issuedBooks.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Book ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            {issuedBooks.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.bookId}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <button onClick={() => handleReturnBook(book.id, book.title)}>Return</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No books issued.</p>
                )}
            </div>
        </div>
    );
};

export default IssuedBook;

