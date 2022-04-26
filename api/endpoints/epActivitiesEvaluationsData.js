const schema = require("../schemas/activitiesEvaluationsData.schema");
const commons = require("../commons");
const endPointActivitiesEvaluationsData = [
  {
    number: 01,
    name: "/Activities",
    path: "activities/evaluations/data/conclusions/types",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.activitiesEvaluationsData,
  },
];
module.exports = { endPointActivitiesEvaluationsData }
