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
let valor = 'Teste 21 (2)'

//@filtroPrimeiroNível
When ('que possuo textos liberados para o Canal-Produto na tela de Textos Liberados', async () => {
    dsl.waitVisibilityOf(bo.navBarTextosLiberados, 120000);
    //dsl.click(bo.navBarTextosLiberados);
    await dsl.waitVisibilityOf(tl.h2Titulo, 60000, 'Elemento não encontrado');
});

Given ('confirmo a opção selecionada do Canal-Produto', async () => {
    dsl.waitVisibilityOf(tl.selectCanaisProdutos, 60000, 'Elemento não encontrado');
    dsl.click(tl.selectCanaisProdutos);
    dsl.click(tl.optionCanaisProduto);
    dsl.waitVisibilityOf(tl.divBtnFiltrar, 60000, 'Elemento não encontrado')
    await dsl.click(tl.divBtnFiltrar);
});

Then ('visualizo apenas os projetos com textos liberados para esse Canal', async () => {
    //await dsl.waitVisibilityOf(tl.ulCards, 60000, 'Elemento não encontrado');
    let card = []
    card.push(tl.cartoes)
    await expect(card.values).to.be.equal(tl.cards().values)
});


//@filtroSegundoNível
When ('que estou na tela de Textos Liberados e possuo textos liberados para o Canal-Produto e Canais', async () => {
    dsl.waitVisibilityOf(tl.selectCanais, 60000, 'Elemento não encontrado')
    dsl.click(tl.selectCanais)
    dsl.waitVisibilityOf(tl.optionCanal, 60000, 'Elemento não encontrado')
    await dsl.click(tl.optionCanal)
})

Given ('confirmo a opção selecionada do Canal-Produto e Canais', async () => {
    await dsl.click(tl.divBtnFiltrar)
})

Then ('visualizo apenas os projetos com textos liberados para esse Canal-Produto e seu segundo nível', async () => {
    //await dsl.waitVisibilityOf(tl.ulCards, 60000, 'Elemento não encontrado')
    let card = []
    card.push(tl.cartoes)
    await expect(card.values).to.be.equal(tl.cards().values)
})

//@filtroTerceiroNível
When ('que visualizo os filtros da pesquisa na tela de Textos Liberados', async () => {
    dsl.waitVisibilityOf(tl.divCPTag, 60000, 'Elemento não encontrado')
    await dsl.waitVisibilityOf(tl.divCTag, 60000, 'Elemento não encontrado')
})

Given ('excluo os filtros selecionados', async () => {
    await dsl.click(tl.divCPTag, 60000, 'Elemento não encontrado')
})

Then ('visualizo a pesquisa refeita sem o filtro excluído', async () => {
    //await dsl.waitVisibilityOf(tl.ulCards, 60000, 'Elemento não encontrado')
    let card = []
    card.push(tl.cartoes)
    dsl.expectIsElementNotPresent(tl.divCPTag)
    await expect(card.values).to.be.equal(tl.cards().values)
})