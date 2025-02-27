#encoding: utf-8
#language: pt

@create_user
Funcionalidade: Criar conta de usuário

Cenário: Criar conta de usuário válido
  Dado que tenho uma massa válida
  Quando envio a requisição post para cadastro
  Então é exibido o status code 200
  E a resposta de confirmação do cadastro