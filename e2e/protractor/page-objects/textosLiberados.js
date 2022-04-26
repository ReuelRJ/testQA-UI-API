const { expect } = require('chai')
const { element } = require('protractor')
const Dsl = require('../page-objects/dsl')
const dsl = new Dsl()
const prot = require('protractor')
let fs = require('fs');

class textosLiberados{
    constructor(){
        this.spanProjetoDramaturgia = dsl.webElement('xpath', '//*[@id="ReleasedTexts"]//span[contains(text(), "Projeto Teste Dramaturgia")]')
        this.h2Titulo = dsl.webElement('xpath', '//h2[text()="Textos Liberados"]')
        this.liDownload = dsl.webElement('xpath', '//*[@id="root"]/div/div[2]/div/div[8]/ul/li[5]')
        this.liRecebidoEm = dsl.webElement('xpath', '//*[@id="ReleasedTexts"]/div[3]/ul[1]/li/div[2]/div/div[1]/ul/li[4]')
        this.liTipoMaterial = dsl.webElement('xpath', '//*/div[3]//ul[1]//div[@class="contentAttachments"]//*[contains(text(), "Material Complementar")]')
        this.selectCanaisProdutos = dsl.webElement('xpath','//select[@id="channels"]')
        this.selectCanais = dsl.webElement('xpath', '//select[@id="product/service"]')
        this.optionCanaisProduto = dsl.webElement('xpath', '//option[@value="2306"]') //canais Globo
        this.optionCanal = dsl.webElement('xpath', '//option[@value="2317"]')//Universal
        this.divBtnFiltrar = dsl.webElement('xpath', '//span[@class="undefined"][contains(text(), "Filtrar")]')
        this.ulCards = dsl.webElement('xpath', '//div[@id="ReleasedTexts"]/div[4]/ul[1]/li/a/div/div[1]/div[1]/span')
        this.divCPTag = dsl.webElement('xpath', '//div[@class="tags"]/div[1]//*[contains(@class, "removeTag")]')
        this.divCTag = dsl.webElement('xpath', '//div[@class="tags"]/div[2]//*[contains(@class, "removeTag")]')
        this.cartoes = dsl.webElement('xpath', '//a[contains(@href, "/texto-liberado/")]')
        this.aCartaoTest = dsl.webElement('xpath', '//a[@href="/texto-liberado/7774"]')
        this.divListProject = dsl.webElement('xpath', '//div[@class="ReleasedListAttachments"]')
        this.spanGoBack = dsl.webElement('xpath', '//span[@class="goBackResponsiveText"]')
        this.liLiberadoEm = dsl.webElement('xpath', '//div[5]/ul/li[@class="receivedAt"]')
    }

    deleteAlreadyDownloadedFiles(fileName) {
        if (fs.existsSync(fileName))
        {
          fs.unlinkSync(fileName);
        }
    }

    verifyFileDownload(fileName) {
        prot.browser.wait(function() {
            return fs.existsSync(fileName);
        }, 30000).then(function() {
            console.log("ERROR while downloading file");
    })}

        /*this.checkDownload = async function checkDownload(FileName) {
            let fileName = 'undefined.txt'
            if ((await browser.getCapabilities()).get('browserName') === 'chrome') {
                await prot.browser.get('chrome://downloads/');
                const items = await prot.browser.executeScript('return downloads.Manager.get().items_');
                expect(items.length).toBe(1);
                expect(items[0].file_name).toMatch(fileName);
            }
        };*/
    
    /*randonCanaisProdutos() {
        let numeros = [2306, 2305, 2324, 2319, 2301]
        let numero = numeros[Math.floor(Math.random() * numeros.length)]; 
        this.cP = dsl.webElement('xpath', `//option[@value="${numero}"]`)
        return this.cP
    }*/

    /*randonCanais (){
        let numeros = [2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2322, 2320, 2321, 2302, 2303, 2304]
        let numero = numeros[Math.floor(Math.random() * numeros.length)]; 
        this.cP = dsl.webElement('xpath', `//option[@value="${numero}"]`)
        return this.cP
    }*/

    cards(){
        let valores = []
        valores.push(this.cartoes)
        return valores
    }
}
module.exports = textosLiberados

