var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
var requests = require("request");
const endpoints = require("../endpoints/epContents");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const status = require("../httpStatusCodes");
const e = require("express");
const url = commons.baseAPI.urlAutentication;
const options = commons.options;
const getEndpoints = endpoints.endPointContents.filter((e) => e.method === "get")
const postEndpoints = endpoints.endPointContents.filter((e) => e.method === "post");
const putEndpoints = endpoints.endPointContents.filter((e) => e.method === "put");
const deleteEndpints = endpoints.endPointContents.filter((e) => e.method === "delete");
const patchEndpoints = endpoints.endPointContents.filter((e) => e.method === "patch");
let tok = "";
let id = "";
let id2 =  "";

describe("Testando APIs de Contents", () => {
    before((done) => {
        tests.getToken().then(token => {
          tok = token;
          done();
        });
      });

    describe("Realizando Helth Tets - Casa 200", () =>{
       for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - 200", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                const _this = this;
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.OK);
            });
        }
        
        for(let val of postEndpoints){
            it(val.number + ") - (POST) API:" + val.name + " - 201", async() => {
                const res = await tests.testPOST(url, val.path+val.parameters, tok, val.sendSchema);
                id = JSON.parse(res.text).data[0]
                //console.log("RES:", res.body);
                //console.log("RES:", res.status);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.CREATED);
            });
        }

        for (let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + "- 204", async() => {
                const res = await tests.testPUT(url, val.path+val.parameters, tok,  val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.NO_CONTENT);
            });
        }
        
        for(let val of deleteEndpints){
            it(val.number + ") - (DELETE) API:" + val.name + " - 204", async() => {
                const res = await tests.testDELETE(url, val.path+id, tok);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.NO_CONTENT);
            })
        }

       for(let val of patchEndpoints){
            it(val.number + ") - (PATCH) API:" + val.name + " - 204", async() => {
                const res = await tests.testPATCH(url, val.path+val.parameters, tok, val.sendSchema);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.NO_CONTENT);
            });
        }
    });

    describe("Realizando Tests Unauthorezide - 401", () => {
        for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - 401", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.UNAUTHORIZED);
            });
        }

        for(let val of postEndpoints){
            it(val.number + ") - (POST) API:" + val.name + " - 403", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            });
        }

        for(let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + " - 403", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            });
        }

        for(let val of deleteEndpints){
            it(val.number + ") - (DELETE) API:" + val.name + " - 403", async() => {
                const res = await tests.testUnauthorized(url, val.path + id);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            });
        }

        for(let val of patchEndpoints){
            it(val.number + ") - (PATCH) API:" + val.name + " - 403", async() => {
                const res = await tests.testUnauthorized(url, val.path+val.parameters);
                expect(res.type).to.be.equal("application/json");
                expect(res.status).to.be.equal(status.FORBIDDEN);
            })
        }
    });

    describe("Realizando Tests de Contrato", () => {
        for(let val of getEndpoints){
            it(val.number + ") - (GET) API:" + val.name + " - contrato", async() => {
                const res = await tests.testGET(url, val.path+val.parameters, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly:false});
            })
        }
        
        for(let val of postEndpoints){
            it(val.number + ") - (POST) API:" + val.name + " - contrato", async() => {
                const res = await tests.testPOST(url, val.path+val.parameters, tok, val.sendSchema);
                id2 = JSON.parse(res.text).data[0]
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly:false});
            })
        }

        for (let val of putEndpoints){
            it(val.number + ") - (PUT) API:" + val.name + " - contrato", async() => {
                const res = await tests.testPUT(url, val.path+val.parameters, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly:false});
            });
        }
        
        for(let val of deleteEndpints){
            it(val.number + ") - (DELETE) API:" + val.name + " - contrato", async() => {
                const res = await tests.testDELETE(url, val.path+id2, tok);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            });
        }

        for(let val of patchEndpoints){
            it(val.number + ") (PATCH) API:" + val.name + " - contrato", async() => {
                const res = await tests.testPATCH(url, val.path+val.parameters, tok, val.sendSchema);
                Joi.assert(res.body, val.assertSchema, "Contrato nao esta de acordo:" + val.name, {abortEarly: false});
            });
        }
    })
});