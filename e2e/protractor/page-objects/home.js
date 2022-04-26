const expect = require('chai').use(require('chai-as-promised')).expect
const common = require('./common_po')
const Common = new common()
const Dsl = require('./dsl')
const dsl = new Dsl()


class CadastroDramaturgia {
    constructor() {
        this.selectFormato = dsl.webElement('id', 'formatId')
        this.inputCapitulos = dsl.webElement('id', 'chapters')
        this.toggleAssociarProjeto = dsl.webElement('xpath','//*[@id="DramaturgyProject"]/section/form/div[2]/div[2]/div/div/div')
        this.toggleAssociarPesquisa = dsl.webElement('xpath','//*[@id="DramaturgyProject"]/section/form/div[2]/div[3]/div/div/div')
        this.btnFinalizarAgoraCadDramaturgia = dsl.webElement('xpath','//*[@class="simpleButton buttonGreen extraLarge button rippleButton "]')
        this.btnFinalizarAgoraCadDramaturgiaComAnexo = dsl.webElement('xpath','//*[@class="simpleButton buttonGreen extraLarge button  "]')
        this.btnAnexosDramaturgia = dsl.webElement('xpath','simpleButton buttonBlue extraLarge button  "]')
    }
}

module.exports = CadastroDramaturgia