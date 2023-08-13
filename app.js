const { appConfig, Logger } = require('./config');

global.logger = Logger.createLogger({ label: 'APP NAME  -- API' });

const express = require('express');

const app = express();

appConfig(app);

module.exports = app;
