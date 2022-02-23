/**
 * @file Implements mongoose schema to CRUD
 * documents in the messages collection
 */
import {Schema} from "mongoose";
import * as mongoose from 'mongoose';
import Message from "../../models/messages/Message";

const MessageSchema = new mongoose.Schema<Message>({
    message: String,
    to: {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: Date
}, {collection: "messages"});
export default MessageSchema;