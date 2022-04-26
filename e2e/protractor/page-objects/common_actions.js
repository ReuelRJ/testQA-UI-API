const Dsl = require('./dsl')
const config = require('../files/conf.json')
const dsl = new Dsl()
class CommonActions{

    cadastrarProponente(nomeProponente, contatoProponente) {
        this.btnOverFlowMenu.isPresent().then(() =>{
            dsl.click(this.btnOverFlowMenu, "",60)
            dsl.click(this.btnProponente, 'botão não localizado', 60)
            dsl.waitVisibilityOf(this.btnNewProponente, 60000)
            dsl.click(this.btnNewProponente, 'botão não localizado', 60)
            dsl.sendKeys(this.inputNomeProponent, nomeProponente)
            dsl.sendAndSearchPreponente(dsl.webElement('xpath', '//label[text()="Contato"]/..//input[contains(@id,"react-select")]'),contatoProponente)
            dsl.click(this.btnSaveProponente)
            dsl.waitVisibilityOf(this.msgSucessoCadastroProponent,60000)
        })
    }

    cadastrarProdutora(nomeProponente, contatoProponente) {
        this.btnOverFlowMenu.isPresent().then(() =>{
            dsl.click(this.btnOverFlowMenu, "",60)
            dsl.click(this.btnProdutoras, 'botão não localizado', 60)
            dsl.waitVisibilityOf(this.btnNewProponente, 60000)
            dsl.click(this.btnNewProponente, 'botão não localizado', 60)
            dsl.sendKeys(this.inputNomeProponent, nomeProponente)
            dsl.sendAndSearchPreponente(dsl.webElement('xpath', '//label[text()="Contato"]/..//input[contains(@id,"react-select")]'),contatoProponente)
            dsl.click(this.btnSaveProponente)
            dsl.waitVisibilityOf(this.msgSucessoCadastroProponent,60000)
        })
    }
}

           
module.exports = CommonActions