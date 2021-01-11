const coindata = require('./coindata');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080

app.use(cors());
app.get('',(req,res)=>{
    res.send('Head over to /api for coin data');
})

app.get('/api', (req,res)=>{
    coindata.coindatafetch((data)=>{
        res.send(data);
    })
})


app.listen(port, ()=>{
    console.log('Server is up on port: ', port);
})