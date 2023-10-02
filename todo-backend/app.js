const express = require("express");
const env = require("dotenv");
var cors = require("cors");

// imports routes, middleware, and configs
const todos = require("./src/routes/todos.route");
const { notFoundRoute, errorHandler } = require("./src/configs/errorHandler");

// loads environment variables from .env file
env.config();

// initializes express app
const app = express();

// application database connection establishment
const connectDatabase = require("./src/db/connect");
connectDatabase();

// corss-origin-allow-all
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sets default route
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to TODO Node.js application backend." });
});

// todos api routes
app.use("/api", todos);

// 404 - not found error handler
app.use(notFoundRoute);

// error handler
app.use(errorHandler);

// app listens to defined port
app.listen(process.env.PORT, () => {
  console.log("TODO-App backend server running on: " + process.env.PORT);
});
