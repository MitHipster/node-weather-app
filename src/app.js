const path = require('path');
const express = require('express');

const app = express();

// Set location of static assets. This is default to serving
// index.html at the root url
app.use(express.static(path.join(__dirname, '../public')));

app.get('/weather', (req, res) => {
	res.send({
		location: 'Cary, NC',
		temperature: 49
	});
});

app.listen(3000, () => {
	console.info('Server listening on port 3000.');
});
