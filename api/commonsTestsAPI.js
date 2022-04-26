const request = require("supertest");
const commons = require("./commons");
const requests = require("request");
const { element } = require("protractor");

function getToken() {
  return new Promise((resolve) => {
    requests(commons.options, (error, response) => {
      let x = JSON.parse(response.body);
      // console.log("X: ", x.id_token);
      resolve(x.id_token);
    });
  });
}

async function testDELETEwithPOST(url, path, pathPOST, token, schema) {
  let _post = await testPOST(url, pathPOST, token, schema);
  let id = path + JSON.parse(_post.text).data[0];
  return request(url)
    .delete(path + id)
    .set("Authorization", token)
    .set("x-api-key", commons.xApiKey2);
}

function testDELETE(url, path, token) {
  return request(url)
    .delete(path)
    .set("Authorization", token)
    .set("x-api-key", commons.xApiKey2);
}

function testGET(url, path, token) {
  return request(url)
    .get(path)
    .set("Authorization", token)
    .set("x-api-key", commons.xApiKey2);
}

function testPUT(url, path, token, schema) {
  return request(url)
    .put(path)
    .send(schema)
    .set("Authorization", token)
    .set("x-api-key", commons.xApiKey2);
}

function testPOST(url, path, token, schema) {
  return request(url)
    .post(path)
    .send(schema)
    .set("Authorization", token)
    .set("x-api-key", commons.xApiKey2);
}

function testPATCH(url, path, token, schema) {
  return request(url)
    .patch(path)
    .send(schema)
    .set("Authorization", token)
    .set("x-api-key", commons.xApiKey2);
}

function testUnauthorized(url, path) {
  return request(url)
    .get(path)
    .set("Authorization", "xpto")
    .set("x-api-key", commons.xApiKey2);
}

function getIds(url, path, tok, listAct = []) {
  testGET(url, path, tok).then((res) => {
    res.body.data.forEach((element) => {
      if (!element.feedback) listAct.push(element.id);
    });
    //console.log("LIST IDs: ", listAct);
  });
  return listAct;
}

function getIdsDramaturgy(url, path, tok, listAct = [], listAct2 = []) {
  testGET(url, path, tok).then((res) => {
    res.body.data.forEach((element) => {
      listAct.push(element.id);
    });
    for(let item of listAct.values()){
      testGET(url, path+"/"+item, tok).then((res) =>{
        if (!res.body.data.recommendation) {
          listAct2.push(item)
        }
        //console.log("IDS 2: ", listAct2)
      })
    }
  })
  return listAct2;
}


module.exports = {
  getToken,
  testGET,
  testUnauthorized,
  testPUT,
  testPOST,
  testPATCH,
  testDELETE,
  testDELETEwithPOST,
  getIds,
  getIdsDramaturgy,
};
