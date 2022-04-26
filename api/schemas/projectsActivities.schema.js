const Joi = require("joi");
const number = require("joi/lib/types/number");
const { allow } = require("joi/lib/types/symbol");
const commons = require("../commons");

const attachments = commons.validations.append({
    data: Joi.object({
        id: Joi.number().required(),
        title: Joi.string().required(),
        creators: Joi.array().items(Joi.object({
            name: Joi.string(),
            origin:  Joi.number()
        })),
        format: Joi.string(),
        origins: Joi.array().items(Joi.string()),
        soapOperaSchedule: Joi.string().allow(null, ""),
        lastAttachmentReceivedDate: Joi.date(),
        contentType: Joi.string(),
        attachments: Joi.array().items(Joi.object({
            attachment: Joi.object({
                activityCount: Joi.number(),
                id: Joi.number(),
                fileId: Joi.string(),
                fileName: Joi.string(),
                version: Joi.number(),
                receivedAt: Joi.date(),
                release: Joi.number().required(),
                comment: Joi.string().allow(null, ""),
                releaseDate: Joi.date().allow(null, ""),
                blockNumber: Joi.number(),
                scheduleDelivery: Joi.date().allow(null, ""),
                rescheduledDelivery: Joi.date().allow(null, ""),
                scheduleRelease: Joi.date().allow(null, ""),
                rescheduledRelease: Joi.date().allow(null, ""),
                attachmentType: Joi.object({
                    id: Joi.number(),
                    origin: Joi.number(),
                    name: Joi.string(),
                    description: Joi.string(),
                    remissives: Joi.array().items(Joi.string()),
                    children: Joi.array().items(Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    })),
                    parentId: Joi.number().allow(null),
                    parent: Joi.optional(Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    })),
                    field: Joi.string(),
                }),
                blockNumber: Joi.number(),
                chapterNumber: Joi.number()
            }),
            olderVersions: Joi.array().items(Joi.object({
                activityCount: Joi.number(),
                id: Joi.number(),
                fileId: Joi.string(),
                fileName: Joi.string(),
                version: Joi.number(),
                receivedAt: Joi.date(),
                release: Joi.number().required(),
                comment: Joi.string().allow(null, ""),
                releaseDate: Joi.date().allow(null, ""),
                blockNumber: Joi.number(),
                scheduleDelivery: Joi.date().allow(null, ""),
                rescheduledDelivery: Joi.date().allow(null, ""),
                scheduleRelease: Joi.date().allow(null, ""),
                rescheduledRelease: Joi.date().allow(null, ""),
                attachmentType: Joi.object({
                    id: Joi.number(),
                    origin: Joi.number(),
                    name: Joi.string(),
                    description: Joi.string(),
                    remissives: Joi.array().items(Joi.string()),
                    children: Joi.array().items(Joi.object({
                        id: Joi.number(),
                        value: Joi.string(),
                    })),
                    parentId: Joi.number().allow(null),
                    parent: Joi.optional(Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    })),
                    field: Joi.string()
                }),
                blockNumber: Joi.number(),
                chapterNumber: Joi.number()
            })),
            activitiesNumber: Joi.number()// deu erro no teste de contrato, tive que 
            // adiconar o parametro, não está constando no Swaggeer            
        }))
    })
});

const activities = commons.validations.append({
    data: Joi.array().items(Joi.object({
        evaluationId: Joi.number(),
        status: Joi.object({
            id: Joi.number(),
            value: Joi.string()
        }),
        type: Joi.object({
            id: Joi.number(),
            value: Joi.string()
        }),
        group: Joi.object({
            id: Joi.number(),
            value: Joi.string()
        }),
        user: Joi.object({
            id: Joi.number(),
            email: Joi.string(),
            name: Joi.string(),
            groups: Joi.array().items(Joi.number())
        }),
        doneDateTime: Joi.date(),
        attachments: Joi.array().items(Joi.object({
            activityCount: Joi.number(),
                id: Joi.number(),
                fileId: Joi.string(),
                fileName: Joi.string(),
                version: Joi.number(),
                receivedAt: Joi.date(),
                release: Joi.number().required(),
                comment: Joi.string().allow(null, ""),
                releaseDate: Joi.date().allow(null, ""),
                blockNumber: Joi.number(),
                scheduleDelivery: Joi.date().allow(null, ""),
                rescheduledDelivery: Joi.date().allow(null, ""),
                scheduleRelease: Joi.date().allow(null, ""),
                rescheduledRelease: Joi.date().allow(null, ""),
                attachmentType: Joi.object({
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
                    parent: Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    }),
                    field: Joi.string()
                }),
                blockNumber: Joi.number(),
                chapterNumber: Joi.number()
        }))
    })),
    allowedOrderByProperties: Joi.optional(Joi.array().items(Joi.string())),
    pagingInfo: Joi.optional(Joi.object())// verificar pois está dando erro no contrato
});

