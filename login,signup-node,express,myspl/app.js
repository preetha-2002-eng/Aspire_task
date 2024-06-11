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
        return res.status(400).send('Passwords do not match');
    }

    // Insert user into the database
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            return res.status(500).send('Error registering user');
        }
        res.status(200).send('User registered successfully');
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
            return res.status(500).send('Internal Server Error');
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


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
