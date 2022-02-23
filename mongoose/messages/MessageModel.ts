/**
 * @file Implements mongoose model to CRUD
 * documents in the messages collection
 */
 const mongoose = require('mongoose');
 import MessageSchema from "./MessageSchema";
 const MessageModel = mongoose.model("MessageModel", MessageSchema);
 export default MessageModel;