/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose BookmarkModel
 * to integrate with MongoDB
 */
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import BookmarkModel from "../mongoose/bookmarks/BookmarkModel";
import Bookmark from "../models/bookmarks/Bookmark";

 /**
  * @class BookmarkDao Implements Data Access Object managing data storage
  * of Bookmarks
  * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao
  */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;

     /**
      * Creates singleton DAO instance
      * @returns BookmarkDao
      */
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}

     /**
      * Uses BookmarkModel to retrieve all bookmarked tuits from bookmark collection
      * @param {string} uid User's primary key
      * @returns Promise To be notified when bookmarks are retrieved from the database
      */
    findAllTuitsBookmarkedByUser = async (uid: string): Promise<Bookmark[]> =>
        BookmarkModel
            .find({user: uid})
            .populate("bookmarkedTuit")
            .exec();

     /**
      * Removes bookmark from the database.
      * @param {string} tid Primary key of tuit to be unbookmarked
      * @param {string} uid Primary key of user to bookmark the tuit
      * @returns Promise To be notified when bookmark is removed from the database
      */
    userUnbookmarksTuit = async (tid: string, uid: string): Promise<any> =>
        BookmarkModel.deleteOne({bookmarkedTuit: tid, bookmarkedBy: uid});

     /**
      * Inserts bookmark instance into the database
      * @param {string} tid Primary key of tuit to be bookmarked
      * @param {string} uid Primary key of user to bookmark the tuit
      * @returns Promise To be notified when bookmark is inserted into the database
      */
    userBookmarksTuit = async (tid: string, uid: string): Promise<any> =>
        BookmarkModel.create({bookmarkedTuit: tid, bookmarkedBy: uid});
}