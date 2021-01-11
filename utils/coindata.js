const request = require('request');
const options = {
    url: 'https://api.nomics.com/v1/currencies/ticker?key=c868b7c88d4aa5fbc7a106a649b809a1&ids=BTC,LTC,ETH,USDT,XRP,DOT,ADA,ZIL,ALGO,LINK,BNB,XMR,VET,UNI,SNX,ATOM,DASH,THETA,TFUEL,IOTA&interval=1h,1d,30d&sort=rank',
  json: true,
};


const coindatafetch = (callback)=>{
    request(options, (error,res)=>{
        if(error)
            callback(error);
        else{          
            callback(res.body);    
        }
    });
}

module.exports = {
    coindatafetch
}









// console.log('=========================================================================');
//                         console.log(`${coin.rank} - ${coin.id} ---- price: ${coin.price} --- high: ${coin.high}`);
//                         console.log(`1h: --- \nVol: ${coin["1h"].volume} --- price_change: ${coin["1h"].price_change} ${price_change1h}\n`);
//                         console.log(`1d: --- \nVol: ${coin["1d"].volume} --- price_change: ${coin["1d"].price_change} ${price_change1d}\n`);
//                         console.log(`30d: --- \nVol: ${coin["30d"].volume} --- price_change: ${coin["30d"].price_change} ${price_change30d}\n\n`);
//                         console.log('=========================================================================');