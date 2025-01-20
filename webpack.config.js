const path = require("path");
const Dotenv = require("dotenv-webpack");

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
    new Dotenv({
      path: process.env.NODE_ENV === "production" ? "./.env.prod" : "./.env.dev"
    })
  ],
  resolve: {
    extensions: [".js", ".json"]
  }
};