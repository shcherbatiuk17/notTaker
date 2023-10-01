const notes = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const util = require("util");

// Promisify the readFile function to make it asynchronous.
const readFromFile = util.promisify(fs.readFile);

// Function to write data to a file.
function writeFile(path, data) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info("Changes saved successfully!");
    }
  });
}

// GET endpoint to retrieve notes and send them to the user.
notes.get('/', (req, res) => {
  readFromFile('./db/db.json')
    .then((data) => {
      // Parse the data and send it as a JSON response.
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json('Internal Server Error');
    });
});

// POST endpoint to add a new note.
notes.post('/', (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    // If the title and text properties are provided, proceed with adding a new note.
    readFromFile('./db/db.json')
      .then((data) => {
        const parsedNotes = JSON.parse(data);
        const newNote = {
          title,
          text,
          id: uuidv4(), // Generate a unique ID using uuid.
        };
        // Add the new note to the existing notes array.
        parsedNotes.push(newNote);
        // Write the updated data back to notes.json.
        writeFile('./db/db.json', JSON.stringify(parsedNotes));
        // Respond with a 201 status indicating a successful creation.
        res.status(201).json('Note added successfully! 📝');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json('Internal Server Error');
      });
  } else {
    // If required properties are missing, respond with a 500 status (server error).
    res.status(500).json('Unable to add your note.');
  }
});

// DELETE endpoint to remove a note by its ID.
notes.delete('/:id', (req, res) => {
  const requestedId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => {
      const notesList = JSON.parse(data);
      // Filter out the note with the matching ID and keep the rest.
      const filteredData = notesList.filter((note) => note.id !== requestedId);
      return filteredData;
    })
    .then((filteredData) => {
      // Write the filtered data back to notes.json and respond to the user.
      writeFile('./db/db.json', JSON.stringify(filteredData));
      res.json('Your notes have been updated');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json('Internal Server Error');
    });
});

module.exports = notes;
