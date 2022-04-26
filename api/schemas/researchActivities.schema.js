const Joi = require("joi");
const number = require("joi/lib/types/number");
const commons = require("../commons");

const researchActivitiesPost = commons.validations.append({
    data:  Joi.number(),
});

const bodyPost = {
    attachments: [], 
    status: 1,
    type: 1,
    group: 7,
    userId: 586,
    contentId: 2808,
    description: "Teste"
}

const bodyPut = {
    "attachments": [],
    "id": 200,
    "status": 1,
    "type": 1,
    "group": 7,
    "userId": 586,
    "contentId": 2808,
    "description": "Teste API 3"
}

module.exports = {
    bodyPost,
    bodyPut,
    researchActivitiesPost
}