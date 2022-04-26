const Dsl = require('../page-objects/dsl')
const dsl = new Dsl()
const titulo = "Obra Literaria - Teste Automatizado";
class BasicObjects{
    constructor() {
        //home
        this.inputBuscar = dsl.webElement('xpath', '//input[@placeholder="Buscar"]')
        this.btnLupa = dsl.webElement('xpath', '//div[@class="searchIcon"]')
        this.listaProjetos = dsl.webElement('xpath', `//*[@id='ResultSection'] //*[contains(text(),'Obra Literaria - Teste Automatizado')] `)
        this.navBarCadastro = dsl.webElement('xpath', '//*[@id="Header"]/nav //*[contains(text(),"Cadastro")]')
        this.navBarAtividades = dsl.webElement('xpath', '//*[@id="Header"]/nav //*[contains(text(),"Atividades")]')
        this.navBarConflito = dsl.webElement('xpath', '//*[@id="Header"]/nav //*[contains(text(),"Conflitos")]')
        this.navBarUsername = dsl.webElement('xpath', '//*[@id="Header"]/nav/li/span')
        this.navBarTextosLiberados = dsl.webElement('xpath', '//*[@id="Header"]/nav //*[contains(text(),"Textos Liberados")]')

        //cadastro de proponente pelo caminho da tela principal
        this.btnOverFlowMenu = dsl.webElement('xpath', '//*[@id="Header"]/nav/div')
        this.btnProponente = dsl.webElement('xpath', '//*[@id="Header"]/nav/div/div //*[contains(text(),"Proponentes")]')
        this.btnProdutoras = dsl.webElement('xpath', '//*[@id="Header"]/nav/div/div //*[contains(text(),"Produtoras")]')
        this.btnNewProponente = dsl.webElement('xpath', '//*[@data-qa="button-new-prospect"]')
        this.inputNomeProponent = dsl.webElement("id", "name")
        this.btnSaveProponente = dsl.webElement('xpath', '//*[@data-qa="button-prospect-new-save"]')
        this.msgSucessoCadastroProponent = dsl.webElement('xpath','//*[@class="alert success"]/p')

        //obraLiteraria
        this.acessarProjeto = dsl.webElement('xpath', `//*[@id='ResultSection'] //*[contains(text(),'Conde de Toscânia')]`)
        this.spanDadosBasicos = dsl.webElement('xpath', '//span[text()="Dados Básicos"]')
        this.h2TituloObra = dsl.webElement('xpath', '//h2[text()="Conde de Toscânia"]')
        this.divEditarDados = dsl.webElement('xpath', '//div[@id="Project"]/div[2]/div[1]/div[1]/div/div[1]/span[2]')
        this.inputTitle = dsl.webElement('id', 'seatonTitle')
        this.btnSalvarObra = dsl.webElement('xpath', '//div[@data-qa="undefined"] //*[contains(text(), "Salvar")]')
    }

    verificarElementos(valor) {
       this.verificarElemento = dsl.webElement('xpath', `//div[@class="infoField"] //*[contains(text(),"${valor}")]`)
       return this.verificarElemento
    }

    titulo(valor){
        this.verificarTitulo = dsl.webElement('xpath', `//h2[text()="${valor}"]`)
        return this.verificarTitulo
    }

    acessarProjetos(valor) {
        this.acessarProj = dsl.webElement('xpath', `//*[@id='ResultSection'] //*[contains(text(),"${valor}")]`)
        return this.acessarProj
    }
}

module.exports = BasicObjects