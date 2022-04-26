const schema = require("../schemas/dramaturgy.schema");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const url = commons.baseAPI.urlAutentication;

const endPointDramaturgy = [
    {
        number: 01,
        name: "/Dramaturgies/{id}",
        path: "dramaturgies/2821",
        method: "get",//"get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.dramaturgyId,
    },
    {
        number: 02,
        name: "/Dramaturgies",
        path: "dramaturgies",
        method: "get",//"get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.dramaturgies,
    },
    {
        number: 03,
        name: "/Dramaturgies/soapoperaschedules",
        path: "dramaturgies/soapoperaschedules",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.soapSchedules
    },
    {
        number: 04,
        name: "/Dramaturgies/activities/attachments",
        path: "dramaturgies/activities/attachments",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.actAttachments
    },
    {
        number: 05,
        name: "/Dramaturgies/products",
        path: "dramaturgies/products",
        method: "get",
        parameters: "?Term=Chacrinha%2C%20O%20Eterno%20Guerreiro",
        sendSchema: "",
        assertSchema: schema.products
    },
    {
        number: 06,
        name: "/Dramaturgies/{id}/phases",
        path: "dramaturgies/2821/phases",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.phases
    },
    {
        number: 07,
        name: "/Dramaturgies/filter",
        path: "dramaturgies/filter",
        method: "get",
        parameters: "?CharacterIdentifications=Malatesta",
        sendSchema: "",
        assertSchema: schema.filter
    },
    {
        number: 08,
        name: "/Dramaturgies/thesaurus",
        path: "dramaturgies/thesaurus",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.threasure
    },
    {
        number: 09,
        name: "/Dramaturgies/thesaurus/hierarchies",
        path: "dramaturgies/thesaurus/hierarchies",
        method: "get",
        parameters: "?Origin=1",
        sendSchema: "",
        assertSchema: schema.hierachies
    },
    {
        number: 10,
        name: "/Dramaturgies",
        path: "dramaturgies",
        method: "post", //"post",
        parameters: "",
        sendSchema: schema.bodyPost,
        assertSchema: schema.postDramaturgies
    },
    {
        number: 11,
        name: "Dramaturgies/{id}/recommendations",
        path: "dramaturgies/6232/recommendations",
        method: "post-recomendation",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.postRecomendations
    },
    {
        number: 12,
        name: "/Dramaturgies",
        path: "dramaturgies",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    },
    {
        number: 13,
        name: "/Dramaturgies/{id}/recommendations/{recommendationId}",
        path: "dramaturgies/6232/recommendations/6232",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPutRecomendations,
        assertSchema: ""
    }
]

module.exports = {
    endPointDramaturgy
}