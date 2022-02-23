/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/messages/Message";

 /**
  * @class MessageDao Implements Data Access Object managing data storage
  * of Messages
  * @property {MessageDao} messageDao Private single instance of MessageDao
  */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;

     /**
      * Creates singleton DAO instance
      * @returns MessageDao
      */
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}

     /**
      * Uses MessageModel to retrieve all message documents sent by the user 
      * from messages collection
      * @param {string} uid User's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
    findAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({user: uid})
            .populate("from")
            .exec();

     /**
      * Uses MessageModel to retrieve all message documents received by the user 
      * from messages collection
      * @param {string} uid User's primary key
      * @returns Promise To be notified when messages are retrieved from the database
      */
    findAllMessagesReceivedByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({user: uid})
            .populate("to")
            .exec();

     /**
      * Removes message from the database.
      * @param {string} uid Primary key of user whose message to be removed
      * @param {string} mid Primary key of message to be removed
      * @returns Promise To be notified when message is removed from the database
      */
    userDeletesMessage = async (uid: string, mid: string): Promise<any> =>
        MessageModel.deleteOne({user: uid, message: mid});

     /**
      * Inserts message instance into the database
      * @param {string} uid1 Primary key of user from whom message to be sent
      * @param {string} uid2 Primary key of user by whom message to be received
      * @returns Promise To be notified when message is inserted into the database
      */
    userSendsMessage = async (uid1: string, uid2: string): Promise<any> =>
        MessageModel.create({from: uid1, to: uid2});
}