const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      path: process.env.NODE_ENV === 'production' ? './.env.prod' : './.env.dev'
    })
  ],
  // Ensure compatibility with ES6 modules if needed
  resolve: {
    extensions: ['.js', '.json']
  }
};