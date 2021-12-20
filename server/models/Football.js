const { Schema, model } = require('mongoose');

const GoodStatsSchema = new Schema({
    score: {
        type: Number,
    },
    firstDowns: {
        type: Number,
    },
    firstDownsRushing: {
        type: Number,
    },
    firstDownsPassing: {
        type: Number,
    },
    firstDownsPenalty: {
        type: Number,
    },
    offensiveYards: {
        type: Number,
    },
    offensiveYardsPerPlay: {
        type: Number,
    },
    TDs: {
        type: Number,
    },
    rushingYards: {
        type: Number,
    },
    rushingYardsPerAttempt: {
        type: Number,
    },
    rushingTDs: {
        type: Number,
    },
    passingCompletions: {
        type: Number,
    },
    passingYards: {
        type: Number,
    },
    passingTDs: {
        type: Number,
    },
    passingYardsPerAttempt: {
        type: Number,
    },
    passingYardsPerCompletion: {
        type: Number,
    },
    completionPct: {
        type: Number,
    },
    passerRating: {
        type: Number,
    },
    thirdDownConversions: {
        type: Number,
    },
    thirdDownPct: {
        type: Number,
    },
    fourthDownConversions: {
        type: Number,
    },
    fourthDownPct: {
        type: Number,
    },
    goalToGoConversions: {
        type: Number,
    },
    returnYards: {
        type: Number,
    },
    qbHits: {
        type: Number,
    },
    tfl: {
        type: Number,
    },
    safeties: {
        type: Number,
    },
    punts: {
        type: Number,
    },
    puntYards: {
        type: Number,
    },
    puntAvg: {
        type: Number,
    },
    takeaways: {
        type: Number,
    },
    turnoverDifferential: {
        type: Number,
    },
    oppPassingINTs: {
        type: Number,
    },
    oppPenalties: {
        type: Number,
    },
    oppPenaltyYards: {
        type: Number,
    },
    //might be same as fumble recoveries
    oppFumblesLost: {
        type: Number,
    },
    //might be same as sacks
    oppTimesSacked: {
        type: Number,
    },
    //is there sack yards?
    oppTimesSackedYards: {
        type: Number,
    },
    redZonePct: {
        type: Number,
    },
    qbHitsDiff: {
        type: Number,
    },
    tflDiff: {
        type: Number,
    },
    qbSacksDiff: {
        type: Number,
    },
    tflPct: {
        type: Number,
    },
    qbHitsPct: {
        type: Number,
    },
    oppTimesSackedPct: {
        type: Number,
    },
    kickoffTouchbacks: {
        type: Number,
    },
    puntNetAvg: {
        type: Number,
    },
    extraPointPassingConversions: {
        type: Number,
    },
    extraPointRushingConversions: {
        type: Number,
    },
    fgsMade: {
        type: Number,
    },
    puntReturnYards: {
        type: Number,
    },
    kickReturnYards: {
        type: Number,
    },
    intReturnYards: {
        type: Number,
    },
    //is there a blocked punts category?
    oppPuntsHadBlocked: {
        type: Number,
    },
    oppExtraPointsHadBlocked: {
        type: Number,
    },
    oppFGsHadBlocked: {
        type: Number,
    },
    soloTackles: {
        type: Number,
    },
    assistedTackles: {
        type: Number,
    },
    sacks: {
        type: Number,
    },
    sackYards: {
        type: Number,
    },
    passesDefended: {
        type: Number,
    },
    fumblesForced: {
        type: Number,
    },
    fumblesRecovered: {
        type: Number,
    },
    fumbleReturnYards: {
        type: Number,
    },
    fumbleReturnTDs: {
        type: Number,
    },
    intReturnTDs: {
        type: Number,
    },
    blockedKicks: {
        type: Number,
    },
    puntReturnLong: {
        type: Number,
    },
    kickReturnLong: {
        type: Number,
    },
    blockedKickReturnYards: {
        type: Number,
    },
    blockedKickReturnTDs: {
        type: Number,
    },
    fgReturnTDs: {
        type: Number,
    },
    puntNetYards: {
        type: Number,
    },
    twoPointConversionReturns: {
        type: Number,
    },
})

