const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
const env = dotenv.config().parsed;

// DefinePlugin will replace process.env references in your code with env variables
const definePlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(env),
});

module.exports = {
  // Your webpack configuration
  plugins: [definePlugin],
};
