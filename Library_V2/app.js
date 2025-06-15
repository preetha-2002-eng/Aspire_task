const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Preetha@2002',
    database: 'library'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/signup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Basic validation
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const checkEmailSql = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailSql, [email], (err, results) => {
        if (err) {
            console.error('Error checking email in database:', err);
            return res.status(500).json({ message: 'Error registering user' });
        }

        if (results.length > 0) {
            // Email already exists
            return res.status(400).json({ message: 'User already exists' });
        } else {
            // Insert new user into the database
            const insertUserSql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            db.query(insertUserSql, [name, email, password], (err, result) => {
                if (err) {
                    console.error('Error inserting user into database:', err);
                    return res.status(500).json({ message: 'Error registering user' });
                }
                res.status(200).json({ message: 'User registered successfully' });
            });
        }
    });
});

// Route for handling login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate the user credentials against the database
    const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        
        if (results.length > 0) {
            // If user exists in the database
            if (username === 'admin' && password === 'admin') {
                // If username and password are 'admin', redirect to dash.html
                res.status(200).json({ message: 'Login Successful', redirect: 'dash.html' });
            } else {
                // For other users, redirect to home.html
                res.status(200).json({ message: 'Login Successful', redirect: 'home.html' });
            }
        } else {
            // If user doesn't exist in the database, login failed
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

// Route to add a book
app.post('/addBook', (req, res) => {
    const { id, title, author } = req.body;

    // Validate input
    if (!id || !title || !author) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Example: Inserting into books table
    const insertBookSql = 'INSERT INTO books (id, title, author) VALUES (?, ?, ?)';
    db.query(insertBookSql, [id, title, author], (err, result) => {
        if (err) {
            console.error('Error inserting book:', err);
            return res.status(500).json({ message: 'Error adding book:"Book_ID is already exist!"' });
        }
        console.log('Book added to database:', result);
        res.status(200).json({ message: 'Book added successfully' });
    });
});

// Serve static files (e.g., HTML, CSS, JavaScript)
app.use(express.static('public'));

// Route to fetch book details
app.get('/books', (req, res) => {
    const getBooksSql = 'SELECT * FROM books';
    db.query(getBooksSql, (err, results) => {
        if (err) {
            console.error('Error fetching books from database:', err);
            return res.status(500).json({ message: 'Error fetching books' });
        }
        res.status(200).json(results);
    });
});


// Route to fetch book details by ID
app.get('/book/:id', (req, res) => {
    const bookId = req.params.id;
    const getBookSql = 'SELECT * FROM books WHERE id = ?';
    db.query(getBookSql, [bookId], (err, result) => {
        if (err) {
            console.error('Error fetching book from database:', err);
            return res.status(500).json({ message: 'Error fetching book' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(result[0]);
    });
});

// Route to update book details
app.post('/editBook', (req, res) => {
    const { id, title, author } = req.body;
    const updateBookSql = 'UPDATE books SET title = ?, author = ? WHERE id = ?';
    db.query(updateBookSql, [title, author, id], (err, result) => {
        if (err) {
            console.error('Error updating book in database:', err);
            return res.status(500).json({ message: 'Error updating book' });
        }
        res.status(200).json({ message: 'Book updated successfully' });
    });
});


// Route to delete book by ID
app.delete('/deleteBook', (req, res) => {
    const bookId = req.body.id;
    const deleteBookSql = 'DELETE FROM books WHERE id = ?';
    db.query(deleteBookSql, [bookId], (err, result) => {
        if (err) {
            console.error('Error deleting book from database:', err);
            return res.status(500).json({ message: 'Error deleting book' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    });
});



// Serve the index.html on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
