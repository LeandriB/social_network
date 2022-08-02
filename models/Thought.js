const { Schema, model } = require('mongoose');

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
        default: Date.now
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
        default: Date.now
    },
    reactions: [ReactionSchema]
});

const Thought = model('Pizza', ThoughtSchema);

module.exports = Thought;