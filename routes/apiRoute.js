const router = require('express').Router();
//gets saved notes from db
const savedNotes = require('../db/saveNotes')
//get notes
router.get('/notes',function(req,res){
    savedNotes.retrieveNotes().then(notes => res.json(notes));
});
//Add Note
router.post('/notes',function(req,res){
    savedNotes.addNote(req.body).then((note) => res.json(note));
});
//export router
module.exports = router;