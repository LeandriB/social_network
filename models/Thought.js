const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    reactions: [] // call ReactionSchema when defined
});

const Thought = model('Pizza', ThoughtSchema);

module.exports = Thought;