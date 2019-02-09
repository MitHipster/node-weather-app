const yargs = require('yargs');
const chalk = require('chalk');

const dotenv = require('dotenv');
const request = require('request');
const apiKey = dotenv.config().parsed.WEATHER_API_KEY;

const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (err, res) => {
	if (err) {
		console.warn(chalk.red(err));
	} else {
		console.info(res);
	}
});

request(
	{
		url: 'https://api.darksky.net/forecast/' + apiKey + '/37.8267,-122.4233',
		json: true
	},
	(error, response, body) => {
		if (!error && response.statusCode === 200) {
			console.log(body.currently.temperature);
		} else {
			console.warn('\nUnable to connect to DarkSky server. Please try again later.\n');
		}
	}
);
