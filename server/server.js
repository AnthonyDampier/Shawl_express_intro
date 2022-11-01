// Require express gives us a function
const express = require('express'); 

// create instance of express
// by calling the funtion returned above
// giving us an object

const app = express();

const port = 5000;

// express static file serving
// public is folder name
app.use(express.static('server/public'));

app.listen(port, () => {
    console.log('Listening on port', port);
});