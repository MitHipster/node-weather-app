const dotenv = require('dotenv');
const request = require('request');
const yargs = require('yargs');
const apiKey = dotenv.config().parsed.API_KEY;

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address for requested weather information',
			string: true // parses user input as a string
		}
	})
	.help()
	.alias('help', 'h').argv;
console.log('==>: argv', argv);

const encodedLocation = encodeURIComponent(argv.a);

request(
	{
		url:
			'http://www.mapquestapi.com/geocoding/v1/address' +
			'?key=' +
			apiKey +
			'&location=' +
			encodedLocation,
		json: true
	},
	(error, response, body) => {
		console.log(
			JSON.stringify(body.results[0].locations[0].latLng.lat, null, 2)
		);
	}
);
