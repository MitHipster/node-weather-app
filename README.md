# Node Weather App

Andrew Mead - The Complete Node.js Developer Course

## Acknowledgments

- **Andrew Mead**, at [mead.io](https://mead.io/), who made this excellent Node.js course available on [Udemy](https://www.udemy.com/the-complete-nodejs-developer-course-2/)

## Description

Re-created a terminal-based weather app using Node.js, Yargs, Request (with promises - v1.0) or Axios (with included promises - v1.1) with a required `address` option to retrieve location coordinates from the MapQuest API to pass to the DarkSky API.

### Prerequisites

Install Node using [Homebrew package manager](https://brew.sh/). This will also install npm for package management.

```
brew install node
```

### Note

You will need to sign up for an API key at [MapQuest](https://developer.mapquest.com/documentation/) and [DarkSky](https://darksky.net/dev) to use this node app. Create a `.env` file in the root folder to store your keys and access them using the `dotenv` package.

### Installing

After downloading or cloning the repo perform the following steps:

Open the project folder at the root in your terminal and run `npm install` to download the dependencies needed for this project.

Next, type `node app.js --help` to view the available command or type `node app.js --address '<location>'` to see the current temperatures for a given location.

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Yargs](https://yargs.js.org/) - Arguments parser
- [Request](https://github.com/request/request#readme) - HTTP requests
- [Axios](https://github.com/axios/axios) - Promise-based HTTP requests
- [Chalk](https://github.com/chalk/chalk#readme) - Terminal styling
- [ESLint](https://eslint.org/) - Linting utility
- [MapQuest API](https://eslint.org/) - Latitude and longitude
- [DarkSky](https://eslint.org/) - Weather information

## Re-creator

- Tim Acker - [MitHipster](https://github.com/MitHipster)
