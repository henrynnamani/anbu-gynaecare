import Joi from 'joi';

export const environmentValidator = Joi.object({
  JWT_SECRET: Joi.string().required(),
  JWT_ACCESS_EXPIRES: Joi.string().required(),
  JWT_REFRESH_EXPIRES: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_SYNC: Joi.boolean().optional(),
  DB_USER: Joi.string().required(),
  DB_NAME: Joi.string().required(),
});
