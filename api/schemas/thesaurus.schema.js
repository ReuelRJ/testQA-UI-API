const Joi = require("joi");
const commons = require("../commons");

const basicObjectIdValue = Joi.object({
    id: Joi.number(),
    value: Joi.string()
});

const thesaurus = Joi.object({
    id: Joi.number().required(),
    origin: Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    remissives: Joi.array().items(Joi.string()),
    children: Joi.array().items(basicObjectIdValue),
    id: Joi.number(),
    parentId: Joi.number().allow(null),
    parent: Joi.array().items(basicObjectIdValue).allow(null),
    field: Joi.string().allow(null, '')
});

const thesaurusById = commons.validations.append({
    data: thesaurus
});

const thesaurusOrigins = commons.validations.append({
    data: Joi.array().items(Joi.object({
        id: Joi.number(),
        order: Joi.number(),
        hasIntegration: Joi.boolean(),
        description: Joi.optional(),
        thesaurusOrigin: {
          id: Joi.number(),
          value: Joi.string()
        }
    }))
});

const projectThesaurus = commons.validations.append({
    data: Joi.array().items(thesaurus),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const projectThesaurusHierarchy = Joi.object({
    parent: commons.schemaObjectIdValue,
    terms: Joi.array().items(commons.schemaObjectIdValue)
  });

const projectThesaurusHierarchies = commons.validations.append({
    data: Joi.array().items(projectThesaurusHierarchy),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const thesaurusPostSchema = Joi.object({
    data: Joi.number(),
    isSuccess: Joi.boolean().required(true),
    validations: Joi.optional(Joi.object({
        code: Joi.object({}),
        message: Joi.string(),
        property: Joi.string(),
        data: Joi.object({})
    })),
    requestId: Joi.string(),
    paging: Joi.boolean()
})

const thesaurusPut = {
    "name": "TESTE API SWAGGER",
    "description": "SWAGGER",
    "parentThesaurusId": 1,
    "remissives": [
      "BACK TESTE"
    ],
    "forceSave": true
  }

const thesaurusPutOrigins = {
    "id": 19,
    "order": 1,
    "hasIntegration": true,
    "description": "TESTE API"
  }

const thesaurusPost = {
    "origin": 1,
    "contentType": 1,
    "name": "POST API THESAURUS",
    "description": "API",
    "parentThesaurusId": 18762,
    "remissives": [
      "API - Teste de QA"
    ],
    "forceSave": true
  }

module.exports = {
    thesaurus,
    thesaurusById,
    thesaurusOrigins,
    projectThesaurus,
    projectThesaurusHierarchies,
    thesaurusPut,
    thesaurusPutOrigins,
    thesaurusPost,
    thesaurusPostSchema
};