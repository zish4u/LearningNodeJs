const fs = require("fs");

//fs.mkdirSync('challengeFolder')
fs.writeFileSync('test.txt', "Hi this is node file creation text")
fs.appendFileSync('test.txt', ". This line is appended in existing text.")

//Read file without buffer
const d = fs.readFileSync('test.txt', "utf-8")
console.log(d)