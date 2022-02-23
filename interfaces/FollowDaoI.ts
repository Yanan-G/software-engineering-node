import Follow from "../models/follows/Follow";

/**
 * @file Declares API for Follows related data access object methods
 */
export default interface FollowDaoI {
    findAllFollowings (uid: string): Promise<Follow[]>;
    findAllFollowers (uid: string): Promise<Follow[]>;
    userUnfollowsUser (uid1: string, uid2: string): Promise<any>;
    userFollowsUser (uid1: string, uid2: string): Promise<Follow>;
};