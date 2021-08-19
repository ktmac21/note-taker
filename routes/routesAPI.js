const apiRoute = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

//Get notes
apiRoute.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', function(error, data) {
        if(error) {
            throw error; 
        } else {
            res.send(data);
        }
        
    })
});


// Create, read, and save notes to JSON file
apiRoute.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body)
    
    const {text, title } = req.body;
    
    if (text && title) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const parsedNotes = JSON.parse(data);

                parsedNotes.push(newNote);

                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(parsedNotes, null, 4),
                    (writeErr) =>
                        writeErr
                            ? console.error(writeErr)
                            : console.info('Successfully updated notes!')
                );
            }
        });

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

apiRoute.post('/notes/:note_id', (req, res) => {
    if (req.body && req.params.note_id) {
        console.log(`${req.method} request received to add note.`);
        console.log(req.body);

        const noteId = req.params.note_id;
        for (let i = 0; i < notes.length; i++) {
            const currentNote = notes[i];
            if (currentNote.note_id === noteId)
                res.json('New note is added');
            return;
        }
    }
    res.json('Note ID not found');
});

//Delete function route

// apiRoute.delete('/notes/:id', (req, res) => {
//     console.log(req.params);
//     fs.readFile('./db/db.json', function(error, data) {
//         if(error) {
//             throw error; 
//         } 
//         const parsedNotes = JSON.parse(data);
//         console.log(parsedNotes);
//         const newNotes = parsedNotes.filter(note => {
//             if (note.id !== req.params.id) {
//                 return note;
//             }
//         }) 
//         console.log(newNotes); 
    // })
// }),

module.exports = apiRoute;
