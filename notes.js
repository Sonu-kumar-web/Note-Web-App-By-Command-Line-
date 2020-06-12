const fs = require('fs');

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
        console.log('New note Added');
    } else {
        console.log('Note title taken');

    }

}


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
}