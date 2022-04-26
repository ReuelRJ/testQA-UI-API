const Joi = require("joi");
const { schemaObjectIdValue } = require('../commons');
const { productionCompany } = require("./productionCompany.schema");
const { thesaurus } = require("./thesaurus.schema");

const genericProject = Joi.object({
    // dramaturgy, variety e research
    id: Joi.number().required(),
    title: Joi.string().required(),
    productId: Joi.string(),
    projectType: Joi.string(),
    baseTitle: Joi.string().allow(null, ''),
    createdBy: Joi.string().allow(null, ''),
    receivedAt: Joi.date(),
    type: Joi.string(),

    // variety e dramaturgy
    seasonNumber: Joi.number().allow(null),
    creators: Joi.array().items(Joi.object({
        name: Joi.string().allow(null),
        origin: Joi.number().allow(null)
    })),
    histories: Joi.array().items(Joi.string()),
    productionCompanies: Joi.array().items(productionCompany),
    format: Joi.string().allow(null, ''),
    origins: Joi.array().items(Joi.string()),
    channel: Joi.array().items(Joi.object({
        content: thesaurus,
        descriptions: Joi.array().items(Joi.string())
    })),
    chaptersOrEpisodes: Joi.number(),
    genres: Joi.array().items(thesaurus),
    subGenres: Joi.array().items(thesaurus),
    complementaries: Joi.array(),

    // variety
    tags: Joi.array().items(Joi.string()),
    logline: Joi.string(),
    programFrequency: Joi.array().items(schemaObjectIdValue).allow(null),

    // dramaturgy 
    storyline: Joi.string().allow(null, ''),
    soapOperaSchedule: Joi.string().allow(null, ''),
    characters: Joi.array().allow(null),
    
    //research
    researchType: Joi.string().allow(null, ''),
    researchCategory: Joi.string().allow(null, ''),
    researchSubCategory: Joi.string().allow(null, ''),
    researchers: Joi.array().allow(null),
});

const collections = genericProject;

// const collections = {
//     type: Joi.string(),
//     collection: Joi.object({
//         pagingInfo: Joi.object(),
//         allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null),
//         isSuccess: Joi.boolean(),
//         validations: Joi.array().allow(null),
//         requestId: Joi.string(),
//         requestId: Joi.string().required(),
//         paging: Joi.bool().required(),
//         data: Joi.array().items(genericProject)
//     }),
// };

module.exports = {
    genericProject,
    collections
};