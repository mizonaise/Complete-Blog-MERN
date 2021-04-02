require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect Database
const db = process.env.MONGODB_URL;

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//Models import
require("./models/Post");
require("./models/Category");
require("./models/Comment");

// Init Middleware
app.use(express.json());

//Router import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
// app.use(require("./routes/comment"));

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, function () {
  var port = server.address().port;
  var host = server.address().address;
  console.log("Server is started at " + PORT);
  console.log("running at http://" + host + ":" + port);
});
