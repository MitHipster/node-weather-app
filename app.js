const yargs = require('yargs');

const geocode = require('./utils/geocode');
const weather = require('./utils/weather');
const { errorHandler, logInformation } = require('./utils/helper.js');

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

geocode(argv.address, (error, { lat, lng, street, adminArea5, adminArea3, postalCode } = {}) => {
	if (error) return errorHandler(error);

	weather(lat, lng, (error, { summary, temperature, apparentTemperature } = {}) => {
		if (error) return errorHandler(error);

		logInformation({
			Location: `${street} ${adminArea5}, ${adminArea3} ${postalCode}`
		});

		logInformation({
			'Day\'s Summary': summary,
			'Current Temperature': temperature,
			'Feels Like': apparentTemperature
		});
	});
});
