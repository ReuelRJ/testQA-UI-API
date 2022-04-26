const { element, By, by } = require('protractor');
const prot = require('protractor')
const EC = prot.ExpectedConditions;
const Dsl = require('../page-objects/dsl')
const dsl = new Dsl()

class ProjetoDramaturgia{
    constructor(){
        this.acessarProjeto = dsl.webElement('xpath', `//*[@id='ResultSection'] //*[contains(text(),'Projeto Teste Dramaturgia')]`);
        this.spanAnexos = dsl.webElement('xpath', '//span[text()="  Ver todos os anexos"]');
        this.liTipo = dsl.webElement('xpath', '//li[@class="groupList"]//*[contains(text(), "Material Complementar")]')
        this.spanLiberar = dsl.webElement('xpath', '//*[@id="TableListFiles"]/div[2]/div/ul/li[3]/div[1]/div/span[3]')
        this.spanRecebidoEm = dsl.webElement('xpath', '//*[@id="TableListFiles"]/div[2]/div/ul/li[8]/div[1]/span[4]')
        //this.divSwitchFalse = dsl.webElement('xpath', '//div[@class="switch false"]')
        this.divSwitchOn = dsl.webElement('xpath', '//div[@class="switch switchOn"]')
        this.buttonSalvar = dsl.webElement('xpath', '//div[@class="buttonGreen medium button undefined active simpleButton"]')
        this.buttonVoltar = dsl.webElement('xpath', '//div[@class="buttonCancel medium button undefined  simpleButton"]')
        this.h2TituloProjeto = dsl.webElement('xpath', '//h2[text()="Projeto Teste Dramaturgia"]')
        this.divTelaLibAnexo = dsl.webElement('xpath', '//div[@class="windowScriptBox"]')
        this.divCLoseLiberarAnexo = dsl.webElement('xpath', '//*/div[2]/div[2]/div[2]/div/div/div/div/div')
        this.divSwitchKey = dsl.webElement('xpath', '//div[@class="switchKey"]')
        this.h2Liberacao = dsl.webElement('xpath', '//h2[text()="Liberação de texto"]')
        this.spanCapituloEp = dsl.webElement('xpath', '//span[@class="chapterNumber"][contains(text(), "2")]')
        this.spanAbaEpisodios = dsl.webElement('xpath', '//div[@class="projectSheetTabs"]//*[contains(text(), "Episódios")]')
        this.spanAbaCapitulos = dsl.webElement('xpath', '//div[@class="projectSheetTabs"]//*[contains(text(), "Capítulos")]')
        this.liBlocos = dsl.webElement('xpath', '//li[@class="blockListItem "]//*[contains(text(), "Bloco")]')
        this.liblocoUm = dsl.webElement('xpath', '//span[text()="Bloco 1"]')
        this.allblocos = element.all(by.className("blockListItem "))
        this.spanNumCap = dsl.webElement('xpath', '//*[@id="BlocksOrChaptersTable"]/ul/li[1]/div[1]/div[1]/span[2]')
        this.liCapitulos = element.all(by.xpath('//ul/li[1]//li[@class="attachmentItem "]'))
        this.spanEpisodes = element.all(by.className('episode mainCell'))
        this.spanVersoes = element.all(by.xpath('//ul/li[1]/div[3]//li[3]//li/span[@class="version"]'))
        this.spanVersoesEp = element.all(by.xpath('//ul/li[1]/div[3]//li/span[@class="version"]'))
        this.spanMessage = dsl.webElement('xpath', '//span[@class="message"]')
        this.verificarFicha = dsl.webElement('xpath', '//span[@class="sheetTab active"][contains(text(), "Episódios")]')
    }

    liberarAnexo(){
        if (this.divSwitchOn.isPresent()){
            dsl.click(this.divSwitchKey)
        } else {
            dsl.click(this.divSwitchKey)
        }
    }

    acessarCapitulo (capitulo) {
        if(this.verificarFicha.isPresent()){
            this.capitulos = dsl.webElement('xpath', `//span[@class="episode mainCell"][contains(text(), "${capitulo}")]`)
            return this.capitulos
        }else {
            this.episodios = dsl.webElement('xpath', `//ul/li[1]//div[@class="chapterItem"]//*[contains(text(), "${capitulo}")]`)
            return this.episodios
        }
    }

    pegarVersao(numero){
        if(this.verificarFicha.isPresent()){
            this.numeroVersoes = dsl.webElement('xpath', `//ul/li[1]/div[3]/div/ul/li[${numero}]/span[@class="version"]`)
            return this.numeroVersoes
            //versao Episodeo
        } else {
            this.numeroVersoes = dsl.webElement('xpath', `//ul/li[1]/div[3]//li[3]//li[${numero}]/span[@class="version"]`)
            return this.numeroVersoes
            //versao capitulo
        }
    }

    pegarEpisodeo(numero){
        this.numeroEpisode = this.webElement('xpath', `//ul/li[${numero}]/div[1]/div[1]/span[@class="episode mainCell"]`)
        return this.numeroEpisode
    }
}

module.exports = ProjetoDramaturgia