"use strict";
exports.__esModule = true;
var MessageDao_1 = require("../daos/MessageDao");
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
var MessageController = /** @class */ (function () {
    function MessageController() {
        /**
         * Retrieves all messages that were sent by a user from the database
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the user sending the messages
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the message objects
         */
        this.findAllMessagesSentByUser = function (req, res) {
            return MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
                .then(function (messages) { return res.json(messages); });
        };
        /**
         * Retrieves all messages that were received by a user from the database
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the user receiving the messages
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the message objects
         */
        this.findAllMessagesReceivedByUser = function (req, res) {
            return MessageController.messageDao.findAllMessagesReceivedByUser(req.params.uid)
                .then(function (messages) { return res.json(messages); });
        };
        /**
         * @param {Request} req Represents request from client, including the
         * path parameters uid1 and uid2 representing the user that is sending the message
         * and the user receiving the message
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new message that was inserted in the
         * database
         */
        this.userSendsMessage = function (req, res) {
            return MessageController.messageDao.userSendsMessage(req.params.uid1, req.params.uid)
                .then(function (status) { return res.send(status); });
        };
        /**
         * @param {Request} req Represents request from client, including the
         * path parameters mid representing the message that is being deleted
         * @param {Response} res Represents response to client, including status
         * on whether deleting the message was successful or not
         */
        this.userDeletesMessage = function (req, res) {
            return MessageController.messageDao.userDeletesMessage(req.params.uid, req.params.mid)
                .then(function (messages) { return res.json(messages); });
        };
    }
    MessageController.messageDao = MessageDao_1["default"].getInstance();
    MessageController.messageController = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessageController
     */
    MessageController.getInstance = function (app) {
        if (MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.get("/api/users/:uid/messages/outbox", MessageController.messageController.findAllMessagesSentByUser);
            app.get("/api/users/:uid/messages/inbox", MessageController.messageController.findAllMessagesReceivedByUser);
            app.post("/api/users/:uid1/messages/:uid2", MessageController.messageController.userSendsMessage);
            app["delete"]("/api/users/uid/messages/:mid", MessageController.messageController.userDeletesMessage);
        }
        return MessageController.messageController;
    };
    return MessageController;
}());
exports["default"] = MessageController;
;
