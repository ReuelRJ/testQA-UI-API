#language: pt
Funcionalidade: H:61040 - Filtro de projetos por Canais para textos liberados
    Objetivo: Filtrar os projetos pelos CANAIS-PRODUTO da ficha do projeto.

@filtroPrimeiroNível
Cenário: Filtrar apenas por primeiro nível
    Dado que possuo textos liberados para o Canal-Produto na tela de Textos Liberados
    Quando confirmo a opção selecionada do Canal-Produto
    Então visualizo apenas os projetos com textos liberados para esse Canal

@filtroSegundoNível
Cenário: Filtrar por segundo nível
    Dado que estou na tela de Textos Liberados e possuo textos liberados para o Canal-Produto e Canais
    Quando confirmo a opção selecionada do Canal-Produto e Canais
    Então visualizo apenas os projetos com textos liberados para esse Canal-Produto e seu segundo nível

@filtroTerceiroNível
Cenário: Excluir o filtro pesquisado
    Dado que visualizo os filtros da pesquisa na tela de Textos Liberados
    Quando excluo os filtros selecionados
    Então visualizo a pesquisa refeita sem o filtro excluído