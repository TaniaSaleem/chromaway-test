const axios = require('axios');
const path  = require('path');

module.exports={
    async index(req, res) {
        return res.sendFile(path.resolve(__dirname,'../../index.html'));
    },
    async data(req, res) {
        const result = await axios.get(`${process.env.BINANCE_SERVER}/api/v3/klines?symbol=BTCUSDT&interval=${req.query.interval||'1d'}&limit=${req.query.limit||'30'}`);
        return res.json(result.data.map(e=>({
            openTime:e[0],
            openPrice:e[1],
            highPrice:e[2],
            lowPrice:e[3],
            closePrice:e[4],
            volume:e[5],
            closeTime:e[6],
            assetVolume:e[7],
            numberOfTrades:e[8],
            takerBuyBaseAssetVolume:e[9],
            takerBuyQuoteAssetVolume:e[10],

        }))).end();
    }
}