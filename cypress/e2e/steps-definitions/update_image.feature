# encoding: utf-8
# language: pt

@update_image_product
Funcionalidade: Atualizar imagem do produto

Cenário: Deve atualizar a imagem do produto
  Dado que estou logado
  Quando atualizo a imagem do produto
  Então é retornado a confirmação da atualização