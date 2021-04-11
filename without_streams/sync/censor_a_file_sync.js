const fs = require('fs');
const badWords = ['fucking', 'bullshit', 'fuck', 'shit', 'dick', 'boobs', 'pussy', 'asshole'];

console.log('start');

let firstFileData = fs.readFileSync("./uncensored_file.txt", 'utf8', (err) => {
    if (err) throw err;
    console.log("Successful read the first file");
});

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

fs.writeFileSync("./censored_file.txt", firstFileData, (err) => {
    if (err) throw err;
    console.log("Successful censored the first file");
});

let secondFileData = fs.readFileSync("./uncensored_file_v2.txt", 'utf8', (err) => {
    if (err) throw err;
    console.log("Successful read the second file");
});

// badWords.forEach(word => {
//     if (secondFileData.includes(word)) {
//         const length = word.length;
//         let newValue = "";
//         for (let i = 0; i < length; ++i) {
//             newValue += "*";
//         }
//         secondFileData = secondFileData.replace(word, newValue);
//     }
// });

// fs.writeFileSync("./censored_file_v2.txt", secondFileData, (err) => {
//     if (err) throw err;
//     console.log("Successful censored the second file");
// });

const readFilePromise = function(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

readFilePromise('./uncensored_file_v2.txt').then(() => {
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
}).catch(err => console.log("Problem with reading file. " + err));

console.log('end');