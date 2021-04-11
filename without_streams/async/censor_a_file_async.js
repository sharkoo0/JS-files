const fs = require("fs");
const badWords = ['fucking', 'bullshit', 'fuck', 'shit', 'dick', 'boobs', 'pussy', 'asshole'];

console.log('start');
let returnData = "";

function read(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Successful read first file.");
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
        returnData += data;
        console.log(typeof(returnData));

        // fs.writeFile("./censored_file.txt", data, (err) => {
        //     if (err) throw err;
        //     console.log("Succesful censored the first file.");
        // });

        return returnData.toString();
    });

    // return data;
};

const text = read("./uncensored_file.txt");
console.log("data: " + text);

fs.readFile("./uncensored_file_v2.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Successful read second file.");
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

    fs.writeFile("./censored_file_v2.txt", data, (err) => {
        if (err) throw err;
        console.log("Successful censored the second file.");
    });
});

console.log('end');