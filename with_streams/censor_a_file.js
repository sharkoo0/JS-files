const { createReadStream, createWriteStream } = require('fs');

const source = createReadStream('uncensored_file_v2.txt');
const destination = createWriteStream('censored_file_v2.txt');

source.setEncoding('utf-8');

const badWords = ['fucking', 'bullshit', 'fuck', 'shit', 'dick', 'boobs', 'pussy', 'asshole'];

source.on('data', (chunk) => {
    let censored = chunk;
    badWords.forEach(word => {
        if (chunk.includes(word)) {
            const length = word.length;
            let newValue = "";
            for (let i = 0; i < length; ++i) {
                newValue += "*";
            }
            censored = censored.replace(word, newValue);
        }
    });
    destination.write(censored);
});

source.on('end', () => {
    destination.end();
});