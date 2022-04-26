const schema = require("../schemas/literaryWorks.schema");

const endPointLiterayWorks = [
    {
        number: 01,
        name: "/LiteraryWorks/ID",
        path: "literaryWorks/",
        method: "get",
        parameters: "7551",
        sendSchema: "",
        assertSchema: schema.literaryAuthorsId
    },
    {
        number: 02,
        name: "/LiteraryWorks",
        path: "literaryWorks",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.literaryWorksAndFilter
    },
    {
        number: 03,
        name: "/LiteraryWorks/FILTER",
        path: "literaryWorks/filter",
        method: "get",
        parameters: "?Title=Testando%20com%20QA&Origins=2",
        sendSchema: "",
        assertSchema: schema.literaryWorksAndFilter
    },
    {
        number: 04,
        name: "/LiteraryWorks/THESAUSUS",
        path: "literaryWorks/thesaurus",
        method: "get",
        parameters: "?Term=Testando%20com%20QA&Origins=2&Origins=3",
        sendSchema: "",
        assertSchema: schema.literaryAuthorsThesaurus
    },
    {
        number: 05,
        name: "/LiteraryWorks/HIERARCHIES",
        path: "literaryWorks/thesaurus/hierarchies",
        method: "get",
        parameters: "?Origin=1",
        sendSchema: "",
        assertSchema: schema.literaryAuthorsHierachies
    },
    {
        number: 06,
        name: "/LiteraryWorks",
        path: "literaryWorks",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    },
    {
        number: 07,
        name: "/LiteraryWorks",
        path: "literaryWorks",
        method: "post",
        parameters: "",
        sendSchema: schema.bodyPost,
        assertSchema: schema.postWorks
    }
]

module.exports = {
    endPointLiterayWorks
}

