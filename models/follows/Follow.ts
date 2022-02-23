/**
 * @file Declares Follow data type representing relationship between
 * a user being followed and a user following the other user
 */
 import User from "../users/User";
 
 /**
  * @typedef Follow Represents follows relationship between a user being
  * followed and a user following the other user
  * @property {User} userFollowed User being followed
  * @property {User} userFollowing User following the other user
  */
 
 export default interface Follow {
     userFollowed: User
     userFollowing: User
 };