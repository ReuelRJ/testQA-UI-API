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
let titulo = `Encantado's`
let validar = []
let validacao = ['2ª', '2ª', '1ª']
let episodio = 'Episódio 1'
let conta = 0

//@CapituloNaFicha
When ('que pesquisei um projeto de dramaturgia curta', async () => {
    dsl.waitVisibilityOf(bo.navBarCadastro, 120000, 'Elemento não encontrado');
    dsl.sendKeys(bo.inputBuscar, titulo);
    await dsl.click(bo.btnLupa);
});
Given ('acesso a ficha do projeto', async () => {
    dsl.waitVisibilityOf(bo.acessarProjetos(titulo), 60000, 'Elemento não encontrado');
    await dsl.click(bo.acessarProjetos(titulo));
});
Then ('visualizo a aba de Episódios', async () => {
    dsl.expectIsElementPresent(pd.spanAbaEpisodios)
});

//@visualizacaoOrdenadaDeEpisodeos
When ('que estou na ficha de um projeto de dramaturgia curta', async () => {
    dsl.expectIsElementNotPresent(pd.spanAbaCapitulos)
    await dsl.waitVisibilityOf(pd.spanAbaEpisodios, 60000, 'Elemento não encontrado')

});
Given ('acesso a aba de Episódios e vejo que possuo episódios cadastrados', async () => {
    await dsl.click(pd.spanAbaEpisodios)
    dsl.expectIsElementPresent(pd.allblocos)
    conta = pd.spanEpisodes.count()
    for (let i = 0; index <= conta; i++) {
        let a = `Episódio ${i}`
        validar.push(a)
        //console.log(validar[i])
    }
});
Then ('vejo os episódios existentes para o projeto ordenados de forma crescente', async () => {
    for (let i = 0; i < conta; i++) {
        let a = i+1
        a.toString()
        expect(await pd.numeroEpisode(a).getText()).to.be.equal(validar[i])      
    }
});

//@acessarVersaoEpisodeo
When ('que possuo versões cadastrados em um episódio', async () => {
    await dsl.expectIsElementNotPresent(pd.spanAbaCapitulos)

});
Given ('acesso o agrupamento do episódio', async () => {
    dsl.waitVisibilityOf(pd.acessarCapitulo(episodio), 60000, 'Elemento não encontrado')
    await dsl.click(pd.acessarCapitulo(episodio))
});
Then ('visualizo todas as versões do episódio ordenadas de forma decrescente', async () => {
    let versao = pd.spanVersoesEp.count()
    for (let i = 0; i < versao; i++) {
        let a = i+1
        a.toString()
        expect(await pd.pegarVersao(a).getText()).to.be.equal(validacao[i])      
    }
});

//@projetoSemCapitulo
When ('que acessei e estou na ficha de um projeto de dramaturgia curta', async () => {
    titulo = 'Projeto Teste Episódeo'
    dsl.sendKeys(bo.inputBuscar, titulo);
    dsl.click(bo.btnLupa);
    dsl.waitVisibilityOf(bo.acessarProjetos(titulo), 60000, 'Elemento não encontrado');
    dsl.click(bo.acessarProjetos(titulo));
    await dsl.waitVisibilityOf(bo.titulo(titulo), 60000, 'Elemento não encontrado')
    dsl.expectIsElementNotPresent(pd.spanAbaCapitulos)
});
Given ('acesso a aba de Episódios vejo que não possuo blocos', async () => {
    await dsl.click(pd.spanAbaEpisodios)
    dsl.expectIsElementNotPresent(pd.liBlocos)
});
Then ('vejo a mensagem informando que ainda não existem blocos cadastrados', async () => {
    let message = 'Este projeto ainda não possui Episódios planejados.'
    await dsl.waitVisibilityOf(pd.spanMessage, 60000, 'Elemento não encontrado')
    expect(await pd.spanMessage.getText()).to.be.equal(message)
});