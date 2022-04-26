const Joi = require("joi");
const commons = require("../commons");


const contets = commons.validations.append({
    pagingInfoByType: Joi.array().items(Joi.object({
        type: Joi.string().required(),
        pagingInfo: Joi.object({
            itemsPerPage: Joi.number().allow(null),
            totalItems: Joi.number().allow(null),
            currentPage: Joi.number().allow(null),
            totalPages: Joi.number().allow(null),
            previousPage: Joi.number().allow(null),
            nextPage: Joi.number().allow(null),
            extraTotals: Joi.object({
                dditionalProp1: Joi.number().allow(null),
                dditionalProp2: Joi.number().allow(null),
                dditionalProp3: Joi.number().allow(null)
            })
        })
    })),
    data: Joi.optional(Joi.array().items(Joi.object({
        id: Joi.number().required(),
        title: Joi.string(),
        baseTitle: Joi.string(),
        format: Joi.string(),
        storyline: Joi.string(),
        soapOperaSchedule: Joi.string(),
        seasonNumber: Joi.number(),
        creators: Joi.array().items(Joi.object({
            name: Joi.string(),
            origin: Joi.string()
        })),
        receivedAt: Joi.date(),
        type: Joi.string(),
        researchType: Joi.string(),
        researchCategory: Joi.string(),
        researchSubCategory: Joi.string(),
        researchers: Joi.array().items(Joi.string()),
        histories: Joi.array().items(Joi.string()),
        origins: Joi.array().items(Joi.string()),
        complementaries: Joi.array().items(Joi.object({
            id: Joi.number(),
            origin: Joi.number(),
            name: Joi.string(),
            description: Joi.string(),
            remissives: Joi.array().items(Joi.string()),
            children: Joi.array().items(Joi.object({
                id: Joi.number(),
                value: Joi.string()
            })),
            parentId: Joi.number(),
            parent: Joi.array().items(Joi.object({
                id: Joi.number(),
                value: Joi.string()
            })),
            field: Joi.string()
        })),
        characters: Joi.array().items(Joi.object({
            id: Joi.number(),
            identifications: Joi.array().items(Joi.object({
                name: Joi.string(),
                lastName: Joi.string(),
                nickName: Joi.string()
            })),
            fullName: Joi.string()
        })),
        programFrequency: Joi.number(),
        productionCompanies: Joi.array().items(Joi.string()),
        recommendationType: Joi.string()
    }))),
    allowedOrderByProperties: Joi.array().items(Joi.string())
});

const atUplodad = commons.validations.append({
    data: Joi.object({
        fileId: Joi.string().required(),
        url: Joi.string().required()
    })
});

const atDownload = commons.validations.append({
    data: Joi.object({
        url: Joi.string().required()
    })
});

const attachments = commons.validations.append({
    data: Joi.array().items(Joi.number().required())
});

const associations = commons.validations.append({
    data: Joi.optional(Joi.array().items(Joi.object({
        contentId: Joi.number().required(),
        type: Joi.object({
            id: Joi.number(),
            origin: Joi.number(),
            name: Joi.string(),
            description: Joi.string(),
            remissives: Joi.array().items(Joi.string()),
            children: Joi.array().items(Joi.object({
                id: Joi.number(),
                value: Joi.string(),
            })),
            parentId: Joi.number(),
            parent: Joi.object({
                id: Joi.number(),
                value: Joi.string(),
            }),
            field: Joi.string(),
        }),
        title: Joi.string(),
        contentType: Joi.string(),
        format: Joi.string(),
        soapOperaSchedule: Joi.string(),
        editable: Joi.bool()
    })))
});

const bodyPost = [
    {
        contentId: 2808,
        fileId: "teste teste",
        fileName: "teste",
        version: 3,
        receivedAt: "2021-04-08T18:41:36.190Z",
        attachmentTypeId: 1168,
        blockNumber: 1,
        chapterNumber: 2
    }
]

const bodyPut = {
    id: 5996,
    version: 3,
    receivedAt: "2021-04-21T17:22:53.464Z",
    attachmentTypeId: 1168,
    blockNumber: 1,
    chapterNumber: 2
}

const bodyPatch = {
    contentId: 2808,
    projects: [
      {
        typeAssociationId: 1,
        contentsId: [6202]
      }
    ],
    researchesIds: [
      2809
    ]
}

module.exports = {
    contets,
    atUplodad,
    atDownload,
    bodyPost,
    bodyPut,
    bodyPatch,
    attachments,
    associations
}