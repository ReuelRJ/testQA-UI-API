const Joi = require("joi");
const commons = require("../commons");

const activityPUT = {
  "orderedIds": [
    720
  ]
}

// const contentPOST = [
    // {
      // "contentId": 5631,
      // "fileId": "79e672ae-0baf-494c-b4f3-cd1959039991/(2).jpg",
      // "fileName": "Teste-qa",
      // "version": 1,
      // "receivedAt": "2021-04-05T19:18:47.298Z",
      // "attachmentTypeId": 1,
      // "blockNumber": 1,
      // "chapterNumber": 1
    // }
  // ];


const activities = commons.validations.append({
  data: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      projectId: Joi.number().required(),
      status: Joi.object({
        id: Joi.number().required(),
        value: Joi.string().required(),
      }),
      type: Joi.object({
        id: Joi.number().required(),
        value: Joi.string().required(),
      }),
      group: Joi.object({
        id: Joi.number().required(),
        value: Joi.string().required(),
      }),
      user: Joi.optional(
        Joi.object({
          id: Joi.number().required(),
          value: Joi.string().required(),
          groups: Joi.array().items(Joi.number()),
        })
      ),
      feedback: Joi.optional(
        Joi.object({
          id: Joi.number().required(),
          activityId: Joi.number().required(),
          date: Joi.date(),
          form: {
            id: Joi.number().required(),
            value: Joi.string().required(),
          },
          feedbacker: Joi.string().required(),
          applicable: Joi.boolean().required(),
          text: Joi.string().required(),
        })
      ),
      order: Joi.number().required(),
      receivedAt: Joi.date(),
      contentTitle: Joi.string().required(),
      evaluationId: Joi.optional(Joi.number().required()),
      contentType: Joi.string().required(),
      statusDate: Joi.optional(Joi.date().required()),
      attachments: Joi.optional(
        Joi.array().items(
          Joi.object({
            activityCount: Joi.number().required(),
            id: Joi.number().required(),
            fileId: Joi.string().required(),
            fileName: Joi.string().required(),
            version: Joi.number().required(),
            receivedAt: Joi.string().required(),
            attachmentType: Joi.object({
              id: Joi.number().required(),
              origin: Joi.number().required(),
              name: Joi.string().required(),
              description: Joi.optional(Joi.string().required()),
              remissives: Joi.array().items(),
              children: Joi.array().items(),
              parentId: Joi.optional(Joi.number().required()),
              parent: Joi.optional(Joi.string().required()),
            }),
            blockNumber: Joi.number().required(),
            chapterNumber: Joi.number().required(),
          })
        )
      ),
      format: Joi.optional(Joi.string().required()),
      creators: Joi.array().items(Joi.optional(Joi.string())),
    })
  ),
});

const activityId = commons.validations.append({
  data: Joi.object({
    creators: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        origin: Joi.number().required(),
      })
    ),
    format: Joi.string().required(),
    subCategory: Joi.object({
      category: Joi.object({
        id: Joi.number().required(),
        value: Joi.string().required(),
      }),
      id: Joi.number().required(),
      value: Joi.string().required(),
    }),
    attachments: Joi.array().items(
      Joi.object({
        activityCount: Joi.number().required(),
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
          children: Joi.optional(
            Joi.array().items(
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
          field: Joi.string().allow(null, ""),
          remissives: Joi.optional(Joi.array().items(Joi.string().required())),
        }),
        blockNumber: Joi.optional(Joi.number().required()),
        chapterNumber: Joi.optional(Joi.number().required()),
      })
    ),
    description: Joi.optional(Joi.string().required()),
    id: Joi.number().required(),
    projectId: Joi.number().required(),
    status: Joi.object({
      id: Joi.number().required(),
      value: Joi.string().required(),
    }),
    type: {
      id: Joi.number().required(),
      value: Joi.string().required(),
    },
    group: {
      id: Joi.number().required(),
      value: Joi.string().required(),
    },
    user: Joi.optional(
      Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        groups: Joi.array().items(Joi.number()),
      })
    ),
    feedback: Joi.optional(
      Joi.object({
        id: Joi.number().required(),
        activityId: Joi.number().required(),
        date: Joi.date().required(),
        form: Joi.object({
          id: Joi.number().required(),
          value: Joi.string().required(),
        }),
        feedbacker: Joi.string().required(),
        applicable: Joi.boolean().required(),
        text: Joi.string().required(),
      })
    ),
    order: Joi.number().required(),
    receivedAt: Joi.date().required(),
    contentTitle: Joi.string().required(),
    evaluationId: Joi.optional(Joi.number().required()),
    contentType: Joi.string().required(),
    contentType: Joi.string().required(),
    subCategory: Joi.optional(Joi.object({})),
    statusDate: Joi.optional(Joi.date().required()),
  }),
});

const actitivitiesOrder = {
  orderedIds: [720],
};

const activityTypesGroupsStatus = commons.validations.append({
  data: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      value: Joi.string().required(),
    })
  ),
});

const activityFilters = commons.validations.append({
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
  }),
  data: Joi.array().items(Joi.object()).allow(null, ""),
  allowedOrderByProperties: Joi.array().items(Joi.string()).allow(null, "")
});

module.exports = {
  activities,
  actitivitiesOrder,
  activityId,
  activityTypesGroupsStatus,
  activityPUT,
  activityFilters
};
