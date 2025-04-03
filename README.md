# Desafio Técnico ForLogic

Este é um projeto desenvolvido como parte de um desafio técnico para a construção de um aplicativo web. O projeto possui como requisitos ter 3 páginas, sendo login, listagem e cadastro, onde cada uma possui suas próprias funcionalidades.

## Funcionalidades

- Controle de inputs via formulários reativos;
- Integração com API via requisição HTTP (Cadastro, Contagem e Listagem);
- Tabelas dinâmicas;

## Tecnologias

- Angular 19.x;
- Typescript 5.5.2;
- Karma e Jasmine para testes unitários;

## Requisitos

- Visual Studio Code ou WebStorm: versão mais recente;
- Node v18 ou superior

## Como executar o projeto

Para executar o projeto, deve-se executar o comando abaixo no terminal, com o mesmo na pasta raiz do projeto

    npm run start

## Testes

Para executar os testes unitários, deve-se executar o comando abaixo no terminal, com o mesmo na pasta raiz do projeto

    npm run test

## Pipelines

#### CI

A pipeline de CI é executada sempre que um pullrequest é aberto para uma das branchs principais (development, stage ou production). A mesma executa os passos:

- Verifica se o projeto está com o lint correto
- Verifica se os testes unitários estão corretos e cobrindo mais de 80% do código
- Verifica se o projeto está gerando o build corretamente

#### Publish Package to Github

Esta pipeline será responsável pelo controle de versões do aplicativo, gerando uma imagem docker para cada push realizado em uma das branchs principais. Os passos dela são:

- Fazer o login no github utilizando uma key privada através dos secrets do repositório
- Extrair o metadata do push (branch e sha key)
- Build e push Docker Image utilizando o metadata do passo anterior como tags para gerar o histórico de versões


## Considerações finais

Este projeto foi desenvolvido por Bruno Vinicius Barros da Silva, durante o período de 1 a 3 de abril de 2025.
O back-end do projeto se encontra disponível [neste link](https://github.com/brunovbsilva/desafio-forlogic-api)
