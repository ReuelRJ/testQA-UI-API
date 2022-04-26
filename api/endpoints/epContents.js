const { path } = require("chromedriver");
const number = require("joi/lib/types/number");
const schema = require("../schemas/contents.schema");
const commons = require("../commons")


const endPointContents = [
    {
        number: 01,
        name: "/Contents",
        path: "contents",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema:  schema.contets
    },
    {
        number: 02,
        name: "/Contents/filter",
        path: "contents/filter",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.contets
    },
    {
        number: 03,
        name: "/Contents/{contentId}/attachments",
        path: "contents/2808/attachments",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.contets
    },
    {
        number: 04,
        name: "/Contents/attachments/presignedurl/upload",
        path: "contents/attachments/presignedurl/upload",
        method: "get",
        parameters: "?fileName=4%20Elemento&contentType=Dramaturgia",
        sendSchema: "",
        assertSchema: schema.atUplodad
    },
    {
        number: 05,
        name: "/Contents/attachments/presignedurl/download",
        path: "contents/attachments/presignedurl/download",
        method: "get",
        parameters: "?fileId=d8d1caf8-577e-45c8-8c70-7e493f99c348%2F4%20Elemento",
        sendSchema: "",
        assertSchema: schema.atDownload
    },
    {
        number: 06,
        name: "/Contents/{contentId}/associations",
        path: "contents/2808/associations",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.associations
    },
    {
        number: 07,
        name: "/Contents/attachments",
        path: "contents/attachments",
        method: "post",
        parameters: "",
        sendSchema: schema.bodyPost,
        assertSchema: schema.attachments
    },
    {
        number: 08,
        name: "/Contents/attachments",
        path: "contents/attachments",
        method: "put",
        parameters: "",
        sendSchema: schema.bodyPut,
        assertSchema: ""
    },
    {
        number: 09,
        name: "/Contents/attachments",
        path: "contents/attachments/",
        method: "delete",
        parameters: "6007",
        sendSchema: "",
        assertSchema: ""
    },
    {
        number: 10,
        name: "/Contents/associations",
        path: "contents/associations",
        method: "patch",
        parameters: "",
        sendSchema: schema.bodyPatch,
        assertSchema: ""
    }
]

module.exports = {
    endPointContents
}