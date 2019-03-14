/*global fetch*/

console.info('Client side JavaScript file is loaded.');

fetch('http://localhost:3000/weather?location=boston').then(resp => {
	resp.json().then(data => {
		if (data.error) {
			console.warn(data.error.message);
		} else {
			console.info(data.location);
		}
	});
});
