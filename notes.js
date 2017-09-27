const fs = require('fs');


//reading a note from the file 
var fetchNotes = () => {
        try {
            //reads the file if it exists , if not it will throw an error 
            var notesString = fs.readFileSync("notes.json");
            //converts the object to js object if anything curropted data occured , an error will be thrown
            return JSON.parse(notesString);
        } catch (e) {
            return [];
        }

    }
    // addign a note to the file 
var saveNotes = (notes) => {
    // writes into a JSON file 
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}



var addNote = (title, body) => {

    console.log('adding a note with  title : ', title, " and ", "the body is : ", body);



    var note = { title, body }; // our new note
    var notes = fetchNotes(); //all the notes that exist

    var doublicateTitle = notes.filter((note) => {
        // checks the doublicated titles existance , if it does , it will return true and the data will not be added, if not then it will add the data to the file 
        return note.title === title;
    });

    // another way of doing it with the arrow function if the return statement is only one line is ti di the following : 
    // var doublicateTitle = note.filter((note) => note.title === title );

    if (doublicateTitle.length != 0) {

        return "";
    } else {
        // adding the note to notes array
        notes.push(note);
        // adding the data to the file 
        saveNotes(notes);
        return note;
    }
}

var removeNote = (title) => {

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}
var getNote = (title) => {

    var notes = fetchNotes();
    var fitchedNote = notes.filter((note) => note.title === title);
    return fitchedNote[0];
}

var getAll = () => {

    var list = fetchNotes();
    return list;
}

var logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`title  :  ${note.title} `);
    console.log(` body  :  ${note.body}`);
    console.log('--');
}






module.exports = {

    addNote,
    removeNote,
    getNote,
    getAll,
    logNote,


}