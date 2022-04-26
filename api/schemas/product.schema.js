const Joi = require("joi");
const commons = require("../commons");

const productSeason = Joi.object({
    id: Joi.number(),
    title: Joi.string(),
    seasonNumber: Joi.number()
});

const productSeasons = commons.validations.append({
    data: Joi.array().items(productSeason),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

module.exports = {
    productSeasons
}