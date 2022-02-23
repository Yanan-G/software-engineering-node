/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/follows/FollowModel";
import Follow from "../models/follows/Follow";

 /**
  * @class FollowDao Implements Data Access Object managing data storage
  * of Follows
  * @property {FollowDao} followDao Private single instance of FollowDao
  */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;

     /**
      * Creates singleton DAO instance
      * @returns FollowDao
      */
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

     /**
      * Uses FollowModel to retrieve all follow documents that the user is following
      * from follows collection
      * @param {string} uid User's primary key
      * @returns Promise To be notified when follows are retrieved from the database
      */
    findAllFollowings = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({user: uid})
            .populate("userFollowing")
            .exec();

     /**
      * Uses FollowModel to retrieve all follows documents that are following the user 
      * from follows collection
      * @param {string} uid User's primary key
      * @returns Promise To be notified when follows are retrieved from the database
      */
    findAllFollowers = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({user: uid})
            .populate("userFollowed")
            .exec();

     /**
      * Inserts follow instance into the database
      * @param {string} uid1 Primary key of user1 - initiating the follow
      * @param {string} uid2 Primary key of user2 - receiving the follow
      * @returns Promise To be notified when follow is inserted into the database
      */
    userFollowsUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.create({userFollowing: uid1, userFollowed: uid2});

     /**
      * Removes follow from the database.
      * @param {string} uid1 Primary key of user1 - initiating the unfollow
      * @param {string} uid2 Primary key of user2 - receiving the unfollow
      * @returns Promise To be notified when follow is removed from the database
      */
    userUnfollowsUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.deleteOne({userFollowing: uid1, userFollowed: uid2});
}