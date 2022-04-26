var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epResearchActivities");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const HTTPStatusCodes = require("../httpStatusCodes");
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const postEndpoints = endpoints.endPointResearchActivities.filter((e) => e.method === "post");
const putEndpoints = endpoints.endPointResearchActivities.filter((e) => e.method === "put");
let tok = "";

describe("Testando APIs de Research Activities", () => {
    before((done) => {
      tests.getToken().then(token => {
        tok = token;
        done();
      });
    });
  
    describe("Realizando Health Tests - Casa 200", () => {
        for (let val of postEndpoints){
            it (val.number + ") - (POST) API:" + val.name + " - 201", async() => {
                const res = await tests.testPOST(url, val.path, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.CREATED);
            });
        }

        for (let val of putEndpoints) {
            it(val.number + ") - (PUT) API: " + val.name + " - 204", async () => {
            const res = await tests.testPUT(url, val.path, tok, val.sendSchema);
            expect(res.type).to.be.equal("application/json");
            expect(res.status).to.be.equal(HTTPStatusCodes.NO_CONTENT);
            });
        }
    });

    describe("Realizando Testes de Unauthorized Error - 401", () => { 
        for (let val of postEndpoints){
            it (val.number + ") - (POST) API:" + val.name + " - 401", async () => {
                const res = await tests.testUnauthorized(url, val.path);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
            });
        }
        
        for (let val of putEndpoints) {
            it(val.number + ") - (PUT) API: " + val.name + " - 401", async () => {
            const res = await tests.testUnauthorized(url, val.path);
            expect(res.type).to.be.equal("application/json");
            expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
            });
        }
    });

    describe("Realizando testes de Contrato", () => {
        for (let val of postEndpoints){
            it(val.number + ") - (POST) API: " + val.name + " - Contrato", async () => {
                const res = await tests.testPOST(url, val.path, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { 
                    abortEarly: false
                });
            });
        }
        for (let val of putEndpoints) {
            it(val.number + ") - (PUT) API: " + val.name + " - Contrato", async () => {
            const res = await tests.testPUT(url, val.path, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, { 
                    abortEarly: false 
                });
            });
        }
    });
  });