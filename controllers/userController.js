/* IMPORT MODULES */
const User = require('../models/User');

/* CREATE CONTROLLER FUNCTIONS AND EXPORT */
module.exports = {
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.userId);
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async getAllUsers(req, res) {
        try {
            const users = await User.find({});
            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true, runValidators: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true, runValidators: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
};
