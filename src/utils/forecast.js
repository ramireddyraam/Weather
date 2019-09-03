const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9081df1593e5793ef34d8a65c1c1950f/' + latitude + ',' + longitude + ''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log(error)
            callback('Unable to connect to weather service!', undefined)
        } else if (body.code) {
            callback(body.error, undefined)
        }

        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.This high today is '+body.daily.data[0].temperatureHigh+' with a low of '+body.daily.data[0].temperatureLow+'. there is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast
