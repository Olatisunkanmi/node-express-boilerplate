const { ValidateRequest } = require('../utils');
const Joi = require('joi');

const RegisterRequest = Joi.object({

    first_name: ValidateRequest.String('first_name', 3, 50),
    last_name: ValidateRequest.String('last_name', 3, 50),
});

module.exports = RegisterRequest;
