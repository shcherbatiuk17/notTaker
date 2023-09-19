const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/index');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.use(express.static('public'));

// Define routes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start the server
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
