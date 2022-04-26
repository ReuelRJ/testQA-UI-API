const Joi = require("joi");
const commons = require("../commons");


const values = Joi.object({
    order: Joi.number().allow(null),
    title: Joi.string().allow(null, ""),
    text: Joi.string().allow(null, "")
});

const values2 = Joi.object({
    id: Joi.number(),
    origin: Joi.number().allow(null),
    name: Joi.string().allow(null, ""),
    description: Joi.string().allow(null, ""),
    remissives: Joi.array().items(Joi.string()).allow(null, ""),
    children: Joi.array().items(Joi.object({
        id: Joi.number(),
        value: Joi.string().allow(null, "")
      })),
    parentId: Joi.number().allow(null),
    parent: Joi.object({
      id: Joi.number(),
      value: Joi.string().allow(null, "")
    }).allow(null, ""),
    field: Joi.string()
});

const textReportsEvaluationsId = commons.validations.append({
    data: Joi.object({
        keyWord: values.allow(null),
        attentionPoints: values.allow(null),
        observation: values.allow(null),
        plotAnalysis: values.allow(null),
        resume: values.allow(null),
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
            fileId: Joi.string().allow(null, ""),
            fileName: Joi.string().allow(null, ""),
            version: Joi.number().allow(null),
            receivedAt: Joi.date(),
            release: Joi.number().required(),
            comment: Joi.string().allow(null, ""),
            releaseDate: Joi.date().allow(null, ""),
            blockNumber: Joi.number(),
            scheduleDelivery: Joi.date().allow(null, ""),
            rescheduledDelivery: Joi.date().allow(null, ""),
            scheduleRelease: Joi.date().allow(null, ""),
            rescheduledRelease: Joi.date().allow(null, ""),
            attachmentType: values2.allow(null),
            blockNumber: Joi.number().allow(null),
            chapterNumber: Joi.number().allow(null)
        })).allow(null),
        user: Joi.object({
            id: Joi.string().allow(null, ""),
            email: Joi.string().allow(null, ""),
            name: Joi.string().allow(null, ""),
            groups: Joi.array().items(Joi.number()).allow(null)
        }),
        updatedAt: Joi.date().allow(null, ""),
        editable: Joi.bool(),
        title: Joi.string().allow(null, ""),
        createdAt: Joi.date().required(),
        evaluationDate: Joi.date().allow(null, ""),
        fixedEvaluationDate: Joi.bool(),
        freeTexts: Joi.array().items(values).allow(null)
    }),
});

const bodyPut = {
    resume: "",
    keyWord: "",
    observation: "",
    attentionPoints: "",
    plotAnalysis: "",
    title: "Test Put",
    createdAt: "2021-04-29T12:00:47.203212",
    updatedAt: "2021-05-12T15:59:01.364Z",
    evaluationDate: "2021-04-29T12:00:47.203213",
    fixedEvaluationDate: false,
    freeTexts: []
}

module.exports = {
    textReportsEvaluationsId,
    bodyPut
}