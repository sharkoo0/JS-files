const fs = require('fs');
const badWords = ['fucking', 'bullshit', 'fuck', 'shit', 'dick', 'boobs', 'pussy', 'asshole'];

let firstFileData = fs.readFileSync("./uncensored_file.txt", 'utf8');
console.log(firstFileData);

badWords.forEach(word => {
    if (firstFileData.includes(word)) {
        const length = word.length;
        let newValue = "";
        for (let i = 0; i < length; ++i) {
            newValue += "*";
        }
        firstFileData = firstFileData.replace(word, newValue);
    }
});

fs.writeFileSync("./censored_file_v2.txt", firstFileData);

let secondFileData = fs.readFileSync("./uncensored_file_v2.txt", 'utf8');
console.log(secondFileData);

badWords.forEach(word => {
    if (secondFileData.includes(word)) {
        const length = word.length;
        let newValue = "";
        for (let i = 0; i < length; ++i) {
            newValue += "*";
        }
        secondFileData = secondFileData.replace(word, newValue);
    }
});

fs.writeFileSync("./censored_file_v2.txt", secondFileData);