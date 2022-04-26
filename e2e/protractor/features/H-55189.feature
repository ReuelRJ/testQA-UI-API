#language: pt
Funcionalidade:H:55189 - Busca livre de obra literária
    Objetivo: Usar a busca livere para procurar projetos de obra literaria

@buscaTituloObraLiteraria
Cenário: Busca por Título
    Dado que possuo uma palavra no Titulo: "Obra Literaria - Teste Automatizado" da Obra Literária
    Quando informo essa palavra no campo de busca
    Então visualizo o resultado com a Obra Literária buscada