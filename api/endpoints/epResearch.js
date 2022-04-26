const schema = require("../schemas/research.schema");

const endpointsResearch = [{
        number: 01,
        name: "/Researches",
        path: "researches",
        method: "get",
        parameters: "",
        assertSchema: schema.researches
    },
    {
        number: 02,
        name: "/Researches/{id}",
        path: "researches",
        method: "get",
        parameters: "/2809",
        assertSchema: schema.researchesById
    },
    {
        number: 03,
        name: "/Researches/Data/types",
        path: "researches/data/types",
        method: "get",
        parameters: "",
        assertSchema: schema.researchTypes
    },
    {
        number: 04,
        name: "/Researches/Data/Subcategories",
        path: "researches/data/subcategories",
        method: "get",
        parameters: "",
        assertSchema: schema.researchSubcategories
    },
    {
        number: 05,
        name: "/Researches/Data/Origins",
        path: "researches/data/origins",
        method: "get",
        parameters: "",
        assertSchema: schema.researchOrigins
    },
    {
        number: 06,
        name: "/Researches/Thesaurus",
        path: "researches/thesaurus",
        method: "get",
        parameters: "?Origins=23",
        assertSchema: schema.researchThesaurus
    },
    {
        number: 07,
        name: "/Researches/Thesaurus/Hierarchies",
        path: "researches/thesaurus/hierarchies",
        method: "get",
        parameters: "?Origins=23",
        assertSchema: schema.researchThesaurusHierarchies
    },
    {
        number: 08,
        name: "/Researches",
        path: "researches",
        method: "put",
        parameters: "",
        sendSchema: schema.researchPut,
        assertSchema: ""
    }
];

module.exports = {
    endpointsResearch
};