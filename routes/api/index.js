/* IMPORT MODULES */
const router = require('express').Router();
const userRoutes = require('./userRoutes');

/* USE ROUTES */
router.use('/users', userRoutes);

/* EXPORT ROUTER */
module.exports = router;
