const config = require('../../../config');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
    },

    migrations: {
      directory: '../../database/migrations',
    },

    seeds: {
      directory: '../../database/seeds',
    },
  },
};
