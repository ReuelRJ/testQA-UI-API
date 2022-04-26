#language: pt
Funcionalidade: H:62292 - Ver planejamento de capítulos na ficha do projeto
    Objetivo: ver os anexos de capítulos de dramaturgia longa com as datas de planejamento de entrega e liberação de texto
    para conseguir identificar claramente o cronograma para eles

@capituloNaFicha
Cenário: Ver a área de Capítulo na ficha do projeto
    Dado que pesquisei um projeto de dramaturgia longa
    Quando acesso a ficha do projeto
    Então visualizo a aba de Capítulos

@visualizaçãodeBlocos
Cenário: Visualização de blocos de capítulos e episódios
    Dado que estou na ficha de um projeto de dramaturgia longa
    Quando acesso a aba de Capítulos
    Então vejo os blocos existentes para o projeto

@acessarCapitulosAgrupados
Cenário: Acesso de capítulos agrupados em blocos
    Dado que possuo capítulos cadastrados em um bloco
    Quando acesso o agrupamento do bloco
    Então visualizo as informações do capítulo

@versaoDeCapitulos
Cenário: Acesso às versões de capítulos
    Dado que possuo mais de uma versão cadastrada para um capitulo
    Quando acesso o agrupamento de versões
    Então visualizo todas as versões disponíveis

@validarOrdenacao
Cenário: Validar ordenação dos anexos
    Dado que estou vizualizando as versões no projeto de dramaturgia longa
    Quando verifico a ordenção
    Então visualizo a ordenação padrão

@projetoSemCapitulo
Cenário: Projeto que não possui nenhum bloco cadastrado
    Dado que acessei e estou na ficha de um projeto de dramaturgia longa
    Quando acesso a aba de Capítulos vejo que não possuo blocos
    Então vejo a mensagem informando que ainda não existem blocos cadastrados