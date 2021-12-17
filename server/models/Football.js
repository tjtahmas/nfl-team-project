const { Schema, model } = require('mongoose');

const footballSchema = new Schema(
    {
        teamCode: {
            type: String,
            unique: true,
            trim: true,
        },
        teamData: {
            type: Map,
            of: Mixed
        }
    }
)

const Football = model('Football', footballSchema);

module.exports = Football;