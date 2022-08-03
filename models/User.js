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
    }
)

const User = model('User', UserSchema);

module.exports = User;