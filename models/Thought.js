const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatter');

const ReactionSchema =  new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (time) => formatDate(time)
    },
})

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (time) => formatDate(time)
    },
    reactions: [ReactionSchema]
});

const Thought = model('Pizza', ThoughtSchema);

module.exports = Thought;