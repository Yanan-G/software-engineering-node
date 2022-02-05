const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
}, {collection: 'locations'});
export default LocationSchema;