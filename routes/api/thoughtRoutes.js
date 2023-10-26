/* IMPORT MODULES */
const router = require('express').Router();
const { createThought, getThought, getAllThoughts, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');

/* DECLARE ROUTES */
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

/* EXPORT ROUTER */
module.exports = router;
