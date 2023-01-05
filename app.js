const cookieParser = require('cookie-parser');
const express = require('express')
require('dotenv').config();
const indexRouter = require('./src/routes/index');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const COOKIES_SECRET=process.env.COOKIES_SECRET || '3445';

app.use(cookieParser(COOKIES_SECRET));

app.use(indexRouter);


module.exports = app;
