/* IMPORT MODULES */
const router = require('express').Router();
const { createThought, getThought, getAllThoughts, updateThought, deleteThought } = require('../../controllers/thoughtController');

/* DECLARE ROUTES */
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

/* EXPORT ROUTER */
module.exports = router;
