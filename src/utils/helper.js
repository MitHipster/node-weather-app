const chalk = require('chalk');

const errorHandler = ({ message }) => {
	console.warn(chalk.red(message));
};

const logInformation = messageObj => {
	for (const key in messageObj) {
		if (messageObj.hasOwnProperty(key)) {
			console.info(chalk.blue(`${key}:`), messageObj[key]);
		}
	}
};

module.exports = {
	errorHandler,
	logInformation
};
