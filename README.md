# Note Taker Application

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Questions](#questions)

## Description
The Note Taker application is designed to help you easily write and save notes. It provides a user-friendly interface to organize your thoughts and keep track of tasks you need to complete. This application utilizes an Express.js back end to store and retrieve your notes efficiently.

## User Story
As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria
1. **Landing Page**: When you open the Note Taker, you will be presented with a landing page containing a link to a notes page.

2. **Notes Page**: Clicking on the link to the notes page will take you to a page with the following features:
   
   - **Existing Notes**: In the left-hand column, you will see a list of existing notes.
   
   - **Note Entry**: In the right-hand column, there will be empty fields where you can enter a new note title and the note's text.

3. **Saving Notes**: After entering a new note title and text, a Save icon will appear in the navigation at the top of the page.

4. **Save Action**: When you click on the Save icon, the new note you've entered will be saved and displayed in the left-hand column with your other existing notes.

5. **Viewing Notes**: You can click on an existing note in the left-hand column, and that note will appear in the right-hand column for viewing.

6. **Creating New Notes**: Clicking on the Write icon in the navigation at the top of the page will present you with empty fields to enter a new note title and the note's text in the right-hand column.

## Installation
To run the Note Taker application locally, follow these steps:

1. Clone the GitHub repository to your local machine:


2. Navigate to the project directory:


3. Install the required npm packages:


## Usage
To start the Note Taker application, run the following command:


Once the server is running, open your web browser and go to http://localhost:3000 to access the Note Taker application.

## API Routes
The Note Taker application includes the following API routes:

- `GET /api/notes`: This route reads the db.json file and returns all saved notes as JSON.

- `POST /api/notes`: This route receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client. Each note is assigned a unique ID.

- `DELETE /api/notes/:id`: This route receives a query parameter that contains the ID of a note to delete. It reads all notes from the db.json file, removes the note with the given ID, and then rewrites the remaining notes to the db.json file.

## Deployment
The Note Taker application is deployed on Heroku and can be accessed at the following URL:

[Live Demo](https://your-heroku-app-url.com)

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and commit them with descriptive commit messages.

4. Push your changes to your fork.

5. Create a pull request to merge your changes into the main repository.

Thank you for using the Note Taker Application!
