const Joi = require("joi");
const commons = require("../commons");


const values = Joi.object({
  order: Joi.number().required(),
  title: Joi.string().allow(null, ""),
  text: Joi.string().allow(null, "")
});

const values2 = Joi.object({
  id: Joi.number().required(),
  origin: Joi.number().required(),
  name: Joi.string().allow(null, ""),
  description: Joi.string().allow(null, ""),
  remissives: Joi.array().items(Joi.string()).allow(null, ""),
  children: Joi.array().items(Joi.object({
    id: Joi.number().required(),
    value: Joi.string()
  })),
  parentId: Joi.number().allow(null),
  parent: Joi.object({
    id: Joi.number(),
    value: Joi.string()
  }).allow(null),
  field: Joi.string().allow(null, "")
});

const activitiesOpnionEvaluations = commons.validations.append({
    data: Joi.object({
        storylineLogline: values,
        resume: values.allow(null),
        conclusion: values.append({
          evaluation: Joi.number().required()
        }),
        strongPoints: values.allow(null),
        adequation: values.append({
          hourId: Joi.number().allow(null),
          formatId: Joi.number().allow(null),
          plataformId: Joi.number().allow(null),
        }).allow(null),
        complete: values.allow(null),
        attentionPoints: values.allow(null),
        project: Joi.object({
          id: Joi.number().required(),
          contentType: Joi.string().allow(null, ""),
          title: Joi.string().allow(null, ""),
          creators: Joi.array().items(Joi.object({
            name: Joi.string().allow(null, ""),
            origin: Joi.number().allow(null)
          })),
          format: values2.allow(null),
          origins: Joi.array().items(Joi.string()).allow(null, ""),
          genres: Joi.array().items(values2),
        }),
        attachments: Joi.array().items(Joi.object({
          id: Joi.number(),
          filedId: Joi.string(),
          fileName: Joi.string(),
          version: Joi.number(),
          receivedAt: Joi.string(),
          attachmentType: values2,
          blockNumber: Joi.number(),
          chapterNumber: Joi.number()
        })).allow(null),
        user: Joi.object({
          id: Joi.string().allow(null, ""),
          email: Joi.string().allow(null,""),
          name: Joi.string().allow(null, ""),
          groups: Joi.array().items(Joi.number()).allow(null)
        }),
        updatedAt: Joi.date(),
        editable: Joi.bool(),
        title: Joi.string(),
        createdAt: Joi.date(),
        evaluationDate: Joi.date(),
        fixedEvaluationDate: Joi.bool(),
        freeTexts: Joi.array().items(Joi.object({
          order: Joi.number(),
          title: Joi.string(),
          text: Joi.string()
        }))
    })
});

const bodyPut = {
    storylineLogline: {
     order: 0,
     title: "Storyline",
   },
   conclusion: {
     evaluation: 3,
     order: 1,
     title: "Conclusão Nova",
   },
   title: "Parecer Criação",
   createdAt: "2021-04-29T14:29:46.262Z",
}

module.exports = {
  activitiesOpnionEvaluations,
  bodyPut
}