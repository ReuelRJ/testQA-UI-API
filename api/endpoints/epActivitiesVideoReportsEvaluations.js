const schema = require("../schemas/activitiesVideoReportsEvaluations.schema")

const endPointVideoReportsEvaluations = [
    {
        number: 01,
        name: "/Activities/evaluations/Videoreports/{id}",
        path: "activities/evaluations/videoreports/",
        method: "get",
        parameters: "1217",
        sendSchema: "",
        assertSchema: schema.videoReportsEvaluationsId
    },
    {
        number: 02,
        name: "/Activities/evaluations/Videoreports/{id}",
        path: "activities/evaluations/videoreports/",
        method: "put",
        parameters: "1217",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    }
]

module.exports = {endPointVideoReportsEvaluations}