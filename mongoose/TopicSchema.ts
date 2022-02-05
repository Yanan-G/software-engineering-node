import TuitSchema from "./TuitSchema";

const mongoose = require('mongoose');
const TopicSchema = new mongoose.Schema({
    topic: String,
    tuits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' }]
}, {collection: 'topics'});
export default TopicSchema;