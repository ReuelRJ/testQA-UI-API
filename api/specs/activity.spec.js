var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epActivity");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const status = require("../httpStatusCodes")
const getEndpoints = endpoints.endPointsActivity.filter((e) => e.method === "get");
const putEndpoints = endpoints.endPointsActivity.filter((e) => e.method === "put");
const deleteEndpoints = endpoints.endPointsActivity.filter((e) => e.method === "delete");
let tok = "";

describe("Testando APIs de Activities ", () => {
  before((done) => {
    tests.getToken().then(token => {
      tok = token;
      done();
    });
  });

  describe("Realizando Health Tests - casa de 200", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 200", async () => {
        const res = await tests.testGET(url, val.path+val.parameters, tok);
        const _this = this;
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.OK);
      });
    }
    // 
    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API: " + val.name + " - 204", async () => {
        const res = await tests.testPUT(url, val.path+val.parameters, tok, val.sendSchema);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.NO_CONTENT);
      });
    }
  });
  describe("Realizando teste unauthorized - 401", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(url, val.path+val.parameters);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }
// 
    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API: " + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(url, val.path+val.parameters);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }
  });
// 
  describe("Realizando Testes de Contrato", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API: " + val.name + " - Contrato", async () => {
        const res = await tests.testGET(url, val.path+val.parameters, tok);
        Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { abortEarly: false });
      });
    }
// 
    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API: " + val.name + " - Contrato", async () => {
        const res = await tests.testPUT(url, val.path+val.parameters, tok, val.sendSchema);
        Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { abortEarly: false });
      });
    }
  });
});