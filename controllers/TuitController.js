"use strict";
exports.__esModule = true;
/**
 * @file Controller RESTful Web service API for tuits resource
 */
var TuitDao_1 = require("../daos/TuitDao");
/**
 * @class TuitController Implements RESTful Web service API for tuits resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid/tuits to create a new tuit instance for
 *     a given user</li>
 *     <li>GET /api/tuits to retrieve all the tuit instances</li>
 *     <li>GET /api/tuits/:tid to retrieve a particular tuit instances</li>
 *     <li>GET /api/users/:uid/tuits to retrieve tuits for a given user </li>
 *     <li>PUT /api/tuits/:tid to modify an individual tuit instance </li>
 *     <li>DELETE /api/tuits/:tid to remove a particular tuit instance</li>
 * </ul>
 * @property {TuitDao} tuitDao Singleton DAO implementing tuit CRUD operations
 * @property {TuitController} tuitController Singleton controller implementing
 * RESTful Web service API
 */
var TuitController = /** @class */ (function () {
    function TuitController() {
        /**
         * Retrieves all tuits from the database and returns an array of tuits.
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the tuit objects
         */
        this.findAllTuits = function (req, res) {
            return TuitController.tuitDao.findAllTuits()
                .then(function (tuits) { return res.json(tuits); });
        };
        /**
         * Retrieves all tuits from the database for a particular user and returns
         * an array of tuits.
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the tuit objects
         */
        this.findAllTuitsByUser = function (req, res) {
            return TuitController.tuitDao.findAllTuitsByUser(req.params.uid)
                .then(function (tuits) { return res.json(tuits); });
        };
        /**
         * @param {Request} req Represents request from client, including path
         * parameter tid identifying the primary key of the tuit to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the tuit that matches the user ID
         */
        this.findTuitById = function (req, res) {
            return TuitController.tuitDao.findTuitById(req.params.uid)
                .then(function (tuit) { return res.json(tuit); });
        };
        /**
         * @param {Request} req Represents request from client, including body
         * containing the JSON object for the new tuit to be inserted in the
         * database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new tuit that was inserted in the
         * database
         */
        this.createTuitByUser = function (req, res) {
            return TuitController.tuitDao.createTuitByUser(req.params.uid, req.body)
                .then(function (tuit) { return res.json(tuit); });
        };
        /**
         * @param {Request} req Represents request from client, including path
         * parameter tid identifying the primary key of the tuit to be modified
         * @param {Response} res Represents response to client, including status
         * on whether updating a tuit was successful or not
         */
        this.updateTuit = function (req, res) {
            return TuitController.tuitDao.updateTuit(req.params.uid, req.body)
                .then(function (status) { return res.send(status); });
        };
        /**
         * @param {Request} req Represents request from client, including path
         * parameter tid identifying the primary key of the tuit to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        this.deleteTuit = function (req, res) {
            return TuitController.tuitDao.deleteTuit(req.params.uid)
                .then(function (status) { return res.send(status); });
        };
    }
    TuitController.tuitDao = TuitDao_1["default"].getInstance();
    TuitController.tuitController = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return TuitController
     */
    TuitController.getInstance = function (app) {
        if (TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController();
            app.get("/api/tuits", TuitController.tuitController.findAllTuits);
            app.get("/api/users/:uid/tuits", TuitController.tuitController.findAllTuitsByUser);
            app.get("/api/tuits/:uid", TuitController.tuitController.findTuitById);
            app.post("/api/users/:uid/tuits", TuitController.tuitController.createTuitByUser);
            app.put("/api/tuits/:uid", TuitController.tuitController.updateTuit);
            app["delete"]("/api/tuits/:uid", TuitController.tuitController.deleteTuit);
        }
        return TuitController.tuitController;
    };
    return TuitController;
}());
exports["default"] = TuitController;
;
