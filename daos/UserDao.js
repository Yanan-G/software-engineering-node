"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */
var UserModel_1 = require("../mongoose/users/UserModel");
/**
 * @class UserDao Implements Data Access Object managing data storage
 * of Users
 * @property {UserDao} userDao Private single instance of UserDao
 */
var UserDao = /** @class */ (function () {
    function UserDao() {
        var _this = this;
        /**
         * Uses UserModel to retrieve all user documents from users collection
         * @returns Promise To be notified when the users are retrieved from
         * database
         */
        this.findAllUsers = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].find().exec()];
        }); }); };
        /**
         * Uses UserModel to retrieve single user document from users collection
         * @param {string} uid User's primary key
         * @returns Promise To be notified when user is retrieved from the database
         */
        this.findUserById = function (uid) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].findById(uid)];
        }); }); };
        /**
         * Inserts user instance into the database
         * @param {User} user Instance to be inserted into the database
         * @returns Promise To be notified when user is inserted into the database
         */
        this.createUser = function (user) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].create(user)];
        }); }); };
        /**
         * Updates user with new values in database
         * @param {string} uid Primary key of user to be modified
         * @param {User} user User object containing properties and their new values
         * @returns Promise To be notified when user is updated in the database
         */
        this.updateUser = function (uid, user) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, UserModel_1["default"].updateOne({ _id: uid }, { $set: user })];
            });
        }); };
        this.updateUserSalaryByUsername = function (username, salary) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, UserModel_1["default"].updateOne({ username: username }, { $set: { salary: salary } })];
            });
        }); };
        /**
         * Removes user from the database.
         * @param {string} uid Primary key of user to be removed
         * @returns Promise To be notified when user is removed from the database
         */
        this.deleteUser = function (uid) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].deleteOne({ _id: uid })];
        }); }); };
        /**
         * Removes all users from the database. Useful for testing
         * @returns Promise To be notified when all users are removed from the
         * database
         */
        this.deleteAllUsers = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].deleteMany({})];
        }); }); };
        this.findUserByCredentials = function (username, password) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].findOne({ username: username, password: password })];
        }); }); };
        this.findUserByUsername = function (username) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, UserModel_1["default"].findOne({ username: username })];
        }); }); };
    }
    UserDao.userDao = null;
    /**
     * Creates singleton DAO instance
     * @returns UserDao
     */
    UserDao.getInstance = function () {
        if (UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    };
    return UserDao;
}());
exports["default"] = UserDao;
;
