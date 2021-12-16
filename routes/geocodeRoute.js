const express = require('express');
const router = express.Router();
var cors = require('cors')
const  geocode = require('../controllers/geocodeController')
const forecast = require('../controllers/forecastData')


// router.post('/geocode', geocodeController.fetchCode);
router.post('/geocode', cors(), (req,res)=>{
    geocode(req, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.json({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.json({ error })
            }
            // let jsonWeather = JSON.parse({
            //     forecast: forecastData,
            //     location,
            //     address: req
            // });
            console.log(forecastData.currently.summary)
            res.json(forecastData)
        })
    })
});

 module.exports = router; 