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
  - [Deploys](#deploys)
  - [📝 Licença](#-licença)
  - [📝 Autor](#-autor)



## 🚀 Sobre o desafio

O problema consiste em criar um backend para um sistema de cotações de moedas. Um dos modelos de autenticação escolhida foi utilizando o Django Knox, que é um gerenciador de tokens. Ele trabalha gerando um token de autenticação para o Django Rest Framework.

Como um dos requisitos era consumir 2 API's diferentes, optei por criar duas aplicações Django separadas, uma para cada API, tornando sua manutenção mais simplificada.

A aplicação principal é a "app", nela temos as principais rotas do sistema ("urls.py").
A aplicação "app" roteia os endpoints do KrakenAPI para '/kraken' e os endpoints do AwesomeAPI para '/awesome', bem como as rotas de autenticação ('/auth').

A aplicação "awesome" é responsável por consumir a API do AwesomeAPI e retornar os dados para a aplicação principal.
A aplicação "kraken" é responsável por consumir a API do KrakenAPI e retornar os dados para a aplicação principal.

No frontend da aplicação, foi utilizado o framework Angular, que é um framework de desenvolvimento web de código aberto.
O desafio encontrado foi que o Design possui características únicas, e talvez eu necessitaria de mais tempo para poder concluir o design proposto, seguindo "a risca" todos os elementos propostos.
Por isso, optei por utilizar o framework Angular Material, que é um framework de componentes de interface de usuário (Material Design e Bootstrap), ferramentas estas que possuo um pouco de domínio e que me auxiliaram na construção das páginas e componentes, a fim de cumprir com as funcionalidades necessárias para a execução do projeto.

Como todo bom projeto, foi desenvolvido uma boa documentação nos README's de cada aplicação, assim como o código está documentado. Está descrito em ambos um guia de instalação. Foi implementado testes para ambas aplicações e também foi utilizado o Docker para facilitar a instalação e execução do projeto. Foi rodado linters e analisadores de código para garantir a qualidade do código, através de relatórios de violações de padrões de código e de segurança, tudo isto para agregar valor e garantir uma boa continuidade no desenvolvimento do projeto.

## 📝 Descrição do projeto

Como dito anteriormente, o projeto consistem duas grandes aplicações: Frontend e Backend. Ambas aplicações funcionam independentes uma da outra, e se comunicam através do protocolo JSON. Para o correto funcionamento da aplicação, o frontend depende do backend para ter seus componentes renderizando os dados corretamente.

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
- [NGINX](https://www.nginx.com/)
- [Gunicorn](https://gunicorn.org/)
- [Certbot](https://certbot.eff.org/)

### Frontend

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Docker](https://www.docker.com/)
- [Cypress](https://www.cypress.io/)
- [TsLint](https://palantir.github.io/tslint/)
- [Firebase](https://firebase.google.com/)
- [Netlify](https://www.netlify.com/)


## 📦 Instalação

Você encontrará detalhes de como instalar (MANUAL) o projeto no README que se encontra nas pastas raiz de cada uma das aplicações (backend e frontend).

### Docker

Além de instalações de forma manual, gostaria de citar que foi implementado arquivos de implantação do Docker, que é uma plataforma de código aberto que automatiza o desdobramento de aplicativos em contêineres de software. Os contêineres permitem que um aplicativo seja executado em qualquer ambiente, independentemente de suas dependências do sistema operacional.

Sendo assim, ambas as aplicações você pode executar através do Docker, basta executar os comandos abaixo, dentro das pastas raiz de cada projeto (backend e frontend):

```bash
  docker-compose up --build
```

## Deploys

Para realizar o deploy das aplicações foi necessário separar os projetos backend e frontend. O backend foi implantado no render.com e o frontend no Firebase Hosting.

Inicialmente comecei pelo backend subindo uma infraestrutura no Render.com. Comecei criando o banco de dados (PostgreSQL), e por fim subindo a aplicação isolada do frontend.
Eu tenho um post no MEDIUM explicando o processo de deploy de aplicações Django/DjangoRest nesta plataforma: 

[https://medium.com/@caiomarinho8/how-to-deploy-django-applications-with-postgresql-on-render-com-c26601889dea](https://medium.com/@caiomarinho8/how-to-deploy-django-applications-with-postgresql-on-render-com-c26601889dea)

### Dados do backend na plataforma Render.com

#### Banco de dados

```sh
Hostname: dpg-ce10kgun6mpu84v4to9g-a

Port: 5432

Database: beetellercotacoes

Username: beetellercotacoes_user

Password: Iym1B0KSjdcwkhv99Y1WAmCZr46Obq4Q

External Database URL: postgres://beetellercotacoes_user:Iym1B0KSjdcwkhv99Y1WAmCZr46Obq4Q@dpg-ce10kgun6mpu84v4to9g-a.oregon-postgres.render.com/beetellercotacoes
```

#### App Backend

URL:[https://backendcotacoes.onrender.com](https://backendcotacoes.onrender.com)

Admin User

username: admin
password: Admin123!

OBS: Este Backend está em servidor gratuito, então pode demorar um pouco para carregar a primeira vez (média de 45s). Na forma gratuita, tanto o Heroku como o Render.com possuem este comportamento.

#### Alternativa App Backend

Visto que o backend está em servidor gratuito, pode demorar um pouco para carregar a primeira vez (média de 45s). Para evitar esse problema, criei uma alternativa para o backend, que está hospedado no Digital Ocean.

Para deixar ainda mais profissional, foi construído um backend no [DigitalOcean](https://www.digitalocean.com/) com intuito de demonstração de habilidades DevOps junto ao Desenvolvimento.
Os comandos realizados para fazer a implantação são os mesmos a serem rodados em qualquer servidor Linux. Assim, podemos colocar nosso backend em qualquer Cloud como AWS, Azure, Google Cloud, etc.

Para a realização desta tarefa foi criado um domínio gratuito em [Freenom](https://my.freenom.com/).

URL: https://backend-cotacoes.ml/

![Freenom](https://i.imgur.com/Z9iZnkI.png)

A idéia de registrar o domínio foi com o intuito de gerar, posteriormente, certificado SSL, homologado pela Let's Encrypt para a aplicação para dispor o domínio como HTTPS.

Em seguida foi criado um servidor virtual na DigitalOcean, onde foi feito a construção de um banco de dados PostgreSQL, e realizado o deploy do backend, utilizando NGINX como servidor web e Gunicorn como servidor de aplicação.

![VM Digital Ocean](https://i.imgur.com/LnX80DL.png)

Portanto, este backend está disposto em: [https://backend-cotacoes.ml/](https://backend-cotacoes.ml/)

#### App Frontend
Deploy no Firebase Hosting:
[https://frontend-beeteller-cotacoes.web.app/](https://frontend-beeteller-cotacoes.web.app/)

Este link no Firebase Hosting se comunica com o Backend mais rápido(que está hospedado no Digital Ocean).

Deploy no Netlify:
[https://jolly-tarsier-4e4b89.netlify.app/](https://jolly-tarsier-4e4b89.netlify.app/)

Você pode logar com o admin previamente dito, ou registrar um novo usuário.

Este link no Netlify se comunica com o Backend que está em servidor gratuito, então pode demorar um pouco para carregar a primeira vez (média de 45s). 


#### Repositório
https://github.com/caiomarinhodev/selecao-full-stack


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
