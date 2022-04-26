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

//variaves
let titulo = 'Teste 21'

//@VisualizarCards
When ('que possuo acesso a página de Textos Liberados', async () => {
    await dsl.waitVisibilityOf(bo.navBarTextosLiberados, 120000);

});

Given ('acesso a página', async () => {
    //dsl.click(bo.navBarTextosLiberados);
    await dsl.waitVisibilityOf(tl.h2Titulo, 60000, 'Elemento não encontrado');
});

Then('visualizo os projetos com textos liberados em cards e não mais como lista', async () => {
    let card = []
    card.push(tl.cartoes)
    await expect(card.values).to.be.equal(tl.cards().values)
});

//@ValidarLista
When ('que estou na página de Textos Liberados', async () => {
    await dsl.waitVisibilityOf(tl.h2Titulo, 60000, 'Elemento não encontrado');

});

Given ('acesso o projeto', async () => {
    //dsl.click(bo.navBarTextosLiberados);
    dsl.waitVisibilityOf(tl.aCartaoTest, 60000, 'Elemento não encontrado');
    await dsl.click(tl.aCartaoTest)
    
});

Then('visualizo a lista de textos liberados para ele em uma nova página', async () => {
    dsl.expectIsElementPresent(tl.divListProject)
});

//@VoltarAosProjetos
When ('que estou na página de Textos Liberados de um projeto específico', async () => {
    await dsl.waitVisibilityOf(bo.titulo(titulo), 60000, 'Elemento não encontrado');
});

Given ('acesso a função de voltar', async () => {
    dsl.waitVisibilityOf(tl.spanGoBack, 60000, 'Elemento não encontrado')
    await dsl.click(tl.spanGoBack)
});

Then('sou direcionada de volta para a página de cards dos projetos', async () => {
    let card = []
    card.push(tl.cartoes)
    await expect(card.values).to.be.equal(tl.cards().values)
});

