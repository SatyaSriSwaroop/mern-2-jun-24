const express = require("express"); //imported the module
require("dotenv").config()
// const {getCurrencies, getCurrenciesbBySymbol} = require("./controllers/currencies.controllers");
const userRouter = require("./routes/users.routes")
const currencyRouter = require("./routes/currencies.router")
// const { getUsers, getUserById, searchUsers } = require("./controllers/users.controllers");
// import express from "express"; //imported the module
// import {getCurrencies, getCurrenciesbBySymbol} from "./controllers/currencies.controllers.js";


const app = express();
const PORT = 8082;

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


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
