#language: pt
Funcionalidade: H:62275 - Página de anexos liberados do projeto
    Objetivo: Verificar a exbição da página de Textos Liberados

@VisualizarCards
Cenário: Visualização de projetos em cards
    Dados que possuo acesso a página de Textos Liberados
    Quando acesso a página
    Então visualizo os projetos com textos liberados em cards e não mais como lista

@ValidarLista
Cenário: Validar lista de anexos liberados em uma nova página
    Dado que estou na página de Textos Liberados
    Quando acesso o projeto
    Então visualizo a lista de textos liberados para ele em uma nova página

@VoltarAosProjetos
Cenário: Voltar para os cards de projetos
    Dado que estou na página de Textos Liberados de um projeto específico
    Quando acesso a função de voltar
    Então sou direcionada de volta para a página de cards dos projetos