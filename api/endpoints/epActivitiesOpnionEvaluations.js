const schema = require("../schemas/activitiesOpnionEvaluations.schema");

const endPointActivitiesOpnionEvaluations = [
    {
        number: 01,
        name: "/activities/evaluations/opnions/{id}",
        path: "activities/evaluations/opnions/",
        method: "get",
        parameters: "128",
        sendSchema: "",
        assertSchema: schema.activitiesOpnionEvaluations,
    },
    {
        number: 01,
        name: "/activities/evaluations/opnions/{id}",
        path: "activities/evaluations/opnions/",
        method: "put",
        parameters: "128",
        sendSchema: schema.bodyPut,
        assertSchema: "",
    }

]

module.exports = {endPointActivitiesOpnionEvaluations}