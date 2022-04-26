*** Settings ***
Library    SeleniumLibrary 
Library    String
Library    BuiltIn
Library    Collections

*** Variable ***
${BROWSER_CHROME}     chrome
${BROWSER_FIREFOX}    firefox

${user1}    QA_teste1@g.globo
${pass1}    hAIyh+@YsO21$MC

${user2}    QA_teste2@g.globo
${pass2}    4>5Yl?Ym1?7)*AO

${user3}    QA_teste3@g.globo
${pass3}    %axf_aw<0pCf3$7

${user4}    QA_teste4@g.globo
${pass4}    $2kTD,R[f%CV/wE

${user5}    QA_teste5@g.globo
${pass5}    vpLl!2XjhZ(_0Dw

${user6}    QA_teste6@g.globo
${pass6}    nkYmE2XMpF/uuYW

${AmbienteLocal}    http://localhost:3000/
${AmbienteDev}      https://script.dev.entretenimento.g.globo/
${AmbienteQua}      https://script.qua.entretenimento.g.globo/ 

${NAME_USER}         name=loginfmt
${PASS_USER}         name=passwd
${BUTTON_AVANCAR}    id=idSIButton9
${CHECK_BOX_NMIN}    id=KmsiCheckboxField

${SEM_RESULTADOS}    xpath=//*[@class="mainText"]

${ABA_TODOS}             xpath=//*[@class="searchesNavigationContainer"] //*[contains(text(),'Todos')]
${ABA_DRAMATURGIA}       xpath=//*[@class="searchesNavigationContainer"] //*[contains(text(),'Dramaturgia')]
${ABA_VARIEDADES}        xpath=//*[@class="searchesNavigationContainer"] //*[contains(text(),'Variedades')]
${ABA_OBRA_LITERARIA}    xpath=//*[@class="searchesNavigationContainer"] //*[contains(text(),'Obra Liter')]
${ABA_OBRA_PESQUISA}     xpath=//*[@class="searchesNavigationContainer"] //*[contains(text(),'Pesquisa')]