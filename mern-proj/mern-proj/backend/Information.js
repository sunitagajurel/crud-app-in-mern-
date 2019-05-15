const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Info = new Schema({
    data: {
        type: String
    },
    vehicle_condition: {
        type: String
    }
});
module.exports = mongoose.model('Info', Info);