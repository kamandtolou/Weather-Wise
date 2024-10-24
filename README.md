# Weather Wise

Weather Wise is a simple weather application built using Node.js, Express, and the Axios HTTP client to fetch real-time weather data from a public API. The application provides users with up-to-date weather information for any city, including temperature, humidity, wind speed, and a brief description of the weather condition

## Features

#### Real-time Weather Information :
 Users can search for the weather by entering a city name.
 
#### Detailed Forecast :
Displays temperature, humidity, wind speed, and weather description.

#### Responsive Design : 
The app is optimized for both desktop and mobile devices.

#### Public API Integration :
 Uses a public, CORS-enabled weather API for fetching weather data.

 ## Technologies Used
#### Node.js: Backend runtime environment.

#### Express.js:  Web framework for handling routes and server logic.

#### EJS (Embedded JavaScript): Templating engine for rendering dynamic content on the frontend.

#### Axios: HTTP client for making API requests.

#### HTML/CSS/Bootstrap: Frontend styling and responsiveness.

#### JavaScript (ES6): Frontend scripting.

## API Used
This project uses the OpenWeatherMap API to fetch weather data. The API is CORS-enabled and does not require authentication for basic usage.

## Installation & Setup
To run the project locally:

#### Clone this repository:

### `git clone https://github.com/yourusername/weather-wise.git`
### `cd weather-wise`   

#### Install dependencies:
### `npm install`

#### Set up environment variables:
Create a .env file in the root directory and add your OpenWeatherMap API key:
### `API_KEY=your_api_key_here`

#### Run the app:
### `npm start`

#### Access the website at http://localhost:3000

