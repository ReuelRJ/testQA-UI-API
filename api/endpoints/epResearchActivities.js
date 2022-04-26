const schema = require("../schemas/researchActivities.schema");
const commons = require("../commons");

const endPointResearchActivities = [
    {
        number: 01,
        name: "researches/activities",
        path: "researches/activities",
        method: "post", 
        parameters: "", 
        sendSchema: schema.bodyPost, 
        assertSchema:  schema.researchActivitiesPost
    },
    {
        number: 02,
        name: "researches/activities",
        path: "researches/activities",
        method: "put", 
        parameters: "", 
        sendSchema: schema.bodyPut, 
        assertSchema:  ""
    }
]

module.exports = {
    endPointResearchActivities
}