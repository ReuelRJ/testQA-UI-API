#language: pt
Funcionalidade:H:59929 - Download do arquivo individualmente
    Objetivo: Conseguir realizar download dos arquivos individualmente

@downloadDeArquivo
Cenário: Download realizado com sucesso
    Dado que estou na página de textos liberados e estou visualizando textos liberados do projeto
    Quando clico para realizar download do arquivo
    Então o download é realizado com sucesso