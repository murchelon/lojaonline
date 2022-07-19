
Original Link:
https://github.com/joserrodrigues/fiap_mba_presencial_react_trabalho_final


# FIAP MBA - Trabalho Final - React JS

Olá, seja bem-vindo a entrega final do Aula Aplicações Web com React.

Você terá de desenvolver um aplicativo Next.js PWA que irá listar os produtos de uma loja.

**Principais instruções**

- Após o login, o usuário poderá visualizar os detalhes de cada produto e saber quais as lojas eles estão disponíveis.
- Também será possível favoritar o produto e ver uma página com os produtos favoritos.
- Ao realizar o refresh do navegador, a aplicação deverá permanecer logada.
> **Dica:** Em todas as APIs você deve usar a URL: **https://fiap-reactjs-presencial.herokuapp.com**.


# Páginas

## Página de login

- Página em Next.js com e-mail e senha para autenticar o usuário
- Você utilizará a **API MBA Presencial - Trabalho Final - Realiza o login do usuário /storeProducts/login**
- Utilizar o Yup para realizar a validação

## Página de cadastro

- Página em Next.js com nome, telefone, e-mail e senha para cadastrar o usuário
- Você utilizará a **API MBA Presencial - Trabalho Final - Realiza o cadastro do usuário /storeProducts/signup**
- Utilizar o Yup para realizar a validação

## Header

- Em todas as páginas logadas, deverá aparecer um header com as seguintes funções:

- Lateral esquerda, um menu com as opções:
  - Ir a página Principal (Página de produtos)
  - Ir a página de favoritos (Página de favoritos)
- Lateral direita
  - Nome do usuário
  - Botão de logout

## Página de produtos

- Página em Next.js que exibirá em uma tabela os dados dos produtos
- A tabela deverá mostrar: Nome do Produto, Preço do Produto, Favorito e um botão de visualizar detalhe (Ir a tela **Detalhe do produto**).
- Essa página utilizará a paginação de resultados com a **API MBA Presencial - Trabalho Final - Busca todos os produtos /storeProducts/**
- Essa página deverá buscar a posição do usuário.

## Página de favoritos

- Página em Next.js que exibirá os produtos determinados como favoritos dos usuários.
- A tabela deverá mostrar: Nome do Produto, Preço do Produto, Favorito e um botão de visualizar detalhe (Ir a tela **Detalhe do produto**).
- Você utilizará a **API MBA Presencial - Trabalho Final - Busca todos os produtos favoritos /storeProducts/getFavProduts**

## Detalhe do produto

- Página em Next.js que exibirá os detalhes de um produto.
- A tela deverá mostrar:
  - Nome do Produto
  - Preço do Produto
  - Se é Favorito do usuário (e um botão para marcar/desmarcar favorito)
  - Mapa com a posição do usuário e as lojas com o produto disponível
- Você utilizará a **API MBA Presencial - Trabalho Final - Busca informação de um produto /storeProducts/product/:productID** e **API MBA Presencial - Trabalho Final - Adicionar ou remove um produto como favorito da pessoa /storeProducts/manageFavorite**
- Essa tela deverá buscar a informação pré-carregada do servidor e os produtos de 1 a 5 já deverão ser previamente carregados na construção do app

# Doc das APIs

A documentação das APIs está disponível em: **https://fiap-reactjs-presencial.herokuapp.com/doc**