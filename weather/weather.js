const dotenv = require('dotenv');
const request = require('request');
const apiKey = dotenv.config().parsed.WEATHER_API_KEY;

const getWeather = (lat, lng) => {
	return new Promise((resolve, reject) => {
		request(
			{
				url: 'https://api.darksky.net/forecast/' + apiKey + '/' + lat + ',' + lng,
				json: true
			},
			(error, response, body) => {
				if (!error && response.statusCode === 200) {
					resolve({
						temperature: body.currently.temperature,
						feelsLike: body.currently.apparentTemperature
					});
				} else {
					reject('\nUnable to connect to DarkSky server. Please try again later.\n');
				}
			}
		);
	});
};

module.exports = {
	getWeather
};
