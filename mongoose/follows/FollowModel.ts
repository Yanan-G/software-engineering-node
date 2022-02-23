/**
 * @file Implements mongoose model to CRUD
 * documents in the follows collection
 */
 const mongoose = require('mongoose');
 import FollowSchema from "./FollowSchema";
 const FollowModel = mongoose.model("FollowModel", FollowSchema);
 export default FollowModel;