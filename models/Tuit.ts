import Topic from "./Topic";
import Tag from "./Tag";
import User from "./User";

export default class Tuit {
   private tuit: string = '';
   private postedOn: Date = new Date();
   private postedBy: User | null = null;
   private tag: Tag | null = null;
   private topic: Topic | null = null;
}
