#language: pt
Funcionalidade: H:62317 - Manter a tela de anexos aberta após a liberação do texto
    Objetivo: Após a liberação de anexos a tela deve continuar aberta

@liberacaodeanexo
Cenário: Vizualizar data em que o texto foi liberado
    Dado que estou na tela de liberação de anexo de algum projeto
    Quando libero ou deslibero algum anexo
    Então a tela de liberar anexo continua em aberto