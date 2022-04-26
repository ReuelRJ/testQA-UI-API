const schema = require("../schemas/dramaturgyCharacters.schema");

const endPointDramaturgyCharacters = [
    {
        number: 01,
        name: "dramaturgies/characters/{id}",
        path: "dramaturgies/characters/",
        method: "get",
        parameters: "40736",
        sendSchema: "",
        assertSchema:  schema.charactersId
    },
    {
        number: 02,
        name: "dramaturgies/{dramaturgyId}/characters",
        path: "dramaturgies/2821/characters",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema:  schema.charactersId
    },
    {
        number: 03,
        name: "/dramaturgies/characters/relevances",
        path: "dramaturgies/characters/relevances",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.relevances
    },
    {
        number: 04,
        name: "dramaturgies/characters/{id}/active/{active} - TRUE",
        path: "dramaturgies/characters/40736/active/true",
        method: "patch",
        parameters: "",
        sendSchema: "",
        assertSchema: ""
    },
    {
        number: 05,
        name: "dramaturgies/characters/{id}/active/{active} - FALSE",
        path: "dramaturgies/characters/40736/active/false",
        method: "patch",
        parameters: "",
        sendSchema: "",
        assertSchema: ""
    },
    {
        number: 06,
        name: "dramaturgies/characters",
        path: "dramaturgies/characters",
        method: "post",
        parameters: "",
        sendSchema: schema.bodyPost,
        assertSchema: schema.characterPostid
    },
    {
        number: 07,
        name: "dramaturgies/characters",
        path: "dramaturgies/characters",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    }

]

module.exports = {
    endPointDramaturgyCharacters
}