const currenciesData = require("../../currencies.json");

const getCurrencies = (req, res) => {
    console.log(req.query);
    const {min_value} = req.query;
    let reqCurrency = [];
    
    if(min_value)
        reqCurrency = currenciesData.data.filter((currency) => currency.min_size === min_value);
    else
        reqCurrency = currenciesData.data;

    if(reqCurrency.length === 0)
        return res.status(404).send({message: "No currencies match"});
    res.send(reqCurrency);
};

const getCurrenciesbBySymbol = (req, res) => {
    console.log(req.params.symbol)
    const reqCurrency = currenciesData.data.find((currency) => currency.id.toLowerCase() === req.params.symbol.toLowerCase());
    if(reqCurrency === undefined)
        res.status(404).send({message: "Invalid currency symbol"});
    else
        res.send(reqCurrency);
};

module.exports = { getCurrencies, getCurrenciesbBySymbol}; //named exports