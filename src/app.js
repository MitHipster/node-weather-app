const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Configure handlebars templating engine and define
// a custom handlebars directory versus the views default
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Set location of static assets. This is default to serving
// index.html at the root url
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Weather Home Page',
		name: 'Tim Acker'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'Weather About Page',
		name: 'Tim Acker'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Weather Help Page',
		name: 'Tim Acker'
	});
});

app.get('/weather', (req, res) => {
	res.send({
		location: 'Cary, NC',
		temperature: 49
	});
});

// Handles other help routes not specified
app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		error: 'Help page not found.',
		name: 'Tim Acker'
	});
});

// Handles all other routes not specified
app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		error: 'Page not found.',
		name: 'Tim Acker'
	});
});

app.listen(3000, () => {
	console.info('Server listening on port 3000.');
});
