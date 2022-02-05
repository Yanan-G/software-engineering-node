import UserSchema from "./UserSchema";
const mongoose = require('mongoose');

const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;