Laboratório de testes do Angular.js
===================================

> Repositório para salvar os códigos de testes realizados com o Angular.js

* [Angular.js](http://angularjs.org/)

* [Página do projeto](http://erkobridee.github.io/lab-angularjs/)


## Local dos testes

* Os códigos dos testes realizados, estão dentro de `lab`


## Material de apoio

* Veja a [Wiki](https://github.com/erkobridee/lab-angularjs/wiki) do projeto


## Ao clonar o projeto do GitHub

* Execute o comando: `npm install`


## Comandos do Grunt.js

> O [Grunt.js](http://gruntjs.com/) executa sobre o [Node.js](http://nodejs.org/), com isso é necessário ter disponível no seu computador

* `grunt` - executa jshint (por enquanto apenas no Gruntfile.js, falta ajustar os demais .js)

* `grunt dev` - levanta o servidor na porta 1337 disponibilizando o diretório `lab`

* `grunt test` - gera a versão que será publicada no `gh-pages` no diretório `dist` e levanta o servidor na porta 1337 apontando para este diretório

* `grunt publish` - realiza a atualização do `gh-pages`