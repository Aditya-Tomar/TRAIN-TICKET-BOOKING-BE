const App = require("./src/server");
const serverlesshttp = require("serverless-http");

const app = new App().initializeApp();

module.exports.handler = serverlesshttp(app.app);