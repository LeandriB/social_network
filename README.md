# Social Network

## Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Resources](#resources)

## User Story

````
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
````

## Acceptance Criteria

````
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
````

## Installation

Run the following command in your terminal in order to install all the packages:

`npm install`

## Usage

Start the node application by running: 

`npm start`

## Preview

![Preview](./public/images/preview.png)

Check out the deployed application [here](https://listeninlistenin.herokuapp.com/).

## Contributing

In order to contribute, create a pull request and follow the steps listed below:

- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push origin YOUR-BRANCH-HERE)
- Create a new Pull Request

Following a code review, your feature will be merged.

## Tests

No testing protocols were implemented in this application

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application is licensed under the MIT License.

## Resources

* Base [Code](https://github.com/LeandriB/pizza_hunt) of code from examples in Module 18. 
* [Boostrap](https://getbootstrap.com/) for layout and frontend