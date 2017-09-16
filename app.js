let yargs = require('yargs');
let geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address);

