const path = require('path');
const fs = require('fs');
require('dotenv').config();

const indexPath = path.join('', 'public', 'index.html');
const CDN_URL = process.env.REACT_APP_CDN;

fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) return console.log(err);
    const result = data.replace(/%%CDN_URL%%/g, CDN_URL);
    fs.writeFile(indexPath, result, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});
