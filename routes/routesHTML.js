const fs = require('fs');



app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received`);
});

app.get('/api/notes/:note_id', (req, res) => {
    if (req.body && req.params.notes_id) {
        console.log(`${req.method} request received for note`);
        const noteId = req.params.notes_id;
        for (let i = 0; i < notes.length; i++) {
            const currentNote = notes[i];
            if (currentNote.note_id === noteId) {
                res.json(currentNote);
            }
        }
        res.json('Note ID not Found')
    }
    });