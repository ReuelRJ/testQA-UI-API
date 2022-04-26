const schema = require("../schemas/productionCompany.schema");

const endpointsProductionCompany = [{
    number: 01,
    name: "/ProductionCompanies",
    path: "productioncompanies",
    method: "get",
    parameters: "",
    assertSchema: schema.productionCompanies
},
{
    number: 02,
    name: "/ProductionCompanies/{id}",
    path: "productioncompanies",
    method: "get",
    parameters: "/207",
    assertSchema: schema.productionCompanyById
},
{
    number: 03,
    name: "/ProductionCompanies",
    path: "productioncompanies",
    method: "put",
    parameters: "",
    sendSchema: schema.productionCompanyPUT,
    assertSchema: ""
}];

module.exports = {
    endpointsProductionCompany
}

