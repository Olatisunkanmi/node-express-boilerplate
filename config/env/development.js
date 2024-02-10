const env = require('.');

require('dotenv').config();

module.exports = {
    DB_HOSTNAME: process.env.DB_HOSTNAME,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    URL: process.env.URL,
    
}   