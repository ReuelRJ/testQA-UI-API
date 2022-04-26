const expect = require('chai').use(require('chai-as-promised')).expect
const prot = require('protractor')
const EC = prot.ExpectedConditions;
const commons = require('../files/conf.json')

var util = require('util')

class Dsl {

  // openUrl(url) {
  //   return prot.browser.get(url);
  // }
  openUrl(url) {
    return prot.browser.get(url);
  }

  sendKeys(element, value, logText) {

    this.waitVisibilityOf(element, 2000, logText);

    logText = logText || 'Function sendKeys:';

    return element.sendKeys(value).then((found) => Promise.resolve(found))
      .catch((waitError) => {
        return Promise.reject(this.logTextFormatted(logText, waitError, element));
      });
  }

  click(element, logText, time) {

    time = time || 30;
    this.waitVisibilityOf(element, time * 1000, logText);
    logText = logText || 'Function click:';

    return element.click().then((found) => Promise.resolve(found))
      .catch((waitError) => {
        return Promise.reject(this.logTextFormatted(logText, waitError, element));
      });
  }

  select(element, option, logText) {
    this.waitVisibilityOf(element, 10000, logText);

    logText = logText || 'Function select';

    return element.select(option).then((found) => Promise.resolve(found))
      .catch((waitError) => {
        return Promise.reject(this.logTextFormatted(logText, waitError, element));
      });
  }

  sendAndSearch(webElement, value) {
    webElement.sendKeys(value)
    const action = webElement.getAttribute("id").then(function (id) {
      const clickOption = prot.element(prot.by.xpath(`//div[contains(@id,'${`${id.replace('-input', '')}-option-`}')][text()='${value}']`))
      prot.browser.wait(EC.visibilityOf(clickOption), 40000);
      clickOption.click()
    });
    return action
  }

  login(url, user, pass) {
    this.openUrl(url)
    this.sleep(2)
    this.waitVisibilityOf(this.webElement('name', 'loginfmt'), 60000)
    this.sendKeys(this.webElement('name', 'loginfmt'), user)
    this.click(this.webElement('id', 'idSIButton9'))

    this.waitVisibilityOf(this.webElement('name', 'passwd'), 60000)
    this.sendKeys(this.webElement('name', 'passwd'), pass)
    this.click(this.webElement('id', 'idSIButton9'))

    this.sleep(2)
    this.waitVisibilityOf(this.webElement('id', 'KmsiCheckboxField'), 60000)
    this.click(this.webElement('id', 'KmsiCheckboxField'))
    this.click(this.webElement('id', 'idSIButton9'))

    this.waitVisibilityOf(this.webElement('xpath', '//a[@href="/mapa-conflitos"]'), 120000)
    return this.sleep(1000)
  }

  sendAndSearchPreponente(webElement, value) {
    webElement.sendKeys(value)
    const action = webElement.getAttribute("id").then(function (id) {
      const clickOption = prot.element(prot.by.xpath(`//div[contains(@id,'${`${id.replace('-input', '')}-option-0`}')][text()='Adicionar a opção: "${value}"']`))
      prot.browser.wait(EC.visibilityOf(clickOption), 40000);
      clickOption.click()
    });
    return action
  }

  getText(element, logText) {
    this.waitVisibilityOf(element, 10000, logText);
    logText = logText || 'Function getText';
    return prot.element(element).getText().then((found) => Promise.resolve(found))
      .catch((waitError) => {
        return Promise.reject(this.logTextFormatted(logText, waitError, element));
      });
  }

  waitVisibilityOf(element, maxWaitTime, logText) {
    logText = logText || 'Function waitVisibilityOf';
    maxWaitTime = maxWaitTime || 40000;
    return prot.browser.wait(EC.visibilityOf(element), maxWaitTime)
      .then((found) => Promise.resolve(found))
      .catch((waitError) => {
        return Promise.reject(this.logTextFormatted(logText, waitError, element));
      });
  }

  waitInvisibilityOf(element, maxWaitTime, logText) {
    logText = logText || 'Function waitInvisibilityOf';
    maxWaitTime = maxWaitTime || 10000;
    return prot.browser.wait(EC.invisibilityOf(element), maxWaitTime).then((found) => Promise.resolve(found))
      .catch((waitError) => {
        return Promise.reject(this.logTextFormatted(logText, waitError, element));
      });
  }

  expectIsElementPresent(element) {
    return expect(prot.element(element).isPresent()).to.eventually.equals(true);
  }

  expectIsElementNotPresent(element) {
    return expect(prot.element(element).isPresent()).to.eventually.equals(false);
  }

  expectTextToBeEqual(element, value) {
    return expect(this.getText(element)).toEqual(value);
  }

  sleep(time) {
    return prot.browser.sleep(time)
  }

  scrollTo(scrollToElement) {
    var wd = prot.browser.driver;
    return scrollToElement.getLocation().then((loc) => {
      return wd.executeScript('window.scrollTo(0,arguments[0]);', loc.y);
    });
  };

  webElement(type, txtElement) {

    if (this.areEqual(type, 'css'))
      return prot.element(prot.by.css(txtElement));
    else if (this.areEqual(type, 'xpath'))
      return prot.element(prot.by.xpath(txtElement));
    else if (this.areEqual(type, 'id'))
      return prot.element(prot.by.id(txtElement));
    else if (this.areEqual(type, 'name'))
      return prot.element(prot.by.name(txtElement));

  }

  areEqual(var1, var2) {
    return var1.toUpperCase() === var2.toUpperCase();
  }

  logTextFormatted(logText, waitError, element) {
    return `${logText} ${waitError} for the element: ${this.convertWebElementToString(element)}`
  }

  convertWebElementToString(element) {
    return util.inspect(element).toString().split('value: \'')[1].split('\' },')[0]
  }
}

module.exports = Dsl