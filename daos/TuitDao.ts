import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";

export default class TuitDao implements TuitDaoI {
   async findAllTuits(): Promise<Tuit[]> {
       return await TuitModel.find();
   }
   async findTuitById(tuitId: string): Promise<Tuit | null> {
       return await TuitModel.findById(tuitId);
   }
   async findTuitsByUser(userId: string): Promise<Tuit[] | null> {
       return await TuitModel.findById(userId);
   }
   async createTuit(tuit: Tuit): Promise<Tuit> {
       return await TuitModel.create(tuit);
   }
   async deleteTuit(tuitId: string):  Promise<any> {
       return await TuitModel.deleteOne({_id: tuitId});
   }
   async updateTuit(tuitId: string, tuit: Tuit): Promise<any> {
       return await TuitModel.updateOne({_id: tuitId}, {$set: tuit});
   }
}
