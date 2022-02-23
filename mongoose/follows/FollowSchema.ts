/**
 * @file Implements mongoose schema to CRUD
 * documents in the follows collection
 */
import {Schema} from "mongoose";
import * as mongoose from 'mongoose';
import Follow from "../../models/follows/Follow";

const FollowSchema = new mongoose.Schema<Follow>({
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follows"});
export default FollowSchema;