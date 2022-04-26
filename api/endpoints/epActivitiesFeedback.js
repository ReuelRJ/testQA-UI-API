const schema = require("../schemas/activitiesFeedback.schema");
const commons = require("../commons");
const dafaultPath = "activities/"
const endActivitiesFeedback = [
  {
    number: 01,
    name: "/Activities/feedback/count",
    path: dafaultPath+"feedback/count",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.feedbackCount,
  },
  {
    number: 02,
    name: "/Activities/feedback/count/{id}",
    path: dafaultPath+"feedback/",
    method: "get",
    parameters: "37",
    sendSchema: "",
    assertSchema: schema.feedbackId,
  },
  {
    number: 03,
    name: "/Activities/feedback/count/form",
    path: dafaultPath+"feedback/form",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.feedbackForm,
  },
  {
    number: 04,
    name: "/Activities/feedback",
    path: dafaultPath+"feedback",
    method: "post",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.feedbackPost,
  },
  {
    number: 05,
    name: "/Activities/feedback",
    path: dafaultPath+"feedback",
    method: "put",
    parameters: "",
    sendSchema: schema.bodyPut,
    assertSchema: "",
  }
];

module.exports = {endActivitiesFeedback}