const commons = require("../commons");
const Joi = require("joi");

const dramaturgyLong = commons.validations.append({
    pagingInfo: Joi.object({
        itemsPerPage: Joi.number().allow(null),
        totalItems: Joi.number().required(),
        currentPage: Joi.number().allow(null),
        totalPages: Joi.number().allow(null),
        previousPage: Joi.number().allow(null),
        nextPage: Joi.number().allow(null),
        extraTotals: Joi.object({
            additionalProp1: Joi.number(),
            additionalProp2: Joi.number(),
            additionalProp3: Joi.number(),
            totalAttachments: Joi.number()
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        title: Joi.string(),
        formatId: Joi.number().allow(null),
        format:  Joi.string().allow(null,   ),
        groupId: Joi.number().allow(null),
        groupName: Joi.string().allow(null,   ),
        contentTypeId: Joi.number().allow(null),
        contentType: Joi.string().allow(null,   ),
        creators: Joi.array().items(Joi.object({
            name: Joi.string().allow(null,   ),
            origin: Joi.number().allow(null)
        })),
        channel: Joi.array().items(Joi.object({
            content: Joi.object({
                id: Joi.number(),
                origin: Joi.number().allow(null),
                name:  Joi.string().allow(null, ""),
                description:  Joi.string().allow(null, ""),
                remissives: Joi.array().items(Joi.string()).allow(null, ""),
                children: Joi.array().items(Joi.object({
                    id: Joi.number(),
                    value: Joi.string().allow(null, "") 
                })).allow(null, ""),
                parentId: Joi.number().allow(null),
                parent: Joi.object({
                    id: Joi.number().allow(null),
                    value: Joi.string().allow(null, "")
                }).allow(null, ""),
                field: Joi.string().allow(null, "") 
            }),
            descriptions: Joi.array().items(Joi.string())
        })),
        block: Joi.array().items(Joi.object({
            blockNumber: Joi.number().allow(null),
            numberChaptersBlock: Joi.number().allow(null),
            lastAttachmentReceiveDate: Joi.date().allow(null, ""),
            lastAttachmentReleaseDate: Joi.date().allow(null, ""),
            scheduleDelivery: Joi.date().allow(null, ""),
            rescheduledDelivery: Joi.date().allow(null, ""),
            scheduleRelease: Joi.date().allow(null, ""),
            rescheduledRelease: Joi.date().allow(null, ""),
            attachments: Joi.array().items(Joi.object({
                attachment: Joi.object({
                    activityCount: Joi.number().allow(null),
                    id: Joi.number().required(),
                    fileId: Joi.string().allow(null, ""),
                    fileName: Joi.string().allow(null, ""),
                    version: Joi.number().allow(null),
                    receivedAt: Joi.date().allow(null, ""),
                    release: Joi.date().allow(null),
                    comment: Joi.string().allow(null, ""),
                    releaseDate: Joi.date().allow(null, ""),
                    blockNumber: Joi.number().allow(null),
                    scheduleDelivery: Joi.date().allow(null, ""),
                    rescheduledDelivery: Joi.date().allow(null, ""),
                    scheduleRelease: Joi.date().allow(null, ""),
                    rescheduledRelease: Joi.date().allow(null, ""),
                    attachmentType: Joi.object({
                        id: Joi.number(),
                        origin: Joi.number().allow(null),
                        name:  Joi.string().allow(null, ""),
                        description:  Joi.string().allow(null, ""),
                        remissives: Joi.array().items(Joi.string()).allow(null, ""),
                        children: Joi.array().items(Joi.object({
                            id: Joi.number(),
                            value: Joi.string().allow(null, "") 
                        })).allow(null, ""),
                        parentId: Joi.number().allow(null),
                        parent: Joi.object({
                            id: Joi.number().allow(null),
                            value: Joi.string().allow(null, "")
                        }).allow(null, ""),
                        field: Joi.string().allow(null, "")
                    }),
                    chapterNumber: Joi.number().allow(null)
                }),
                olderVersions: Joi.array().items(Joi.object({
                    activityCount: Joi.number().allow(null),
                    id: Joi.number().required(),
                    fileId: Joi.string().allow(null, ""),
                    fileName: Joi.string().allow(null, ""),
                    version: Joi.number().allow(null),
                    receivedAt: Joi.date().allow(null, ""),
                    release: Joi.date().allow(null),
                    comment: Joi.string().allow(null, ""),
                    releaseDate: Joi.date().allow(null, ""),
                    blockNumber: Joi.number().allow(null),
                    scheduleDelivery: Joi.date().allow(null, ""),
                    rescheduledDelivery: Joi.date().allow(null, ""),
                    scheduleRelease: Joi.date().allow(null, ""),
                    rescheduledRelease: Joi.date().allow(null, ""),
                    attachmentType: Joi.object({
                        id: Joi.number(),
                        origin: Joi.number().allow(null),
                        name:  Joi.string().allow(null, ""),
                        description:  Joi.string().allow(null, ""),
                        remissives: Joi.array().items(Joi.string()).allow(null, ""),
                        children: Joi.array().items(Joi.object({
                            id: Joi.number(),
                            value: Joi.string().allow(null, "") 
                        })).allow(null, ""),
                        parentId: Joi.number().allow(null),
                        parent: Joi.object({
                            id: Joi.number().allow(null),
                            value: Joi.string().allow(null, "")
                        }).allow(null, ""),
                        field: Joi.string().allow(null, "")
                    }),
                    chapterNumber: Joi.number().allow(null)
                }))
            }))
        }))
    }))
});

const dramaturgyShort = commons.validations.append({
    pagingInfo: Joi.object({
        itemsPerPage: Joi.number().allow(null),
        totalItems: Joi.number().required(),
        currentPage: Joi.number().allow(null),
        totalPages: Joi.number().allow(null),
        previousPage: Joi.number().allow(null),
        nextPage: Joi.number().allow(null),
        extraTotals: Joi.object({
            additionalProp1: Joi.number(),
            additionalProp2: Joi.number(),
            additionalProp3: Joi.number(),
            totalAttachments: Joi.number()
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        title: Joi.string(),
        formatId: Joi.number().allow(null),
        format:  Joi.string().allow(null,   ),
        groupId: Joi.number().allow(null),
        groupName: Joi.string().allow(null,   ),
        contentTypeId: Joi.number().allow(null),
        contentType: Joi.string().allow(null,   ),
        creators: Joi.array().items(Joi.object({
            name: Joi.string().allow(null,   ),
            origin: Joi.number().allow(null)
        })),
        channel: Joi.array().items(Joi.object({
            content: Joi.object({
                id: Joi.number(),
                origin: Joi.number().allow(null),
                name:  Joi.string().allow(null, ""),
                description:  Joi.string().allow(null, ""),
                remissives: Joi.array().items(Joi.string()).allow(null, ""),
                children: Joi.array().items(Joi.object({
                    id: Joi.number(),
                    value: Joi.string().allow(null, "") 
                })).allow(null, ""),
                parentId: Joi.number().allow(null),
                parent: Joi.object({
                    id: Joi.number().allow(null),
                    value: Joi.string().allow(null, "")
                }).allow(null, ""),
                field: Joi.string().allow(null, "") 
            }),
            descriptions: Joi.array().items(Joi.string()).allow(null, "")
        })),
        episodes: Joi.array().items(Joi.object({
            episodeNumber: Joi.number().allow(null),
            numberAttachmentsEpisodes: Joi.number().allow(null),
            lastAttachmentReceiveDate: Joi.date().allow(null, ""),
            lastAttachmentReleaseDate: Joi.date().allow(null, ""),
            scheduleDelivery: Joi.date().allow(null, ""),
            rescheduledDelivery: Joi.date().allow(null, ""),
            scheduleRelease: Joi.date().allow(null, ""),
            rescheduledRelease: Joi.date().allow(null, ""),
            attachments: Joi.array().items(Joi.object({
                attachment: Joi.object({
                    activityCount: Joi.number().allow(null),
                    id: Joi.number().required(),
                    fileId: Joi.string().allow(null, ""),
                    fileName: Joi.string().allow(null, ""),
                    version: Joi.number().allow(null),
                    receivedAt: Joi.date().allow(null, ""),
                    release: Joi.date().allow(null),
                    comment: Joi.string().allow(null, ""),
                    releaseDate: Joi.date().allow(null, ""),
                    blockNumber: Joi.number().allow(null),
                    scheduleDelivery: Joi.date().allow(null, ""),
                    rescheduledDelivery: Joi.date().allow(null, ""),
                    scheduleRelease: Joi.date().allow(null, ""),
                    rescheduledRelease: Joi.date().allow(null, ""),
                    attachmentType: Joi.object({
                        id: Joi.number(),
                        origin: Joi.number().allow(null),
                        name:  Joi.string().allow(null, ""),
                        description:  Joi.string().allow(null, ""),
                        remissives: Joi.array().items(Joi.string()).allow(null, ""),
                        children: Joi.array().items(Joi.object({
                            id: Joi.number(),
                            value: Joi.string().allow(null, "") 
                        })).allow(null, ""),
                        parentId: Joi.number().allow(null),
                        parent: Joi.object({
                            id: Joi.number().allow(null),
                            value: Joi.string().allow(null, "")
                        }).allow(null, ""),
                        field: Joi.string().allow(null, "")
                    }),
                    chapterNumber: Joi.number().allow(null)
                }),
                olderVersions: Joi.array().items(Joi.object({
                    activityCount: Joi.number().allow(null),
                    id: Joi.number().required(),
                    fileId: Joi.string().allow(null, ""),
                    fileName: Joi.string().allow(null, ""),
                    version: Joi.number().allow(null),
                    receivedAt: Joi.date().allow(null, ""),
                    release: Joi.date().allow(null),
                    comment: Joi.string().allow(null, ""),
                    releaseDate: Joi.date().allow(null, ""),
                    blockNumber: Joi.number().allow(null),
                    scheduleDelivery: Joi.date().allow(null, ""),
                    rescheduledDelivery: Joi.date().allow(null, ""),
                    scheduleRelease: Joi.date().allow(null, ""),
                    rescheduledRelease: Joi.date().allow(null, ""),
                    attachmentType: Joi.object({
                        id: Joi.number(),
                        origin: Joi.number().allow(null),
                        name:  Joi.string().allow(null, ""),
                        description:  Joi.string().allow(null, ""),
                        remissives: Joi.array().items(Joi.string()).allow(null, ""),
                        children: Joi.array().items(Joi.object({
                            id: Joi.number(),
                            value: Joi.string().allow(null, "") 
                        })).allow(null, ""),
                        parentId: Joi.number().allow(null),
                        parent: Joi.object({
                            id: Joi.number().allow(null),
                            value: Joi.string().allow(null, "")
                        }).allow(null, ""),
                        field: Joi.string().allow(null, "")
                    }),
                    chapterNumber: Joi.number().allow(null)
                }))
            }))
        }))
    }))
})


module.exports = {
    dramaturgyLong,
    dramaturgyShort
}