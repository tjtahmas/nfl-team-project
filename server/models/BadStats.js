const { Schema, model } = require('mongoose');

const badStatsSchema = new Schema(
    {
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
    }
)

const BadStats = model('BadStats', badStatsSchema);

module.exports = BadStats;