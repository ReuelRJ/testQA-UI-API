var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epConflictMap");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const HTTPStatusCodes = require("../httpStatusCodes");
const e = require("express");
const url = "http://nlb-matrix-fargate-dev-6aa59c165225e50d.elb.us-east-1.amazonaws.com:5001/api/v1/";
const options = commons.options;
const getEndpoints = endpoints.endPointConflictMap.filter(
    (e) => e.method === "get"
);
const deleteEndpoints = endpoints.endPointConflictMap.filter(
    (e) => e.method === "delete"
);
let tok = "";

describe("Testando APIs de Conflict Map", () => {
    before((done) => {
      tests.getToken().then(token => {
        tok = token;
        done();
      });
    });
    describe("Realizando Helth Tests - Casa 200", () =>{
        for (let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - 200", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                const _this = this;
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.OK);
            });
        }
       for(let val of deleteEndpoints){
            it(val.number + ") - (DELETE) API:" + val.name + " - 204", async() => {
                const res = await tests.testDELETE(url, val.path+val.parameters, tok);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.NO_CONTENT);
            });
        }
    });
    describe("Realizando Tests de Unauthorized - 401", () => {
        for (let val of getEndpoints){
            it(val.number + ") - (GET) API: " + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
            });
        }
        for(let val of deleteEndpoints){
            it(val.number + ") - (DELETE) API:" + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(HTTPStatusCodes.UNAUTHORIZED);
            });
        }
    });
    describe("Realizando Tests de Contrato", () => {
        for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - contrato", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {
                    abortEarly: false
                });
            });
        }
        for(let val of deleteEndpoints){
            it(val.number + ") -(DELETE) API:" + val.name + " - contrato", async() => {
                const res = await tests.testDELETE(url, val.path+val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, {
                    abortEarly:false
                });
            });
        }
    });
});