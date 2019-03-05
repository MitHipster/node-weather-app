const dotenv = require('dotenv');
const weatherKey = dotenv.config().parsed.WEATHER_API_KEY;
const axios = require('axios');

const weather = (lat, lng, callback) => {
	const url = `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;

	axios
		.get(url)
		.then(response => {
			const weather = response.data || {};

			callback(undefined, {
				summary: weather.daily.data[0].summary,
				temperature: weather.currently.temperature,
				apparentTemperature: weather.currently.apparentTemperature
			});
		})
		.catch(error => {
			if (error.code === 'ENOTFOUND') {
				callback({ message: 'Unable to connect to servers. Please try again later.' }, undefined);
			} else if (error.response.status === 400) {
				callback({ message: 'Invalid input. Please try again.' }, undefined);
			} else {
				callback({ message: error.message }, undefined);
			}
		});
};

module.exports = weather;
