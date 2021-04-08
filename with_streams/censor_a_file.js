const stream = require('stream');
console.log(stream.Readable);

const fs = require('fs');
const readFromFile = fs.createReadStream('./uncensored_file.txt');
const writeInFile = fs.createWriteStream('./censored_file.txt');
readFromFile.setEncoding('utf-8');

const chunks = [];

readFromFile.on('readable', () => {
    let chunk;
    while (null !== (chunk = readFromFile.read())) {
        chunks.push(chunk);
    }
    console.log(readFromFile.read());
});

console.log(chunks);

readFromFile.on('end', () => {
    console.log('end');
});

let text = readFromFile.read();
console.log(text)

// let text = readFromFile.read();

// console.log('$ { readFromFile.read() }');
// console.log(writeInFile);