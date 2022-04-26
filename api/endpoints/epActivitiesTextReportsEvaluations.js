const schema = require("../schemas/activitiesTextReportsEvaluations.schema");

const endPointTextReportsEvaluations = [
    {
        number: 01,
        name: "/Activities/evaluations/textreports/{id}",
        path: "activities/evaluations/textreports/",
        method: "get",
        parameters: "1208",
        sendSchema: "",
        assertSchema: schema.textReportsEvaluationsId
    },
    {
        number: 02,
        name: "/Activities/evaluations/textreports/{id}",
        path: "activities/evaluations/textreports/",
        method: "put",
        parameters: "1208",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    }
]

module.exports = {endPointTextReportsEvaluations}