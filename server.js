/* IMPORT MODULES */
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

/* DECLARE PORT AND APP */
const PORT = 3001;
const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

/* CONNECT TO DATABASE AND SERVER */
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
