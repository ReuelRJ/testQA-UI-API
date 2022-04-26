const { start } = require("chromedriver");
const Joi = require("joi");
const commons = require("../commons");
const { NOT_FOUND } = require("../httpStatusCodes");


const values = Joi.object ({
    id: Joi.number().required(),
    origin: Joi.number().required(),
    name: Joi.string().allow(null, ""),
    description: Joi.string().allow(null, ""),
    remissives: Joi.array().items(Joi.string()).allow(null, ""),
    children: Joi.optional(Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string().allow(null, ""),
    }))),
    parentId: Joi.number().allow(null),
    parent: Joi.object({
        id: Joi.number().required(),
        value: Joi.string().allow(null, "")
    }).allow(null),
    field: Joi.string().allow(null, ""),
});

const attachments = Joi.object({
    activityCount: Joi.number().allow(null),
    id: Joi.number().required(),
    fileId: Joi.string().allow(null, ""),
    fileName: Joi.string().allow(null, ""),
    version: Joi.number(),
    receivedAt: Joi.date(),
    attachmentType: values.allow(null),
    blockNumber: Joi.number(),
    chapterNumber: Joi.number()
});

const pageInfoByType = Joi.object({
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
            additionalProp3: Joi.number().allow(null)
        })
    })
});

const pageInfo = Joi.object({
    itemsPerPage: Joi.number().allow(null),
    totalItems: Joi.number().allow(null),
    currentPage: Joi.number().allow(null),
    totalPages: Joi.number().allow(null),
    previousPage: Joi.number().allow(null),
    nextPage: Joi.number().allow(null),
    extraTotals: Joi.object({
        additionalProp1: Joi.number().allow(null),
        additionalProp2: Joi.number().allow(null),
        additionalProp3: Joi.number().allow(null)
    })
});

const data = Joi.object({
    id: Joi.number().required(),
    title: Joi.string(),
    baseTitle: Joi.string().allow(null, ""),
    format: Joi.string().allow(null, ""),
    formatId: Joi.number().allow(null),
    storyline: Joi.string().allow(null, ""),
    soapOperaSchedule: Joi.string().allow(null, ""),
    seasonNumber: Joi.number().allow(null),
    creators: Joi.array().items(Joi.object({
        name: Joi.string().allow(null, ""),
        origin: Joi.number().allow(null, ""),
    })),
    receivedAt: Joi.date().required(),
    type: Joi.string().allow(null, ""),
    authors: Joi.array().items(Joi.string()).allow(null, ""),
    publishers: Joi.array().items(Joi.string()).allow(null, ""),
    researchType: Joi.string().allow(null,""),
    researchCategory: Joi.string().allow(null, ""),
    researchSubCategory: Joi.string().allow(null, ""),
    researchers: Joi.array().items(Joi.string()),
    histories: Joi.array().items(Joi.string()),
    origins: Joi.array().items(Joi.string()),
    complementaries: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        origin: Joi.number().required(),
        name: Joi.string().allow(null, ""),
        description: Joi.string().allow(null, ""),
        remissives: Joi.array().items(Joi.string().allow(null, "")),
        children: Joi.optional(Joi.array().items(Joi.object({
            id: Joi.number().required(),
            value: Joi.string().allow(null, ""),
        }))),
        parentId: Joi.number().allow(null),
        parent: Joi.object({
            parent: Joi.number().allow(null),
            id: Joi.number().required(),
            value: Joi.string().allow(null, "")
        }).allow(null),
        field: Joi.string().allow(null, "")
    })),
    characters: Joi.array().items(Joi.object({
        id: Joi.number(),
        identifications: Joi.array().items(Joi.object({
            name: Joi.string().allow(null, ""),
            lastName: Joi.string().allow(null, ""),
            nickName: Joi.string().allow(null, "")
        })).allow(null),
        activities: Joi.array().items(Joi.object({
            id: Joi.number().allow(null),
            name: Joi.string().allow(null, "")
        })),
        fullName: Joi.string().allow(null, "")
    })),
    programFrequency: Joi.number().allow(null),
    productionCompanies: Joi.array().items(Joi.string()).allow(null, ""),
    recommendationType: Joi.string().allow(null,"")
});

