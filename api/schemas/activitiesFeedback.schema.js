const Joi = require("joi");
const number = require("joi/lib/types/number");
const commons = require("../commons");

const feedbackCount = commons.validations.append({
  data: Joi.number().required(),
});

const feedbackId = commons.validations.append({
  data: Joi.object({
    id: Joi.number().required(),
    activityId: Joi.number().required(),
    date: Joi.date(),
    form: {
      id: Joi.number().required(),
      value: Joi.string().required(),
    },
    feedbacker: Joi.string().required(),
    applicable: Joi.boolean().required(),
    text: Joi.string().allow(null, ""),
  }),
});

const feedbackForm = commons.validations.append({
  data: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      value: Joi.string().required(),
    })
  ),
});

const feedbackPost = commons.validations.append({
  data: Joi.number().required()
})

const bodyPost = (id) => {return {
  activityId: id,
  date: "2021-04-28T18:36:05.586Z",
  form: 1,
  applicable: true,
  feedbacker: "Teste Automatizado de Feedback - QA",
  text: "Teste de QA"
}}

const bodyPut = {
  id: 128,
  date: "2021-04-29T13:07:20.846Z",
  form: 2,
  applicable: true,
  feedbacker: "Atualizacao Teste",
  text: "Teste"
}

module.exports = {
  feedbackCount,
  feedbackId,
  feedbackForm,
  bodyPost,
  bodyPut,
  feedbackPost
};
