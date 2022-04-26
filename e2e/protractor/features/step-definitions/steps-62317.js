'use strict';
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')
const ProjetoDramaturgia = require('../../page-objects/ProjetoDramaturgia');
const TextosLiberados = require('../../page-objects/textosLiberados');
const { browser } = require('protractor');

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
const pd = new ProjetoDramaturgia()

//variaveis 
let titulo = 'Projeto Teste Dramaturgia'

//@liberacaodeanexo
When ('que estou na tela de liberação de anexo de algum projeto', async () => {
    this.titulo = 'Projeto Teste Dramaturgia';
    dsl.waitVisibilityOf(bo.navBarCadastro, 120000)
    dsl.sendKeys(bo.inputBuscar, titulo)
    dsl.click(bo.btnLupa)
    dsl.waitVisibilityOf(pd.acessarProjeto, 60000, 'Elemento não encontrado');
    await dsl.click(pd.acessarProjeto)
})

Given ('libero ou deslibero algum anexo', async () => {
    dsl.waitVisibilityOf(pd.spanAnexos, 60000, 'Elemento não encontrado')
    dsl.click(pd.spanAnexos)
    dsl.waitVisibilityOf(pd.liTipo, 60000, 'Elemento não encontrado')
    dsl.click(pd.spanLiberar)
    pd.liberarAnexo()
    await dsl.click(pd.buttonSalvar)
})

Then ('a tela de liberar anexo continua em aberto', async () => {
    await dsl.waitVisibilityOf(pd.divTelaLibAnexo, 60000, 'Elemento não encontrado')
})