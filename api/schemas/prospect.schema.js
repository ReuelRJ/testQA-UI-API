const Joi = require("joi");
const commons = require("../commons");

const prospect = Joi.object({
    id: Joi.number(),
      name: Joi.string(),
      contacts: Joi.array().items(Joi.object({
        value: Joi.string()
      }))
});

const prospects = commons.validations.append({
    data: Joi.array().items(prospect),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const prospectById = commons.validations.append({
    data: prospect
});

const prospectPUT = {
    "id": 807,
    "name": "Vitória",
    "contacts": [{
        "value": "Spring"
    }]
}

module.exports = {
    prospects,
    prospectById,
    prospectPUT
}