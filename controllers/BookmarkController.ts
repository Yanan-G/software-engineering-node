/**
 * @file Controller RESTful Web service API for bookmarks resource
 */
 import {Express, Request, Response} from "express";
 import BookmarkDao from "../daos/BookmarkDao";
 import BookmarkControllerI from "../interfaces/BookmarkControllerI";
 
 /**
  * @class BookmarkController Implements RESTful Web service API for bookmarks resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>GET /api/users/:uid/bookmarks to retrieve all the tuits bookmarkd by a user
  *     </li>
  *     <li>POST /api/users/:uid/bookmarks/:tid to record that a user bookmarks a tuit
  *     </li>
  *     <li>DELETE /api/bookmarks/:bid to record that a user
  *     no londer bookmarks a tuit</li>
  * </ul>
  * @property {BookmarkDao} bookmarkDao Singleton DAO implementing bookmarks CRUD operations
  * @property {BookmarkController} BookmarkController Singleton controller implementing
  * RESTful Web service API
  */
 export default class BookmarkController implements BookmarkControllerI {
     private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
     private static bookmarkController: BookmarkController | null = null;
     /**
      * Creates singleton controller instance
      * @param {Express} app Express instance to declare the RESTful Web service
      * API
      * @return BookmarkController
      */
     public static getInstance = (app: Express): BookmarkController => {
         if(BookmarkController.bookmarkController === null) {
             BookmarkController.bookmarkController = new BookmarkController();
             app.get("/api/users/:uid/bookmarks", BookmarkController.bookmarkController.findAllTuitsBookmarkedByUser);
             app.post("/api/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.userBookmarksTuit);
             app.delete("/api/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.userUnbookmarksTuit);
         }
         return BookmarkController.bookmarkController;
     }
 
     private constructor() {}
 
     /**
      * Retrieves all users that bookmarkd a tuit from the database
      * @param {Request} req Represents request from client, including the path
      * parameter tid representing the bookmarkd tuit
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the user objects
      */
    //  findAllUsersThatBookmarkdTuit = (req: Request, res: Response) =>
    //      BookmarkController.bookmarkDao.findAllUsersThatBookmarkdTuit(req.params.tid)
    //          .then(bookmarks => res.json(bookmarks));
 
     /**
      * Retrieves all tuits bookmarkd by a user from the database
      * @param {Request} req Represents request from client, including the path
      * parameter uid representing the user bookmarkd the tuits
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON arrays containing the tuit objects that were bookmarkd
      */
     findAllTuitsBookmarkedByUser = (req: Request, res: Response) =>
         BookmarkController.bookmarkDao.findAllTuitsBookmarkedByUser(req.params.uid)
             .then(bookmarks => res.json(bookmarks));
 
     /**
      * @param {Request} req Represents request from client, including the
      * path parameters uid and tid representing the user that is bookmarking the tuit
      * and the tuit being bookmarkd
      * @param {Response} res Represents response to client, including the
      * body formatted as JSON containing the new bookmark that was inserted in the
      * database
      */
     userBookmarksTuit = (req: Request, res: Response) =>
         BookmarkController.bookmarkDao.userBookmarksTuit(req.params.tid, req.params.uid)
             .then(bookmarks => res.json(bookmarks));
 
     /**
      * @param {Request} req Represents request from client, including the
      * path parameters bid representing the bookmark that is unliking
      * the user and the tuit being unbookmarkd
      * @param {Response} res Represents response to client, including status
      * on whether deleting the bookmark was successful or not
      */
     userUnbookmarksTuit = (req: Request, res: Response) =>
         BookmarkController.bookmarkDao.userUnbookmarksTuit(req.params.tid, req.params.uid)
             .then(status => res.send(status));
 };