const dramaturgyId = commons.validations.append({
    data: Joi.object({
        soapOperaSchedule: Joi.object({
            id: Joi.number().required(),
            value: Joi.string().allow(null, "")
        }),
        contentOrigns: Joi.array().items(Joi.object({
            content: Joi.optional(values.append({
                descriptions: Joi.array().items(Joi.string().allow(null, ""))
            }))
        })),
        spaces: Joi.array().items(values).allow(null),
        narratives: Joi.array().items(values).allow(null),
        periods: Joi.array().items(values).allow(null),
        epochs: Joi.array().items(values).allow(null),
        storyLine: Joi.string().allow(null, ""),
        plot: Joi.object({
            primaries: Joi.array().items(values).allow(null),
            secundaries: Joi.array().items(values).allow(null),
            tertiaries: Joi.array().items(values).allow(null)
        }),
        thematic: Joi.object({
            primaries: Joi.array().items(values).allow(null),
            secundaries: Joi.array().items(values).allow(null),
            tertiaries: Joi.array().items(values).allow(null)
        }),
        universe: Joi.object({
            primaries: Joi.array().items(values).allow(null),
            secundaries: Joi.array().items(values).allow(null),
            tertiaries: Joi.array().items(values).allow(null)
        }),
        projectType: Joi.string(),
        baseTitle: Joi.string(),
        seasonNumber: Joi.number(),
        createdBy: Joi.string().allow(null, ""),
        receivedAt: Joi.date(),
        creators: Joi.array().items(Joi.object({
            id: Joi.number().allow(null),
            name: Joi.string().allow(null, ""),
            origin: Joi.string().allow(null,""),
            photo: Joi.string().allow(null,""),
            role: Joi.string().allow(null,"")
        })),
        histories: Joi.array().items(Joi.object({
            title: Joi.string(),
            date: Joi.date(),
            user: Joi.object({
                id: Joi.string().allow(null, ""),
                email: Joi.string().allow(null, ""),
                name: Joi.string().allow(null, ""),
                groups: Joi.array().items(Joi.number()).allow(null)
            })
        })),
        productionCompanies: Joi.array().items(Joi.object({
            id: Joi.number(),
            name: Joi.string(),
            contacts: Joi.array().items(Joi.object({value: Joi.string()}))
        })),
        chaptersOrEpisodes: Joi.number(),
        format: values.allow(null),
        origins: Joi.array().items(Joi.string()),
        channel: Joi.array().items(Joi.object({
            content: values.allow(null),
            descriptions: Joi.array().items(Joi.string())
        })),
        genres: Joi.array().items(values).allow(null),
        subGenres: Joi.array().items(values).allow(null),
        productId: Joi.string(),
        recommendation: Joi.object({
            id: Joi.number(),
            projectId: Joi.number(),
            recommendationType: Joi.object({
                id: Joi.number(),
                value: Joi.string()
            }),
            justification: Joi.string(),
            user: Joi.object({
                id: Joi.number(),
                email: Joi.string(),
                name: Joi.string(),
                groups: Joi.array().items(Joi.number())
            }),
            recommendationDate: Joi.date()
        }),
        id: Joi.number().required(),
        title: Joi.string().required(),
        associations: Joi.array().items(Joi.object({
            contentId: Joi.number().required(),
            type: values,
            title: Joi.string().allow(null, ""),
            contentType: Joi.string().allow(null, ""),
            format: Joi.string().allow(null, ""),
            soapOperaSchedule: Joi.string().allow(null, ""),
            editable: Joi.bool()
        })),
        attachments: Joi.array().items(attachments),
        soapOperaSchedule: Joi.object().allow(null),
        recommendation: Joi.object().allow(null)
    })
});

const dramaturgies = commons.validations.append({
    pagingInfoByType: Joi.array().items(pageInfoByType),
    data: Joi.array().items(data),
    allowedOrderByProperties: Joi.array().items(Joi.string()),
});

const soapSchedules = commons.validations.append({
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string().required()
    }))
});

