const request = require('request');
const portfolio = [1, 2, 1027, 825,52,6636,2010,2469,4030,1972,1839,328,3077,7083,2586,3794,313,2416,3822];
const coinName = ['BTC', 'LTC', 'ETH', 'USDT', 'XRP', 'DOT', 'ADA', 'ZIL', 'ALGO', 'LINK', 'BNB', 'XMR', 'VET', 'UNI', 'SNX', 'ATOM', 'DASH', 'THETA', 'TFUEL', 'IOTA'];
const options = {
    url: 'https://api.nomics.com/v1/currencies/ticker?key=c868b7c88d4aa5fbc7a106a649b809a1&ids=BTC,LTC,ETH,USDT,XRP,DOT,ADA,ZIL,ALGO,LINK,BNB,XMR,VET,UNI,SNX,ATOM,DASH,THETA,TFUEL,IOTA&interval=1h,1d,30d&sort=rank',
  json: true,
};


request(options, (error,res)=>{
    // console.time('someFunction')
    if(error)
        console.log(error);
    else
        {
            let percentage1h,percentage1d,percentage30d;
            let price_change1h,price_change1d,price_change30d;
            res.body.forEach(coin => {
                if(coin["1h"].price_change<0){
                    percentage1h = (coin["1h"].price_change/(coin.price - coin["1h"].price_change))*100;
                    price_change1h = ` -${percentage1h}%`;
                }
                    
                else{
                    percentage1h = (coin["1h"].price_change/(coin.price - coin["1h"].price_change))*100;
                    price_change1h = ` +${percentage1h}%`;
                }
                if(coin["1d"].price_change<0){
                    percentage1d = (coin["1d"].price_change/(coin.price - coin["1d"].price_change))*100;
                    price_change1d = ` -${percentage1d}%`;
                }
                    
                else{
                    percentage1d = (coin["1d"].price_change/(coin.price - coin["1d"].price_change))*100;
                    price_change1d = ` +${percentage1d}%`;
                }
                    

                if(coin["30d"].price_change<0){
                    percentage30d = (coin["30d"].price_change/(coin.price - coin["30d"].price_change))*100;
                    price_change30d = ` -${percentage1d}%`;
                }
                    
                else{
                    percentage30d = (coin["30d"].price_change/(coin.price - coin["30d"].price_change))*100;
                    price_change30d = ` +${percentage30d}%`;
                }
                    


                        console.log('=========================================================================');
                        console.log(`${coin.rank} - ${coin.id} ---- price: ${coin.price} --- high: ${coin.high}`);
                        console.log(`1h: --- \nVol: ${coin["1h"].volume} --- price_change: ${coin["1h"].price_change} ${price_change1h}\n`);
                        console.log(`1d: --- \nVol: ${coin["1d"].volume} --- price_change: ${coin["1d"].price_change} ${price_change1d}\n`);
                        console.log(`30d: --- \nVol: ${coin["30d"].volume} --- price_change: ${coin["30d"].price_change} ${price_change30d}\n\n`);
                        console.log('=========================================================================');
                // coinName.forEach(id =>{
                //     if(coin.id === id){
                //         console.log('=========================================================================')
                //         console.log(`${coin.rank} - ${coin.id} ---- price: ${coin.price} --- high: ${coin.high}`);
                //         console.log(`1h: --- \nVol: ${coin["1h"].volume} --- price_change: ${coin["1h"].price_change}\n`);
                //         console.log(`1d: --- \nVol: ${coin["1d"].volume} --- price_change: ${coin["1d"].price_change}\n`);
                //         console.log(`30d: --- \nVol: ${coin["30d"].volume} --- price_change: ${coin["30d"].price_change}\n\n`);
                //         console.log('=========================================================================');
                //     } 
                        
                // })
            });
        }
        // console.timeEnd('someFunction')
});
