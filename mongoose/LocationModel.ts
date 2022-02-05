import LocationSchema from "./LocationSchema";
const mongoose = require('mongoose');

const LocationModel = mongoose.model('LocationModel', LocationSchema);
export default LocationModel;