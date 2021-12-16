const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        favorites: {
            type: Array,
        }
    }
)

const User = model('User', userSchema);

module.exports = User;