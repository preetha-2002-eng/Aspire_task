// Title: path module of nodejs
// Author: Preetha I
// created date: 28/04/2024

const path = require('path');

const joinedPath = path.join(__dirname, 'file', 'file.txt');
console.log('Joined Path:', joinedPath); 

const resolvedPath = path.resolve('file', 'file.txt');
console.log('Resolved Path:', resolvedPath); 

const dirname = path.dirname(joinedPath);
console.log('Directory Name:', dirname); 

const basename = path.basename(joinedPath);
console.log('Base Name:', basename); 

const extname = path.extname(joinedPath);
console.log('Extension Name:', extname); 
