#language: pt
Funcionalidade: H:62318 - Busca não encontra o título que está na primeira página
    Objetivo: Fazer a busca de um projeto que está na página um ao acessar a página 2

@busca
Cenário: buscar projeto
    Dado que estou na página um de textos liberados
    Quando quando acesso a página dois e busco a palavra episódeo no campo Título do Projeto
    Então visualizo o projeto referente a essa palavra que estava na página um