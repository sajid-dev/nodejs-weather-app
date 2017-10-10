const rquest = require('request');

let getWeather = (lati, longi, callback) => {
  rquest({
    url: `https://api.darksky.net/forecast/5b195ca36cee1455171c95ac6d488a61/${lati},${longi}`,
    json: true
  }, (error, response, body) => {

    if (error) {
      callback('unable to connect to server');
    }
    else if (response.statusCode === 400) {
      callback('undefined values in the url');
    }
    else if (response.statusCode == 200) {
      callback(undefined, {
        'tempratuer': body.currently.temperature,
        'apparentTemperature': body.currently.apparentTemperature
      })
    }
  });
}

module.exports.getWeather = getWeather;


