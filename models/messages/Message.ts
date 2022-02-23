/**
 * @file Declares Message data type representing relationship between
 * a user and another user, as in user messages another user
 */
 import User from "../users/User";
 
 /**
  * @typedef Message Represents messages relationship between a user and another user,
  * as in user messages another user
  * @property {string} message String representation of the messsage
  * @property {User} to User sending the message
  * @property {User} from User receiving the message
  * @property {Date} sentOn Timestamp of the message
  */
 
 export default interface Message {
     message: string,
     to: User,
     from: User,
     sentOn: Date
 };