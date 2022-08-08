const { User } = require('../models')

const userController = {
    // get all users 
    getAllUsers(req, res) {
        User.find({})
        .populate({ 
            path: 'thoughts', 
            select: '-__v'
        })
        .populate({ 
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // get one user by ID
    getUser({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({ 
            path: 'thoughts', 
            select: '-__v', 
            populate: { path: 'reactions'}
        })
        .populate({ 
            path: 'friends', 
            select: '-__v'
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // add a new user 
    addUser({ body }, res) {
        User.create({ 
            username: body.username, 
            email: body.email
        })
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // edit user info 
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // Removes an user from the db
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // add a friend
    addFriend({ params }, res) {
        User.findOneAndUpdate({ 
            _id: params.userId }, 
            { $push: {
                friends: params.friendId 
            } 
        }, { new: true, runValidators: true })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    },

    // remove a friend
    deleteFriend({ params }, res) {
        User.findOneAndDelete({
            _id: params.userId}, 
            { $pull: {
                friends: params.friendId
            } 
        })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    }
}

module.exports = userController