var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epActivitiesCertificationsEvaluations");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const status = require("../httpStatusCodes")
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const getEndpoints = endpoints.endPointActivitiesCertificationsEvaluations.filter((e) => e.method === "get");
const putEndpoints = endpoints.endPointActivitiesCertificationsEvaluations.filter((e) => e.method === "put");
let tok = "";

describe("Testando APIs de ActivitiesCertificationsEvaluations", () => {
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
        expect(res.status).to.be.equal(status.OK);
      });
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API: " + val.name + " - 204", async () => {
        const res = await tests.testPUT(url, val.path+val.parameters, tok, val.sendSchema);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.NO_CONTENT);
      });
    }
  });
  describe("Realizando Testes de Unauthorized Error - 401", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(url, val.path+val.parameters);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API: " + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(url, val.path+val.parameters);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }

  });
  describe("Realizando testes de Contrato", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - Contrato", async () => {
        const res = await tests.testGET(url, val.path+val.parameters, tok);
        Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { abortEarly: false });
      });
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API: " + val.name + " - Contrato", async () => {
        const res = await tests.testPUT(url, val.path+val.parameters, tok, val.sendSchema);
        Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { abortEarly: false });
      });
    }
  });
});