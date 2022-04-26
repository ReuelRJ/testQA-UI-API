const schema = require("../schemas/textRelease.schema");

const endPointTextRelease = [
    {
        number: 01,
        name: "/TextRelease",
        path: "textRelease/",
        method: "get",
        parameters: "?Origins=1",
        sendSchema: "",
        assertSchema: schema.textReleaseGet
    },
    {
        number: 02,
        name: "/TextRelease/Groups",
        path: "textRelease/groups",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.textReleaseGroups
    }
]

module.exports = { endPointTextRelease }