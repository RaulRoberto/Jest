# Estudo de Jest

<img src="https://raw.githubusercontent.com/jestjs/jest/main/website/static/img/jest-readme-headline.png" alt="Imagem de referência do Jest" height=250px>

Testes em uma aplicação em JavaScript com intuito de estudar sobre Jest e suas caracteríticas.

<hr>

_BASE DO PROJETO_
O projeto está sendo desenovlvido usando como base o que é desenvolvido no curso `Aprenda a Testar Aplicações JavaScript`, do mais que querido <a href="https://github.com/vedovelli">@vedovellifabio</a>

<hr>

<h2>Rodando o projeto:</h2>
<p>Após a clonagem efetuada para o diretório em sua máquina:
```
git clone https://github.com/RaulRoberto/Jest.git
```
Abra um terminal no diretório do projeto, instale as dependências necessárias usando npm ou yarn:  <br/>
```npm install ``` ou ```yarn add```
Para rodar os testes execute o comando abaixo:<br />
```npm run test``` ou ```yarn test```

_Este projeto também conta com o alias do comando `jest --watchAll` que pode ser utilizado como `test:watch`_ <br>

</p>
<img src="https://stryker-mutator.io/images/stryker-man.svg" alt="Logotipo de Stryker Mutator" height=250px>
<h2>Rodando Stryker Mutator</h2>
<p>O projeto também conta com Stryker Mutator, um framework de testes de mutação, onde o foco é validar ainda mais a consistencia dos testes desenvolvidos.
Para rodar o stryker basta um comando no terminal:
```
stryker run
```
_Obs.: Atualmente o projeto ainda não mata 100% dos mutantes._</p>
