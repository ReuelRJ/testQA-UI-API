'use strict';
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')
const TextosLiberados = require('../../page-objects/textosLiberados');
const { element } = require('protractor');

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
const tl = new TextosLiberados()

//variavel
let valor = 'Episódeo'

//@busca
When ('que estou na página um de textos liberados', async () => {
    dsl.waitVisibilityOf(bo.navBarTextosLiberados, 120000);
    //dsl.click(bo.navBarTextosLiberados);
    await dsl.waitVisibilityOf(tl.h2Titulo, 60000, 'Elemento não encontrado');
    dsl.expectIsElementPresent(tl.aPageNumber1)
});

Given ('quando acesso a página dois e busco a palavra episódeo no campo Título do Projeto', async () => {
    dsl.waitVisibilityOf(tl.aPageNumber2, 60000, 'Elemento não encontrado');
    dsl.click(tl.aPageNumber2);
    dsl.sendKeys(tl.inputTituloProjeto, valor)
    await dsl.click(tl.divBtnFiltrar)
});

Then ('visualizo o projeto referente a essa palavra que estava na página um', async () => {
    dsl.expectIsElementPresent(tl.divcardValor)
});
