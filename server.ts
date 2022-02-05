import express from 'express';
import bodyParser from "body-parser";
import TuitController from './controllers/TuitController';

import UserController from './controllers/UserController';
import TuitDao from './daos/TuitDao';
import UserDao from './daos/UserDao';

// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// load env vars
// dotenv.config({ path: './config/config.env' });

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
// Connect to database
connectDB();

const app = express();

// Body parser
app.use(bodyParser.json())

const userController = new UserController(app, new UserDao());
const tuitController = new TuitController(app, new TuitDao());

//const PORT = 4000;
app.listen(process.env.PORT);

// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );
