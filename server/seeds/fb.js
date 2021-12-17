const fs = require('fs');

console.log('RUNNING fbData CREATION FILE!')

var fbData = {};
var footballData = [];
fs.readFile('./seeds/fb.json', 'utf-8', async (err, data) => {
    if (err) {
        console.log('Error reading file', err)
        return
    }
    try {
        fbData = await JSON.parse(data)
        console.log('Successfully read file!!')        

        for (i = 0; i < fbData.length; i++){
            footballData[i] = {
                code: fbData[i].Team, 
                name: fbData[i].TeamName,
                score: fbData[i].Score,
                oppScore: fbData[i].OpponentScore,
                rushYards: fbData[i].RushingYards,
                passTDs: fbData[i].PassingTouchdowns,
                thirdDownPct: fbData[i].ThirdDownPercentage,
                fumblesLost: fbData[i].FumblesLost
            };
        };

        //const footballData = JSON.stringify(footballData);
        fs.writeFile('./seeds/footballData.json', JSON.stringify(footballData), err => {
            if (err) {
                console.log('error writing file', err)
            } else {
                console.log('successfully wrote file!')
            }
        })

    } catch (err) {
        console.log('Error parsing JSON string:', err)
    }
})