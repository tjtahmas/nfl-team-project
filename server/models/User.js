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
            required: "Username is required",
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
            trim: true,
            required: "Password is Required",
            validate: [({ length }) => length >= 6, "Password should be longer."]
        },
        favorites: {
            type: Array,
        },
        userCreated: {
            type: Date, 
            default: Date.now
        }
    }
);

const User = model('User', userSchema);

module.exports = User;