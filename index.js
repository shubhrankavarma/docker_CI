const express = require('express');
const redis = require('redis');
const app = express();
const ip = require('ip');
// const client = redis.createClient({
//     url: 'redis://redis-server'
// })

// client.connect().then(async connectedClient=>{
//     console.log("connected to redis")
    
//     // if visits is not set, set it to 0
//     if(!await client.get('visits'))
//     await client.set('visits', 0);


//     app.get('/', async(req, res) => {
//         console.log("visits")
//         const value = await client.get("visits")
//         res.send('Number of visits is ' + value);
//         client.set('visits', parseInt(value) + 1);
//     });
    
//     app.listen(8081, () => {
//         console.log('Listening on port 8081');
//     });
// })

app.get('/', (req, res) => {
    console.log("Helloo")
    debugger;
    res.send('Hello002asdf30');
});

app.listen(8081, () => {

    const ipAddr = ip.address();
    console.log(ipAddr+":"+8081)

});