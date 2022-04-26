const schema = require("../schemas/variety.schema");

const endpointsVariety = [{
        number: 01,
        name: "/Varieties",
        path: "varieties",
        method: "get",
        parameters: "",
        assertSchema: schema.varieties
    },
    {
        number: 02,
        name: "/Varieties/{id}",
        path: "varieties",
        method: "get",
        parameters: "/3210",
        assertSchema: schema.varietiesById
    },
    {
        number: 03,
        name: "/Varieties/programfrequencies",
        path: "varieties/programfrequencies",
        method: "get",
        parameters: "",
        assertSchema: schema.programFrequencies
    },
    {
        number: 04,
        name: "/Varieties/activities/attachments",
        path: "varieties/activities/attachments",
        method: "get",
        parameters: "",
        assertSchema: schema.varietyActivitiesAttachments
    },
    {
        number: 05,
        name: "/Varieties/products",
        path: "varieties/products?term=voice",
        method: "get",
        parameters: "",
        assertSchema: schema.products
    },
    {
        number: 06,
        name: "/Varieties/{id}/phases",
        path: "varieties/3210/phases",
        method: "get",
        parameters: "",
        assertSchema: schema.phases
    },
    {
        number: 07,
        name: "/Varieties/Thesaurus",
        path: "varieties/thesaurus",
        method: "get",
        parameters: "?Origins=20",
        assertSchema: schema.varietyThesaurus
    },
    {
        number: 08,
        name: "/Varieties/Thesaurus/Hierarchies",
        path: "varieties/thesaurus/hierarchies",
        method: "get",
        parameters: "?Origins=23",
        assertSchema: schema.varietyThesaurusHierarchies
    },
    {
        number: 09,
        name: "/Varieties",
        path: "varieties",
        method: "put",
        parameters: "",
        sendSchema: schema.varietyPut,
        assertSchema: ""
    }
];

module.exports = {
    endpointsVariety
};