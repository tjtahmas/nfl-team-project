const fs = require('fs');

console.log('RUNNING fbData CREATION FILE!')

var fbData = {};
var footballData = [];
var goodStatsData = [];
var badStatsData = [];
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
            };
                
                //fields to add:
                //sort these into good stats, bad stats

                //GOOD STATS!!

            goodStatsData[i] = {
                //code
                code: fbData[i].Team,
                //Score
                score: fbData[i].Score,
                //First Downs
                firstDowns: fbData[i].FirstDowns,
                //First Downs By Rushing
                firstDownsRushing: fbData[i].FirstDownsByRushing,
                //First Downs By Passing
                firstDownsPassing: fbData[i].FirstDownsByPassing,
                //First Downs By Penalty
                firstDownsPenalty: fbData[i].FirstDownsByPenalty,
                //Offensive yards
                offensiveYards: fbData[i].OffensiveYards,
                //Offensive yards per play
                offensiveYardsPerPlay: fbData[i].OffensiveYardsPerPlay,
                //Touchdowns
                TDs: fbData[i].Touchdowns,
                //Rushing Yards
                rushingYards: fbData[i].RushingYards,
                //Rushing Yards Per Attempt
                rushingYardsPerAttempt: fbData[i].RushingYardsPerAttempt,
                //Rushing Touchdowns
                rushingTDs: fbData[i].RushingTouchdowns,
                //Passing Completions
                passingCompletions: fbData[i].PassingCompletions,
                //Passing Yards
                passingYards: fbData[i].PassingYards,
                //Passing Touchdowns
                passingTDs: fbData[i].PassingTouchdowns,
                //Passing Yards Per Attempt
                passingYardsPerAttempt: fbData[i].PassingYardsPerAttempt,
                //Passing Yards Per Completion
                passingYardsPerCompletion: fbData[i].PassingYardsPerCompletion,
                //Completion Percentage
                completionPct: fbData[i].CompletionPercentage,
                //Passer Rating
                passerRating: fbData[i].PasserRating,
                //Third Down Conversions
                thirdDownConversions: fbData[i].ThirdDownConversions,
                //Third Down Percentage
                thirdDownPct: fbData[i].ThirdDownPercentage,
                //Fourth Down Conversions
                fourthDownConversions: fbData[i].FourthDownConversions,
                //Fourth Down Percentage
                fourthDownPct: fbData[i].FourthDownPercentage,
                //GOal to Go Conversions
                goalToGoConversions: fbData[i].GoalToGoConversions,
                //Return Yards
                returnYards: fbData[i].ReturnYards,
                //QuarterbackHits
                qbHits: fbData[i].QuarterbackHits,
                //Tackles for Loss
                tfl: fbData[i].TacklesForLoss,
                //Safeties
                safeties: fbData[i].Safeties,
                //Punts
                punts: fbData[i].Punts,
                //Punt yards
                puntYards: fbData[i].PuntYards,
                //Punt Average
                puntAvg: fbData[i].PuntAverage,
                //Takeaways
                takeaways: fbData[i].Takeaways,
                //Turnover Differential
                turnoverDifferential: fbData[i].TurnoverDifferential,
                //Opponent Passing Interceptions
                oppPassingINTs: fbData[i].OpponentPassingInterceptions,
                //Opponent Penalties
                oppPenalties: fbData[i].OpponentPenalties,
                //Opponent Penalty Yards
                oppPenaltyYards: fbData[i].OpponentPenaltyYards,
                //Opponent Fumbles Lost
                oppFumblesLost: fbData[i].OpponentFumblesLost,
                //Opponent Times Sacked
                oppTimesSacked: fbData[i].OpponentTimesSacked,
                //Opponent Times Sacked Yards
                oppTimesSackedYards: fbData[i].OpponentTimesSackedYards,
                //Red Zone Percentage
                redZonePct: fbData[i].RedZonePercentage,
                //Quarterback Hits Differential
                qbHitsDiff: fbData[i].QuarterbackHitsDifferential,
                //Tackles For Loss Differential
                tflDiff: fbData[i].TacklesForLossDifferential,
                //Quarterback Sacks Differential
                qbSacksDiff: fbData[i].QuarterbackSacksDifferential,
                //Tackles For Loss Percentage
                tflPct: fbData[i].TacklesForLossPercentage,
                //Quarterback Hits Percentage
                qbHitsPct: fbData[i].QuarterbackHitsPercentage,
                //Opponent Times Sacked Percentage
                oppTimesSackedPct: fbData[i].OpponentTimesSackedPercentage,
                //Kickoff Touchbacks
                kickoffTouchbacks: fbData[i].KickoffTouchbacks,
                //Punt Net Average
                puntNetAvg: fbData[i].PuntNetAverage,
                //Extra Point Passing Conversions
                extraPointPassingConversions: fbData[i].ExtraPointPassingConversions,
                //Extra Point Rushing Conversions
                extraPointRushingConversions: fbData[i].ExtraPointRushingConversions,
                //Field Goals Made
                fgsMade: fbData[i].FieldGoalsMade,
                //Punt Return Yards
                puntReturnYards: fbData[i].PuntReturnYards,
                //Kick Return Yards
                kickReturnYards: fbData[i].KickReturnYards,
                //Interception Return Yards
                intReturnYards: fbData[i].InterceptionReturnYards,
                //Opponent Punts Had Blocked
                oppPuntsHadBlocked: fbData[i].OpponentPuntsHadBlocked,
                //Opponent Extra Points Had Blocked
                oppExtraPointsHadBlocked: fbData[i].OpponentExtraPointsHadBlocked,
                //Opponent Field Goals Had Blocked
                oppFGsHadBlocked: fbData[i].OpponentFieldGoalsHadBlocked,
                //Solo Tackles
                soloTackles: fbData[i].SoloTackles,
                //Assisted Tackles
                assistedTackles: fbData[i].AssistedTackles,
                //Sacks
                sacks: fbData[i].Sacks,
                //Sack Yards
                sackYards: fbData[i].SackYards,
                //Passes Defended
                passesDefended: fbData[i].PassesDefended,
                //Fumbles Forced
                fumblesForced: fbData[i].FumblesForced,
                //Fumbles Recovered
                fumblesRecovered: fbData[i].FumblesRecovered,
                //Fumble Return Yards
                fumbleReturnYards: fbData[i].FumbleReturnYards,
                //Fumble Return Touchdowns
                fumbleReturnTDs: fbData[i].FumbleReturnTouchdowns,
                //Interception Return Touchdowns
                intReturnTDs: fbData[i].InterceptionReturnTouchdowns,
                //Blocked Kicks
                blockedKicks: fbData[i].BlockedKicks,
                //Punt Return Long
                puntReturnLong: fbData[i].PuntReturnLong,
                //Kick Return Long
                kickReturnLong: fbData[i].KickReturnLong,
                //Blocked Kick Return Yards
                blockedKickReturnYards: fbData[i].BlockedKickReturnYards,
                //Blocked Kick Return Touchdowns
                blockedKickReturnTDs: fbData[i].BlockedKickReturnTouchdowns,
                //Field Goal Return Touchdowns
                fgReturnTDs: fbData[i].FieldGoalReturnTouchdowns,
                //Punt Net Yards
                puntNetYards: fbData[i].PuntNetYards,
                //Two Point Conversion Returns
                twoPointConversionReturns: fbData[i].TwoPointConversionReturns,
            };

            //BAD STATS!!
            badStatsData[i] = {
                code: fbData[i].Team,
                //Opponent Score
                oppScore: fbData[i].OpponentScore,
                //Passing Interceptions
                passingINTs: fbData[i].PassingInterceptions,
                //Penalties
                penalties: fbData[i].Penalties,
                //Penalty Yards
                penaltyYards: fbData[i].PenaltyYards,
                //Fumbles Lost
                fumblesLost: fbData[i].FumblesLost,
                //Times Sacked
                timesSacked: fbData[i].TimesSacked,
                //Times Sacked Yards
                timesSackedYards: fbData[i].TimesSackedYards,
                //Giveaways
                giveaways: fbData[i].Giveaways,
                //Opponent Score Q1
                oppScoreQ1: fbData[i].OpponentScoreQuarter1,
                //Opponent Score Q2
                oppScoreQ2: fbData[i].OpponentScoreQuarter2,
                //Opponent Score Q3
                oppScoreQ3: fbData[i].OpponentScoreQuarter3,
                //Opponent Score Q4
                oppScoreQ4: fbData[i].OpponentScoreQuarter4,
                //Opponent Score Overtime
                oppScoreOT: fbData[i].OpponentScoreOvertime,
                //Opponent First Downs
                oppFirstDowns: fbData[i].OpponentFirstDowns,
                //Opponent First Downs by Rushing
                oppFirstDownsRushing: fbData[i].OpponentFirstDownsByRushing,
                //Opponent First Downs by Passing
                oppFirstDownsPassing: fbData[i].OpponentFirstDownsByPassing,
                //Opponent First Downs by Penalty
                oppFirstDownsPenalty: fbData[i].OpponentFirstDownsByPenalty,
                //Opponent Offensive Yards
                oppOffensiveYards: fbData[i].OpponentOffensiveYards,
                //Opponent Offensive Yards Per Play
                oppOffensiveYardsPerPlay: fbData[i].OpponentOffensiveYardsPerPlay,
                //Opponent Touchdowns
                oppTDs: fbData[i].OpponentTouchdowns,
                //Opponent Rushing Yards
                oppRushingYards: fbData[i].OpponentRushingYards,
                //Opponent Rushing Yards Per Attempt
                oppRushingYardsPerAttempt: fbData[i].OpponentRushingYardsPerAttempt,
                //Opponent Rushing Touchdowns
                oppRushingTDs: fbData[i].OpponentRushingTouchdowns,
                //Opponent Passing Completions
                oppPassingCompletions: fbData[i].OpponentPassingCompletions,
                //Opponent Passing Yards
                oppPassingYards: fbData[i].OpponentPassingYards,
                //Opponent Passing Touchdowns
                oppPassingTDs: fbData[i].OpponentPassingTouchdowns,
                //Opponent Passing Yards Per Attempt
                oppPassingYardsPerAttempt: fbData[i].OpponentPassingYardsPerAttempt,
                //Opponent Passing Yards Per Completion
                oppPassingYardsPerCompletion: fbData[i].OpponentPassingYardsPerCompletion,
                //Opponent Completion Percentage
                oppCompletionPct: fbData[i].OpponentCompletionPercentage,
                //Opponent Passer Rating
                oppPasserRating: fbData[i].OpponentPasserRating,
                //Opponent Third Down Percentage
                oppThirdDownPct: fbData[i].OpponentThirdDownPercentage,
                //Opponent Fourth Down Percentage
                oppFourthDownPct: fbData[i].OpponentFourthDownPercentage,
                //Opponent Return Yards
                oppReturnYards: fbData[i].OpponentReturnYards,
                //Opponent Quarterback Hits
                oppQBHits: fbData[i].OpponentQuarterbackHits,
                //Opponent Tackles For Loss
                oppTFL: fbData[i].OpponentTacklesForLoss,
                //Opponent Safeties
                oppSafeties: fbData[i].OpponentSafeties,
                //Opponent Punts
                oppPunts: fbData[i].OpponentPunts,
                //Opponent Punt Yards
                oppPuntYards: fbData[i].OpponentPuntYards,
                //Opponent Punt Average
                oppPuntAvg: fbData[i].OpponentPuntAverage,
                //Times Sacked Percentage
                timesSackedPct: fbData[i].TimesSackedPercentage,
                //Opponent Red Zone Percentage
                oppRedZonePct: fbData[i].OpponentRedZonePercentage,
                //Opponent Quarterback Hits Differential
                oppQBHitsDiff: fbData[i].OpponentQuarterbackHitsDifferential,
                //Opponent Tackles For Loss Differential
                oppTFLDiff: fbData[i].OpponentTacklesForLossDifferential,
                //Opponent Quarterback Sacks Differential
                oppQBSacksDiff: fbData[i].OpponentQuarterbackSacksDifferential,
                //Opponent Tackles For Loss Percentage
                oppTFLPct: fbData[i].OpponentTacklesForLossPercentage,
                //Opponent Quarterback Hits Percentage
                oppQBHitsPct: fbData[i].OpponentQuarterbackHitsPercentage,
                //Punts Had Blocked
                puntsHadBlocked: fbData[i].PuntsHadBlocked,
                //Extra Points Had Blocked
                extraPointsHadBlocked: fbData[i].ExtraPointsHadBlocked,
                //Field Goals Had Blocked
                fgsHadBlocked: fbData[i].FieldGoalsHadBlocked,
                //Opponent Punt Net Average
                oppPuntNetAvg: fbData[i].OpponentPuntNetAverage,
                //Opponent Extra Point Passing Conversions
                oppExtraPointPassingConversions: fbData[i].OpponentExtraPointPassingConversions,
                //Opponent Extra Point Rushing Conversions
                oppExtraPointRushingConversions: fbData[i].OpponentExtraPointRushingConversions,
                //Opponent Field Goals Made
                oppFGsMade: fbData[i].OpponentFieldGoalsMade,
                //Opponent Punt Return Yards
                oppPuntReturnYards: fbData[i].OpponentPuntReturnYards,
                //Opponent Kick Return Yards
                oppKickReturnYards: fbData[i].OpponentKickReturnYards,
                //Opponent Interception Return Yards
                oppINTReturnYards: fbData[i].OpponentInterceptionReturnYards,
                //Opponent Solo Tackles
                oppSoloTackles: fbData[i].OpponentSoloTackles,
                //Opponent Assisted Tackles
                oppAssistedTackles: fbData[i].OpponentAssistedTackles,
                //Opponent Sacks
                oppSacks: fbData[i].OpponentSacks,
                //Opponent Sack Yards
                oppSackYards: fbData[i].OpponentSackYards,
                //Opponent Passes Defended
                oppPassesDefended: fbData[i].OpponentPassesDefended,
                //Opponent Fumbles Forced
                oppFumblesForced: fbData[i].OpponentFumblesForced,
                //Opponent Fumbles Recovered
                oppFumblesRecovered: fbData[i].OpponentFumblesRecovered,
                //Opponent Fumble Return Touchdowns
                oppFumbleReturnTDs: fbData[i].OpponentFumbleReturnTouchdowns,
                //Opponent Interception Return Touchdowns
                oppINTReturnTDs: fbData[i].OpponentInterceptionReturnTouchdowns,
                //Opponent Blocked Kicks
                oppBlockedKicks: fbData[i].OpponentBlockedKicks,
                //Opponent Punt Return Touchdowns
                oppPuntReturnTDs: fbData[i].OpponentpuntReturnTouchdowns,
                //Opponent Kick Return Touchdowns
                oppKickReturnTDs: fbData[i].OpponentKickReturnTouchdowns,
                //Opponent Blocked Kick Return Touchdowns
                oppBlockedKickReturnTDs: fbData[i].OpponentBlockedKickReturnTouchdowns,
                //Opponent Field Goal Return Touchdowns
                oppFGReturnTDs: fbData[i].OpponentFieldGoalReturnTouchdowns,
                //Opponent Punt Net Yards
                oppPuntNetYards: fbData[i].OpponentPuntNetYards,
                //Opponent Two Point Conversion Returns
                oppTwoPointConversionReturns: fbData[i].OpponentTwoPointConversionReturns,
            };
        };

        
        //const footballData = JSON.stringify(footballData);
        //Write seed data for Football Model
        fs.writeFile('./seeds/footballData.json', JSON.stringify(footballData), err => {
            if (err) {
                console.log('error writing file', err)
            } else {
                console.log('successfully wrote football data!')
            }
        });

        //Write seed data for GoodStats model
        fs.writeFile('./seeds/goodStatsData.json', JSON.stringify(goodStatsData), err => {
            if (err) {
                console.log('error writing file', err)
            } else {
                console.log('successfully wrote good stats data!')
            }
        });

        //Write seed data for BadStats model
        fs.writeFile('./seeds/badStatsData.json', JSON.stringify(badStatsData), err => {
            if (err) {
                console.log('error writing file', err)
            } else {
                console.log('successfully wrote bad stats data!')
            }
        });

    } catch (err) {
        console.log('Error parsing JSON string:', err)
    }
})