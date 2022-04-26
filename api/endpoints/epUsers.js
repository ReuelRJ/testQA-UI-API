const schema = require("../schemas/users.schema");

const endPointUsers = [
  {
    number: 01,
    name: "/Users",
    path: "users",
    method: "get",
    parameters: "?ActivityGroups=3",
    sendSchema: "",
    assertSchema: schema.users
  },
  {
    number: 02,
    name: "/Users/Me",
    path: "users/me",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.userMe
  }
]

module.exports = {
    endPointUsers
}