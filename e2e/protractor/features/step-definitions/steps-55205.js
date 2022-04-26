'use strict';
//const config = require('../../files/conf.json')
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
//const ambienteDev = config.AmbienteDev

// Usuarios
//const usuario1 = config.user1.user
//const usuario1Pass = config.user1.password

//variaveis 
let  titulo = "Conde de Toscânia"
let  novoValor = "Conde de Toscânia Editado"

//@buscaObraLiterária
When ('que possuo uma palavra no Titulo: "Conde de Toscânia" da Obra Literária', async () => {
    //await dsl.login(ambienteDev, usuario1, usuario1Pass)
    this.titulo = "Conde de Toscânia";
})

Given ('insiro essa palavra no campo de busca', async () => {
    dsl.waitVisibilityOf(bo.navBarCadastro, 120000)
    dsl.waitVisibilityOf(bo.navBarAtividades, 120000)
    dsl.waitVisibilityOf(bo.navBarConflito, 120000)
    dsl.waitVisibilityOf(bo.inputBuscar, 120000)
    dsl.sendKeys(bo.inputBuscar, titulo)
    await dsl.click(bo.btnLupa)
})

Then ('visualizo o resultado com a Obra Literária buscada e a acesso', async () => {
    dsl.waitVisibilityOf(bo.acessarProjeto, 60000, 'Elemento não encontrado');
    await dsl.click(bo.acessarProjeto)
})

//@AcessarObraLiterária
When ('que estou na ficha de obra literária', async () => {
    await dsl.waitVisibilityOf(bo.h2TituloObra, 60000, 'Elemento não encontrado')
})

Given ('acesso as informações de dados básicos', async () => {
    await dsl.waitVisibilityOf(bo.spanDadosBasicos, 60000, 'Elemento não encontrado')
})

Then ('visualizo os dados básicos preenchidos', async () => {
    dsl.waitVisibilityOf(bo.verificarElementos('16 Jul 2021'), 60000, 'Elemento não encontrado');
    dsl.waitVisibilityOf(bo.verificarElementos('Conde de Toscânia'), 60000, 'Elemento não encontrado');
    dsl.waitVisibilityOf(bo.verificarElementos('J. K. Rowling'), 60000, 'Elemento não encontrado');
    dsl.waitVisibilityOf(bo.verificarElementos('Nova Editora'), 60000, 'Elemento não encontrado');
    dsl.waitVisibilityOf(bo.verificarElementos('Livro'), 60000, 'Elemento não encontrado');
    dsl.waitVisibilityOf(bo.verificarElementos('2005'), 60000, 'Elemento não encontrado');
    await dsl.waitVisibilityOf(bo.verificarElementos('ALBERTO PORFÍRIO'), 60000, 'Elemento não encontrado');   
})

//@AlterarObraLiterária
When ('que estando ainda na ficha de obra literária', async () => {
    await dsl.waitVisibilityOf(bo.h2TituloObra, 60000, 'Elemento não encontrado')
})

Given ('acesso as informações de dados básicos e altero os campos existentes', async () => {
    dsl.waitVisibilityOf(bo.spanDadosBasicos, 60000, 'Elemento não encontrado')
    await dsl.click(bo.divEditarDados);
})

Then ('visualizo a alteração na ficha da obra literária', async () => {
    dsl.waitVisibilityOf(bo.inputTitle, 60000, 'Elemento não encontrado')
    dsl.sendKeys(bo.inputTitle, novoValor)
    dsl.click(bo.btnSalvarObra)
    await dsl.waitVisibilityOf(bo.verificarElementos('Conde de Toscânia'), 60000, 'Elemento não encontrado');  
})