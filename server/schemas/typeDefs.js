const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID
      username: String
      email: String
      password: String
      favorites: [Int]
      userCreated: String
  }

  type GoodStats {
          score: Float
          firstDowns: Float
          firstDownsRushing: Float
          firstDownsPassing: Float
          firstDownsPenalty: Float
          offensiveYards: Float
          offensiveYardsPerPlay: Float
          TDs: Float
          rushingYards: Float
          rushingYardsPerAttempt: Float
          rushingTDs: Float
          passingCompletions: Float
          passingYards: Float
          passingTDs: Float
          passingYardsPerAttempt: Float
          passingYardsPerCompletion: Float
          completionPct: Float
          passerRating: Float
          thirdDownConversions: Float
          thirdDownPct: Float
          fourthDownConversions: Float
          fourthDownPct: Float
          goalToGoConversions: Float
          returnYards: Float
          qbHits: Float
          tfl: Float
          safeties: Float
          punts: Float
          puntYards: Float
          puntAvg: Float
          takeaways: Float
          turnoverDifferential: Float
          oppPassingINTs: Float
          oppPenalties: Float
          oppPenaltyYards: Float
          oppFumblesLost: Float
          oppTimesSacked: Float
          oppTimesSackedYards: Float
          redZonePct: Float
          qbHitsDiff: Float
          tflDiff: Float
          qbSacksDiff: Float
          tflPct: Float
          qbhitsPct: Float
          oppTimesSackedPct: Float
          kickoffTouchbacks: Float
          puntNetAvg: Float
          extraPointPassingConversions: Float
          extraPointRushingConversions: Float
          fgsMade: Float
          puntReturnYards: Float
          kickReturnYards: Float
          intReturnYards: Float
          oppPuntsHadBlocked: Float
          oppExtraPointsHadBlocked: Float
          oppFGsHadBlocked: Float
          soloTackles: Float
          assistedTackles: Float
          sacks: Float
          sackYards: Float
          passesDefended: Float
          fumblesForced: Float
          fumblesRecovered: Float
          fumbleReturnYards: Float
          fumbleReturnTDs: Float
          intReturnTDs: Float
          blockedKicks: Float
          puntReturnLong: Float
          kickReturnLong: Float
          blockedKickReturnYards: Float
          blockedKickReturnTDs: Float
          fgReturnTDs: Float
          puntNetYards: Float
          twoPointConversionReturns: Float
          }


  type BadStats {
            oppScore: Float
            passingINTs: Float
            penalties: Float
            penaltyYards: Float
            fumblesLost: Float
            timesSacked: Float
            timesSackedYards: Float
            giveaways: Float
            oppScoreQ1: Float
            oppScoreQ2: Float
            oppScoreQ3: Float
            oppScoreQ4: Float
            oppScoreOT: Float
            oppFirstDowns: Float
            oppFirstDownsRushing: Float
            oppFirstDownsPassing: Float
            oppFirstDownsPenalty: Float
            oppOffensiveYards: Float
            oppOffensiveYardsPerPlay: Float
            oppTDs: Float
            oppRushingYards: Float
            oppRushingYardsPerAttempt: Float
            oppRushingTDs: Float
            oppPassingCompletions: Float
            oppPassingYards: Float
            oppPassingTDs: Float
            oppPassingYardsPerAttempt: Float
            oppPassingYardsPerCompletion: Float
            oppCompletionPct: Float
            oppPasserRating: Float
            oppThirdDownPct: Float
            oppFourthDownPct: Float
            oppReturnYards: Float
            oppQBHits: Float
            oppTFL: Float
            oppSafeties: Float
            oppPunts: Float
            oppPuntYards: Float
            oppPuntAvg: Float
            timesSackedPct: Float
            oppRedZonePct: Float
            oppQBHitsPct: Float
            puntsHadBlocked: Float
            extraPointsHadBlocked: Float
            fgsHadBlocked: Float
            oppPuntNetAvg: Float
            oppExtraPointPassingConversions: Float
            oppExtraPointRushingConversions: Float
            oppFGsMade: Float
            oppPuntReturnYards: Float
            oppKickReturnYards: Float
            oppINTReturnYards: Float
            oppSoloTackles: Float
            oppAssistedTackles: Float
            oppSacks: Float
            oppSackYards: Float
            oppPassesDefended: Float
            oppFumblesForced: Float
            oppFumblesRecovered: Float
            oppFumbleReturnTDs: Float
            oppINTReturnTDs: Float
            oppBlockedKicks: Float
            oppKickReturnTDs: Float
            oppBlockedKickReturnTDs: Float
            oppFGReturnTDs: Float
            oppPuntNetYards: Float
            oppTwoPointConversionReturns: Float
                
  }

  type Football {
      _id: ID
      code: String
      name: String
      goodStats: GoodStats
      badStats: BadStats
  }

  type Query {
      users: [User]
      footballs: [Football]
      football(code: String!): [Football]
  }

  type  Mutation {
    football(code: String): Football
  }
