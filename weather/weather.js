const dotenv = require('dotenv');
const request = require('request');
const apiKey = dotenv.config().parsed.WEATHER_API_KEY;

const getWeather = (lat, lng, callback) => {
	request(
		{
			url: 'https://api.darksky.net/forecast/' + apiKey + '/' + lat + ',' + lng,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					temperature: body.currently.temperature,
					feelsLike: body.currently.apparentTemperature
				});
			} else {
				callback('\nUnable to connect to DarkSky server. Please try again later.\n');
			}
		}
	);
};

module.exports = {
	getWeather
};
