const Joi = require("joi");
const commons = require("../commons");
const genericProjectSchema = require("../schemas/genericProject.schema");
const {
    projectThesaurus,
    projectThesaurusHierarchies
} = require("./thesaurus.schema");

const researches = commons.validations.append({
    pagingInfoByType: Joi.array().items(Joi.object({
        type: Joi.string().allow(null, ""),
        pagingInfo: Joi.object({
            itemsPerPage: Joi.number().allow(null),
            totalItems: Joi.number().allow(null),
            currentPage: Joi.number().allow(null),
            totalPages: Joi.number().allow(null),
            previousPage: Joi.number().allow(null),
            nextPage: Joi.number().allow(null),
            extraTotals: Joi.object({
                additionalProp1: Joi.number().allow(null),
                additionalProp2: Joi.number().allow(null),
                additionalProp3: Joi.number().allow(null),
            })
        }),
    })),
    data: Joi.array().items(genericProjectSchema.collections.append({
        formatId: Joi.number().allow(null),
        authors: Joi.array().items(Joi.string()).allow(null, ""),
        publishers: Joi.array().items(Joi.string()).allow(null, ""),
        recommendationType: Joi.string().allow(null, "")
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const subCategory = commons.schemaObjectIdValue.append({
    category: commons.schemaObjectIdValue
});

const researchById = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    type: Joi.number(),
    origin: Joi.number(),

    receivedAt: Joi.date(),
    associations: Joi.array(),
    attachments: Joi.array(),

    toCreators: Joi.array().items(commons.schemaObjectIdValue),
    toAreas: Joi.array().items(commons.schemaObjectIdValue),
    fromAreas: Joi.array().items(commons.schemaObjectIdValue),
    fromAnalysts: Joi.array().items(Joi.object({
        id: Joi.string(),
        value: Joi.string()
    })),
    fromResearchers: Joi.array().items(Joi.object({
        id: Joi.string(),
        value: Joi.string()
    })),
    subCategory: subCategory,
    associations: Joi.array(),
    attachments: Joi.array()

});

const researchesById = commons.validations.append({
    data: researchById
});

const researchTypes = commons.validations.append({
    data: Joi.array().items(commons.schemaObjectIdValue),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const researchSubcategories = commons.validations.append({
    data: Joi.array().items(subCategory),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const researchOrigins = commons.validations.append({
    data: Joi.array().items(commons.schemaObjectIdValue),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const researchThesaurus = projectThesaurus;

const researchThesaurusHierarchies = projectThesaurusHierarchies

const researchPut = {
    "id": 2808,
    "title": "Desenvolvimento de conteúdo no teste",
    "type": 3,
    "subCategoryId": 7
};

module.exports = {
    researches,
    researchesById,
    researchTypes,
    researchSubcategories,
    researchOrigins,
    researchThesaurusHierarchies,
    researchThesaurus,
    researchPut
}
