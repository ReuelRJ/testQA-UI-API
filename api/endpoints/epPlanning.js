const schema = require("../schemas/planning.schema");

const endPointPlanning = [
    {
        number: 01,
        name: "/Planning/DramaturgyLong",
        path: "planning/dramaturgyLong",
        method: "get",
        parameters: "?Id=4334&Origins=1&Limit=70&PageNumber=1",
        sendSchema: "",
        assertSchema: schema.dramaturgyLong,
    },
    {
        number: 01,
        name: "/Planning/DramaturgyShort",
        path: "planning/dramaturgyShort",
        method: "get",
        parameters: "?Id=7736&Origins=1&Limit=15&PageNumber=1",
        sendSchema: "",
        assertSchema: schema.dramaturgyShort,
    }
]

module.exports = {endPointPlanning}