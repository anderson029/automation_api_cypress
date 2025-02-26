
# Automation_api_cypress

Este projeto é uma automação de testes de API utilizando o Cypress. 
Ele foi configurado para facilitar a execução de testes automatizados em APIs, com a capacidade de exibir o response da API diretamente na tela durante a execução dos testes.

## 🔧 Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado na versão 20.11 ou superior. Você pode verificar a versão instalada executando o comando:

  ```bash
  node -v
Se necessário, você pode baixar e instalar o Node.js a partir do site oficial.

## 🚀 Techs
- Node
- Cypress


## ⚙️Começando
Instale o Cypress:

No terminal, execute o seguinte comando para instalar o Cypress como uma dependência de desenvolvimento:

    npm install cypress --save-dev

**Abrir o Cypress:**

Após a instalação, você pode abrir a interface do Cypress executando o comando:

    npx cypress open

**Instalar o Plugin cypress-plugin-api**:

Para exibir o response da API na tela durante a execução dos testes, instale o plugin cypress-plugin-api:

    npm i cypress-plugin-api
Este plugin facilita a visualização das respostas da API diretamente na interface do Cypress.

**Execução:**
Executando os Testes
Para executar os testes, você pode utilizar a interface gráfica do Cypress ou rodar os testes diretamente no terminal.

**Interface Gráfica:**

    npx cypress open

**Terminal:**

    npx cypress run