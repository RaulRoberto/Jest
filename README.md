# Estudo de Jest

<div align="center">
<img src="https://raw.githubusercontent.com/jestjs/jest/main/website/static/img/jest-readme-headline.png" alt="Imagem de referência do Jest" height=250px>
</div>
Testes em uma aplicação em JavaScript com intuito de estudar sobre Jest e suas caracteríticas.

<hr>

<h2>Base do Projeto<h2>

O projeto está sendo desenvolvido usando como base o que é desenvolvido no curso `Aprenda a Testar Aplicações JavaScript`, do mais que querido
<a href="https://github.com/vedovelli">@vedovellifabio</a>

<hr>

<h2>Rodando o projeto:</h2>

Após a clonagem efetuada para o diretório em sua máquina: <br>

```bash
git clone https://github.com/RaulRoberto/Jest.git
```

<br>

Abra um terminal no diretório do projeto, instale as dependências necessárias usando npm ou yarn: <br/>
`npm install` ou `yarn add` <br>
Para rodar os testes execute o comando abaixo:<br />
`npm run test` ou `yarn test` <br>

_Este projeto também conta com o alias do comando `jest --watchAll` <br> que pode ser utilizado como `test:watch`_ <br>

<hr>
<div align="center">
<img src="https://stryker-mutator.io/images/stryker-man.svg" alt="Logotipo de Stryker Mutator" height=250px>
</div>

<h2>Rodando Stryker Mutator</h2>

O projeto também conta com Stryker Mutator, um framework de testes de mutação, onde o foco é validar ainda mais a consistencia dos testes desenvolvidos.<br>
Para rodar o stryker basta um comando no terminal:
`stryker run` <br>
_Obs.: Atualmente o projeto ainda não mata 100% dos mutantes._
