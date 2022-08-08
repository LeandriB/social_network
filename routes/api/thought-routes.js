const router = require('express').Router();

const {
    getAllThoughts,
    getThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');


// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router; 