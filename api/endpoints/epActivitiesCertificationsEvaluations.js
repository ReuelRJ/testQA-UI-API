const schema = require("../schemas/activitiesCertificationsEvaluations.schema");
const commons = require("../commons");

const endPointActivitiesCertificationsEvaluations = [
  {
    number: 01,
    name: "/Activities/evaluations/certifications/{id}",
    path: "activities/evaluations/certifications/",
    method: "get",
    parameters: "691",
    sendSchema: "",
    assertSchema: schema.activitiesCertificationsEvaluations,
  },
  {
    number: 02,
    name: "/Activities/evaluations/certifications/{id}",
    path: "activities/evaluations/certifications/",
    method: "put",
    parameters: "691",
    sendSchema: schema.bodyActivitiesCertificationsEvaluations,
    assertSchema: "",
  }
];

module.exports = { endPointActivitiesCertificationsEvaluations }