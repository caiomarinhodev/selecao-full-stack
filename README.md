# Beeteller - Cotacoes App

[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Windows](https://svgshare.com/i/ZhY.svg)](https://svgshare.com/i/ZhY.svg)

Hub que permitirá listar cotações em tempo real de algumas moedas utilizando algumas APIs.


## **Tabela de Conteúdos**

- [Beeteller - Cotacoes App](#beeteller---cotacoes-app)
  - [🚀 Sobre o desafio](#sobre-o-desafio)
  - [📝 Descrição](#-descrição)
  - [🛠 Tecnologias utilizadas](#-tecnologias-utilizadas)
  - [📦 Instalação](#-instalação)
  - [📝 Licença](#-licença)
  - [📝 Autor](#-autor)



## 🚀 Sobre o desafio

O problema consiste em criar um backend para um sistema de cotações de moedas. Um dos modelos de autenticação escolhida
foi utilizando o Django Knox, que é um gerenciador de tokens. Ele trabalha gerando um token de autenticação para o
Django
Rest Framework.

Como um dos requisitos era consumir 2 API's diferentes, optei por criar duas aplicações Django separadas, uma para cada
API, tornando sua manutenção mais simplificada.

A aplicação principal é a "app", nela temos as principais rotas do sistema ("urls.py").
A aplicação "app" roteia os endpoints do KrakenAPI para '/kraken' e os endpoints do AwesomeAPI para '/awesome', bem como
as rotas de autenticação ('/auth').

A aplicação "awesome" é responsável por consumir a API do AwesomeAPI e retornar os dados para a aplicação principal.
A aplicação "kraken" é responsável por consumir a API do KrakenAPI e retornar os dados para a aplicação principal.

No frontend da aplicação, foi utilizado o framework Angular, que é um framework de desenvolvimento web de código aberto.
O desafio encontrado foi que o Design possui características únicas, e talvez eu necessitaria de mais tempo para poder
concluir o design proposto, seguindo "a risca" todos os elementos propostos.
Por isso, optei por utilizar o framework Angular Material, que é um framework de componentes de interface de usuário (
Material Design e Bootstrap), ferramentas estas que possuo um pouco de domínio e que me auxiliaram na construção das
páginas e componentes, a fim de cumprir com as funcionalidades necessárias para a execução do projeto.

## 📝 Descrição do projeto

Como dito anteriormente, o projeto consistem duas grandes aplicações: Frontend e Backend. Ambas aplicações funcionam
independentes uma da outra, e se comunicam através do protocolo JSON. Para o correto funcionamento da aplicação, o frontend depende do backend para ter seus componentes renderizando os dados
corretamente.

Para entender melhor o funcionamento do projeto, segue abaixo uma imagem que representa o fluxo de comunicação entre os dois projetos.

![Fluxo de comunicação entre os projetos](https://i.imgur.com/XUIyi9P.png)

## 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

### Backend

- [Django](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Knox](https://james1345.github.io/django-rest-knox/)
- [Swagger](https://drf-yasg.readthedocs.io/en/stable/readme.html)
- [Docker](https://www.docker.com/)
- [PyTest](https://docs.pytest.org/en/stable/)
- [Postman](https://www.postman.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Pep8](https://pypi.org/project/pep8/)
- [Flake8](https://flake8.pycqa.org/en/latest/)
- [PyLint](https://www.pylint.org/)

### Frontend

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Docker](https://www.docker.com/)
- [Cyress](https://www.cypress.io/)
- [TsLint](https://palantir.github.io/tslint/)




## 📦 Instalação

Você encontrará detalhes de como instalar (MANUAL) o projeto no README que se encontra nas pastas raiz de cada uma das
aplicações (backend e frontend).

### Docker

Além de instalações de forma manual, gostaria de citar que foi implementado arquivos de implantação do Docker, que é uma
plataforma de código aberto que automatiza o desdobramento de aplicativos em contêineres de software. Os contêineres
permitem que um aplicativo seja executado em qualquer ambiente, independentemente de suas dependências do sistema
operacional.

Sendo assim, ambas as aplicações você pode executar através do Docker, basta executar os comandos abaixo, dentro das
pastas raiz de cada projeto (backend e frontend):

```bash
  docker-compose up --build
```

## 📝 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).

## 📝 Autor

<a href="#">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/7137962?v=4" width="100px;" alt=""/>
</a>
 <br />
 <sub><b>Caio Marinho</b></sub>
 <a href="#" title="Caio Marinho">🚀</a>

[![Linkedin Badge](https://img.shields.io/badge/-Caio%20Marinho-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caiomarinho/)](https://www.linkedin.com/in/caiomarinho/)
[![Gmail Badge](https://img.shields.io/badge/-caiomarinho8@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:caiomarinho8@gmail.com)](mailto:caiomarinho8@gmail.com)

Made with ❤️ by [Caio Marinho!](https://caiomarinho.tech/) 👋🏽 [Get in Touch!](https://www.linkedin.com/in/caiomarinho/)
