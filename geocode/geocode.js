let request = require('request');

let geocodeAddress = (address) => {
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address),
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to server');
    }
    else if (body.status === "ZERO_RESULTS") {
      console.log('Address Not Found');
    }
    else if (body.status === "OK") {
      console.log('Address: ' + body.results[0].formatted_address);
      console.log('Latitude: ' + body.results[0].geometry.location.lat);
      console.log('Longitude: ' + body.results[0].geometry.location.lng);
    }
  })
}

module.exports.geocodeAddress = geocodeAddress;