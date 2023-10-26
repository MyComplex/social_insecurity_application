/* IMPORT MODULES */
const { Thought, User } = require('../models');

/* CREATE CONTROLLER FUNCTIONS AND EXPORT */
module.exports = {
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
                .then(({ _id }) => {
                    return User.findOneAndUpdate(
                        { username: req.body.thoughtAuthor },
                        { $push: { thoughts: _id } },
                        { new: true, runValidators: true }
                    );
                });
            return res.status(200).json(thought);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            return res.status(200).json(thought);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            return res.status(200).json(thought);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            return res.status(200).json(thought);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            return res.status(200).json(thoughts);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { new: true, runValidators: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            return res.status(200).json(thought);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true, runValidators: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            return res.status(200).json(thought);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};
