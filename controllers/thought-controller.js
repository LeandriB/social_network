const Thought = require("../models");

const thoughtController = {
    // Retrieve all thoughts from db
    getAllThoughts(req, res) {
        Thought.find({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // Retrieve a thought by its id
    getThought(req, res) {
        Thought.findOne({_id: params.id})
        .then(data => {
            // If no thought is found, send 404
            if (!data) {
                res.status(404).json({ message: 'Uh Oh! No thought found that is associated with this id!' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // Add a new thought
    addThought({body}, res) {
        Thought.create(body)
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    },
    // Edit a thought
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(data => {
            if (!data) {
            res.status(404).json({ message: 'Uh Oh! No thought found that is associated with this id!' });
            return;
        }
        res.json(data);
        })
        .catch(err => res.status(400).json(err));
    },
    // Removed a thought from the db
    deleteThought({params}, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(data => {
            if (!data) {
            res.status(404).json({ message: 'Uh Oh! No thought found that is associated with this id!' });
            return;
        }
        res.json(data);
        })
        .catch(err => res.status(400).json(err));
    }
}

module.exports = thoughtController;