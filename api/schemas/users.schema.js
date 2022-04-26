const Joi = require("joi");
const commons = require("../commons");

const user = Joi.object({
        id: Joi.string(),
        name: Joi.string(),
        groups: Joi.array().items(Joi.number()),
        email: Joi.string()
});

const users = commons.validations.append({
    data: Joi.array().items(user),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const userMe = commons.validations.append({
    data: Joi.object({
        id: Joi.string(),
        name: Joi.string(),
        email: Joi.string(),
        roles: Joi.array().items(Joi.string()), 
        sectionsAllowed: Joi.array().items(Joi.string()),
        activityGroups: Joi.array().items(Joi.number())
    }),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

module.exports = {
    users,
    userMe
};
