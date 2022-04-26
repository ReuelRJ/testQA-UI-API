const Joi = require("joi");
const commons = require("../commons");

const activitiesCertificationsEvaluations = commons.validations.append({
  data: Joi.object({
    storylineLogline: Joi.optional(
      Joi.object({
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    resume: Joi.optional(
      Joi.object({
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    conclusion: Joi.optional(
      Joi.object({
        evaluation: Joi.number().required(),
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    strongPoints: Joi.optional(
      Joi.object({
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    adequation: Joi.optional(
      Joi.object({
        hourId: Joi.number().required(),
        formatId: Joi.number().required(),
        plataformId: Joi.number().required(),
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    complete: Joi.optional(
      Joi.object({
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    attentionPoints: Joi.optional(
      Joi.object({
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    project: Joi.object({
      id: Joi.number().required(),
      contentType: Joi.string().required(),
      title: Joi.string().required(),
      creators: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          origin: Joi.number().required(),
        })
      ),
      format: Joi.object({
        id: Joi.number().required(),
        origin: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.optional(Joi.string().required()),
        remissives: Joi.array().items(Joi.optional(Joi.string().required())),
        children: Joi.array().items(
          Joi.optional(
            Joi.object({
              id: Joi.number().required(),
              value: Joi.string().required(),
            })
          )
        ),
        parentId: Joi.optional(Joi.number().required()),
        parent: Joi.optional(
          Joi.object({
            id: Joi.number().required(),
            value: Joi.string().required(),
          })
        ),
        field: Joi.string().required(),
      }),
      origins: Joi.array().items(Joi.string().required()),
      genres: Joi.array().items(
        Joi.object({
          id: Joi.number().required(),
          origin: Joi.number().required(),
          name: Joi.string().required(),
          description: Joi.optional(Joi.string().required()),
          remissives: Joi.array().items(Joi.optional(Joi.string().required())),
          children: Joi.array().items(
            Joi.object({
              id: Joi.number().required(),
              value: Joi.string().required(),
            })
          ),
          parentId: Joi.optional(Joi.number().required()),
          parent: Joi.optional(
            Joi.object({
              id: Joi.number().required(),
              value: Joi.string().required(),
            })
          ),
          field: Joi.string().required(),
        })
      ),
    }),
    attachments: Joi.array().items(
      Joi.object({
        id: Joi.number().required(),
        fileId: Joi.string().required(),
        fileName: Joi.string().required(),
        version: Joi.number().required(),
        receivedAt: Joi.date().required(),
        release: Joi.number().required(),
        comment: Joi.string().allow(null, ""),
        releaseDate: Joi.date().allow(null, ""),
        blockNumber: Joi.number(),
        scheduleDelivery: Joi.date().allow(null, ""),
        rescheduledDelivery: Joi.date().allow(null, ""),
        scheduleRelease: Joi.date().allow(null, ""),
        rescheduledRelease: Joi.date().allow(null, ""),
        attachmentType: Joi.object({
          id: Joi.number().required(),
          origin: Joi.number().required(),
          name: Joi.string().required(),
          description: Joi.optional(Joi.string().required()),
          remissives: Joi.array().items(Joi.optional(Joi.string().required())),
          children: Joi.array().items(
            Joi.object({
              id: Joi.number().required(),
              value: Joi.string().required(),
            })
          ),
          parentId: Joi.optional(Joi.number().required()),
          parent: Joi.optional(
            Joi.object({
              id: Joi.number().required(),
              value: Joi.string().required(),
            })
          ),
          field: Joi.string().required(),
        }),
        blockNumber: Joi.optional(Joi.number().required()),
        chapterNumber: Joi.optional(Joi.number().required()),
      })
    ),
    updatedAt: Joi.date().required(),
    editable: Joi.bool().required(),
    title: Joi.optional(Joi.string().required()),
    createdAt: Joi.date().required(),
    evaluationDate: Joi.date().required(),
    fixedEvaluationDate: Joi.bool().required(),
    freeTexts: Joi.array().items(
      Joi.object({
        order: Joi.number().required(),
        title: Joi.string().required(),
        text: Joi.string().required(),
      })
    ),
    user: Joi.object({
      id: Joi.string(),
      email: Joi.string().required(),
      name: Joi.string().required(),
      groups: Joi.array().items(Joi.number()).allow(null)
    }),
  }),
});

const bodyActivitiesCertificationsEvaluations = {
  "storylineLogline": {
    "order": 0,
    "title": "Storyline",
    "text": "<p>Storyline teste</p>",
  },
  "resume": {
    "order": 1,
    "title": "Resumo do Parecer",
    "text": "<p>Resumo do Parecer teste</p>",
  },
  "conclusion": {
    "order": 5,
    "title": "Conclusão",
    "text": "<p>Conclusão teste</p>",
    "evaluation": 2,
  },
  "strongPoints": {
    "order": 2,
    "title": "Pontos Fortes",
    "text": "<p>Pontos Fortes teste</p>",
  },
  "adequation": {
    "order": 6,
    "title": "Adequação",
    "text": "<p>Adequação teste</p>",
    "hourId": 1841,
    "formatId": 1220,
    "plataformId": 1863,
  },
  "complete": {
    "order": 4,
    "title": "Parecer Completo",
    "text": "<p>Parecer Completo teste</p>",
  },
  "attentionPoints": {
    "order": 3,
    "title": "Pontos de Atenção",
    "text": "<p>Pontos de Atenção teste</p>",
  },
  "title": "Certificação",
  "createdAt": "2020-11-27T18:40:02.948Z",
  "updatedAt": "2020-11-27T18:40:02.948Z",
  "evaluationDate": "2020-11-27T15:26:49.239838",
  "fixedEvaluationDate": false,
  "freeTexts": [
    { "order": 7, "title": "Texto livre 01", "text": "<p>Texto livre 01 teste</p>" },
    { "order": 8, "title": "Texto livre 02", "text": "<p>Texto livre 02 teste</p>" },
  ],
};

module.exports = {
  activitiesCertificationsEvaluations,
  bodyActivitiesCertificationsEvaluations,
};
