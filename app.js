const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

let argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: "Address to fetch",
    string: true
  }
})
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMsg, result) => {
  if (errorMsg) {
    console.log(errorMsg);
  }
  else {
    console.log(result.address);
    weather.getWeather(result.latitude, result.longitude, (error, resule) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log(JSON.stringify(resule, undefined, 2));
      }

    });
  }
});
