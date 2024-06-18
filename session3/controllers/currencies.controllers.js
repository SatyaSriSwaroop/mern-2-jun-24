// const currenciesData = require("../../currencies.json");
const axios = require("axios");
// import currenciesData from "../../currencies.json" assert {type:'json'};

const getCurrencies = async(req, res) => {
    console.log(req.query);
    const {min_value} = req.query;

    try{
        const {data: currenciesData} = await axios.get('https:/api.coinbase.com/v2/currencies')
        if(min_value)
            return res.send(currenciesData.data.filter((currency) => currency.min_size === min_value));
        res.send(currenciesData.data);
    }
    catch(error){
        res.status(505).send({message: 'Problem in fetching data, retry!'});
    }
};

const getCurrenciesbBySymbol = async(req, res) => {
    const {symbol} = req.params;

    try{
        const {data: currenciesData} = await axios.get('https:/api.coinbase.com/v2/currencies')
        const reqCurrency = await currenciesData.data.find((currency) => currency.id.toLowerCase() === symbol.toLowerCase());
    if(reqCurrency === undefined)
        res.status(404).send({message: "Invalid currency symbol"});

        res.status(200).send(reqCurrency);
    }
    catch(error){
        res.status(505).send({message: 'Problem in fetching data, retry!'});
    }
};

module.exports = { getCurrencies, getCurrenciesbBySymbol}; //named exports
// export { getCurrencies, getCurrenciesbBySymbol}; 