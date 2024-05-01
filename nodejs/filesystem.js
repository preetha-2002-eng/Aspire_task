// Title: filesystem module of nodejs
// Author: Preetha I
// created date: 28/04/2024

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

const content = 'Welcome to filesystem module of nodejs';
fs.writeFile('example.txt', content, 'utf8', err => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully.');
});
