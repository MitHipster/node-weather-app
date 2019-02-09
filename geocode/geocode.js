const dotenv = require('dotenv');
const request = require('request');
const apiKey = dotenv.config().parsed.MAP_API_KEY;

const geocodeAddress = (address, callback) => {
	const encodedLocation = encodeURIComponent(address);

	request(
		{
			url:
				'http://www.mapquestapi.com/geocoding/v1/address' +
				'?key=' +
				apiKey +
				'&location=' +
				encodedLocation,
			json: true
		},
		(error, response, body) => {
			if (error) {
				callback('\nUnable to connect to MapQuest server. Please try again later.\n');
			} else if (body.info.statuscode === 400) {
				callback('\nInvalid input. Please try again.\n');
			} else if (body.info.statuscode === 0) {
				const res = body.results[0].locations[0];
				callback(undefined, {
					street: res.street,
					city: res.adminArea5,
					state: res.adminArea3,
					country: res.adminArea1,
					postalCode: res.postalCode,
					lat: res.latLng.lat,
					lng: res.latLng.lng
				});
			} else {
				callback('\nUnknown error. Please contact customer support.\n');
			}
		}
	);
};

module.exports = {
	geocodeAddress
};
