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

geocode(argv.address, (error, response) => {
	if (error) {
		return console.warn(chalk.red('\n' + error.message + '\n'));
	}

	console.info(
		chalk.blue('\nLocation:'),
		`${response.street} ${response.adminArea5}, ${response.adminArea3} ${response.postalCode}\n`
	);
});

weather('35.808014', '-78.882244', (error, response) => {
	if (error) {
		return console.warn(chalk.red('\n' + error.message + '\n'));
	}

	console.info(chalk.blue('Day\'s Summary:'), response.summary);
	console.info(chalk.blue('Current Temperature:'), response.temperature);
	console.info(chalk.blue('Feels Like:'), response.apparentTemperature);
});
