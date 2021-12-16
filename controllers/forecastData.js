const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/55c3c627a3349222f189fa55e3e1608d/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        // console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body)
        }
    })
}

module.exports = forecast