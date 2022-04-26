const Joi = require("joi");
const commons = require("../commons");

const charactersId = commons.validations.append({
    data: Joi.optional(Joi.object({
        id: Joi.number().required(),
        activities: Joi.array().items(Joi.string().allow(null, "")),
        identifications: Joi.array().items(Joi.object({
            name: Joi.string().allow(null, ""),
            lastName: Joi.string().allow(null, ""),
            nickName: Joi.string().allow(null, "")
        })),
        weight: Joi.number(),
        description: Joi.string().allow(null, ""),
        relevance: Joi.object({
            id: Joi.number(),
            value: Joi.string()
        }),
        isActive: Joi.bool(),
        phases: Joi.array().items(Joi.object({
            talent: Joi.string()
        }))
    }))
}); 

const relevances = commons.validations.append({
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string()
    }))
})

const characterPostid = commons.validations.append({
    data: Joi.number().required()
})

const bodyPost = {
    projectId: 2808,
    activities: [],
    identifications: [
      {
        name: "Teste",
        lastName: "teste da silva",
        nickName: "teste teste"
      }
    ],
    description: "Teste",
    relevance: 1
}

const bodyPut = {
        id: 62522,
        activities: [],
        identifications: [
          {
            name: "Teste",
            lastName: "Teste de API PUT",
            nickName: "TestPut"
          }
        ],
        description: "teste",
        relevance: 1
}

module.exports = {
    charactersId,
    relevances,
    characterPostid,
    bodyPost,
    bodyPut
}
