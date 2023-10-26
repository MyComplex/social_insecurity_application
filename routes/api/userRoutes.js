/* IMPORT MODULES */
const router = require('express').Router();
const { createUser, getUser, getAllUsers, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

/* DECLARE ROUTES */
router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

/* EXPORT ROUTER */
module.exports = router;
