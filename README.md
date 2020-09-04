# React Intermediário - Digital Innovation One

Este código foi produzido com o intuito de prover exemplos ao [curso da Digital Innovation One](https://web.digitalinnovation.one/course/desenvolvimento-de-aplicacoes-para-internet-com-reactjs/learning/c6a6c9e3-c419-4443-9191-b3bf851d1ce4).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

1. Tenha o [Node.js](https://nodejs.org/en/download/) instalado em seu computador e clone este projeto. Também instale o [Yarn](https://yarnpkg.com/lang/pt-br/docs/install) em sua máquina.
2. Na pasta raiz, instale todas as dependencias do projeto com o comando `yarn`.

## Comandos

### `yarn start`

Roda o app em modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para ver os exemplos da aula no browser.

### `yarn test`

Roda todos os testes criados.<br>
Veja a documentação, na seção [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `yarn build`

Empacota o projeto em um bundle de produção na pasta `build`.<br>
Veja mais na seção [deployment](https://facebook.github.io/create-react-app/docs/deployment) da documentacao para saber mais como efetuar um deploy correto de sua aplicação.

# Desenvolvimento de aplicações para internet com ReactJS

## Css componentes e elementos 
Como estilizar ? 
### inline 
Dentro do arquivo jsx 
- Pros  : Pratico , direta , ajuste  rapido  e testes de estilo 
- contra - manutenção 
```
import React from 'react';

// 1. Como estilizar uma lista usando estilos inline.

const listaEstilizada = {
  marginTop: '10px',
  border: '1px solid blue',
  padding: '25px'
};
```
### classes 
- pros Modularizada define-se classes pelo atributo classname 
- contra dificil manutencao 
- pouca flexibilidade 
- conflitos de nomes (solução: Design patterns)
- arquivo ClassName.css
```
.div-style {
  display: flex; 
  flex-direction: column; 
  justify-content: space-around;
  margin-right: 20px;
}
``` 
e depois importa-se no codigo , usamos className e não class para poder importa-lo no react 
```
import './ClassName.css'
function Hello(){
    return <div className="div-style"> Ola mundo </div>
}
```
###  Css no JS 
- npm install --save styled-components
- pros:  manutenção facilidade para remover css estilos dinamicos performance injeção automatica de prefixos vendor 
```
const DivStyle = styled.div`
  color:blue;
  background: url('${props=> props.imageUrl}');
`; 
function Hello(){
    const url = 'https://exemplo'
    return <DivStyle imageUrl={url}> Olá </DivStyle>
}
``` 
## Stateful vs StateLess 
- A nomenclatura foi atualaizada : 
- Class components
- Function Components 
- Com hooks estados são manipuláveis em function components (Stateless com Hooks )
- Dessa forma temos um código compatco com a vantagem de poder manipular estaods 
### Stateful 
- Stateful usa estados toda vez que trabalhamos com estados , destruimos uma copia anterior e trabalhamos com uma nova cópia do estado 
![](img/state.PNG)
- ..\aplicacoes_internet_reactjs\src\aula-1\parte-2\TodoListStatefull.jsx
### Stateless 
- stateless não usa estados
- Não possui gerenciamento de estados no componente
- contruidos usando funções em js 
- ..\aplicacoes_internet_reactjs\src\aula-1\parte-2\TodoListStateless.jsx
### Stateless com Hooks 
A partir de 2018 , podemos fazer um "stateless com estados" usando o hook useState 
- ..\aplicacoes_internet_reactjs\src\aula-1\parte-2\TodoListFunctional.jsx
## Formulários
Mantem um estado interno 
- Em html <input>, <textarea> e <select> tem um estado interno aceitando atributo value 
- podemos mudar esse valor usando o atributo onChange 
- em react podemos controlar o estado ( O DOM tem seu proprio estado e o react tem seu proprio estado ) 
- state 
- set state 
## Componente controlado 
- O recomendado no react é fazer componentes controlados 

## Compomente não controlado 
- pega o estado do dom 
- o react observa estes estados através de uma referencia 
- a tag input é read-only (essa tag a gente nao consegue fazer com componente controlado, só com não controlado)
## bibliotecas 
- forms no react são verbosos 
- é possível usar algumas biblios : 
- formik 
- Redux-forms 

