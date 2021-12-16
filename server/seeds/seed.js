//const db = require('../config/connection')
//const { Football } = require('../models');
const axios = require('axios');
const fs = require('fs');

console.log('RUNNING SEED FILE!')

fs.readFile('./fb.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading file', err)
        return
    }
    try {
        fbData = JSON.parse(data)
        console.log('Successfully read file!!')

    } catch (err) {
        console.log('Error parsing JSON string:', err)
    }
})

//Try to pass fbData as global variable if you wish to use, or work within the TRY function





//SORT DATA BY TEAM

//RANK EACH PARAMETER


// const rankings = 
// {
//     goodStats: [], //Stats deems beneficial for a team ranked best(0) to worst(31) in the league
//     badStats: [], //Stats deem dentrimental to a team ranked 'worst'(0) to best(31) in the league
// };

// //Figure out how to rank by stat

// //check each elements value
// fbData.forEach()

//save value and team for specific field to a new 

//sort array by value















// axios.get('https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2021?key=43725912e6724acb85cf7b28d4b0fca1')
//     .then(data => {
//         console.log(data);
//         fbData = data;
//         fbString = data;
//     }).catch((err) => {
//         console.error(err);
//     });

// //JSON.stringify(fbString);
// fs.writeFile('./fb.json', JSON.stringify(fbString), err => {
//     if (err) {
//         console.log('error writing file', err)
//     } else {
//         console.log('successfully wrote file')
//     }
// })