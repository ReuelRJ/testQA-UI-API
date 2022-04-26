var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epActivitiesEvaluationsData");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const status = require("../httpStatusCodes")
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const getEndpoints = endpoints.endPointActivitiesEvaluationsData.filter((e) => e.method === "get");
let tok = "";

describe("Testando APIs de ActivitiesEvaluationsData",  () => {
  before((done) => {
    tests.getToken().then(token => {
      tok = token;
      done();
    });
  });

  describe("Realizando Health Tests - Casa 200", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 200", async () => {
        const res = await tests.testGET(url, val.path, tok);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.OK);
      });
    }
  });
  describe("Realizando Testes de Unauthorized Error - 401", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(url, val.path);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }
  });
  describe("Realizando testes de Contrato", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - Contrato", async () => {
        const res = await tests.testGET(url, val.path, tok);
        Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { abortEarly: false });
      });
    }
  });
});
