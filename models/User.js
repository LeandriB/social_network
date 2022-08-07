const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
            // TODO: add matching validation for mongoose
        },
        thoughts: [
            {
                type: Schema.Types.Object,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.Object,
                ref: 'User',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

// get count of friends for user
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.length + 1, 0); // refactor to shorten this function? 
});

const User = model('User', UserSchema);

module.exports = User;