const actAttachments = commons.validations.append({
    pagingInfo: pageInfo.append({
        extraTotals: Joi.object({
            totalAttachments: Joi.number().allow(null)
        })
    }),
    data: Joi.array().items(Joi.object({
        id: Joi.number(),
        title: Joi.string(),
        creators: Joi.array().items(Joi.object({
            name: Joi.string().allow(null, ""),
            origin: Joi.string().allow(null, "")
        })),
        format: Joi.string(),
        origins: Joi.array().items(Joi.string()),
        soapOperaSchedule: Joi.string().allow(null, ""),
        lastAttachmentReceivedDate: Joi.date().required(),
        contentType: Joi.string().allow(null, ""),
        attachments: Joi.array().items(attachments.append({
            olderVersions: Joi.array().items(attachments)
        }))
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string())
});

const products = commons.validations.append({
    pagingInfo: pageInfo,
    data: Joi.array().items(Joi.object({
        productId: Joi.string().allow(null, ""),
        title: Joi.string().allow(null, ""),
        formatId: Joi.number().required(),
        format: Joi.string().allow(null, ""),
        type: Joi.string().allow(null, ""),
        soapOperaSchedule: Joi.string().allow(null, ""),
        receivedAt: Joi.date().required(),
        seasonNumbers: Joi.array().items(Joi.number().allow()),
        creators: Joi.optional(Joi.array().items(Joi.object({
            name: Joi.string().allow(null, ""),
            origin: Joi.string().allow(null, "")
        })))
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const phases = commons.validations.append({
    data: Joi.array().items(Joi.object({
        title: Joi.string(),
        phaseType: Joi.string(),
        phasePeriod: Joi.array().items(Joi.object({
            title: Joi.string(),
            beginDate: Joi.date(),
            endDate: Joi.date(),
            status: Joi.string()
        }))
    }))
});

const filter = commons.validations.append({
    pagingInfoByType: Joi.array().items(pageInfoByType),
    data: Joi.array().items(data),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const threasure = commons.validations.append({
    pagingInfo: pageInfo,
    data: Joi.array().items(values),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const hierachies = commons.validations.append({
    pagingInfo: pageInfo,
    data: Joi.array().items(Joi.object({
        parent: Joi.object({
            id: Joi.number(),
            value: Joi.string()
        }).allow(null),
        terms: Joi.array().items(Joi.object({
            id: Joi.number(),
            value: Joi.string()
        })).allow(null) 
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const postDramaturgies = commons.validations.append({
    data: Joi.number().required()
});

const postRecomendations = commons.validations.append({
    data: Joi.object({
        id: Joi.number().required(),
        projectId: Joi.number().allow(null),
        project: Joi.object({
            baseTitleTemp: Joi.string().allow(null, ""),
            seasonId: Joi.string().allow(null, ""),
            referenceYear: Joi.number().allow(null),
            formatId: Joi.number().allow(null),
            format: Joi.object({
                origin: Joi.number(),
                name: Joi.string().allow(null, ""),
                description: Joi.string().allow(null, ""),
                parentThesaurusId: Joi.number().allow(null),
                hierarchy: Joi.array().items(Joi.number()).allow(null),
                integrationId: Joi.string().allow(null, ""),
                children: Joi.array().items().allow(null,""),
                remissives: Joi.array().items().allow(null,""),
                isRemissive: Joi.bool(),
                allIds: Joi.array().items(Joi.number()).allow(null),
                id: Joi.number(),
                statusEntity: Joi.number().allow(null),
            }),
            chaptersOrEpisodes: Joi.number().allow(null),
            seasonNumber: Joi.number().allow(null),
            origins: Joi.array().items(Joi.object({
                projectId: Joi.number(),
                origin: Joi.number(),
            })),
            creators: Joi.array().items(Joi.object({
                id: Joi.number(),
                projectId: Joi.number().allow(null),
                prospectId: Joi.number().allow(null),
                prospect: {
                    name: Joi.string().allow(null, ""),
                    contacts: Joi.array().items(Joi.object({
                        value: Joi.string().allow(null, ""),
                        id: Joi.number(),
                        statusEntity: Joi.number().allow(null)
                    })),
                    id: Joi.number(),
                    statusEntity: Joi.number().allow(null)
                },
                starId: Joi.number().allow(null)
            })),
            productionCompanies: Joi.array().items(Joi.object({
                id: Joi.number(),
                projectId: Joi.number().allow(null),
                productionCompanyId: Joi.number().allow(null),
                productionCompany: {
                    name: Joi.string().allow(null, ""),
                    contacts: Joi.array().items(Joi.object({
                        value: Joi.string().allow(null, ""),
                        id: Joi.number(),
                        statusEntity: Joi.number().allow(null)
                    })),
                    id: Joi.number(),
                    statusEntity: Joi.number().allow(null)
                }
            })),
            histories: Joi.array().items(Joi.object({
                id: Joi.string().allow(null),
                title: Joi.string().allow(null, ""),
                date: Joi.date().allow(null, ""),
                userId: Joi.number().allow(null),
                user: Joi.object({
                    integrationId: Joi.string().allow(null, ""),
                    email: Joi.string().allow(null, ""),
                    name: Joi.string().allow(null, ""),
                    isDefaultIntegration: Joi.bool(),
                    isDefaultJob: Joi.bool(),
                    id: Joi.number(),
                    statusEntity: Joi.number().allow(null)
                })
            })),
            productId: Joi.string().allow(null, ""),
            product: Joi.object({
                id: Joi.string().allow(null, ""),
                title: Joi.string().allow(null, "") 
            }),
            receivedAt: Joi.date().allow(null, ""),
            title: Joi.string().allow(null, ""),
            complementaries: Joi.array().items(Joi.object({
                contentId: Joi.number(),
                content: Joi.object({
                    receivedAt: Joi.date().allow(null, ""),
                    title: Joi.string().allow(null, ""),
                    complementaries: Joi.array().items(Joi.string()).allow(null, ""),
                    attachments: Joi.array().items(Joi.string()).allow(null, ""),
                    associations: Joi.array().items(Joi.string()).allow(null, ""),
                    contentType: Joi.number().allow(null),
                    status: Joi.number().allow(null),
                    id: Joi.number().allow(null),
                    statusEntity: Joi.number().allow(null),
                }),
                thesaurusId: Joi.number().allow(null),
                thesaurus: Joi.object({
                    origin: Joi.number(),
                    name: Joi.string().allow(null, ""),
                    description: Joi.string().allow(null, ""),
                    parentThesaurusId: Joi.number().allow(null),
                    hierarchy: Joi.array().items(Joi.number()).allow(null),
                    integrationId: Joi.string().allow(null, ""),
                    children: Joi.array().items().allow(null,""),
                    remissives: Joi.array().items().allow(null,""),
                    isRemissive: Joi.bool(),
                    allIds: Joi.array().items(Joi.number()).allow(null),
                    id: Joi.number(),
                    statusEntity: Joi.number().allow(null)
                    })
            })),
            attachments: Joi.array().items(Joi.object({
                fileId: Joi.string().allow(null, ""),
                contentId: Joi.number().allow(null),
                content: Joi.object({
                    receivedAt: Joi.date().allow(null, ""),
                    title: Joi.string().allow(null, ""),
                    complementaries: Joi.array().items(Joi.string()).allow(null, ""),
                    attachments: Joi.array().items(Joi.string()).allow(null, ""),
                    associations: Joi.array().items(Joi.string()).allow(null, ""),
                    contentType: Joi.number().allow(null),
                    status: Joi.number().allow(null),
                    id: Joi.number().allow(null),
                    statusEntity: Joi.number().allow(null),
                }),
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
                fileName: Joi.string().allow(null, ""),
                attachmentTypeId: Joi.number().allow(null),
                attachmentType: Joi.object({
                    origin: Joi.number(),
                    name: Joi.string().allow(null, ""),
                    description: Joi.string().allow(null, ""),
                    parentThesaurusId: Joi.number().allow(null),
                    hierarchy: Joi.array().items(Joi.number()).allow(null),
                    integrationId: Joi.string().allow(null, ""),
                    children: Joi.array().items().allow(null,""),
                    remissives: Joi.array().items().allow(null,""),
                    isRemissive: Joi.bool(),
                    allIds: Joi.array().items(Joi.number()).allow(null),
                    id: Joi.number(),
                    statusEntity: Joi.number().allow(null)
                }),
                chapterNumber: Joi.number().allow(null),
                activities: Joi.array().items(Joi.object({
                    id: Joi.number(),
                    activityId: Joi.number().allow(null),
                    activity: Joi.object({
                        contentId: Joi.number().allow(null),
                        content: Joi.object({
                            receivedAt: Joi.date().allow(null, ""),
                            title: Joi.string().allow(null, ""),
                            complementaries: Joi.array().items(Joi.string()).allow(null, ""),
                            attachments: Joi.array().items(Joi.string()).allow(null, ""),
                            associations: Joi.array().items(Joi.string()).allow(null, ""),
                            contentType: Joi.number().allow(null),
                            status: Joi.number().allow(null),
                            id: Joi.number().allow(null),
                            statusEntity: Joi.number().allow(null)
                        }),
                        status: Joi.number().allow(null),
                        type: Joi.number().allow(null),
                        userId: Joi.number().allow(null),
                        user: Joi.object({
                            integrationId: Joi.string().allow(null, ""),
                            email: Joi.string().allow(null, ""),
                            name: Joi.string().allow(null, ""),
                            isDefaultIntegration: Joi.bool(),
                            isDefaultJob: Joi.bool(),
                            id: Joi.number().allow(null),
                            statusEntity: Joi.number().allow(null)
                        }),
                        receivedAt: Joi.date().allow(null, ""),
                        order: Joi.number().allow(null),
                        group: Joi.number().allow(null),
                        attachments: Joi.array().items(Joi.string()).allow(null, ""),
                        description: Joi.string().allow(null, ""),
                        evaluation: Joi.object({
                            activityId: Joi.number().allow(null),
                            title: Joi.string().allow(null, ""),
                            createdAt: Joi.date().allow(null, ""),
                            updatedAt: Joi.date().allow(null, ""),
                            evaluationDate: Joi.date().allow(null, ""),
                            fixedEvaluationDate: Joi.bool(),
                            freeTexts: Joi.array().items(Joi.object({
                                evaluationId: Joi.number().allow(null),
                                order: Joi.number().allow(null),
                                title: Joi.string().allow(null, ""),
                                text: Joi.string().allow(null, ""),
                                id: Joi.number().allow(null),
                                statusEntity: Joi.number().allow(null)
                            })),
                            id: Joi.number(),
                            statusEntity: Joi.number().allow(null)
                        }),
                        feedback: Joi.object({
                            activityId: Joi.number().allow(null),
                            date: Joi.date().allow(null, ""),
                            form: Joi.number().allow(null),
                            feedbacker: Joi.string().allow(null, ""),
                            applicable: Joi.bool(),
                            text: Joi.string().allow(null, ""),
                            id: Joi.number().allow(null),
                            statusEntity: Joi.number().allow(null),
                        }),
                        statusHistories: Joi.array().items(Joi.object({
                            id: Joi.number().allow(null),
                            activityId: Joi.number().allow(null),
                            status: Joi.number().allow(null),
                            date: Joi.date().allow(null, "")
                        })),
                        doneDateTime: Joi.date().allow(null, ""),
                        id: Joi.number().allow(null),
                        statusEntity: Joi.number().allow(null)
                    }),
                    attachmentId: Joi.number().allow(null)
                })),
                id: Joi.number().allow(null),
                statusEntity: Joi.number().allow(null)
            })),
            associations: Joi.array().items(Joi.object({
                contentId: Joi.number().allow(null),
                content: Joi.object({
                    receivedAt: Joi.date().allow(null, ""),
                    title: Joi.string().allow(null, ""),
                    complementaries: Joi.array().items(Joi.string()).allow(null, ""),
                    attachments: Joi.array().items(Joi.string()).allow(null, ""),
                    associations: Joi.array().items(Joi.string()).allow(null, ""),
                    contentType: Joi.number().allow(null),
                    status: Joi.number().allow(null),
                    id: Joi.number().allow(null),
                    statusEntity: Joi.number().allow(null)
                }),
                contentAssociatedId: Joi.number().allow(null),
                contentAssociated: Joi.object({
                    receivedAt: Joi.date().allow(null, ""),
                    title: Joi.string().allow(null, ""),
                    complementaries: Joi.array().items(Joi.string()).allow(null, ""),
                    attachments: Joi.array().items(Joi.string()).allow(null, ""),
                    associations: Joi.array().items(Joi.string()).allow(null, ""),
                    contentType: Joi.number().allow(null),
                    status: Joi.number().allow(null),
                    id: Joi.number().allow(null),
                    statusEntity: Joi.number().allow(null)
                }),
                typeAssociationId: Joi.number().allow(null),
                typeAssociation: Joi.object({
                    origin: Joi.number(),
                    name: Joi.string().allow(null, ""),
                    description: Joi.string().allow(null, ""),
                    parentThesaurusId: Joi.number().allow(null),
                    hierarchy: Joi.array().items(Joi.number()).allow(null),
                    integrationId: Joi.string().allow(null, ""),
                    children: Joi.array().items().allow(null,""),
                    remissives: Joi.array().items().allow(null,""),
                    isRemissive: Joi.bool(),
                    allIds: Joi.array().items(Joi.number()).allow(null),
                    id: Joi.number(),
                    statusEntity: Joi.number().allow(null)
                })
            })),
            contentType: Joi.number().allow(null),
            status: Joi.number().allow(null),
            id: Joi.number().allow(null),
            statusEntity: Joi.number().allow(null)
        }),
        recommendationType: Joi.number().allow(null),
        justification: Joi.string().allow(null, ""),
        userId: Joi.number().allow(null),
        user: Joi.object({
            integrationId: Joi.string().allow(null, ""),
            email: Joi.string().allow(null, ""),
            name: Joi.string().allow(null, ""),
            isDefaultIntegration: Joi.bool(),
            isDefaultJob: Joi.bool(),
            id: Joi.number().allow(null),
            statusEntity: Joi.number().allow(null)
        }),
        recommendationDate: Joi.date().allow(null, "")
    })
});

const bodyPost = {
    productId: "",
    associations: {
    projects: [],
    researchesIds: []
  },
    attachments: [],
    receivedAt: "2021-04-28T17:13:01.739Z",
    creators: [
    {
      creatorId:118449 ,
      origin: 2
    }
  ],
    chaptersOrEpisodes: "",
    formatId: 1217,
    origins: [
    1
  ],
    channel: [
    {
      id: 2305,
      descriptions: [
        ""
      ]
    },
    {
      id: 2319,
      descriptions: [
        ""
      ]
    },
    {
      id: 2320,
      descriptions: [
        ""
      ]
    }
  ],
    productionCompanies: [145],
    soapOperaSchedule: 1,
    programFrequency: 1,
    seasonNumber: 1,
    keepNameHistory: true,
    title: "Novo Teste"
}

const bodyPut = {
    id: 6232,
    genresIds: [],
    subGenresIds: [],
    spacesIds: [],
    contentOrigns: [
        {
            id: 1,
            descriptions: [""]
        }
    ],
    narratives: [],
    periods: [],
    storyLine: "",
    epochIds: [],
    plot: {
        primariesIds: [],
        secundariesIds: [],
        tertiaryIds: []
    },
    thematic: {
        primariesIds: [],
        secundariesIds: [],
        tertiaryIds: []
    },
    universe: {
        primariesIds: [],
        secundariesIds: [],
        tertiaryIds: []
    },
    receivedAt: "2021-04-28T12:54:26.108Z",
    creators: [
        {
            creatorId: 118449,
            origin: "star"
        }
    ],
    chaptersOrEpisodes: 0,
    formatId: 1217,
    origins: [1],
    channel: [
        {
            id: 2305,
            descriptions: [""]
        },
        {
            id: 2319,
            descriptions: [""]
        },
        {
            id: 2320,
            descriptions: [""]
        }
    ],
    productionCompanies: [145],
    soapOperaSchedule: 1,
    programFrequency: 1,
    seasonNumber: 1,
    keepNameHistory: true,
    title: "Teste novo atualizacao"
}

const bodyPostRecomendations = (id) => {return {
    id: id,
    recommendationType: 2,
    userId: 413,
    projectId: 0,
    justification: "TESTE API",
    recommendationDate: "2021-04-28T13:23:15.744Z"
}}

const bodyPutRecomendations = {
    id: 6232,
    recommendationType: 1,
    userId: 586,
    projectId: 0,
    justification: "Atualizando recomendations teste",
    recommendationDate: "2021-04-28T13:48:48.115Z"
}

module.exports = {
    dramaturgyId,
    dramaturgies,
    soapSchedules,
    actAttachments,
    products,
    phases,
    filter,
    threasure,
    hierachies,
    postDramaturgies,
    postRecomendations,
    bodyPost,
    bodyPut,
    bodyPostRecomendations,
    bodyPutRecomendations,
}