const BadStatsSchema = new Schema({
    oppScore: {
        type: Number,
    },
    passingINTs: {
        type: Number,
    },
    penalties: {
        type: Number,
    },
    penaltyYards: {
        type: Number,
    },
    fumblesLost: {
        type: Number,
    },
    timesSacked: {
        type: Number,
    },
    timesSackedYards: {
        type: Number,
    },
    giveaways: {
        type: Number,
    },
    oppScoreQ1: {
        type: Number,
    },
    oppScoreQ2: {
        type: Number,
    },
    oppScoreQ3: {
        type: Number,
    },
    oppScoreQ4: {
        type: Number,
    },
    oppScoreOT: {
        type: Number,
    },
    oppFirstDowns: {
        type: Number,
    },
    oppFirstDownsRushing: {
        type: Number,
    },
    oppFirstDownsPassing: {
        type: Number,
    },
    oppFirstDownsPenalty: {
        type: Number,
    },
    oppOffensiveYards: {
        type: Number,
    },
    oppOffensiveYardsPerPlay: {
        type: Number,
    },
    oppTDs: {
        type: Number,
    },
    oppRushingYards: {
        type: Number,
    },
    oppRushingYardsPerAttempt: {
        type: Number,
    },
    oppRushingTDs: {
        type: Number,
    },
    oppPassingCompletions: {
        type: Number,
    },
    oppPassingYards: {
        type: Number,
    },
    oppPassingTDs: {
        type: Number,
    },
    oppPassingYardsPerAttempt: {
        type: Number,
    },
    oppPassingYardsPerCompletion: {
        type: Number,
    },
    oppCompletionPct: {
        type: Number,
    },
    oppPasserRating: {
        type: Number,
    },
    oppThirdDownPct: {
        type: Number,
    },
    oppFourthDownPct: {
        type: Number,
    },
    oppReturnYards: {
        type: Number,
    },
    oppQBHits: {
        type: Number,
    },
    oppTFL: {
        type: Number,
    },
    oppSafeties: {
        type: Number,
    },
    oppPunts: {
        type: Number,
    },
    oppPuntYards: {
        type: Number,
    },
    oppPuntAvg: {
        type: Number,
    },
    timesSackedPct: {
        type: Number,
    },
    oppRedZonePct: {
        type: Number,
    },
    oppQBHitsPct: {
        type: Number,
    },
    puntsHadBlocked: {
        type: Number,
    },
    extraPointsHadBlocked: {
        type: Number,
    },
    fgsHadBlocked: {
        type: Number,
    },
    oppPuntNetAvg: {
        type: Number,
    },
    oppExtraPointPassingConversions: {
        type: Number,
    },
    oppExtraPointRushingConversions: {
        type: Number,
    },
    oppFGsMade: {
        type: Number,
    },
    oppPuntReturnYards: {
        type: Number,
    },
    oppKickReturnYards: {
        type: Number,
    },
    oppINTReturnYards: {
        type: Number,
    },
    oppSoloTackles: {
        type: Number,
    },
    oppAssistedTackles: {
        type: Number,
    },
    oppSacks: {
        type: Number,
    },
    oppSackYards: {
        type: Number,
    },
    oppPassesDefended: {
        type: Number,
    },
    oppFumblesForced: {
        type: Number,
    },
    oppFumblesRecovered: {
        type: Number,
    },
    oppFumbleReturnTDs: {
        type: Number,
    },
    oppINTReturnTDs: {
        type: Number,
    },
    oppBlockedKicks: {
        type: Number,
    },
    oppKickReturnTDs: {
        type: Number,
    },
    oppBlockedKickReturnTDs: {
        type: Number,
    },
    oppFGReturnTDs: {
        type: Number,
    },
    oppPuntNetYards: {
        type: Number,
    },
    oppTwoPointConversionReturns: {
        type: Number,
    },
})

const footballSchema = new Schema(
    {
        code: {
            type: String,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            unique: true,
            trim: true,
        },
        //relate to Good Stats
        goodStats: {
            type: GoodStatsSchema,
            required: true        
        },
        //relate to Bad Stats
        badStats: {
            type: BadStatsSchema,
            required: true,            
        }
    }
)

const Football = model('Football', footballSchema);

module.exports = Football;