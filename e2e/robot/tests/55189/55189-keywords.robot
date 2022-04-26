*** Keywords ***
#BDD Area
#Dado
Dado que possuo uma palavra no Titulo: "${TITULO}" da Obra Literária
    Set Global Variable    ${TITULO}

Dado que possuo uma Obra Literária com um Formato: "${GENERO}""
    Set Global Variable    ${GENERO}

Dado que possuo uma Obra Literária com um Formato: "${FORMATO}"
    Set Global Variable    ${FORMATO}

Dado que possuo uma Obra Literária com um Gênero: "${GENERO}"
    Set Global Variable    ${GENERO}

Dado que possuo uma Obra Literária com um Universo: "${UNIVERSO}"
    Set Global Variable    ${UNIVERSO}

Dado que possuo uma Obra Literária com um Autor: "${AUTOR}"
    Set Global Variable    ${AUTOR}

Dado que possuo uma Obra Literária com uma Editora: "${EDITORA}"
    Set Global Variable    ${EDITORA}

Dado que possuo uma Obra Literária com um talento ou proponente em 'Proposto por': "${PROPONENTE}"
    Set Global Variable    ${PROPONENTE}

Dado que estou no resultado da busca
    Input Text                       ${campo_de_busca}        teste
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}



#Quando
Quando informo essa palavra no campo de busca
    Input Text       ${campo_de_busca}     ${TITULO}
    Click Element    ${IMG_SEARCH_ICON}

Quando informo esse formato no campo de busca
    Input Text                       ${campo_de_busca}        ${FORMATO}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando informo esse Autor no campo de busca
    Input Text                       ${campo_de_busca}        ${AUTOR}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_OBRA_LITERARIA}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando informo essa Editora no campo de busca
    Input Text                       ${campo_de_busca}        ${EDITORA}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_OBRA_LITERARIA}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando informo essa pessoa no campo de busca
    Input Text                       ${campo_de_busca}        ${PROPONENTE}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando informo esse genero no campo de busca
    Input Text                       ${campo_de_busca}        ${GENERO}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando informo esse universo no campo de busca
    Input Text                       ${campo_de_busca}        ${UNIVERSO}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando busco por uma palavra que não está em nenhum campo de Obra Literária: "${NO_RESULT}"
    Input Text       ${campo_de_busca}     ${NO_RESULT}
    Click Element    ${IMG_SEARCH_ICON}

Quando busco por uma palavra que está em algum campo de Obra Literária: "${PALAVRA}"
    Set Global Variable              ${PALAVRA}
    Input Text                       ${campo_de_busca}        ${PALAVRA}
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}

Quando clico em uma obra literária
    Wait Until Element Is Visible    //*[@class="titleText"]    timeout=10
    Click Element                    //*[@class="titleText"]


#Então
Então visualizo o resultado com a Obra Literária buscada
    [Arguments]                      ${LOCATOR}
    Wait Until Element Is Visible    ${LOCATOR}    timeout=10

Então visualizo o resultado com a ficha de Obra Literária buscada
    [Arguments]                      ${LOCATOR}
    Wait Until Element Is Visible    //*[@id="ResultSection"]/div/div/div/div[2]/div[1]/div[2]/a/span/span    timeout=10
    Click Element                    //*[@id="ResultSection"]/div/div/div/div[2]/div[1]/div[2]/a/span/span
    Wait Until Element Is Visible    ${LOCATOR}                                                               timeout=10

Então visualizo a obra literária no resultado junto com os demais projetos e pesquisas
    [Arguments]                      ${LOCATOR}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}
    Wait Until Element Is Visible    ${LOCATOR}

# Então visualizo o resultado com "${PESQUISA}" Obra Literária buscada
#    [Arguments]                      ${LOCATOR}
#    Wait Until Element Is Visible    ${LOCATOR}    timeout=10

Então não visualizo a aba de Obra Literária ou resultados de obra literária
    [Arguments]                      ${LOCATOR}
    Wait Until Element Is Visible    ${LOCATOR}    timeout=10
    Element Text Should Be           ${LOCATOR}    Nenhum resultado encontrado

Então visualizo a obra literária no resultado apenas de Obra Literária
    [Arguments]                      ${LOCATOR}
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}
    Wait Until Element Is Visible    ${LOCATOR}

Então sou direcionado para a ficha dela
    Wait Until Element Is Visible    //*[@class="projectTitle"] //*[contains(text(),'teste')]

# E
E existem obras literárias apresentadas no resultado
    Wait Until Element Is Visible    ${ABA_TODOS}
    Click Element                    ${ABA_OBRA_LITERARIA}

#BDD Area