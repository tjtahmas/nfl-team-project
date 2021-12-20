const db = require('../config/connection')
const { User, Football } = require('../models');

const footballData = require('./footballData.json');
const userData = require('./userData.json');


//RUN SEED
db.once('open', async () => {
    //clean database
    await Football.deleteMany({});
    await User.deleteMany({});
  

    //Relate goodStats,badStats to football schema through _id

    await Football.insertMany(footballData);
    await User.create(userData);
   





    // for (i = 0; i < footballs.length; i++) {
    //     footballs[i].goodStats = goodStats[i]._id;
    //     footballs[i].badStats = badStats[i]._id;
    // }

    // for (newFootball of footballs) {
    //     const tempGoodStats = goodStats;
    //     const tempBadStats = badStats;
    //     newFootball.goodStats = tempGoodStats._id
    //     newFootball.badStats = tempBadStats._id
    //     await newFootball.save();
    // }

    // //bulk create each model
    // const users = await User.insertMany(userData);
    // const footballs = await Football.insertMany(footballData);

    // await users.save();
    // await footballs.save();

    console.log('DATABASE SUCCESSFULLY SEEDED!!!');
    process.exit(0);
});




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