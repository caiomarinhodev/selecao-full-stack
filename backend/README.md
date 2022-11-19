# Backend para Beeteller - Cotacoes

Hub que permitirá listar cotações em tempo real de algumas moedas utilizando algumas APIs.

[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
[![Maintenance](https://img.shields.io/badge/Django-v3.1.7-%3CCOLOR%3E)](https://img.shields.io/badge/Django-v3.1.7-%3CCOLOR%3E)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Windows](https://svgshare.com/i/ZhY.svg)](https://svgshare.com/i/ZhY.svg)

## 📝 Descrição

Este projeto foi desenvolvido com Django Framework, Django Rest Framework, Django Knox e PostgreSQL.

## Instalação

Para rodar a aplicação você deverá seguir os passos abaixo.

1 - Instale as dependencias

```bash
  pip install -r requirements.txt
```

2 - Rode os comandos abaixo para criar o banco de dados e as tabelas

```bash
  python manage.py makemigrations
  python manage.py migrate
```

3 - Crie um super usuário para acessar o admin

```bash
  python manage.py createsuperuser
```

4 - Rode o servidor

```bash
  python manage.py runserver
```

## Testes
Para rodar os testes, basta executar o comando abaixo:

```bash
  python manage.py test
```

## Endpoints

Para acessar todos os endpoints criados, é necessário estar logado no sistema, pois todos os endpoints utilizáveis
requer o token de autorização. Para isso, é necessário criar um usuário e fazer o login.

### Endpoints para Autenticação

- [x] POST /api/auth/register/

Cria um novo usuário. É necessário enviar o username, email e password.

  ``` json
    {
      "username": "caio",
      "email": "caio@gmail.com",
      "password": "Admin123!"
    } 
  ```

- [x] POST /api/auth/login/

Faz o login do usuário. Após o login você receberá um Token de autorização para você poder realizar as consultas neste
backend.
O Token deve ser enviado no cabeçalho no padrão:

```
Token <token_hash>
```

Os dados a serem enviados são:

``` json
  {
      "username": "caio",
      "password": "Admin123!"
    } 
```

- [x] POST /api/auth/logout/ - Faz o logout do usuário. Requer o Token de autorização.
- [x] GET /api/auth/user/ - Retorna os dados do usuário logado. Requer o Token de autorização.

### Endpoints para consumir AwesomeAPI

- [x] Listar combinações possíveis

    ```http
    GET /api/awesome/combinations/
    ```

- [x] Listar cotações disponiveis

    ```http
      GET /api/awesome/tickers/
    ```
- [x] Listar cotações por moeda

    ```http
    GET /api/awesome/?ticker={ticker}
    ```
- [x] Listar cotações por moeda e seu histórico

    ```http
    GET /api/awesome/?ticker={ticker}&days={qtd_dias}
    ```

### Endpoints para consumir KrakenAPI

- [x] Listar cotações por moeda

    ```http
    GET /api/kraken/?ticker={ticker}
    ```

## 🚀 Sobre o desafio

O problema consiste em criar um backend para um sistema de cotações de moedas. Um dos modelos de autenticação escolhida
foi utilizando o Django Knox, que é um gerenciador de tokens. Ele trabalha gerando um token de autenticação para o Django
Rest Framework.

Como um dos requisitos era consumir 2 API's diferentes, optei por criar duas aplicações Django separadas, uma para cada
API, tornando sua manutenção mais simplificada.

A aplicação principal é a "app", nela temos as principais rotas do sistema ("urls.py").
A aplicação "app" roteia os endpoints do KrakenAPI para '/kraken' e os endpoints do AwesomeAPI para '/awesome', bem como
as rotas de autenticação ('/auth').

A aplicação "awesome" é responsável por consumir a API do AwesomeAPI e retornar os dados para a aplicação principal.
A aplicação "kraken" é responsável por consumir a API do KrakenAPI e retornar os dados para a aplicação principal.

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

## Autor

<a href="#">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/7137962?v=4" width="100px;" alt=""/></a>
 <br />
 <sub><b>Caio Marinho</b></sub></a> <a href="#" title="Caio Marinho">🚀

[![Linkedin Badge](https://img.shields.io/badge/-Caio%20Marinho-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caiomarinho/)](https://www.linkedin.com/in/caiomarinho/)
[![Gmail Badge](https://img.shields.io/badge/-caiomarinho8@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:caiomarinho8@gmail.com)](mailto:caiomarinho8@gmail.com)

Made with ❤️ by Caio Marinho 👋🏽 [Get in Touch!](https://www.linkedin.com/in/caiomarinho/)
