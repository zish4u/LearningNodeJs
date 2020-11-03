const fs = require("fs");

//fs.mkdirSync('challengeFolder')
fs.writeFileSync('test.txt', "Hi this is node file creation text")
fs.appendFileSync('test.txt', ". This line is appended in existing text.")

//Read file without buffer
const d = fs.readFileSync('test.txt', "utf-8")
console.log(d)

//Rename a file
fs.renameSync('test.txt', 'renamed.txt')

//To delete a file.
fs.unlinkSync('renamed.txt')

//To delete a folder...
//Firstly created a folder.
//fs.mkdirSync('new')
//Now delete 'new' folder
fs.rmdirSync('new')