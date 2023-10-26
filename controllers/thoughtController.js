/* IMPORT MODULES */
const Thought = require('../models/Thought');

/* CREATE CONTROLLER FUNCTIONS AND EXPORT */
module.exports = {
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
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
};
