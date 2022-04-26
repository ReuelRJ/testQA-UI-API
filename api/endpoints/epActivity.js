const schema = require("../schemas/activity.schema")
const commons = require("../commons")
const endPointsActivity = [
  {
    number: 01,
    name: "/Activities",
    path: "activities",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema:  schema.activities
  },
  {
    number: 02,
    name: "/Activities/{id}",
    path: "activities/",
    method: "get",
    parameters: "720",
    sendSchema: "",
    assertSchema: schema.activityId
  },
  {
    number: 03,
    name: "/Activities/{id}",
    path: "activities/",
    method: "delete",
    parameters: "720",
    sendSchema: "",
    assertSchema: ""
  },
  {
    number: 04,
    name: "/Activities/order",
    path: "activities/order",
    method: "put",
    parameters: "",
    sendSchema: schema.activityPUT,
    assertSchema: ""
  },
  {
    number: 05,
    name: "/Activities/types",
    path: "activities/types",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.activityTypesGroupsStatus
  },
  {
    number: 06,
    name: "/Activities/groups",
    path: "activities/groups",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.activityTypesGroupsStatus
  },
  {
    number: 07,
    name: "/Activities/status",
    path: "activities/status",
    method: "get",
    parameters: "",
    sendSchema: "",
    assertSchema: schema.activityTypesGroupsStatus
  },
  {
    number: 08,
    name: "/Activities/filters",
    path: "activities/filters",
    method: "get",
    parameters: "?Groups=1&Status=1&Types=3",
    sendSchema: "",
    assertSchema: schema.activityFilters
  }
];


module.exports = { endPointsActivity };
