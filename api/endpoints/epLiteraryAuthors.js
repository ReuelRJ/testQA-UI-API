const schema = require("../schemas/literaryAuthors.schema");

const endPointLiterayAuthors = [
    {
        number: 01,
        name: "/LiteraryAuthors",
        path: "literaryAuthors",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.literaryAuthors,
    },
    {
        number: 02,
        name: "/LiteraryAuthors/{id}",
        path: "literaryAuthors/",
        method: "get",
        parameters: "1",
        sendSchema: "",
        assertSchema: schema.literaryAuthorsId
    },
    {
        number: 03,
        name: "/LiteraryAuthors",
        path: "literaryAuthors",
        method: "post",
        parameters: "",
        sendSchema: schema.bodyPost,
        assertSchema: schema.postAuthors
    },
    {
        number: 04,
        name: "/LiteraryAuthors",
        path: "literaryAuthors",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    }

]

module.exports= {endPointLiterayAuthors}