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
        //relate to Good Stats
        goodStats: {
            type: Schema.Types.ObjectId,
            ref: 'GoodStats'
        },
        //relate to Bad Stats
        badStats: {
            type: Schema.Types.ObjectId,
            ref: 'BadStats'
        }
    }
)

const Football = model('Football', footballSchema);

module.exports = Football;