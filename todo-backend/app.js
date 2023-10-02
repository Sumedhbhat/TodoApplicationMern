const express = require("express");
const env = require("dotenv");
var cors = require("cors");
var path = require("path");

// imports routes, middleware, and configs
const todos = require("./src/routes/todos.route");
const { notFoundRoute, errorHandler } = require("./src/configs/errorHandler");

env.config();

const app = express();

const connectDatabase = require("./src/db/connect");
connectDatabase();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "todo-fronted", "build")));

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Welcome to TODO Node.js application backend." });
// });

app.use("/api", todos);

app.use(notFoundRoute);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("TODO-App backend server running on: " + process.env.PORT);
});
