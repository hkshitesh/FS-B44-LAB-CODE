// path.js
const path = require('path');
console.log(__dirname);
// Joining paths
const filePath = path.join(__dirname, 'example.txt');
console.log('Full path to example.txt:', filePath);

// // Extracting file name
const fileName = path.basename(filePath);
console.log('File name:', fileName);

// // Extracting directory name
const directoryName = path.dirname(filePath);
console.log('Directory name:', directoryName);