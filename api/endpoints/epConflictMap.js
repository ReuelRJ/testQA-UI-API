const schema = require("../schemas/conflictMap.schema");

const endPointConflictMap = [
    {
        number: 01,
        name: "/ConflictMap",
        path: "conflictMap",
        method: "get",
        parameters: "?BeginDate=01%2F04%2F2020&EndDate=05%2F04%2F2020&ConflictType=1",
        sendSchema: "",
        assertSchema: schema.conflictMap
    },
    {
        number: 02,
        name: "/ConflictMap/types",
        path: "conflictMap/types",
        method: "get",
        parameters: "",
        sendSchema: "",
        assertSchema: schema.conflictMapTypes
    },
    {
        number: 03,
        name: "/ConflictMap/types",
        path: "conflictMap/term/",
        method: "",
        parameters: "testecadastro?BeginDate=01%2F04%2F2021&EndDate=04%2F05%2F2021&ConflictType=1",
        sendSchema: "",
        assertSchema: schema.conflictMapTypes        
    },
    {
        number: 04,
        name: "/ConflictMap/types",
        path: "conflictMap/term/",
        method: "",
        parameters: "cadastro/item/e75b860c-63ee-431d-ae9d-f1d4ae658885?BeginDate=01%2F04%2F2021&EndDate=05%2F04%2F2021&ConflictType=1",
        sendSchema: "",
        assertSchema: schema.conflictMapTypes   
    }
]

module.exports = {endPointConflictMap}