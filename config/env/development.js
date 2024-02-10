const dotenv = require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,

  // Database
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,

  //Media
  MEDIA_CLOUD_NAME: process.env.MEDIA_CLOUD_NAME,
  MEDIA_API_KEY: process.env.MEDIA_API_KEY,
  MEDIA_API_SECRET: process.env.MEDIA_API_SECRET,
  MEDIA_API_ENV: process.env.MEDIA_API_ENV,
};
