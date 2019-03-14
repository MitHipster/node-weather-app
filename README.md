# Node Weather App

Andrew Mead - The Complete Node.js Developer Course

## Acknowledgments

- **Andrew Mead**, at [mead.io](https://mead.io/), who made this excellent Node.js course available on [Udemy](https://www.udemy.com/the-complete-nodejs-developer-course-2/)

## Description

Re-created a simple weather website using Node.js, Express, and Axios for submitting an API request to MapQuest and DarkSky to retrieve location information and the current weather, respectively.

### Deployed

This app is deployed to [Heroku](https://secret-cove-80282.herokuapp.com/).

### Note

You will need to sign up for an API key at [MapQuest](https://developer.mapquest.com/documentation/) and [DarkSky](https://darksky.net/dev) to use this app locally via your localhost. Create a `.env` file in the root folder to store your keys and access them using the `dotenv` package.

### Installing

After downloading or cloning the repo perform the following steps:

Open the project folder at the root in your terminal and run `npm install` to download the dependencies needed for this project.

Next, type `node src/app.js` to run the Express server which defaults to localhost:3000.

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Server Framework
- [Axios](https://github.com/axios/axios) - Promise-based HTTP requests
- [ESLint](https://eslint.org/) - Linting utility
- [MapQuest API](https://eslint.org/) - Latitude and longitude
- [DarkSky](https://eslint.org/) - Weather information

## Re-creator

- Tim Acker - [MitHipster](https://github.com/MitHipster)
