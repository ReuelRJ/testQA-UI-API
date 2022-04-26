const Joi = require("joi");
const commons = require("../commons");

const activitiesEvaluationsData = commons.validations.append({
  data: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      value: Joi.string().required(),
    })
  ),
});


module.exports = {
    activitiesEvaluationsData
}