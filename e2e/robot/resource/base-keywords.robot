*** Keywords ***
Abrir navegador
    [Arguments]                      ${AMBIENTE}          ${NAVEGADOR}         ${USER}    ${PASS}
    Open Browser                     ${AMBIENTE}          ${BROWSER_CHROME}    
    Maximize Browser Window
    Login                            ${USER}              ${PASS}
    Wait Until Element Is Visible    ${INPUT_BUSCAR}

Login
    [Arguments]                      ${USER}                       ${PASS}
    Sleep                            2 
    Wait Until Element Is Visible    ${NAME_USER}
    Input Text                       ${NAME_USER}                  ${USER}
    Click Element                    ${BUTTON_AVANCAR}
    Wait Until Element Is Visible    ${PASS_USER}
    Input Text                       ${PASS_USER}                  ${PASS}
    Wait Until Element Is Visible    ${BUTTON_AVANCAR}
    Click Element                    ${BUTTON_AVANCAR}
    Sleep                            1        
    Wait Until Element Is Visible    ${CHECK_BOX_NMIN}
    Click Element                    ${CHECK_BOX_NMIN}
    Click Element                    ${BUTTON_AVANCAR}
    Wait Until Element Is Visible    ${IMG_SCRIPT_ICON}
    Wait Until Element Is Visible    ${mapa_conflito}              timeout=120

Dado que estou na tela inicial do sistema
    ${TITLE}           Get Title
    Should Be Equal    ${TITLE}     SGCA Web

Buscando Lista de Projetos
    [Documentation]                  Fazendo uma busca de todos os projetos cadastrados
    [Tags]                           Simples                                               Busca
    Input Text                       ${campo_de_busca}                                     qa
    Click Element                    ${IMG_SEARCH_ICON}
    Wait Until Element Is Visible    ${LISTA_BUSCA_PROJETOS}   