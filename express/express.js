const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for parsing application/json
app.use(bodyParser.json());

// Route for serving the sign-up form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route for handling the sign-up form submission
app.post('/submit', (req, res) => {
  // Retrieve user information from the request body
  const { username,password ,mobile, email} = req.body;

  // Create a user object
  const user = {  username,password ,mobile, email};

  // Load existing user data from the JSON file
  let userData = [];
  try {
    userData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  } catch (err) {
    console.error('Error reading JSON file:', err);
  }

  // Add the new user to the existing user data
  userData.push(user);

  // Write the updated user data back to the JSON file
  fs.writeFile('db.json', JSON.stringify(userData), 'utf8', err => {
    if (err) {
      console.error('Error writing JSON file:', err);
      res.status(500).send('Error saving user data');
      return;
    }
    console.log('User data saved successfully');
    res.status(200).send('User signed up successfully');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
