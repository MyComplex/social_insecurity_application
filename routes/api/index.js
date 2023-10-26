/* IMPORT MODULES */
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

/* USE ROUTES */
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

/* EXPORT ROUTER */
module.exports = router;
