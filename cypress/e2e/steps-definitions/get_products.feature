# encoding: utf-8
# language: pt

@get_products
Funcionalidade: Consultar produtos

Esquema do Cenário: Deve consultar um produto por nome
  Dado que tenho a URL disponível para consultas de produtos
  Quando faço a requisição do produto "<nameProduct>"
  Então o produto retornado deve ser "<nameProduct>"

  Exemplos:
  | nameProduct                                    |
  | Beats Studio 2 Over-Ear Matte Black Headphones |
