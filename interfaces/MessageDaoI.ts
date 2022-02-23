import Message from "../models/messages/Message";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI {
    findAllMessagesSentByUser (uid: string): Promise<Message[]>;
    findAllMessagesReceivedByUser (uid: string): Promise<Message[]>;
    userDeletesMessage (uid: string, mid: string): Promise<any>;
    userSendsMessage (uid1: string, uid2: string): Promise<Message>;
};