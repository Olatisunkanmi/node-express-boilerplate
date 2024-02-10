const { appConfig, Logger } = require("./config");

global.logger = Logger.createLogger({ label: "ROADNAV API" });

const express = require("express");

const app = express();

appConfig(app);

module.exports = app;
