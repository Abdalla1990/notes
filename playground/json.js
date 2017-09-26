// var obj = {
//     name: "abdalla",
//     address: "canada"
// }

// var stringobj = JSON.stringify(obj);

// console.log(typeof stringobj + 'and it contains the following : ', stringobj);

// var personString = '{"name":"abdalla","address":"canada"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log("name = ", person.name);




const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("note.json", originalNoteString);

var noteString = fs.readFileSync("note.json");

var note = JSON.parse(noteString);

console.log(typeof note);
console.log("  the title  ", note.title);