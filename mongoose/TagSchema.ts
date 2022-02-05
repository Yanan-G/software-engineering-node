import TuitSchema from "./TuitSchema";

const mongoose = require('mongoose');
const TagSchema = new mongoose.Schema({
    tag: String,
    tuits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' }]
}, {collection: 'tags'});
export default TagSchema;