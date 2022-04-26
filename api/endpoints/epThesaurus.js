const schema = require("../schemas/thesaurus.schema");

const endpointsThesaurus = [
    {
        number: 01,
        name: "/Thesaurus/{id}",
        path: "thesaurus",
        method: "get",
        parameters: "/1",
        sendSchema: "",
        assertSchema: schema.thesaurusById
    },
    {
        number: 02,
        name: "/Thesaurus/Origins",
        path: "thesaurus/origins",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.thesaurusOrigins
    },
    {
        number: 03,
        name: "/Thesaurus/{id}",
        path: "thesaurus",
        method: "put",
        parameters: "/18762",
        sendSchema: schema.thesaurusPut,
        assertSchema: ""
    },
    {
        number: 04,
        name: "/Thesaurus/Origins",
        path: "thesaurus/origins",
        method: "put",
        parameters: "",
        sendSchema: schema.thesaurusPutOrigins,
        assertSchema: ""
    },
    {
        number: 05,
        name: "/Thesaurus",
        path: "thesaurus",
        method: "post",
        parameters: "",
        sendSchema: schema.thesaurusPost,
        assertSchema: schema.thesaurusPostSchema
    },
  
];

module.exports = {
    endpointsThesaurus
}