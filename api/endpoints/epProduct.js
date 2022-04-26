const schema = require("../schemas/product.schema");

const endpointsProduct = [{
    number: 01,
    name: "/Products/{productId}/seasons",
    path: "products/5a97d183-e726-4186-8e19-4cf8f32e9612/seasons",
    method: "get",
    parameters: "",
    assertSchema: schema.productSeasons
}];

module.exports = {
    endpointsProduct
}

