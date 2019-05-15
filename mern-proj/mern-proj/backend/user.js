const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Vehicle = new Schema({
    vehicle_type: {
        type: String
    },
    vehicle_condition: {
        type: String
    },
    available_date: {
        type: String
    },
    rate: {
        type: String
    },

    location_preference: {
        type: String
    },
    

    vehicle_booked: {
        type: Boolean
    }
});
module.exports = mongoose.model('User', Vehicle);