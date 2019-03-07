const yargs = require('yargs');
const chalk = require('chalk');

const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

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

const errorHandler = error => {
	console.warn(chalk.red('\n' + error.message + '\n'));
};

geocode(argv.address, (error, geoData) => {
	if (error) return errorHandler(error);

	weather(geoData.lat, geoData.lng, (error, weatherData) => {
		if (error) return errorHandler(error);

		console.info(
			chalk.blue('\nLocation:'),
			`${geoData.street} ${geoData.adminArea5}, ${geoData.adminArea3} ${geoData.postalCode}\n`
		);

		console.info(chalk.blue('Day\'s Summary:'), weatherData.summary);
		console.info(chalk.blue('Current Temperature:'), weatherData.temperature);
		console.info(chalk.blue('Feels Like:'), weatherData.apparentTemperature);
	});
});
