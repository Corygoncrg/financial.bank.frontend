const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", 
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