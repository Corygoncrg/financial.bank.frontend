const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

// Load the appropriate .env file based on NODE_ENV
const envFilePath =
  process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, ".env.prod")
    : path.resolve(__dirname, ".env.dev");

const env = dotenv.config({ path: envFilePath }).parsed;

// Transform environment variables into DefinePlugin format
const envKeys = Object.keys(env || {}).reduce((acc, key) => {
  acc[`process.env.${key}`] = JSON.stringify(env[key]);
  return acc;
}, {});

module.exports = {
  entry: {
    login: "./scripts/main/mainLogin.js",
    analysis: "./scripts/main/mainAnalysis.js",
    users: "./scripts/main/mainUsers.js",
    import: "./scripts/main/mainImport.js",
    importDetails: "./scripts/main/mainImportDetails.js",
    signUp: "./scripts/main/mainSignUp.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  mode: process.env.NODE_ENV || "development",
  plugins: [
    new webpack.DefinePlugin(envKeys), // Inject environment variables
  ],
  resolve: {
    extensions: [".js", ".json"],
  },
};
