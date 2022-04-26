const schema = require("../schemas/projectsData.schema");

const endPointProjectsData = [
    {
        number: 01,
        name: "Projects/Data/Creators",
        path: "projects/data/creators",
        method: "get", 
        parameters: "?Term=Fabricio%20Pereira", 
        sendSchema: "", 
        assertSchema:  schema.creators
    },
    {
        number: 02,
        name: "Projects/Data/Origins",
        path: "projects/data/origins",
        method: "get", 
        parameters: "", 
        sendSchema: "", 
        assertSchema:  schema.originsAndRecommendations
    },
    {
        number: 03,
        name: "Projects/Data/Recommendations",
        path: "projects/data/recommendations",
        method: "get", 
        parameters: "", 
        sendSchema: "", 
        assertSchema:  schema.originsAndRecommendations
    }
]

module.exports = {
    endPointProjectsData
}