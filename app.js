const dotenv = require('dotenv');
const mapKey = dotenv.config().parsed.MAP_API_KEY;
const weatherKey = dotenv.config().parsed.WEATHER_API_KEY;
const yargs = require('yargs');
const axios = require('axios');
const chalk = require('chalk');

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

const encodedLocation = encodeURIComponent(argv.address);
const geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${encodedLocation}`;

axios
	.get(geocodeURL)
	.then(response => {
		const statusCode = response.data.info.statuscode;
		const location = response.data.results[0].locations[0] || {};

		if (statusCode === 400) throw new Error('\nInvalid input. Please try again.\n');

		console.info(
			chalk.blue('\nLocation:'),
			`${location.street} ${location.adminArea5}, ${location.adminArea3} ${location.postalCode}\n`
		);

		const lat = location.latLng.lat;
		const lng = location.latLng.lng;
		const weatherURL = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;

		return axios.get(weatherURL);
	})
	.then(response => {
		const weather = response.data.currently || {};

		console.info(chalk.blue('Temperature:'), weather.temperature);
		console.info(chalk.blue('Feels Like:'), weather.apparentTemperature);
	})
	.catch(error => {
		if (error.code === 'ENOTFOUND') {
			console.warn(chalk.red('\nUnable to connect to servers. Please try again later.\n'));
		} else {
			console.warn(chalk.red('\n' + error.message + '\n'));
		}
	});
