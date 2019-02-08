const dotenv = require('dotenv');
const request = require('request');
const apiKey = dotenv.config().parsed.API_KEY;

request(
	{
		url:
			'http://www.mapquestapi.com/geocoding/v1/address?key=' +
			apiKey +
			'&location=1301%20lombard%20street%20philadelphia',
		json: true
	},
	(error, response, body) => {
		console.log('==>: body', body);
	}
);
