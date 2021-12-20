const { Schema, model } = require('mongoose');

const goodStatsSchema = new Schema(
    {
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
    }
)

const GoodStats = model('GoodStats', goodStatsSchema);

module.exports = GoodStats;