const postActivities = commons.validations.append({
    data:  Joi.number()
})

const attachmentsOrigin = commons.validations.append({
    pagingInfo: Joi.object({
        itemsPerPage: Joi.number(),
        totalItems: Joi.number(),
        currentPage: Joi.number(),
        totalPages: Joi.number(),
        previousPage: Joi.number().allow(null),
        nextPage: Joi.number().allow(null),
        extraTotals: Joi.object({
            additionalProp1: Joi.number(),
            additionalProp2: Joi.number(),
            additionalProp3: Joi.number(),
            totalAttachments: Joi.number() //verificar no schema do swagger não possui essa declaração
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number(),
        title: Joi.string(),
        creators: Joi.array().items(Joi.object({
            name: Joi.string(),
            origin: Joi.number()
        })),
        format: Joi.string(),
        origins: Joi.array().items(Joi.string()),
        soapOperaSchedule: Joi.string().allow(null, ""),
        lastAttachmentReceivedDate: Joi.date(),
        contentType: Joi.string(),
        attachments: Joi.array().items(Joi.object({
            attachment: Joi.object({
                activityCount: Joi.number(),
                id: Joi.number(),
                fileId: Joi.string(),
                fileName: Joi.string(),
                version: Joi.number(),
                receivedAt: Joi.date(),
                release: Joi.number().required(),
                comment: Joi.string().allow(null, ""),
                releaseDate: Joi.date().allow(null, ""),
                blockNumber: Joi.number(),
                scheduleDelivery: Joi.date().allow(null, ""),
                rescheduledDelivery: Joi.date().allow(null, ""),
                scheduleRelease: Joi.date().allow(null, ""),
                rescheduledRelease: Joi.date().allow(null, ""),
                attachmentType: Joi.object({
                    id: Joi.number(),
                    origin: Joi.number(),
                    name: Joi.string(),
                    description: Joi.string().allow(null, ""),
                    remissives: Joi.array().items(Joi.string()),
                    children: Joi.array().items(Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    })),
                    parentId: Joi.number().allow(null),
                    parent: Joi.optional(Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    })),
                    field: Joi.string(),
                }),
                blockNumber: Joi.number(),
                chapterNumber: Joi.number(),
            }),
            activitiesNumber: Joi.number().allow(null), //verificar swagger
            olderVersions: Joi.array().items(Joi.object({
                activityCount: Joi.number(),
                id: Joi.number(),
                fileId: Joi.string(),
                fileName: Joi.string(),
                version: Joi.number(),
                receivedAt: Joi.date(),
                release: Joi.number().required(),
                comment: Joi.string().allow(null, ""),
                releaseDate: Joi.date().allow(null, ""),
                blockNumber: Joi.number(),
                scheduleDelivery: Joi.date().allow(null, ""),
                rescheduledDelivery: Joi.date().allow(null, ""),
                scheduleRelease: Joi.date().allow(null, ""),
                rescheduledRelease: Joi.date().allow(null, ""),
                attachmentType: Joi.object({
                    id: Joi.number(),
                    origin: Joi.number(),
                    name: Joi.string(),
                    description: Joi.string().allow(null, ""),
                    remissives: Joi.array().items(Joi.string()),
                    children: Joi.array().items(Joi.object({
                        id: Joi.number(),
                        value: Joi.string(),
                    })),
                    parentId: Joi.number().allow(null),
                    parent: Joi.optional(Joi.object({
                        id: Joi.number(),
                        value: Joi.string()
                    })),
                    field: Joi.string()
                }),
                blockNumber: Joi.number().allow(null),
                chapterNumber: Joi.number().allow(null)
            }))
        }))
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string().allow(null, ""))
});

const bodyPost = {
    attachments: [3860],
    status: 1,
    type: 1,
    group: 1,
    userId: 586,
    contentId: 5118,
    description: "uma atividade aqui"
}

const bodyPut = {
    attachments: [6028],
    id: 1309,
    status: 1,
    type: 1,
    group: 1,
    contentId: 2808,
    description: "Teste de API Put"
}

module.exports = {
    attachments,
    activities,
    postActivities,
    attachmentsOrigin,
    bodyPost,
    bodyPut
}