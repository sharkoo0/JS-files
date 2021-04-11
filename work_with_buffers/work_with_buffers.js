const { createReadStream, createWriteStream } = require('fs');
const source = createReadStream('read_buffers.txt');
const destination = createWriteStream('write_buffers.txt');

source.setEncoding('utf-8');

source.on('data', (chunk) => {
    console.log(chunk.length);
});