const Joi = require("joi");
const commons = require("../commons");

const creators = commons.validations.append({
    pagingInfo: Joi.object({
        itemsPerPage: Joi.optional(Joi.number()),
        totalItems: Joi.optional(Joi.number()),
        currentPage: Joi.optional(Joi.number()),
        totalPages: Joi.optional(Joi.number()),
        previousPage: Joi.optional(Joi.number()),
        nextPage: Joi.optional(Joi.number()),
        extraTotals: Joi.object({
            additionalProp1: Joi.optional(Joi.number()),
            additionalProp2: Joi.optional(Joi.number()),
            additionalProp3: Joi.optional(Joi.number())
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        name: Joi.string(),
        origin: Joi.string(),
        photo: Joi.string(),
        role: Joi.string()
    })),
    allowedOrderByProperties: Joi.optional(Joi.array().items(Joi.string()))
});

const originsAndRecommendations = commons.validations.append({
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string()
    }))
});

module.exports = {
    creators,
    originsAndRecommendations
}