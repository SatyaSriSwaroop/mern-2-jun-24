const router = require("express").Router();
const {getCurrencies, getCurrenciesbBySymbol} = require("../controllers/currencies.controllers");

router.get("/", (req, res) => {
    res.header({"region":"us"}).send(`<h1>Currency Database</h1>`);
});

router.get("/", 
    getCurrencies
);

router.get("/:symbol", 
    getCurrenciesbBySymbol);

module.exports = router;
