var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epDramaturgyCharacters");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const status = require("../httpStatusCodes");
const e = require("express");
const { path } = require("chromedriver");
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const getEndpoints = endpoints.endPointDramaturgyCharacters.filter((e) => e.method === "get");
const postEndpoints = endpoints.endPointDramaturgyCharacters.filter((e) => e.method === "post");
const putEndpoints = endpoints.endPointDramaturgyCharacters.filter((e) => e.method === "put");
const patchEndpoints = endpoints.endPointDramaturgyCharacters.filter((e) => e.method === "patch");
let tok = "";

describe("Testando APIs de DramaturgyCharacters", () => {
    before((done) => {
        tests.getToken().then(token => {
          tok = token;
          done();
        });
      });

    describe("Realizando Helth Tests - Casa 200", () => {
        for(let val of getEndpoints){
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

        for(let val of patchEndpoints){
            it(val.number + ") - (PATCH) API:" + val.name + " - 204", async() => {
                const res = await tests.testPATCH(url, val.path+val.parameters, tok, val.assertSchema)
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.NO_CONTENT);
            })
        }

        for(let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + " - 204", async() => {
                const res = await tests.testPUT(url, val.path, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.NO_CONTENT);
            });
        }
    });

    describe("Realizando Tests Unauthorezide - 401", () => {
       for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.UNAUTHORIZED);
            });
        }

        for(let val of postEndpoints){
            it(val.number + ") - (POST) API:" + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.UNAUTHORIZED);
            });
        }

       for(let val of patchEndpoints){
            it(val.number + ") - (PATCH) API:" + val.name + " - 403", async() => {
                const res = await tests.testUnauthorized(url, val.path);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            });
        }

        for(let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.UNAUTHORIZED);
            });
        }
    });

    describe("Ralizando Tests de Contrato", () => {
        for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - Contrato", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            });
        }

        for(let val of postEndpoints){
            it(val.number + ") - (POST) API:" + val.name + " - Contrato", async() => {
                const res = await tests.testPOST(url, val.path+val.parameters, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo: " + val.name, {abortEarly:false});
            });
        }
        
        for(let val of patchEndpoints){
            it(val.number + ") - (PATCH) API:" + val.name + " - Contrato", async() => {
                const res = await tests.testPATCH(url, val.path+val.parameters, tok, val.assertSchema)
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            })
        }

        for(let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + " - Contrato", async() => {
                const res = await tests.testPUT(url, val.path+val.parameters, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            })
        }
    });




});
