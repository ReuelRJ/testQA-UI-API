'use strict';
// const config = require('../../files/conf.json')
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
// const ambienteDev = config.AmbienteDev

// Usuarios
// const usuario1 = config.user1.user
// const usuario1Pass = config.user1.password

//variaveis 
let  titulo = "Obra Literaria - Teste Automatizado"


When ('que possuo uma palavra no Titulo: "Obra Literaria - Teste Automatizado" da Obra Literária', async () => {
    // await dsl.login(ambienteDev, usuario1, usuario1Pass)
    this.titulo = "Obra Literaria - Teste Automatizado";
})

Given ('informo essa palavra no campo de busca', async () => {
    dsl.waitVisibilityOf(bo.inputBuscar, 120000)
    dsl.sendKeys(bo.inputBuscar, titulo)
    await dsl.click(bo.btnLupa)
})

Then ('visualizo o resultado com a Obra Literária buscada', async () => {
    await dsl.waitVisibilityOf(bo.listaProjetos, 60000, 'Elemento não encontrado');
})