const { User } = require('../models')

const userController = {
    // get all users 
    getAllUsers(req, res) {
        User.find({})
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // get one user by ID
    getUser({ params }, res) {
        User.findOne({ _id: params.id })
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // add a new user 
    addUser({ body }, res) {
        User.create(body)
        .then(data => res.json(data))
        .catch(err => 
            res.status(400).json(err))
    },

    // edit user info 
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body)
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
}

module.exports = userController