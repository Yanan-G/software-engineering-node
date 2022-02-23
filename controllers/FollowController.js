"use strict";
exports.__esModule = true;
var FollowDao_1 = require("../daos/FollowDao");
/**
 * @class FollowController Implements RESTful Web service API for follows resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/followers to retrieve all the followers of a user
 *     </li>
 *     <li>GET /api/users/:uid/follows to retrieve all followings of a user
 *     </li>
 *     <li>POST /api/users/:uid1/follows/:uid2 to record that a user follows another user
 *     </li>
 *     <li>DELETE /api/users/:uid1/follows/:uid2 to record that a user
 *     no longer follows another user</li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing follows CRUD operations
 * @property {FollowController} FollowController Singleton controller implementing
 * RESTful Web service API
 */
var FollowController = /** @class */ (function () {
    function FollowController() {
        /**
         * Retrieves all followings of a user from the database
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the follow objects
         */
        this.findAllFollowings = function (req, res) {
            return FollowController.followDao.findAllFollowings(req.params.uid)
                .then(function (follows) { return res.json(follows); });
        };
        /**
         * Retrieves all followers of a user from the database
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the follow objects
         */
        this.findAllFollowers = function (req, res) {
            return FollowController.followDao.findAllFollowers(req.params.uid)
                .then(function (follows) { return res.json(follows); });
        };
        /**
         * @param {Request} req Represents request from client, including the
         * path parameters uid1 and uid2 representing the user that is following the other
         * user and the other user being followd
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new follow that was inserted in the
         * database
         */
        this.userFollowsUser = function (req, res) {
            return FollowController.followDao.userFollowsUser(req.params.uid1, req.params.uid2)
                .then(function (follows) { return res.json(follows); });
        };
        /**
         * @param {Request} req Represents request from client, including the
         * path parameters uid1 and uid2 representing the user that is unfollowing
         * the other user and the other user being followed
         * @param {Response} res Represents response to client, including status
         * on whether deleting the follow was successful or not
         */
        this.userUnfollowsUser = function (req, res) {
            return FollowController.followDao.userUnfollowsUser(req.params.uid1, req.params.uid2)
                .then(function (status) { return res.send(status); });
        };
    }
    FollowController.followDao = FollowDao_1["default"].getInstance();
    FollowController.followController = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return FollowController
     */
    FollowController.getInstance = function (app) {
        if (FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/api/users/:uid/followers", FollowController.followController.findAllFollowers);
            app.get("/api/users/:uid/follows", FollowController.followController.findAllFollowings);
            app.post("/api/users/:uid1/follows/:uid2", FollowController.followController.userFollowsUser);
            app["delete"]("/api/users/:uid1/follows/:uid2", FollowController.followController.userUnfollowsUser);
        }
        return FollowController.followController;
    };
    return FollowController;
}());
exports["default"] = FollowController;
;
