# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Environment Setup

This project uses environment variables to manage sensitive information like API keys. 
Follow these steps to set up your environment:

1. Create a `.env` file in the root directory of your project.
2. Add the following lines to your `.env` file:

   ```
   REACT_APP_GRAPHQL_API_ENDPOINT=https://api.linear.app/graphql
   REACT_APP_LINEAR_API_KEY=your_linear_api_key_here
   ```

3. Replace `your_linear_api_key_here` with your actual Linear API key.

**Note:** Never commit your `.env` file to version control. Add it to your `.gitignore` file to prevent accidental exposure of sensitive information.