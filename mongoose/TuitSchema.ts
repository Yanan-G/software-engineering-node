const mongoose = require('mongoose');
import Tag from "../models/Tag";
import Topic from "../models/Topic";
import User from "../models/User";
import TagSchema from "./TagSchema";
import TopicSchema from "./TopicSchema";
import UserModel from "./UserModel";
import UserSchema from "./UserSchema";
const TuitSchema: any = new mongoose.Schema({
    tuit: String,
    postedOn: Date,
    postedBy: UserSchema,
    tag: TagSchema,
    topic: TopicSchema,
}, {collection: 'tuits'});
export default TuitSchema;