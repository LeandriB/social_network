const router = require('express').Router()

const {
    getAllUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller')

router
.route('/')
.get(getAllUsers)
.post(addUser)

router
.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router