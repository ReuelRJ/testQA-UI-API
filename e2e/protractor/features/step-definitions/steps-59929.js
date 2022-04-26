'use strict';
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect
const fs = require('fs')

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')
const TextosLiberados = require('../../page-objects/textosLiberados');
const { browser } = require('protractor');

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
const tl = new TextosLiberados()

//variaveis 
let fileName = '../../downloads/undefined.txt';


//@downloadDeArquivo
When ('que estou na página de textos liberados e estou visualizando textos liberados do projeto', async () => {
    dsl.waitVisibilityOf(bo.navBarTextosLiberados, 120000)
    dsl.click(bo.navBarTextosLiberados)
    dsl.waitVisibilityOf(tl.h2Titulo, 60000, 'Elemento não encontrado')
    dsl.waitVisibilityOf(tl.spanProjetoDramaturgia, 60000, 'Elemento não encontrado')
    dsl.click(tl.spanProjetoDramaturgia)
})

Given ('clico para realizar download do arquivo', async () => {
    dsl.waitVisibilityOf(tl.liDownload, 60000, 'Elemento não encontrado')
    tl.deleteAlreadyDownloadedFiles(fileName)
    await dsl.click(tl.liDownload)
})

Then ('o download é realizado com sucesso', async () => {
    tl.verifyFileDownload(fileName)
})