const schema = require("../schemas/publisherCompanies.schema");

const endPointPublisherCompanies = [
    {
        number: 01,
        name: "/PublisherCompanies",
        path: "publisherCompanies",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.publisherCompanies,
    },
    {
        number: 02,
        name: "/PublisherCompanies/{id}",
        path: "publisherCompanies/",
        method: "get",
        parameters: "1",
        sendSchema: "",
        assertSchema: schema.publisherCompaniesId
    },
    {
        number: 03,
        name: "/PublisherCompanies",
        path: "publisherCompanies",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    }
]

module.exports = {endPointPublisherCompanies}