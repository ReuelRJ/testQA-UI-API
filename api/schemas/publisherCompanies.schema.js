const commons = require("../commons");
const Joi = require("joi");

const publisherCompanies = commons.validations.append({
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

const publisherCompaniesId = commons.validations.append({
    data: Joi.object({
        id: Joi.number().required(),
        name: Joi.string().allow(null, "")
    })
});

const bodyPut = {
    "id": 1,
    "name": "Globo"
}


module.exports= {
    publisherCompanies,
    publisherCompaniesId,
    bodyPut
}