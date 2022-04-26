const Joi =  require('joi')
const commons = require('../commons')


const values = Joi.object({
    id: Joi.number().required(),
    origin: Joi.number().required(),
    name: Joi.string().allow(null, ""),
    description: Joi.string().allow(null, ""),
    remissives: Joi.array().items(Joi.string()).allow(null, ""),
    children: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string().allow(null, "")
    })).allow(null, ""),
    parentId: Joi.number().allow(null),
    parent: Joi.object({
        id: Joi.number().required(),
        value: Joi.string().allow(null, "")
    }).allow(null, ""),
    field: Joi.string().allow(null, "")
});

const attachment = Joi.object({
    activityCount: Joi.number().allow(null),
    id: Joi.number().required(),
    fileId: Joi.string().allow(null, ""),
    fileName: Joi.string().allow(null, ""),
    version: Joi.number().allow(null),
    receivedAt: Joi.date().allow(null, ""),
    release: Joi.number().required(),
    comment: Joi.string().allow(null, ""),
    releaseDate: Joi.date().allow(null, ""),
    blockNumber: Joi.number().allow(null),
    scheduleDelivery: Joi.date().allow(null, ""),
    rescheduledDelivery: Joi.date().allow(null, ""),
    scheduleRelease: Joi.date().allow(null, ""),
    rescheduledRelease: Joi.date().allow(null, ""),
    attachmentType: values.allow(null, ""),
    blockNumber: Joi.number().allow(null),
    chapterNumber: Joi.number().allow(null),
    comment: Joi.string().allow(null, ""),
    release: Joi.number().allow(null)
});

const textReleaseGet = commons.validations.append({
    pagingInfo: Joi.object({
        itemsPerPage: Joi.number().allow(null),
        totalItems: Joi.number().allow(null),
        currentPage: Joi.number().allow(null),
        totalPages: Joi.number().allow(null),
        previousPage: Joi.number().allow(null),
        nextPage: Joi.number().allow(null),
        extraTotals: Joi.object({
            totalAttachments: Joi.number().allow(null),
            totalAttachments: Joi.number().allow(null),
            totalAttachments: Joi.number().allow(null),
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        title: Joi.string().allow(null, ""),
        formatId: Joi.number().allow(null),
        format: Joi.string().allow(null, ""),
        groupId: Joi.number().allow(null),
        groupName: Joi.string().allow(null, ""),
        contentTypeId: Joi.number().allow(null),
        contentType: Joi.string().allow(null, ""),
        creators: Joi.array().items(Joi.object({
            name: Joi.string().allow(null, ""),
            origin: Joi.number().allow(null)
        })),
        lastAttachmentReleaseDate: Joi.date().allow(null, ""),
        channel: Joi.array().items(Joi.object({
            content: Joi.object({
                id: Joi.number().required(),
                origin: Joi.number().required(),
                name: Joi.string().allow(null, ""),
                description: Joi.string().allow(null, ""),
                remissives: Joi.array().items(Joi.string()).allow(null, ""),
                children: Joi.array().items(Joi.object({
                    id: Joi.number().required(),
                    value: Joi.string().allow(null, "")
                })).allow(null, ""),
                parentId: Joi.number().allow(null),
                parent: Joi.object({
                    id: Joi.number().required(),
                    value: Joi.string().allow(null, "")
                }).allow(null, ""),
                field: Joi.string().allow(null, "")
            }),
            descriptions: Joi.array().items(Joi.string()).allow(null, "")
        })),
        lastAttachmentReceivedDate: Joi.date(),
        contentType: Joi.string().allow(null, ""),
        complementaries: Joi.array().items(values).allow(null, ""),
        attachments: Joi.array().items(Joi.object({
            activitiesNumber: Joi.number().allow(null),
            attachment: attachment.allow(null, ""),
            olderVersions: Joi.array().items(attachment).allow(null, "")
        }))
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const textReleaseGroups = commons.validations.append({
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string()
    }))
});

module.exports = { textReleaseGet, textReleaseGroups }