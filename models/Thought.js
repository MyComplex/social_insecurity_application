/* IMPORT MODULES */
const { Types, Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

/* CREATE REACTION SCHEMA */
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    reactionAuthor: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
},
    {
        toJSON: {
            getters: true
        },
        _id: false
    }
);

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
    reactions: [reactionSchema]
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
