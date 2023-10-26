/* IMPORT MODULES */
const router = require('express').Router();
const { createUser, getUser, getAllUsers, updateUser, deleteUser } = require('../../controllers/userController');

/* DECLARE ROUTES */
router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

/* EXPORT ROUTER */
module.exports = router;
