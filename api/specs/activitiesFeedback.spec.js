var chai = require("chai");
const Joi = require("joi");
const commons = require("../commons");
const tests = require("../commonsTestsAPI");
const schema = require("../schemas/activitiesFeedback.schema");
const endpoints = require("../endpoints/epActivitiesFeedback");
const status = require("../httpStatusCodes");
var expect = chai.expect;
const url = commons.baseAPI.urlAutentication;
const getEndpoints = endpoints.endActivitiesFeedback.filter((e) => e.method === "get");
const postEndpoints = endpoints.endActivitiesFeedback.filter((e) => e.method === "post");
const putEndpoints = endpoints.endActivitiesFeedback.filter((e) => e.method === "put");
let listAct = [];
let tok = "";

describe("Testando APIs de ActivitiesFeedback", () => {
  before((done) => {
    tests.getToken().then((token) => {
        tok = token;
      }).then(() => {
        listAct = tests.getIds(url, "activities", tok);
      });
    setTimeout(() => {
      done();
    }, 3000);
  });

  

  describe("Realizando Helth Tests - Casa 200", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API:" + val.name + " - 200", async () => {
        const res = await tests.testGET(url, val.path + val.parameters, tok);
        const _this = this;
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.OK);
      });
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API:" + val.name + " - 204", async () => {
        const res = await tests.testPUT(
          url,
          val.path + val.parameters,
          tok,
          val.sendSchema
        );
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.NO_CONTENT);
      });
    }

    for (let val of postEndpoints) {
      it(val.number + ") - (POST) API:" + val.name + " - 201", async () => {
        const res = await tests.testPOST(
          url,
          val.path + val.parameters,
          tok,
          schema.bodyPost(listAct[0])
        );
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.CREATED);
      });
    }
  });

  describe("Realizando Tests Unauthorezide - 401", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API:" + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(
          url,
          val.path + val.parameters
        );
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }

    for (let val of postEndpoints) {
      it(val.number + ") - (POST) API:" + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(
          url,
          val.path + val.parameters
        );
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API:" + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(
          url,
          val.path + val.parameters
        );
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.UNAUTHORIZED);
      });
    }
  });

  describe("Realizando Tests de Contrato", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API:" + val.name + " - contrato", async () => {
        const res = await tests.testGET(url, val.path + val.parameters, tok);
        Joi.assert(
          res.body,
          val.assertSchema,
          "Contrato nao esta de acordo: " + val.name,
          { abortEarly: false }
        );
      });
    }

    for (let val of postEndpoints) {
      it(
        val.number + ") - (POST) API:" + val.name + " - contrato",
        async () => {
          const res = await tests.testPOST(
            url,
            val.path + val.parameters,
            tok,
            schema.bodyPost(listAct[1])
          );
          Joi.assert(
            res.body,
            val.assertSchema,
            "Contrato nao esta de acordo: " + val.name,
            { abortEarly: false }
          );
        }
      );
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API:" + val.name + " - contrato", async () => {
        const res = await tests.testPUT(
          url,
          val.path + val.parameters,
          tok,
          val.sendSchema
        );
        Joi.assert(
          res.body,
          val.assertSchema,
          "Contrato nao esta de acordo: " + val.name,
          { abortEarly: false }
        );
      });
    }
  });
});
