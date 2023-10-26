/* IMPORT MODULES */
const router = require('express').Router();
const apiRoutes = require('./api');

/* USE API ROUTES */
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Oops! Bad route!');
});

/* EXPORT ROUTER */
module.exports = router;
