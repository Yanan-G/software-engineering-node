/**
 * @file Implements mongoose model to CRUD
 * documents in the bookmarks collection
 */
 const mongoose = require('mongoose');
 import BookmarkSchema from "./BookmarkSchema";
 const BookmarkModel = mongoose.model("BookmarkModel", BookmarkSchema);
 export default BookmarkModel;