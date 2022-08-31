const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded ({ extended : true }));
app.use('/api', api);

app.use(express.static('public'));


//GET route for Homepage
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//POST route for notes
// app.post('/notes', (req, res) =>
// res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);