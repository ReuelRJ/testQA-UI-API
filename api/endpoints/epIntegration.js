const schema = require("../schemas/Integrations.schema")
const commons = require("../commons")
const endPointIntegrations = [
    {
        number: 01,
        name: "/Integrations/stars",
        path: "integrations/stars",
        method: "get",
        parameters: "?Term=1&Limit=1&PageNumber=1&OrderBy.CleanColumn=1&OrderBy.Column=1&OrderBy.Direction=0",
        sendSchema: "",
        assertSchema:  schema.IntegrationsSchema
      },
]

module.exports = { endPointIntegrations }