/* IMPORT MODULES */
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

/* CREATE THOUGHT SCHEMA */
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    thoughtAuthor: {
        type: String,
        required: true
    },
    reactions: [this]
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

/* CREATE VIRTUAL FOR REACTION COUNT */
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

/* CREATE THOUGHT MODEL USING SCHEMA */
const Thought = model('Thought', thoughtSchema);

/* EXPORT THOUGHT MODEL */
module.exports = Thought;
