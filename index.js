const express = require('express');
const redis = require('redis');
const app = express();
const ip = require('ip');
const ngrok = require('ngrok');
const localtunnel = require('localtunnel');
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

// const url = ngrok.connect(8081).then(url => {

//     console.log("ngrok url: " + url);

//     app.get('/', (req, res) => {
//         console.log("Helloo")
//         debugger;
//         res.send('Hello002asdf30');
//     });

//     const server = app.listen(8081, () => {
//         const ipAddr = ip.address();
//         console.log(ipAddr + ":" + server.address().port);

//     });

// })

const tunnel = localtunnel({ port: 8081, subdomain: 'myapp' }, function(err, tunnel) {
    console.log("localtunnel url: " + tunnel.url);
    app.get('/', (req, res) => {
        console.log("Helloo")
        debugger;
        res.send('Hello002asdf30');
    });

    const server = app.listen(8081, () => {
        const ipAddr = ip.address();
        console.log(ipAddr + ":" + server.address().port);

    });
});