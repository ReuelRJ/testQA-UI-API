const schema = require("../schemas/prospect.schema");

const endpointsProspect = [{
        number: 01,
        name: "/Prospects",
        path: "prospects",
        method: "get",
        parameters: "",
        assertSchema: schema.prospects
    },
    {
        number: 02,
        name: "/Prospects/{id}",
        path: "prospects",
        method: "get",
        parameters: "/807",
        assertSchema: schema.prospectById
    },
    {
        number: 03,
        name: "/Prospects",
        path: "prospects",
        method: "put",
        parameters: "",
        sendSchema: schema.prospectPUT,
        assertSchema: ""
    }
];

module.exports = {
    endpointsProspect
}