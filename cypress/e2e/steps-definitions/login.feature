#encoding: utf-8
#language: pt

@login
Funcionalidade: Login de usuário

@login_positive
Cenário: Deve fazer login com o usuário criado
  Dado que tenho a massa para fazer login
  Quando faço a requisição post
  Então vejo o status code 200
  E vejo a mensagem de sucesso "Login Successful"