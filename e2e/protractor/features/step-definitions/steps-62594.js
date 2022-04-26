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
let capitulo = "2"

//@liberacaodeanexo
When ('que estou na tela de liberação de anexo de algum projeto', async () => {
    this.titulo = 'Projeto Teste Dramaturgia';
    dsl.waitVisibilityOf(bo.navBarCadastro, 120000)
    dsl.sendKeys(bo.inputBuscar, titulo)
    dsl.click(bo.btnLupa)
    dsl.waitVisibilityOf(pd.acessarProjeto, 60000, 'Elemento não encontrado');
    dsl.click(pd.acessarProjeto)
    dsl.waitVisibilityOf(pd.spanAnexos, 60000, 'Elemento não encontrado')
    await dsl.click(pd.spanAnexos)
})

Given ('acesso um capitulo episódeo para fazer a liberação', async () => {
    await dsl.click(pd.spanLiberar)
})

Then ('vizualizo o número do capitulo episódeo', async () => {
    await dsl.waitVisibilityOf(pd.h2Liberacao, 60000, 'Elemento não encontrado')
    expect(await pd.spanCapituloEp.getText()).to.be.equal(capitulo);
})