const yargs = require('yargs');
const chalk = require('chalk');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode
	.geocodeAddress(argv.address)
	.then(address => {
		console.info(
			chalk.blue('\nLocation:'),
			`${address.street} ${address.city}, ${address.state} ${address.postalCode}\n`
		);

		return weather.getWeather(address.lat, address.lng);
	})
	.then(weather => {
		console.info(chalk.blue('Temperature:'), weather.temperature);
		console.info(chalk.blue('Feels Like:'), weather.feelsLike);
	})
	.catch(err => {
		console.warn(chalk.red(err));
	});
