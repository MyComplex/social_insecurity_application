/* IMPORT MODULE */
const mongoose = require('mongoose');

/* SETUP MONGOOSE CONNECTION TO MONGODB */
mongoose.connect('mongodb://127.0.0.1:27017/socialDB');

/* EXPORT CONNECTION */
module.exports = mongoose.connection;
