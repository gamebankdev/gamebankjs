const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const gamebank = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.gamebank = gamebank;
}

if (typeof global !== "undefined") {
  global.gamebank = gamebank;
}

exports = module.exports = gamebank;
