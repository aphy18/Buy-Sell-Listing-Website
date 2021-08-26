// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession    = require('cookie-session');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['abcdefghijklmnopqr123456789'],
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");
const userLogin = require("./routes/login");
const userLogout = require("./routes/logout")
const userRegister = require("./routes/register");
const userMyList = require("./routes/mylist");
const userSearch = require("./routes/search");
const userAddCar = require("./routes/addCar");
const userHomePage = require("./routes/index");
const userMessageList = require("./routes/messages");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/login", userLogin(db));
app.use("/api/logout", userLogout);
app.use("/api/register", userRegister(db));
app.use("/api/mylist", userMyList(db));
app.use("/api/search", userSearch(db));
app.use("/api/addCar", userAddCar(db));
app.use("/", userHomePage(db));
app.use("/api/messages", userMessageList(db));
// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
