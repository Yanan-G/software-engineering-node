"use strict";
exports.__esModule = true;
var TuitController = /** @class */ (function () {
    function TuitController(app, tuitDao) {
        var _this = this;
        this.findAllTuits = function (req, res) {
            return _this.tuitDao.findAllTuits()
                .then(function (tuits) { return res.json(tuits); });
        };
        this.findTuitById = function (req, res) {
            return _this.tuitDao.findTuitById(req.params.tuitid)
                .then(function (tuit) { return res.json(tuit); });
        };
        this.findTuitsByUser = function (req, res) {
            return _this.tuitDao.findTuitsByUser(req.params.userid)
                .then(function (tuit) { return res.json(tuit); });
        };
        this.createTuit = function (req, res) {
            return _this.tuitDao.createTuit(req.body)
                .then(function (tuit) { return res.json(tuit); });
        };
        this.deleteTuit = function (req, res) {
            return _this.tuitDao.deleteTuit(req.params.tuitid)
                .then(function (status) { return res.json(status); });
        };
        this.updateTuit = function (req, res) {
            return _this.tuitDao.updateTuit(req.params.tuitid, req.body)
                .then(function (status) { return res.json(status); });
        };
        this.app = app;
        this.tuitDao = tuitDao;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:tuitid', this.findTuitById);
        this.app.get('/users/:userid/tuits', this.findTuitsByUser);
        this.app.post('/tuits', this.createTuit);
        this.app["delete"]('/tuits/:tuitid', this.deleteTuit);
        this.app.put('/tuits/:tuitid', this.updateTuit);
    }
    return TuitController;
}());
exports["default"] = TuitController;
