import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/Home';
import Admin from './components/admin/Admin';
import AddBook from './components/admin/AddBook';
import EditBook from './components/admin/EditBook';
import EditBookDetails from './components/admin/EditBookDetails';
import DeleteBook from './components/admin/DeleteBook';
import ViewBook from './components/admin/ViewBook';
import IssueBook from './components/admin/IssueBook';
import User from './components/user/User';
import UserViewBook from './components/user/UserViewBook';
import IssuedBook from './components/user/IssuedBook';

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addbook" element={ <AddBook /> } />
          <Route path="/viewbook" element={ <ViewBook /> } />
          <Route path="/editbook" element={<EditBook />} />
          <Route path="/editbook/:bookId" element={<EditBookDetails />} />
          <Route path="/deletebook" element={ <DeleteBook /> } />
          <Route path="/issuebook" element={<IssueBook />} />
          <Route path="/user/:id" element={<User />}  />
        <Route path="/userviewbook/:id" element={<UserViewBook />} />
        <Route path="/issuedbook/:id" element={<IssuedBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
