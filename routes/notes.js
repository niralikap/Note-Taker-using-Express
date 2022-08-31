const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;
  if (req.body) {
    const newNOte = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNOte, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

// notes.delete('/:id', (req, res) => {
//   console.info(`${req.method} request received to delete a note`);
//   console.log(req.body);

//   const { id } = req.params;
//   readFromFile('./db/db.json').then((data) => {
//     let ind = -1;
//     const arr = JSON.parse(data)
//   arr.forEach ((element, index) => {
//     if(element.id === id){
//       ind = index;
//       break;
//     }
    
//   });

//   });

//     readAndAppend(newNOte, './db/db.json');
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error('Error in adding note');
//   }
// });


module.exports = notes;
