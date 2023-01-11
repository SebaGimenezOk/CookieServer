const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();

const COOKIE_SECRET = process.env.COOKIE_SECRET || 'default';


app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(COOKIE_SECRET));
app.use(session({

}))


module.exports = app;
