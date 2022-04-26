const commons = require("../commons");
const Joi = require("joi");


const literaryAuthors = commons.validations.append({
    pagingInfo: Joi.object({
        itemsPerPage: Joi.number().allow(null),
        totalItems: Joi.number().required(),
        currentPage: Joi.number().allow(null),
        totalPages: Joi.number().allow(null),
        previousPage: Joi.number().allow(null),
        nextPage: Joi.number().allow(null),
        extraTotals: Joi.object({
          additionalProp1: Joi.number().allow(null),
          additionalProp2: Joi.number().allow(null),
          additionalProp3: Joi.number().allow(null)
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        name: Joi.string().allow(null, "")
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "") 
});

const literaryAuthorsId = commons.validations.append({
    data: Joi.object({
        id: Joi.number().required(),
        name: Joi.string().allow(null, "")
    })
});

const postAuthors = commons.validations.append({
    data: Joi.array().items(Joi.number()).required()
});

const bodyPut = {
    "id": 14,
    "name": "J. R. R. Tolkien"
}

const bodyPost = [
    {
        "name": "Clarice Lispector"
    }
]


module.exports = {
    literaryAuthors,
    literaryAuthorsId,
    bodyPut,
    bodyPost,
    postAuthors
}