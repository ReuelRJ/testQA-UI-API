const schema = require("../schemas/projectsActivities.schema");

const endPointProjectsActivities = [
    {
        number: 01,
        name: "{projectId}/activities/attachments",
        path: "projects/5631/activities/attachments",
        method: "get", 
        parameters: "", 
        sendSchema: "", 
        assertSchema:  schema.attachments
    },
    {
        number: 02,
        name: "{projectId}/activities",
        path: "projects/5631/activities",
        method: "get", 
        parameters: "?Types=2&Status=6", 
        sendSchema: "", 
        assertSchema:  schema.activities
    },
    {
        number: 03,
        name: "projects/activities/attachments",
        path: "projects/activities/attachments",
        method: "get", 
        parameters: "?Origins=2", 
        sendSchema: "", 
        assertSchema:  schema.attachmentsOrigin
    },
    {
        number: 04,
        name: "projects/activities",
        path: "projects/activities",
        method: "post", 
        parameters: "", 
        sendSchema: schema.bodyPost, 
        assertSchema: schema.postActivities
    },
    {
        number: 05,
        name: "projects/activities",
        path: "projects/activities",
        method: "put", 
        parameters: "", 
        sendSchema: schema.bodyPut, 
        assertSchema:  ""
    }
]

module.exports = {
    endPointProjectsActivities
}