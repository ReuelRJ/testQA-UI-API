const commons = require("../commons");
const Joi = require("joi");

const pageInfo = Joi.object({
    itemsPerPage: Joi.number().allow(null),
    totalItems: Joi.number().required(),
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

const values = Joi.object({
    id: Joi.number().required(),
    origin: Joi.number().allow(null),
    name: Joi.string().allow(null, ""),
    description: Joi.string().allow(null, ""),
    remissives: Joi.array().items(Joi.string()).allow(null, ""),
    children: Joi.array().items(Joi.object({
        id: Joi.number().allow(null),
        value: Joi.string().allow(null, "")
    })),
    parentId: Joi.number().allow(null),
    parent: Joi.object({
        id: Joi.number().allow(null),
        value: Joi.string().allow(null, "")
    }).allow(null, ""),
    field: Joi.string().allow(null, "")
});

const literaryWorksAndFilter = commons.validations.append({
    pagingInfoByType: Joi.array().items(Joi.object({
        type: Joi.string().allow(null, ""),
        pagingInfo: pageInfo.allow(null, "")
    })),
    data: Joi.array().items(data).allow(null, ""),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const literaryAuthorsThesaurus = commons.validations.append({
    pagingInfo: pageInfo.allow(null, ""),
    data: Joi.array().items(values).allow(null, ""),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const literaryAuthorsHierachies = commons.validations.append({
    pagingInfo: pageInfo.allow(null, ""),
    data: Joi.array().items(Joi.object({
        parent: Joi.object({
            id: Joi.number().allow(null),
            value: Joi.string().allow(null, "")
        }),
        terms: Joi.array().items(Joi.object({
            id: Joi.number().allow(null),
            value: Joi.string().allow(null, "")
        }))
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const literaryAuthorsId = commons.validations.append({
    data: Joi.object({
        authors: Joi.array().items(Joi.object({
            id: Joi.number().required(),
            name: Joi.string().allow(null, "")
        })),
        publishers: Joi.array().items(Joi.object({
            id: Joi.number().required(),
            name: Joi.string().allow(null, "")
        })),
        suggestedBy: Joi.array().items(Joi.object({
            id: Joi.number().required(),
            name: Joi.string().allow(null, ""),
            origin: Joi.string().allow(null, ""),
            photo: Joi.string().allow(null, ""),
            role: Joi.string().allow(null, "")
        })),
        publicDomain: Joi.bool().required(),
        publicationYear: Joi.number().required(),
        receivedAt: Joi.date(),
        format: values.allow(null, ""),
        storyLine: Joi.string().allow(null, ""),
        genres: Joi.array().items(values).allow(null, ""),
        universe: Joi.array().items(values).allow(null, ""),
        id: Joi.number().required(),
        title: Joi.string().allow(null, ""),
        associations: Joi.array().items(Joi.object({
            contentId: Joi.number().required(),
            type: values.allow(null, ""),
            title: Joi.string().allow(null, ""),
            contentType: Joi.string().allow(null, ""),
            format: Joi.string().allow(),
            soapOperaSchedule: Joi.string().allow(null, ""),
            editable: Joi.bool()
        })).allow(null, ""),
        attachments: Joi.array().items(Joi.object({
            activityCount: Joi.number().required(),
            id: Joi.number().required(),
            fileId: Joi.string().allow(null, ""),
            fileName: Joi.string().allow(null, ""),
            version: Joi.number().required(),
            receivedAt: Joi.date(),
            release: Joi.number().allow(null),
            comment: Joi.string().allow(null, ""),
            attachmentType: values.allow(null, ""),
            blockNumber: Joi.number().allow(null),
            chapterNumber: Joi.number().allow(null),
        })).allow(null, "")
    })
});

const postWorks = commons.validations.append({
    data: Joi.number().required()
})

const bodyPost = {
    receivedAt: "2021-07-27T13:38:06.043Z",
    authors: [30],
    formatId: 18799,
    publishers: [7],
    suggestedBy: [
        {
            suggesterId: 530,
            origin: 1
        }
    ],
    publicDomain: false,
    publicationYear: 2010,
    storyline: "Cadastro teste de API POST",
    title: "Londe de Casa"
}

const bodyPut = {
    id: 7557,
    genresIds: [],
    universeIds: [],
    receivedAt: "2021-07-26T21:36:10.539Z",
    authors: [14, 16],
    formatId: 18796,
    publishers: [6, 14],
    suggestedBy: [
        {
            suggesterId: 118449,
            origin: 2
        }
    ],
    publicDomain: true,
    publicationYear: 0,
    storyline: "Testando com QA, Teste de API PUT. Funcionando!!!",
    title: "Testando com QA"
}

module.exports = {
    literaryWorksAndFilter,
    literaryAuthorsThesaurus,
    literaryAuthorsHierachies,
    literaryAuthorsId,
    bodyPost,
    bodyPut,
    postWorks
}