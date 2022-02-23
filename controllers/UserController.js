"use strict";
exports.__esModule = true;
/**
 * @file Controller RESTful Web service API for users resource
 */
var UserDao_1 = require("../daos/UserDao");
/**
 * @class UserController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users to create a new user instance</li>
 *     <li>GET /api/users to retrieve all the user instances</li>
 *     <li>GET /api/users/:uid to retrieve an individual user instance </li>
 *     <li>PUT /api/users to modify an individual user instance </li>
 *     <li>DELETE /api/users/:uid to remove a particular user instance</li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {UserController} userController Singleton controller implementing
 * RESTful Web service API
 */
var UserController = /** @class */ (function () {
    function UserController() {
        /**
         * Retrieves all users from the database and returns an array of users.
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.findAllUsers = function (req, res) {
            return UserController.userDao.findAllUsers()
                .then(function (users) { return res.json(users); });
        };
        /**
         * Retrieves the user by their primary key
         * @param {Request} req Represents request from client, including path
         * parameter uid identifying the primary key of the user to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the user that matches the user ID
         */
        this.findUserById = function (req, res) {
            return UserController.userDao.findUserById(req.params.uid)
                .then(function (user) { return res.json(user); });
        };
        /**
         * Creates a new user instance
         * @param {Request} req Represents request from client, including body
         * containing the JSON object for the new user to be inserted in the
         * database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new user that was inserted in the
         * database
         */
        this.createUser = function (req, res) {
            return UserController.userDao.createUser(req.body)
                .then(function (user) { return res.json(user); });
        };
        /**
         * Modifies an existing user instance
         * @param {Request} req Represents request from client, including path
         * parameter uid identifying the primary key of the user to be modified
         * @param {Response} res Represents response to client, including status
         * on whether updating a user was successful or not
         */
        this.updateUser = function (req, res) {
            return UserController.userDao.updateUser(req.params.uid, req.body)
                .then(function (status) { return res.send(status); });
        };
        /**
         * Removes a user instance from the database
         * @param {Request} req Represents request from client, including path
         * parameter uid identifying the primary key of the user to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        this.deleteUser = function (req, res) {
            return UserController.userDao.deleteUser(req.params.uid)
                .then(function (status) { return res.send(status); });
        };
        /**
         * Removes all user instances from the database. Useful for testing
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including status
         * on whether deleting all users was successful or not
         */
        this.deleteAllUsers = function (req, res) {
            return UserController.userDao.deleteAllUsers()
                .then(function (status) { return res.send(status); });
        };
        this.login = function (req, res) {
            return UserController.userDao.findUserByCredentials(req.body.username, req.body.password)
                .then(function (user) {
                res.json(user);
            });
        };
        this.register = function (req, res) {
            return UserController.userDao.findUserByUsername(req.body.username)
                .then(function (user) {
            });
        };
    }
    UserController.userDao = UserDao_1["default"].getInstance();
    UserController.userController = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns UserController
     */
    UserController.getInstance = function (app) {
        if (UserController.userController === null) {
            UserController.userController = new UserController();
            // for testing without postman. Not RESTful
            app.get("/api/users/create", UserController.userController.createUser);
            app.get("/api/users/:uid/delete", UserController.userController.deleteUser);
            app.get("/api/users/delete", UserController.userController.deleteAllUsers);
            // RESTful User Web service API
            app.get("/api/users", UserController.userController.findAllUsers);
            app.get("/api/users/:uid", UserController.userController.findUserById);
            app.post("/api/users", UserController.userController.createUser);
            app.put("/api/users/:uid", UserController.userController.updateUser);
            app["delete"]("/api/users/:uid", UserController.userController.deleteUser);
            app["delete"]("/api/users", UserController.userController.deleteAllUsers);
        }
        return UserController.userController;
    };
    return UserController;
}());
exports["default"] = UserController;
;
