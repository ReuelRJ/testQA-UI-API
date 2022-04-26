var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epPublisherCompanies");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const url = "http://nlb-matrix-fargate-dev-6aa59c165225e50d.elb.us-east-1.amazonaws.com:5001/api/v1/"
const options = commons.options;
const HTTPStatusCodes = require("../httpStatusCodes");
const getEndpoints = endpoints.endPointPublisherCompanies.filter(
    (e) => e.method === "get"
);
const putEndpoints = endpoints.endPointPublisherCompanies.filter(
    (e) => e.method === "put"
);
let tok = "";

describe("Testando APIs de Publisher Companies", () => {
    before((done) => {
      tests.getToken().then(token => {
        tok = token;
        done();
      });
    });
    describe("Realizando Health Tests - 200", () => {
        for (let val of getEndpoints) {
            it(val.number + ") - (GET) API: " + val.name + " - 200", async () => {
                const res = await tests.testGET(url, val.path + val.parameters, tok);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.OK);
            });
        }
    });
    describe("Realizando teste unauthorized - 401", () => {
        for (let val of getEndpoints) {
            it(val.number + ") - (GET) API: " + val.name + " - 401", async () => {
                const res = await tests.testUnauthorized(url, val.path + val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
            });
        }
    });
    describe("Realizando Testes de Contrato", () => {
        for (let val of getEndpoints) {
            it(val.number + ") - (GET) API: " + val.name + " - Contrato", async () => {
                const res = await tests.testGET(url, val.path + val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, {
                    abortEarly: false
                });
            });
        }
    });
});