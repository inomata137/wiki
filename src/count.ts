import fs from 'fs'
const txtFile = fs.readFileSync("../output/output.txt", 'utf8');
const string = txtFile.toString().replace(/\n/mg, '');
console.log(string.length)