`;

module.exports = typeDefs;


// score: Int
//       firstDowns: Int
//       firstDownsRushing: Int
//       firstDownsPassing: Int
//       firstDownsPenalty: Int
//       offensiveYards: Int
//       offensiveYardsPerPlay: Int
//       TDs: Int
//       rushingYards: Int
//       rushingYardsPerAttempt: Int
//       rushingTDs: Int
//       passingCompletions: Int
//       passingYards: Int
//       passingTDs: Int
//       passingYardsPerAttempt: Int
//       passingYardsPerCompletion: Int
//       completionPct: Int
//       passerRating: Int
//       thirdDownConversions: Int
//       thirdDownPct: Int
//       fourthDownConversions: Int
//       fourthDownPct: Int
//       goalToGoConversions: Int
//       returnYards: Int
//       qbHits: Int
//       tfl: Int
//       safeties: Int
//       punts: Int
//       puntYards: Int
//       puntAvg: Int
//       takeaways: Int
//       turnoverDifferential: Int
//       oppPassingINTs: Int
//       oppPenalties: Int
//       oppPenaltyYards: Int
//       oppFumblesLost: Int
//       oppTimesSacked: Int
//       oppTimesSackedYards: Int
//       redZonePct: Int
//       qbHitsDiff: Int
//       tflDiff: Int
//       qbSacksDiff: Int
//       tflPct: Int
//       qbhitsPct: Int
//       oppTimesSackedPct: Int
//       kickoffTouchbacks: Int
//       puntNetAvg: Int
//       extraPointPassingConversions: Int
//       extraPointRushingConversions: Int
//       fgsMade: Int
//       puntReturnYards: Int
//       kickReturnYards: Int
//       intReturnYards: Int
//       oppPuntsHadBlocked: Int
//       oppExtraPointsHadBlocked: Int
//       oppFGsHadBlocked: Int
//       soloTackles: Int
//       assistedTackles: Int
//       sacks: Int
//       sackYards: Int
//       passesDefended: Int
//       fumblesForced: Int
//       fumblesRecovered: Int
//       fumbleReturnYards: Int
//       fumbleReturnTDs: Int
//       intReturnTDs: Int
//       blockedKicks: Int
//       puntReturnLong: Int
//       kickReturnLong: Int
//       blockedKickReturnYards: Int
//       blockedKickReturnTDs: Int
//       fgReturnTDs: Int
//       puntNetYards: Int
//       twoPointConversionReturns: Int
//       }


// {
//     oppScore: Int
//     passingINTs: Int
//     penalties: Int
//     penaltyYards: Int
//     fumblesLost: Int
//     timesSacked: Int
//     timesSackedYards: Int
//     giveaways: Int
//     oppScoreQ1: Int
//     oppScoreQ2: Int
//     oppScoreQ3: Int
//     oppScoreQ4: Int
//     oppScoreOT: Int
//     oppFirstDowns: Int
//     oppFirstDownsRushing: Int
//     oppFirstDownsPassing: Int
//     oppFirstDownsPenalty: Int
//     oppOffensiveYards: Int
//     oppOffensiveYardsPerPlay: Int
//     oppTDs: Int
//     oppRushingYards: Int
//     oppRushingYardsPerAttempt: Int
//     oppRushingTDs: Int
//     oppPassingCompletions: Int
//     oppPassingYards: Int
//     oppPassingTDs: Int
//     oppPassingYardsPerAttempt: Int
//     oppPassingYardsPerCompletion: Int
//     oppCompletionPct: Int
//     oppPasserRating: Int
//     oppThirdDownPct: Int
//     oppFourthDownPct: Int
//     oppReturnYards: Int
//     oppQBHits: Int
//     oppTFL: Int
//     oppSafeties: Int
//     oppPunts: Int
//     oppPuntYards: Int
//     oppPuntAvg: Int
//     timesSackedPct: Int
//     oppRedZonePct: Int
//     oppQBHitsPct: Int
//     puntsHadBlocked: Int
//     extraPointsHadBlocked: Int
//     fgsHadBlocked: Int
//     oppPuntNetAvg: Int
//     oppExtraPointPassingConversions: Int
//     oppExtraPointRushingConversions: Int
//     oppFGsMade: Int
//     oppPuntReturnYards: Int
//     oppKickReturnYards: Int
//     oppINTReturnYards: Int
//     oppSoloTackles: Int
//     oppAssistedTackles: Int
//     oppSacks: Int
//     oppSackYards: Int
//     oppPassesDefended: Int
//     oppFumblesForced: Int
//     oppFumblesRecovered: Int
//     oppFumbleReturnTDs: Int
//     oppINTReturnTDs: Int
//     oppBlockedKicks: Int
//     oppKickReturnTDs: Int
//     oppBlockedKickReturnTDs: Int
//     oppFGReturnTDs: Int
//     oppPuntNetYards: Int
//     oppTwoPointConversionReturns: Int
//   }
