#language: pt
Funcionalidade: H:55205 - Ficha de obra literária (dados básicos)
    Objetivo: Alterar os dados básicos de uma Ficha de Obra Literária 

@buscaObraLiterária
Cenário: Buscar Obra Literária
    Dado que possuo uma palavra no Titulo: "Conde de Toscânia" da Obra Literária
    Quando insiro essa palavra no campo de busca
    Então visualizo o resultado com a Obra Literária buscada e a acesso

@AcessarObraLiterária
Cenário: Visualização de dados básicos
    Dado que estou na ficha de obra literária
    Quando acesso as informações de dados básicos
    Então visualizo os dados básicos preenchidos

@AlterarObraLiterária
Cenário: Alterar Obra Literária
    Dado que estando ainda na ficha de obra literária
    Quando acesso as informações de dados básicos e altero os campos existentes
    Então visualizo a alteração na ficha da obra literária