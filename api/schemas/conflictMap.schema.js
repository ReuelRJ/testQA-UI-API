const Joi = require("joi");
const commons = require("../commons");

const conflictMap = commons.validations.append({
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
            additionalProp3: Joi.number().allow(null),
        })
    }),
    data: Joi.array().items(Joi.object({
        mapId: Joi.string(),
        termId: Joi.string().allow(null, ""),
        term: Joi.string().allow(null, ""),
        relevances: Joi.array().items(Joi.string().allow(null, "")),
        conflictingItems: Joi.array().items(Joi.object({
            itemId: Joi.string().allow(null, ""),
            relevance: Joi.string().allow(null, ""),
            productId: Joi.string().allow(null, ""),
            seasonId: Joi.string().allow(null, ""),
            productTitle: Joi.string().allow(null, ""),
            seasonTitle: Joi.string().allow(null, ""),
            format: Joi.string().allow(null, ""),
            seasonNumber: Joi.number().allow(null),
            soapOperaSchedule: Joi.string().allow(null, ""),
            seasonBeginDate: Joi.date(),
            seasonEndDate: Joi.date(),
            conflictedSeasons: Joi.array().items(Joi.object({
                productTitle: Joi.string().allow(null, ""),
                seasonTitle: Joi.string().allow(null, ""),
                daysOfConflict: Joi.number(),
                conflictRelevance: Joi.string().allow(null, ""),
                conflictMoment: Joi.string().allow(null, "")
            })),
            characterId: Joi.string(),
            characterIdentifications: Joi.array().items(Joi.object({
                name: Joi.string(),
                lastName: Joi.string().allow(null, ""),
                nickName: Joi.string().allow(null, "")
            })),
            characterStatus: Joi.string().allow(null, ""),
            characterDescription: Joi.string().allow(null, ""),
            characterActivities: Joi.array().items(Joi.string()).allow(null, ""),
            thesaurusName: Joi.string().allow(null, "")
        }))
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

const conflictMapTypes = commons.validations.append({
    data: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        value: Joi.string().allow(null, "")
    }))
})

module.exports = {
    conflictMap,
    conflictMapTypes
}