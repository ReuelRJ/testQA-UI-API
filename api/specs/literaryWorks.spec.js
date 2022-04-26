var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epLiteraryWorks");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const url = "http://nlb-matrix-fargate-dev-6aa59c165225e50d.elb.us-east-1.amazonaws.com:5001/api/v1/"
const options = commons.options;
const httpStatusCodes = require("../httpStatusCodes");
const getEndpoints = endpoints.endPointLiterayWorks.filter((e) => e.method === "get");
const putEndpoints = endpoints.endPointLiterayWorks.filter((e) => e.method === "put");
const postEndpoints = endpoints.endPointLiterayWorks.filter((e) => e.method === "post");
let tok = "";

describe("Testando APIs de Literary Works", () => {
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
                expect(res.status).to.be.equal(httpStatusCodes.OK);
            });
        }
        for (let val of postEndpoints) {
            it(val.number + ") - (POST) API: " + val.name + " - 201", async () => {
                const res = await tests.testPOST(url, val.path + val.parameters, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(httpStatusCodes.CREATED);
            });
        }
        for (let val of putEndpoints) {
            it(val.number + ") - (PUT) API: " + val.name + " - 204", async () => {
                const res = await tests.testPUT(url, val.path + val.parameters, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(httpStatusCodes.NO_CONTENT);
            });
        }
    });
    describe("Realizando teste unauthorized - 401", () => {
        for (let val of getEndpoints) {
            it(val.number + ") - (GET) API: " + val.name + " - 401", async () => {
                const res = await tests.testUnauthorized(url, val.path + val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(httpStatusCodes.UNAUTHORIZED);
            });
        }
        for(let val of postEndpoints){
            it(val.number + ") - (POST) API: " + val.name + " - 401", async() =>{
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(httpStatusCodes.UNAUTHORIZED);
            });
        }
        for(let val of putEndpoints){
            it(val.number + ") - (PUT) API: " + val.name + " - 401", async () => {
                const res = await tests.testUnauthorized(url, val.path + val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(httpStatusCodes.UNAUTHORIZED);
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
        for (let val of postEndpoints) {
            it(val.number + ") - (POST) API: " + val.name + " - Contrato", async () => {
                const res = await tests.testPOST(url, val.path + val.parameters, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, {
                    abortEarly: false
                });
            });
        }
        for (let val of putEndpoints) {
            it(val.number + ") - (PUT) API: " + val.name + " - Contrato", async () => {
                const res = await tests.testPUT(url, val.path + val.parameters, tok, val.sendSchema);
                console.log("RES: ", res.body)
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, {
                    abortEarly: false
                });
            });
        }
    });
});