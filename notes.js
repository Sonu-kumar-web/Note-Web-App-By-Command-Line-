const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your Notes....';

// For add notes
const addNote = (title, body) => {

    const notes = loadNotes();
    // console.log(notes);

    // prevent from add more than one title in an note
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });


    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        });
        // console.log(notes);
        saveNotes(notes);
        console.log(chalk.green.inverse('New note Added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));

    }

}

// To Remove a note
const removeNote = (title) => {

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title; // if its return true it will add in noteToKeep array automatically if false the it will not add.
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(notesToKeep);

    } else {
        console.log(chalk.red.inverse('No note found!'));

    }

};

// Save data into file
const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

};

// Load notes from file 
const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (error) {
        return [];
    }
};


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}