const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises;


router.get('/', (req, res)=>{
    res.send('Word Home Page');
});

router.get('/wotd', async (req, res)=>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd',{word:word, part:part, definition:definition});
});

router.get('/allwords', async (req, res) => {
    try {
        const data = await readFile('resources/allwords.txt', 'utf8');

        let lines = data.split('\n');

        let words = [];
        let parts = [];
        let definitions = [];

        for(let i = 0; i < lines.length; i++){
            let pieces = lines[i].split('\t');

            words.push(pieces[0]);
            parts.push(pieces[1]);
            definitions.push(pieces[2]);
        }

        for(let i = 0; i < words.length; i++){
            for(let j = i + 1; j < words.length; j++){

                if(words[i].localeCompare(words[j]) > 0){

                    let tempWord = words[i];
                    words[i] = words[j];
                    words[j] = tempWord;

                    let tempPart = parts[i];
                    parts[i] = parts[j];
                    parts[j] = tempPart;

                    let tempDef = definitions[i];
                    definitions[i] = definitions[j];
                    definitions[j] = tempDef;
                }
            }
        }

        res.render('allwords',{
            words: words,
            parts: parts,
            definitions: definitions
        });

    } catch(err){
        console.log("Error reading words:", err);
        res.send("Error loading words");
    }
});

let getWordFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }
    catch(err)
    {
        console.log("There was an error reading the file: ", err);

    }
};

module.exports = router;