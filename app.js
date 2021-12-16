const express = require('express')
const app = express();
const cors = require('cors')
const request = require('request');
app.use(cors());

// const http =require('http')
const port = process.env.PORT || 3000;
// const host = '0.0.0.0';
app.use(cors({
    origin: "http://localhost:4200",
methods: ["GET", "POST"],
allowedHeaders: ["content-type"]

}));

app.use((req, res, next)  => {
    res.header("Access-Control-Allow-Origin", "*", {});
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT', 'OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-PINGOTHER, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true, limit:'50mb'}));

const geocode =require('./routes/geocodeRoute');

app.use('/api/weather', geocode)

app.listen(port, ()=> {
    console.log('server is up on port ' + port)
})