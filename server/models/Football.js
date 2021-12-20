const { Schema, model } = require('mongoose');

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
        score: {
            type: Number,
        },
        oppScore: {
            type: Number,
        },
        rushYards: {
            type: Number,
        },
        passTDs: {
            type: Number,
        },
        thirdDownPct: {
            type: Number,
        },
        fumblesLost: {
            type: Number,
        }
    }
)

const Football = model('Football', footballSchema);

module.exports = Football;