const Joi = require("joi");
const commons = require("../commons");

const productionCompany = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    contacts: Joi.array().items(Joi.object({
        value: Joi.string()
    }))
});

const productionCompanies = commons.validations.append({
    data: Joi.array().items(productionCompany),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const productionCompanyById = commons.validations.append({
    data: productionCompany
});

const productionCompanyPUT = {
    "id": 150,
    "name": "A Fábrica",
    "contacts": [{
        "value": "Zona Industrial"
    }]
};

module.exports = {
    productionCompany,
    productionCompanies,
    productionCompanyById,
    productionCompanyPUT
}