/**
 * @file Declares Tuit data type representing relationship between
 * a user posting a tuit and a tuit being posted
 */
import User from "../users/User";

/**
 * @typedef Tuit Represents relationship between a user posting 
 * a tuit and a tuit being posted
 * @property {string} tuit Tuit being posted
 * @property {User} postedBy User posting the tuit
 * @property {Date} postedOn Timestamp of the tuit
 */
export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
};