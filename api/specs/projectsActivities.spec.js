var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epProjectsActivities");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const status = require("../httpStatusCodes");
const e = require("express");
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const getEndpoints = endpoints.endPointProjectsActivities.filter((e) => e.method === "get");
const postEndpoints = endpoints.endPointProjectsActivities.filter((e) => e.method === "post");
const putEndpoints = endpoints.endPointProjectsActivities.filter((e) => e.method === "put");
let tok = "";


describe("Testando APIs de ProjectsActivities", () => {
    before((done) => {
        tests.getToken().then(token => {
          tok = token;
          done();
        });
      });

    describe("Realizando Health Tests - Casa 200", () => {
        for (let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - 200", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                const _this = this;
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.OK);
            });
        }

        for (let val of postEndpoints){
            it(val.number + ") - (POST) API:" + val.name + " - 201", async() => {
                const res = await tests.testPOST(url, val.path, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.CREATED);
            });
        }

       for (let val of putEndpoints){
            it(val.number + ") - (PUT) API: " + val.name + " - 204", async() => {
                const res = await tests.testPUT(url, val.path, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.NO_CONTENT);
            });
        }
    });

    describe("Realizando Unauthorized Tests - 401", () => {
        for (let val of getEndpoints){
            it(val.number + ") - (GET) API: " + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.UNAUTHORIZED);
            });
        }

        for (let val of postEndpoints){
            it (val.number + ") - (POST) API:" + val.name + " - 403", async() => {
                const res = await tests.testUnauthorized(url, val.path);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            });
        }

        for (let val of putEndpoints){
            it(val.number + ") - (PUT) API: " + val.name + " - 403", async() =>{
                const res = await tests.testUnauthorized(url, val.path);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            });
        }
    });

    describe("Realizando Tests de Contrato", ()=>  {
        for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - contrato", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            });
        }
        
        for(let val of postEndpoints){
            it (val.number + ") - (POST) API:" + val.name + " - contrato", async() => {
                const res = await tests.testPOST(url, val.path, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            });
        }
        
        for (let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + " - contrato", async() => {
                const res = await tests.testPUT(url, val.path, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "contrato não está de acordo:" + val.name, {abortEarly:false});
            });
        }
    });
});