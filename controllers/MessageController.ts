/**
 * @file Controller RESTful Web service API for messages resource
 */
 import {Express, Request, Response} from "express";
 import MessageDao from "../daos/MessageDao";
 import MessageControllerI from "../interfaces/MessageControllerI";
 
 /**
  * @class MessageController Implements RESTful Web service API for messages resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>GET /api/users/:uid/messages/outbox to retrieve all messages sent by a user
  *     </li>
  *     <li>GET /api/users/:uid/messages/inbox to retrieve all messsages received by a user
  *     </li>
  *     <li>POST /api/users/:uid1/messages/:uid2 to record that a user messages another user
  *     </li>
  *     <li>DELETE /api/messages/:mid to record that a user deletes a message</li>
  * </ul>
  * @property {MessageDao} messageDao Singleton DAO implementing messages CRUD operations
  * @property {MessageController} MessageController Singleton controller implementing
  * RESTful Web service API
  */
 export default class MessageController implements MessageControllerI {
     private static messageDao: MessageDao = MessageDao.getInstance();
     private static messageController: MessageController | null = null;
     /**
      * Creates singleton controller instance
      * @param {Express} app Express instance to declare the RESTful Web service
      * API
      * @return MessageController
      */
     public static getInstance = (app: Express): MessageController => {
         if(MessageController.messageController === null) {
             MessageController.messageController = new MessageController();
             app.get("/api/users/:uid/messages/outbox", MessageController.messageController.findAllMessagesSentByUser);
             app.get("/api/users/:uid/messages/inbox", MessageController.messageController.findAllMessagesReceivedByUser);
             app.post("/api/users/:uid1/messages/:uid2", MessageController.messageController.userSendsMessage);
             app.delete("/api/users/uid/messages/:mid", MessageController.messageController.userDeletesMessage);
         }
         return MessageController.messageController;
     }
 
     private constructor() {}
 
     /**
      * Retrieves all messages that were sent by a user from the database
      * @param {Request} req Represents request from client, including the path
      * parameter uid representing the user sending the messages
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the message objects
      */
     findAllMessagesSentByUser = (req: Request, res: Response) =>
         MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
             .then(messages => res.json(messages));
 
     /**
      * Retrieves all messages that were received by a user from the database
      * @param {Request} req Represents request from client, including the path
      * parameter uid representing the user receiving the messages
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the message objects
      */
     findAllMessagesReceivedByUser = (req: Request, res: Response) =>
         MessageController.messageDao.findAllMessagesReceivedByUser(req.params.uid)
             .then(messages => res.json(messages));
 
     /**
      * @param {Request} req Represents request from client, including the
      * path parameters uid1 and uid2 representing the user that is sending the message
      * and the user receiving the message
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON containing the new message that was inserted in the
      * database
      */
     userSendsMessage = (req: Request, res: Response) =>
         MessageController.messageDao.userSendsMessage(req.params.uid1, req.params.uid)
             .then(status => res.send(status));
     
     /**
      * @param {Request} req Represents request from client, including the
      * path parameters mid representing the message that is being deleted
      * @param {Response} res Represents response to client, including status
      * on whether deleting the message was successful or not
      */
     userDeletesMessage = (req: Request, res: Response) =>
         MessageController.messageDao.userDeletesMessage(req.params.uid, req.params.mid)
             .then(messages => res.json(messages));
 };