const express = require("express"); //imported the module
require("dotenv").config()
// const {getCurrencies, getCurrenciesbBySymbol} = require("./controllers/currencies.controllers");
const userRouter = require("./routes/users.routes")
const currencyRouter = require("./routes/currencies.routes");
const blogsRouter = require("./routes/blogs.routes");
const connectDB = require("./db/config");
// const verifyAuth = require("./middlewares/verifyAuth.middleware");
// const { getUsers, getUserById, searchUsers } = require("./controllers/users.controllers");
// import express from "express"; //imported the module
// import {getCurrencies, getCurrenciesbBySymbol} from "./controllers/currencies.controllers.js";

// mongoose
// .connect(process.env.DB_URI)
// .then(() => console.log("Connected to DB at", process.env.DB_URI))
// .catch((e) => console.log("Failed to connect to DB", e));


connectDB();

const app = express();
const PORT = 8082;

app.use(express.json()); //the req body of content-type: application/json will be considered.
//app.use(express.text());// will for text contenttype.

// app.use(verifyAuth);

//currencies
app.use('/currencies', currencyRouter);
// app.get("/", (req, res) => {
//     res.header({"region":"us"}).send(`<h1>Currency Database</h1>`);
// });
// app.get("/currencies", 
//     getCurrencies
// );
// app.get("/currencies/:symbol", 
//     getCurrenciesbBySymbol);

// Users
app.use("/users", userRouter);
// app.get("/users", getUsers);
// app.get("/users/search", searchUsers);
// app.get("/users/:uuid", getUserById);

app.use("/blogs", blogsRouter);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
