/**
 * @file Implements mongoose schema to CRUD
 * documents in the likes collection
 */
import {Schema} from "mongoose";
import * as mongoose from 'mongoose';
import Like from "../../models/likes/Like";

const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;