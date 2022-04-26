'use strict';
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

//importações
const Dsl = require('../../page-objects/dsl') 
const BasicObject = require('../../page-objects/basic-objects')
const ProjetoDramaturgia = require('../../page-objects/ProjetoDramaturgia');
const { browser, element, by } = require('protractor');

//objetos
const dsl = new Dsl()
const bo = new BasicObject()
const pd = new ProjetoDramaturgia()

//variaveis 
let titulo = 'Projeto Teste Dramaturgia'
let validar = ['4ª', '3ª', '2ª', '1ª']
let capitulo = 'Capítulo 2'

//@CapituloNaFicha
When ('que pesquisei um projeto de dramaturgia longa', async () => {
    dsl.waitVisibilityOf(bo.navBarCadastro, 120000);
    dsl.sendKeys(bo.inputBuscar, titulo);
    await dsl.click(bo.btnLupa);
});
Given ('acesso a ficha do projeto', async () => {
    dsl.waitVisibilityOf(bo.acessarProjetos(titulo), 60000, 'Elemento não encontrado');
    await dsl.click(bo.acessarProjetos(titulo));
});
Then ('visualizo a aba de Capítulos', async () => {
    dsl.expectIsElementPresent(pd.spanAbaCapitulos)
});

//@visualizaçãodeBlocos
When ('que estou na ficha de um projeto de dramaturgia longa', async () => {
    await dsl.waitVisibilityOf(bo.titulo(titulo), 60000, 'Elemento não encontrado')
    dsl.expectIsElementNotPresent(pd.spanAbaEpisodios)
});
Given ('acesso a aba de Capítulos', async () => {
    await dsl.click(pd.spanAbaCapitulos)
});
Then ('vejo os blocos existentes para o projeto', async () => {
    dsl.waitVisibilityOf(pd.liBlocos, 60000, 'Elemento não encontrado') 
    expect(await pd.allblocos.count()).to.be.equal(2)
});

//@AcessarCapitulosAgrupados
When ('que possuo capítulos cadastrados em um bloco', async () => {
    await dsl.waitVisibilityOf(pd.spanNumCap, 60000, 'Elemento não encontrado')
    expect(await pd.spanNumCap.getText()).to.be.equal('7')
});
Given ('acesso o agrupamento do bloco', async () => {
    dsl.waitVisibilityOf(pd.liblocoUm, 60000, 'Elemento não encontrado')
    await dsl.click(pd.liblocoUm)
});
Then ('visualizo as informações do capítulo', async () => {
    //await dsl.waitVisibilityOf(pd.liCapitulos, 60000, 'Elemento não encontrado') 
    expect(await pd.liCapitulos.count()).to.be.equal(7)
});

//@versaoDeCapitulos
When ('que possuo mais de uma versão cadastrada para um capitulo', async () => {
    await dsl.waitVisibilityOf(pd.acessarCapitulo(capitulo), 60000, 'Elemento não encontrado')
});
Given ('acesso o agrupamento de versões', async () => {
    await dsl.click(pd.acessarCapitulo(capitulo))
});
Then ('visualizo todas as versões disponíveis', async () => {
    expect(await pd.spanVersoes.count()).to.be.equal(4)
});

//@validarOrdenacao
When ('que estou vizualizando as versões no projeto de dramaturgia longa', async () => {
    expect(await pd.spanVersoes.count()).to.be.equal(4)
});
Given ('verifico a ordenção', async () => {
    expect(await pd.spanVersoes.count()).to.be.equal(4)
});
Then ('visualizo a ordenação padrão', async () => {
    let conta = pd.spanVersoes.count()
    for (let i = 0; i < conta; i++) {
        let a = i+1
        a.toString()
        expect(await pd.pegarVersao(a).getText()).to.be.equal(validar[i])      
    }
});

//@projetoSemCapitulo
When ('que acessei e estou na ficha de um projeto de dramaturgia longa', async () => {
    titulo = 'Projeto Teste Capítulo'
    dsl.sendKeys(bo.inputBuscar, titulo);
    dsl.click(bo.btnLupa);
    dsl.waitVisibilityOf(bo.acessarProjetos(titulo), 60000, 'Elemento não encontrado');
    dsl.click(bo.acessarProjetos(titulo));
    await dsl.waitVisibilityOf(bo.titulo(titulo), 60000, 'Elemento não encontrado')
    dsl.expectIsElementNotPresent(pd.spanAbaEpisodios)
});
Given ('acesso a aba de Capítulos vejo que não possuo blocos', async () => {
    await dsl.click(pd.spanAbaCapitulos)
    dsl.expectIsElementNotPresent(pd.liBlocos)
});
Then ('vejo a mensagem informando que ainda não existem blocos cadastrados', async () => {
    let message = 'Este projeto ainda não possui Blocos planejados.'
    await dsl.waitVisibilityOf(pd.spanMessage, 60000, 'Elemento não encontrado')
    expect(await pd.spanMessage.getText()).to.be.equal(message)
});
