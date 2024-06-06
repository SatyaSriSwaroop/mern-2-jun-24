const express = require("express"); //imported the module
const {getCurrencies, getCurrenciesbBySymbol} = require("./controllers/currencies.controllers")

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
    res.header({"region":"us"}).send(`<h1>Currency Database</h1>`);
});

app.get("/currencies", 
    getCurrencies
);

app.get("/currencies/:symbol", 
    getCurrenciesbBySymbol);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
