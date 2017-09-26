const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const titleOptions = {
    description: ' remove a note  ',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    description: ' add a new note body ',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('remove', 'remove a note', { title: titleOptions })
    .command('read', 'read a note', { title: titleOptions })
    .help()
    .argv;

var command = argv._[0];

// console.log(command);
// console.log('process', process.argv);
// console.log('yarg', argv);
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note === "") {
        console.log("doublicated titles are not allowed ! ")
    } else {
        console.log("record has been added !  ")
        notes.logNote(note);
    }
} else if (command === 'remove') {
    var note = notes.removeNote(argv.title);
    var message = note ? 'note was removed successfully !' : 'note not found ! ';
    console.log(message);


} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    debugger;
    if (note) {
        console.log("note has been found !  ")
        notes.logNote(note);
    } else { console.log("note not found !") }

} else if (command === 'list') {
    var list = notes.getAll();
    list.forEach((note) => notes.logNote(note));
} else {
    console.log("non of the above");
}