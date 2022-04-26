var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epProjectsData");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const HTTPStatusCodes = require("../httpStatusCodes");
const e = require("express");
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const getEndpoints = endpoints.endPointProjectsData.filter((e) => e.method === "get");
let tok = "";

describe("Testando APIs de Production Company", () => {
    before((done) => {
      tests.getToken().then(token => {
        tok = token;
        done();
      });
    });
    describe("Realizando Health Tests - Casa 200", ()=> {
        for (let val of getEndpoints){
            it (val.number + ") - (GET) API:" + val.name + " - 200", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                const _this = this;
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.OK);
            });
        }
    });
    describe("Realizando Unauthorized Tests - 401", ()=> {
        for (let val of getEndpoints){
            it (val.number + ") - (GET) API:" + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
            });
        }
    });
    describe("Realizando Tests de Contrato", ()=> {
        for (let val of getEndpoints){
            it (val.number + ") - (GET) API:" + val.name + " - contrato", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {
                    abortEarly: false
                });
            });
        }
    });
});