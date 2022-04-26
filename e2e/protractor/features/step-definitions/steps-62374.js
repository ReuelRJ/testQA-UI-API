'use strict';
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')
const ProjetoDramaturgia = require('../../page-objects/ProjetoDramaturgia');
const Atividades = require('../../page-objects/atividades');
const { browser } = require('protractor');

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
const at = new Atividades()

//variaveis 
let titulo = 'Projeto Teste Dramaturgia'
let data = '13 Ago 2021'

//@dataDeLiberaçãoArquivo
When ('que estou na lista de atividades', async () => {
    dsl.waitVisibilityOf(bo.navBarAtividades, 120000)
    await dsl.click(bo.navBarAtividades)
})

Given ('acesso um projeto', async () => {
    dsl.waitVisibilityOf(at.h2Titulo, 60000, 'Elemento não encontrado')
    dsl.waitVisibilityOf(at.divPessoa, 60000, 'Elemento não encontrado')
    dsl.click(at.divPessoa)
    await dsl.waitVisibilityOf(at.divProjetc, 60000, 'Elemento não encontrado')
})

Then ('verifico se o número do episódio está aparecendo na página', async () => {
    expect(await at.receberEp.getText()).to.be.equal('Cap 11');
})