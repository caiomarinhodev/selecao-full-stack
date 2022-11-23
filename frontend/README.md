# Frontend para Beeteller - Cotacoes

Hub que permitirá listar cotações em tempo real de algumas moedas utilizando algumas APIs.

## 📝 Descrição

Este projeto foi desenvolvido com Angular Framework, utilizando:
- Angular CLI 6.2.9.
- NPM 6.14.17
- Node 14.20.0 

## 🚀 Instalação

Para rodar a aplicação você deverá se certificar que está utilizando a versão 14.20.0 do Node e a versão 6.14.17 do NPM.
O CLI do Angular deve estar instalado na sua máquina.

### 1. Instale o Node e o NPM na sua máquina
Se estiver no Windows:
- Baixe e instale o NodeJS v14.20.0: https://nodejs.org/en/download/

Se estiver no Linux, rode os comandos abaixo:
```sh
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```
```sh
$ sudo apt install nodejs
```
### 2. Instale o Angular CLI
Agora, que temos o Node e o NPM instalados, instale o Angular CLI:

```sh
$ npm install -g @angular/cli
```

### 3. Instale as dependencias do projeto
Instale todas as dependencias do projeto:
```sh
$ npm install
```

Execute:
```sh
$ npm rebuild node-sass
```

## 📦 Execução

Para executar a aplicação, basta rodar o comando abaixo:
```sh
$ npm start
```
Finalmente, acesse http://localhost:4200 (frontend app).


## Testes

Todos os testes criados são testes de end-to-end (e2e), construídos com a biblioteca Cypress. Nestes testes temos a verificação dos componentes presentes na tela de acordo com requisitos pré-definidos, além da verificação de fluxos de navegação e de interação com o usuário.


Para rodar os testes implementados, é necessário que o BACKEND esteja ligado, para que as funcionalidades implementadas possam requisitar a API corretamente. Para isto, basta executar o comando abaixo:

```bash
  npm run e2e
```

Uma suíte com os testes irá rodar. Você pode verificar o resultado no terminal. Os testes podem ser encontrados em `frontend/cypress/e2e/cotacoes/`.

Se você tiver conhecimento de Cypress, é possível acessar a GUI do Cypress para visualizar os testes e rodá-los individualmente. Para isto, basta executar o comando abaixo:

```bash
  npm run e2e-gui
```

## Docker

Para rodar a aplicação com Docker, basta executar o comando abaixo, dentro da pasta raiz do projeto Frontend:

```bash
  docker-compose up --build
```
A aplicação estará rodando em http://localhost:4200.


## 🚀 Sobre o desafio

O problema consiste em criar um frontend para um sistema de cotações de moedas. O sistema deve ser capaz de listar as cotações de algumas moedas, utilizando algumas APIs.

Como um dos requisitos era a responsividade, foi utilizado o framework Angular, que possui uma estrutura de componentes que facilita a criação de interfaces responsivas. Como o tempo era curto, decidi em algumas partes fazer uso do Bootstrap, que é uma biblioteca de componentes responsivos, para agilizar o desenvolvimento.


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

## Autor

<a href="#">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/7137962?v=4" width="100px;" alt=""/>
</a>
 <br />
 <sub><b>Caio Marinho</b></sub>
 <a href="#" title="Caio Marinho">🚀</a>

[![Linkedin Badge](https://img.shields.io/badge/-Caio%20Marinho-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caiomarinho/)](https://www.linkedin.com/in/caiomarinho/)
[![Gmail Badge](https://img.shields.io/badge/-caiomarinho8@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:caiomarinho8@gmail.com)](mailto:caiomarinho8@gmail.com)

Made with ❤️ by [Caio Marinho!](https://caiomarinho.tech/) 👋🏽 [Get in Touch!](https://www.linkedin.com/in/caiomarinho/)
