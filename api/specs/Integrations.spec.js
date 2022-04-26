var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
const endpoints = require("../endpoints/epIntegration");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const HTTPStatusCodes = require("../httpStatusCodes");
const url = commons.baseAPI.urlAutentication;
const getEndpoints = endpoints.endPointIntegrations.filter((e) => e.method == "get");
let tok = "";

describe("Testando APIs de Integrations", () => {
  before((done) => {
    tests.getToken().then(token => {
      tok = token;
      done();
    });
  });
  describe("Realizando Health Tests - Casa 200", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 200", async () => {
        const res = await tests.testGET(url, val.path+val.parameters, tok);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(HTTPStatusCodes.OK);
      });
    }
  });
  describe("Realizando Testes de Unauthorized Error - 401", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(url, val.path+val.parameters);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
      });
    }
  });
  describe("Realizando testes de Contrato", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - Contrato", async () => {
        const res = await tests.testGET(url, val.path+val.parameters, tok);
        Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, {
           abortEarly: false 
        });
      });
    }
  });
});