const Joi = require("joi");
const commons = require("../commons");
const genericProjectSchema = require("../schemas/genericProject.schema");
const { thesaurus, projectThesaurus, projectThesaurusHierarchies } = require("./thesaurus.schema");

const creators = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    origin: Joi.string(),
    photo: Joi.string(),
    role: Joi.string()
});

const productionCompanies = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    contacts: Joi.array().items(Joi.object({
        value: Joi.string()
    }))
});

const varieties = commons.validations.append({
    pagingInfoByType: Joi.array().items(Joi.object({
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
              additionalProp3: Joi.number().allow(null),
          })
      }),
    })),
    data: Joi.array().items(genericProjectSchema.collections.append({
      formatId: Joi.number().allow(null),
      authors: Joi.array().items(Joi.string()).allow(null, ""),
      publishers: Joi.array().items(Joi.string()).allow(null, ""),
      recommendationType: Joi.string().allow(null, "")
    })),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null),
});

const varietyById = Joi.object({
    //provalvemnete comum: d, v e p
    id: Joi.number().required(),
    title: Joi.string().required(),
    productId: Joi.string(),
    projectType: Joi.string(),
    baseTitle: Joi.string().allow(null, ''),
    createdBy: Joi.string().allow(null, ''),
    receivedAt: Joi.date(),
    associations: Joi.array(),
    attachments: Joi.array(),
    recommendation: ({
      id: Joi.number(),
      projectId: Joi.number(),
      recommendationType: Joi.object({
        id: Joi.number(),
        value: Joi.string().allow(null, '')
      }),
      justification: Joi.string().allow(null, ''),
      user: Joi.object({
        id: Joi.string(),
        email: Joi.string(),
        name: Joi.string(),
        groups: Joi.array().items(Joi.number()).allow(null)
      }),
      recommendationDate: Joi.date()
    }),
  
    //v e d
    seasonNumber: Joi.number(),
    creators: Joi.array().items(creators),
    histories: Joi.array().items(Joi.object({
       title: Joi.string(),
       date: Joi.date(),
       user: Joi.object({
           id: Joi.string(),
           name: Joi.string(),
           groups: Joi.array().allow(null),
           email: Joi.string()
       })
    })),
    productionCompanies: Joi.array().items(productionCompanies),
    format: thesaurus,
    origins: Joi.array().items(Joi.string()),
    channel: Joi.array().items(Joi.object({
        content: thesaurus,
        descriptions: Joi.array().items(Joi.string())
    })),
    chaptersOrEpisodes: Joi.number(),
    genres: Joi.array().items(thesaurus),
    subGenres: Joi.array().items(thesaurus),

    //v
    tags: Joi.array().items(Joi.string()),
    logLine: Joi.string().allow(null, ''),
    programFrequency: Joi.array().items(commons.schemaObjectIdValue).allow(null)
});

const varietiesById = commons.validations.append({
    data: varietyById
});


const programFrequencies = commons.validations.append({
    data: Joi.array().items(commons.schemaObjectIdValue)
});

const varietyActivitiesAttachment = Joi.object({
    activitiesNumber: Joi.number(),
    attachment: {
      activityCount: Joi.number(),
      id: Joi.number(),
      fileId: Joi.string(),
      fileName: Joi.string(),
      version: Joi.number(),
      receivedAt: Joi.date(),
      attachmentType: {
        id: Joi.number(),
        origin: Joi.number(),
        name: Joi.string().allow(null, ''),
        description: Joi.string().allow(null, ''),
        remissives: Joi.array(),
        children: Joi.array(),
        parentId: Joi.number().allow(null),
        parent: Joi.object().allow(null)
      },
      blockNumber: Joi.number(),
      chapterNumber: Joi.number()
    },
    olderVersions: Joi.array()
  });

const activitiesAttachments = Joi.object({
        attachments: Joi.array().items(varietyActivitiesAttachment),
        contentType: Joi.string(),
        lastAttachmentReceivedDate: Joi.date(),
        soapOperaSchedule: Joi.string().allow(null, ''),
        origins: Joi.array().items(Joi.string()),
        format: Joi.string(),
        creators: Joi.array().items(Joi.object({
            name: Joi.string(),
            origin: Joi.number()
        })),
        title: Joi.string(),
        id: Joi.number()
});

const varietyActivitiesAttachments = commons.validations.append({
    data: Joi.array().items(activitiesAttachments),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const product = Joi.object({
    type: Joi.string(),
    creators: [
      {
        name: Joi.string(),
        origin: Joi.number()
      }
    ],
    seasonNumbers: Joi.array().items(Joi.number()),
    receivedAt: Joi.date().allow(null),
    soapOperaSchedule: Joi.string().allow(null),
    format: Joi.string().allow(null),
    formatId: Joi.number(),
    title: Joi.string(),
    productId: Joi.string(),
    creators: Joi.array().items(Joi.object({
        name: Joi.string(),
        origin: Joi.number()
    }))
  });

const products = commons.validations.append({
    data: Joi.array().items(product),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const phase = Joi.object({
    title: Joi.string().allow(null, ''),
    phaseType: Joi.string().allow(null, ''),
    phasePeriod: [
      {
        title: Joi.string().allow(null, ''),
        beginDate: Joi.date().allow(null),
        endDate: Joi.date().allow(null),
        status: Joi.string()
      }
    ]
  });

const phases = commons.validations.append({
    data: Joi.array().items(phase),
    pagingInfo: Joi.object(),
    allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null)
});

const varietyThesaurus = projectThesaurus;

const varietyThesaurusHierarchies = projectThesaurusHierarchies;

const varietyPut = {
    "id": 3210,
    "title": "Papo de Segunda - Gnt",
    "origins": [1],
    "formatId": 487,
    "receivedAt": "2020-02-01T00:01:02"
};

module.exports = {
    varieties,
    varietiesById,
    programFrequencies,
    varietyActivitiesAttachments,
    products,
    phases,
    varietyThesaurus,
    varietyThesaurusHierarchies,
    varietyPut
};