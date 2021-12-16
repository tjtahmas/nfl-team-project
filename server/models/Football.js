const { Schema, model } = require('mongoose');

const footballSchema = new Schema(
    {
        teamCode: {
            type: String,
            unique: true,
            trim: true,
        },
        teamData: {
            type: Array,
        }
    }
)

const Football = model('Football', footballSchema);

module.exports = Football;