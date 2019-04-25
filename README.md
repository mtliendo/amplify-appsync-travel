# AppSync WebApp Starter

To be used as a guiding path for an upcoming medium article detailing how to get live weather updates from site visitors.

This tutorial is an evolution of [this video](https://www.youtube.com/watch?v=sQN28Jo-nak&t=0s&list=PLhr1KZpdzukcYWC1xD-vidMZf2uilGkor&index=2). It's not mandatory that you check it out, but doing so adds to the value of [AWS Amplify](https://aws-amplify.github.io/).

## Installation

To get setup:

1. Clone this repo
2. Install the dependencies with npm: `npm i`
3. Grab a weather api key from [the openWeatherMap API](https://openweathermap.org/api)

- [Signin/up for an account](https://home.openweathermap.org/users/sign_in)
- Select the ["API keys" tab](https://home.openweathermap.org/api_keys)
- Copy the API key listed (if there isn't one, feel free to generate one)

4. In your project directory, rename the file `.env.sample` to just `.env`. Then in that file, replace `<YOUR_API_KEY>` with the actual API that you copied.
5. Run the application: `npm start`
6. View the application on `localhost:3000` and verify everything is working by adding values in the form and submitting.

## Contributing

This starter repo is made with ❤️and [Material UI](https://material-ui.com/). If you are familar with either, then feel free to submit a PR! Additionally--issues, suggestions, and general feedback are encouraged.
