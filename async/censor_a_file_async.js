const fs = require("fs");

const badWords = ['fucking', 'bullshit', 'fuck', 'shit', 'dick', 'boobs', 'pussy', 'asshole'];

fs.readFile("./uncensored_file.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Successful read file.");
    badWords.forEach(word => {
        if (data.includes(word)) {
            const length = word.length;
            let newValue = "";
            for (let i = 0; i < length; ++i) {
                newValue += "*";
            }
            data = data.replace(word, newValue);
        }
    });

    fs.writeFile("./censored_file.txt", data, (err) => {
        if (err) throw err;
        console.log("Succesful censored the file.");
    });
});

// fs.readFile("./uncensored_file_v2.txt", 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log("Successful read file.");
//     badWords.forEach(word => {
//         if (data.includes(word)) {
//             const length = word.length;
//             let newValue = "";
//             for (let i = 0; i < length; ++i) {
//                 newValue += "*";
//             }
//             data = data.replace(word, newValue);
//         }
//     });

//     fs.writeFile("./censored_file_v2.txt", data, (err) => {
//         if (err) throw err;
//         console.log("Succesful censored the file.");
//     });
// });