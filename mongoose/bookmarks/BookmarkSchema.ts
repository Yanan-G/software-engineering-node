/**
 * @file Implements mongoose schema to CRUD
 * documents in the bookmarks collection
 */
import {Schema} from "mongoose";
import * as mongoose from 'mongoose';
import Bookmark from "../../models/bookmarks/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: "bookmarks"});
export default BookmarkSchema;