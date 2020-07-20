const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Add, Remove, Read and list notes
// Create add Command
yargs.command({
   command: "add",
   describe: "Add a new notes",
   builder: {
      title: {
         describe: "Note title",
         demandOption: true,
         type: "string",
      },
      body: {
         describe: "Note body",
         demandOption: true,
         type: "string",
      },
   },
   //  ES6 short hand syntax
   handler(argv) {
      // console.log("Title: " + argv.title);
      // console.log("Body: " + argv.body);

      notes.addNote(argv.title, argv.body);
   },
});

// Create a remove command
yargs.command({
   command: "remove",
   describe: "Remove a notes",
   builder: {
      title: {
         describe: "Note title",
         demandOption: true,
         type: "string",
      },
   },
   //  ES6 short hand syntax
   handler(argv) {
      // console.log("Removing a notes");
      notes.removeNote(argv.title);
   },
});

// Create a list Command
yargs.command({
   command: "list",
   describe: "listing your notes",
   //  ES6 short hand syntax
   handler() {
      // console.log("Listing all notes");
      notes.listNotes();
   },
});

// Create read Command
yargs.command({
   command: "read",
   describe: "Reading a notes",
   //  ES6 short hand syntax
   handler() {
      console.log("reading a notes");
   },
});

// console.log(yargs.argv);
yargs.parse();
