const mongoose = require('mongoose');
import TopicSchema from "./TopicSchema";
const TopicModel = mongoose.model('TopicModel', TopicSchema);
export default TopicModel;