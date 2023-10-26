/* IMPORT MODULES */
const { Schema, model } = require('mongoose');

/* CREATE SCHEMA */
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [this]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

/* CREATE VIRTUAL FOR FRIEND COUNT */
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

/* CREATE USER MODEL USING SCHEMA */
const User = model('User', UserSchema);

/* EXPORT USER MODEL */
module.exports = User;
