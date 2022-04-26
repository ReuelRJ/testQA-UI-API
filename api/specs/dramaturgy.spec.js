var chai = require("chai");
var expect = chai.expect;
const Joi = require("joi");
const endpoints = require("../endpoints/epDramaturgy");
const tests = require("../commonsTestsAPI");
const commons = require("../commons");
const status = require("../httpStatusCodes");
const schema = require("../schemas/dramaturgy.schema");
const url = commons.baseAPI.urlAutentication;
const getEndpoints = endpoints.endPointDramaturgy.filter(
  (e) => e.method === "get"
);
const postEndpoints = endpoints.endPointDramaturgy.filter(
  (e) => e.method === "post"
);
const postEndpointsRecomentadtion = endpoints.endPointDramaturgy.filter(
  (e) => e.method === "post-recomendation"
);

const putEndpoints = endpoints.endPointDramaturgy.filter(
  (e) => e.method === "put"
);

let listAct = [];
let tok = "";

describe("Testando APIs de Dramaturgies", () => {
  before((done) => {
    tests.getToken().then((token) => {
        tok = token;
      }).then(() => {
        listAct = tests.getIdsDramaturgy(url, "dramatugies", tok);
        done();
      });
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

    for (let val of postEndpoints) {
      it(val.number + ") - (POST) API:" + val.name + " - 201", async () => {
        const res = await tests.testPOST(
          url,
          val.path + val.parameters,
          tok,
          val.sendSchema
        );
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.CREATED);
      });
    }

    for (let val of postEndpointsRecomentadtion) {
      it(val.number + ") - (POST) API:" + val.name + " - 201", async () => {
        const res = await tests.testPOST(
          url,
          "dramaturgies/"+listAct[0]+"/recommendations",
          tok,
          schema.bodyPostRecomendations(listAct[0].id)
        );
        console.log("RES: ", res.status);
        console.log("RES: ", res.body);
        expect(res.type).to.be.equal("application/json");
        expect(res.status).to.be.equal(status.CREATED);
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
        if (res.status === 401) {
          expect(res.status).to.be.equal(status.UNAUTHORIZED);
        } else {
          expect(res.status).to.be.equal(status.FORBIDDEN);
        }
      });
    }

    for (let val of postEndpointsRecomentadtion) {
      it(val.number + ") - (POST) API:" + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(
          url,
          val.path + val.parameters
        );
        expect(res.type).to.be.equal("application/json");
        if (res.status === 401) {
          expect(res.status).to.be.equal(status.UNAUTHORIZED);
        } else {
          expect(res.status).to.be.equal(status.FORBIDDEN);
        }
      });
    }

    for (let val of putEndpoints) {
      it(val.number + ") - (PUT) API:" + val.name + " - 401", async () => {
        const res = await tests.testUnauthorized(
          url,
          val.path + val.parameters
        );
        expect(res.type).to.be.equal("application/json");
        if (res.status === 401) {
          expect(res.status).to.be.equal(status.UNAUTHORIZED);
        } else {
          expect(res.status).to.be.equal(status.FORBIDDEN);
        }
      });
    }
  });

  describe("Realizando Tests de contrato", () => {
    for (let val of getEndpoints) {
      it(val.number + ") - (GET) API:" + val.name + " - contrato", async () => {
        const res = await tests.testGET(url, val.path + val.parameters, tok);
        Joi.assert(
          res.body,
          val.assertSchema,
          "contrato nao esta de acordo: " + val.name,
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
            val.sendSchema
          );
          Joi.assert(
            res.body,
            val.assertSchema,
            "contrato nao esta de acordo: " + val.name,
            { abortEarly: false }
          );
        }
      );
    }

    for (let val of postEndpointsRecomentadtion) {
      it(
        val.number + ") - (POST) API:" + val.name + " - contrato",
        async () => {
          const res = await tests.testPOST(
            url,
            "dramaturgies/"+listAct[1]+"/recommendations",
            tok,
            schema.bodyPostRecomendations(listAct[1].id)
          );
          Joi.assert(
            res.body,
            val.assertSchema,
            "contrato nao esta de acordo: " + val.name,
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
          "contrato nao esta de acordo: " + val.name,
          { abortEarly: false }
        );
      });
    }
  });
});
