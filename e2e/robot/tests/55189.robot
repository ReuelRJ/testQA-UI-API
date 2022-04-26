*** Settings ***
Documentation    Busca livre de obra literária
Test Setup       Abrir navegador                         ${AmbienteDev}    ${BROWSER_CHROME}    ${user1}    ${pass1}
Test Teardown    Close All Browsers
Resource         ../resource/base-configuration.robot
Resource         ../resource/base-keywords.robot
Resource         ../resource/home.robot
Resource         55189/55189-keywords.robot

*** Variable ***


*** Test Cases ***
Cenário: Busca por Título
    Dado que possuo uma palavra no Titulo: "Obra Literaria - Teste Automatizado" da Obra Literária
    Quando informo essa palavra no campo de busca
    Então visualizo o resultado com a Obra Literária buscada                                          //*[@id="ResultSection"] //*[contains(text(),'${TITULO}')]

Cenário: Busca por Formato
    Dado que possuo uma Obra Literária com um Formato: "Livro"
    Quando informo esse formato no campo de busca
    Então visualizo o resultado com a Obra Literária buscada      //*[@class="complementariesInfo"] //*[contains(text(),'${FORMATO}')]

Cenário: Busca por Autor
    Dado que possuo uma Obra Literária com um Autor: "J. K. Rowling"
    Quando informo esse Autor no campo de busca
    Então visualizo o resultado com a Obra Literária buscada            //*[@class="creatorName"] //*[contains(text(),'${AUTOR}')] 

Cenário: Busca por Editora
    Dado que possuo uma Obra Literária com uma Editora: "Avira"
    Quando informo essa Editora no campo de busca                        
    Então visualizo o resultado com a ficha de Obra Literária buscada    //*[@class="infoDataList"] //*[contains(text(),'${EDITORA}')]

Cenário: Busca por Proposto por
    Dado Que Possuo Uma Obra Literária Com Um Talento Ou Proponente Em 'Proposto por': "walcyr"
    Quando informo essa pessoa no campo de busca
    Então visualizo o resultado com a Obra Literária buscada                                       //*[@class="creatorName"] //*[contains(text(),'${PROPONENTE}')] 

Cenário: Busca por Gênero
    Dado que possuo uma Obra Literária com um Gênero: "Drama"
    Quando informo esse genero no campo de busca
    Então visualizo o resultado com a Obra Literária buscada     //*[@class="complementariesInfo"] //*[contains(text(),'${GENERO}')]

Cenário: Busca por Universo
    Dado que possuo uma Obra Literária com um Universo: "Carnaval"
    Quando informo esse universo no campo de busca
    Então visualizo o resultado com a Obra Literária buscada          //*[@class="complementariesInfo"] //*[contains(text(),'${UNIVERSO}')]

Cenário: Busca sem resultado
    Dado que estou na tela inicial do sistema                                                  
    Quando busco por uma palavra que não está em nenhum campo de Obra Literária: "xpto3454"
    Então não visualizo a aba de Obra Literária ou resultados de obra literária                ${SEM_RESULTADOS}

Cenário: Visualização de todos os resultados com obra literária
    Dado que estou na tela inicial do sistema
    Quando busco por uma palavra que está em algum campo de Obra Literária: "teste"
    Então visualizo a obra literária no resultado junto com os demais projetos e pesquisas    //*[@class="searchListItem"] //*[contains(text(),'${PALAVRA}')]

Cenário: Visualização de resultados apenas obra literária
    Dado que estou na tela inicial do sistema
    Quando busco por uma palavra que está em algum campo de Obra Literária: "obra"
    Então visualizo a obra literária no resultado apenas de Obra Literária            //*[@id="ResultSection"] //*[contains(text(),'${PALAVRA}')]

Cenário: Validar acesso a ficha do projeto através do resultado da busca
    Dado que estou no resultado da busca
    E existem obras literárias apresentadas no resultado
    Quando clico em uma obra literária
    Então sou direcionado para a ficha dela