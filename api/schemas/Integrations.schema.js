const Joi = require("joi");
const commons = require("../commons");

const IntegrationsSchema = commons.validations.append({
  pagingInfo: Joi.object({
    itemsPerPage: Joi.number().required(),
    totalItems: Joi.number().required(),
    currentPage: Joi.number().required(),
    totalPages: Joi.number().required(),
    previousPage: Joi.optional(Joi.number().required()),
    nextPage: Joi.optional(Joi.number().required()),
    extraTotals: Joi.optional(
      Joi.object({
        additionalProp1: Joi.number().required(),
        additionalProp2: Joi.number().required(),
        additionalProp3: Joi.number().required(),
      })
    ),
  }),
  allowedOrderByProperties: Joi.optional(Joi.array().items(Joi.string())),
  data: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      genre: Joi.string().required(),
      photo: Joi.optional(Joi.string().required()),
      role: Joi.optional(Joi.string().required()),
    })
  ),
});

module.exports = {IntegrationsSchema}