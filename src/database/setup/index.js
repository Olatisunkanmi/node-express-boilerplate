const knex = require('knex');
const knexFile = require('./knexfile');
const config = require('../../../config');  


const db = knex(knexFile[config.NODE_ENV]);

module.exports = db; 
