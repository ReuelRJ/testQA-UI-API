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
const tl = new TextosLiberados()

//variaveis 
let titulo = 'Projeto Teste Dramaturgia'
let data = ''

//@dataDeLiberaçãoArquivo
When ('que faço a liberação de um texto com a data de recebimento anterior a data atual', async () => {
    this.titulo = 'Projeto Teste Dramaturgia';
    dsl.waitVisibilityOf(bo.navBarCadastro, 120000)
    dsl.sendKeys(bo.inputBuscar, titulo)
    dsl.click(bo.btnLupa)
    dsl.waitVisibilityOf(pd.acessarProjeto, 60000, 'Elemento não encontrado');
    dsl.click(pd.acessarProjeto)
    dsl.click(pd.spanAnexos)
    dsl.waitVisibilityOf(pd.liTipo, 60000, 'Elemento não encontrado')
    data = pd.spanRecebidoEm.getText()
    dsl.click(pd.spanLiberar)
    pd.liberarAnexo()
    await dsl.click(pd.buttonSalvar)
})

Given ('acesso a página de textos liberados', async () => {
    dsl.click(bo.navBarTextosLiberados)
    await dsl.waitVisibilityOf(tl.h2Titulo, 60000, 'Elemento não encontrado')
})

Then ('vizualizo o projeto com a data de liberação na data atual', async () => {
    dsl.waitVisibilityOf(tl.spanProjetoDramaturgia,  60000, 'Elemento não encontrado')
    dsl.click(tl.spanProjetoDramaturgia)
    if(tl.liTipoMaterial.isPresent()){
        expect(await tl.liTipoMaterial.getText()).to.not.equal(data);
    }
})