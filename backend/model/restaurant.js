const mongoose = require('mongoose');
var restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    resid: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    desc: {
        type: String
    }

});

module.exports = mongoose.model('Restaurant', restaurantSchema);
