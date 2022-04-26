const { expect } = require('chai')
const { element } = require('protractor')
const Dsl = require('../page-objects/dsl')
const dsl = new Dsl()

class Atividades{
    constructor(){
        this.h2Titulo = dsl.webElement('xpath', '//h2[text()=" Atividades Recentes "]')
        this.divPessoa = dsl.webElement('xpath', '//*[@class="activitySectionHeader"]//span[contains(text(), "Andre Braga")]')
        this.divProjetc = dsl.webElement('xpath', '//a[@href="/atividades/dramaturgia/parecer-da-criacao/371"]')
        this.receberEp = dsl.webElement('xpath', '//*[@id="Activities"]/div[3]/div[3]/ul[4]/li[4]/div[2]/div/div[2]/div[2]/div/span[1]')
    }
}
module.exports = Atividades
