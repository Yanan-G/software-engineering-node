/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/likes/LikeModel";
import Like from "../models/likes/Like";

 /**
  * @class LikeDao Implements Data Access Object managing data storage
  * of Likes
  * @property {LikeDao} likeDao Private single instance of LikeDao
  */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;

     /**
      * Creates singleton DAO instance
      * @returns LikeDao
      */
    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }
    private constructor() {}

     /**
      * Uses LikeModel to retrieve all user documents that liked the tuit
      * from users collection
      * @param {string} tid Tuit's primary key
      * @returns Promise To be notified when users are retrieved from the database
      */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();

     /**
      * Uses LikeModel to retrieve all tuit documents that were liked by the user
      * from tuits collection
      * @param {string} uid User's primary key
      * @returns Promise To be notified when tuits are retrieved from the database
      */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();

     /**
      * Inserts like instance into the database
      * @param {string} uid Primary key of user to like the tuit
      * @param {string} tid Primary key of tuit to be liked
      * @returns Promise To be notified when like is inserted into the database
      */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});

     /**
      * Removes like from the database.
      * @param {string} uid Primary key of user whose like to be removed
      * @param {string} tid Primary key of the liked tuit
      * @returns Promise To be notified when like is removed from the database
      */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}