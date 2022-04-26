#language: pt
Funcionalidade: H:61724 - Está sendo exibida a data de recebimento e não a de liberação - BUG
    Objetivo: Mostrar a data em que foi liberado o texto

@dataDeLiberaçãoArquivo
Cenário: Vizualizar data em que o texto foi liberado
    Dado que faço a liberação de um texto com a data de recebimento anterior a data atual
    Quando acesso a página de textos liberados
    Então vizualizo o projeto com a data de liberação na data atual
