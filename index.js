console.log("Hello world")

// Learning node modules.
// Creating a new file.
const fs = require("fs")

fs.writeFileSync('read.txt', "This file is created by file system module in node, during module learning.")

//If file not exist then it will create a new file otherwise it will modify and overwrite the file of given name.
fs.writeFileSync('read.txt', "Text updated.")

fs.appendFileSync('read.txt', "This line is added by append, appendFileSynch does not overwrite.")