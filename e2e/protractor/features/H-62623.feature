#language: pt
Funcionalidade: H:62623 - Ver planejamento de episódios na ficha do projeto
    Objetivo: ver os anexos de episódios de dramaturgia curta com as datas de planejamento de entrega e liberação de texto
    para conseguir identificar claramente o cronograma para eles

@verAreaDeEpisodeos
Cenário: Ver a área de Episódio na ficha do projeto
    Dado que pesquisei um projeto de dramaturgia curta
    Quando acesso a ficha do projeto
    Então visualizo a aba de Episódios

@visualizacaoOrdenadaDeEpisodeos
Cenário: Visualização de episódios ordenados
    Dado que estou na ficha de um projeto de dramaturgia curta
    Quando acesso a aba de Episódios e vejo que possuo episódios cadastrados
    Então vejo os episódios existentes para o projeto ordenados de forma crescente

@acessarVersaoEpisodeo
Cenário: Acesso de versões dos episódios agrupadas e ordenadas
    Dado que possuo versões cadastrados em um episódio
    Quando acesso o agrupamento do episódio
    Então visualizo todas as versões do episódio ordenadas de forma decrescente

@projetoNaoPossuiEpisodeo
Cenário: Projeto que não possui nenhum episódio cadastrado
    Dado que acessei e estou na ficha de um projeto de dramaturgia curta
    Quando acesso a aba de Episódios vejo que não possuo blocos
    Então vejo a mensagem informando que ainda não existem blocos cadastrados
    