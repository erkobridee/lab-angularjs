# Laboratório de testes do Angular.js


<!-- toc -->
* [Geral](#geral)
* [Local dos testes](#local-dos-testes)
* [Material de apoio](#material-de-apoio)
* [Guia de instalação](#guia-de-instalação)
  * [Ambiente necessário](#ambiente-necessário)
  * [Clone o projeto](#clone-o-projeto)
  * [Git SubModules](#git-submodules)
    * [Git SubModules: referências](#git-submodules-referências)
* [Grunt.js: tarefas disponíveis](#gruntjs-tarefas-disponíveis)
* [Licença](#licença)

<!-- toc stop -->


## Geral

> Repositório para salvar os códigos de testes realizados com o Angular.js

* [Angular.js](http://angularjs.org/)

* [Página do projeto](http://erkobridee.github.io/lab-angularjs/)


## Local dos testes

* Os códigos dos testes realizados, estão dentro de `src/lab`


## Material de apoio

<!--
  * Veja a [Wiki](https://github.com/erkobridee/lab-angularjs/wiki) do projeto
-->

* [[GitHub] : Angular.js](https://github.com/soudev/knowledge.mine/blob/master/stuff/angularjs.md)


## Guia de instalação

### Ambiente necessário

* [Node.js](http://nodejs.org/) instalado no computador

* [Grunt.js](http://gruntjs.com/) instalado globalmente no computador (outras instruções: [Getting Started](http://gruntjs.com/getting-started))

> caso seu sistema for UNIX (ex.: linux, mac os x, etc), provavelmente terá que executar o comando como super usuário `sudo` antes do camando

```bash
$ [sudo] npm install -g grunt-cli
```

### Clone o projeto

```bash
$ git clone https://github.com/erkobridee/lab-angularjs.git
```

* Depois de clonar o projeto para o seu computador, execute o comando dentro do diretório do projeto, para poder executar as tarefas do Grunt.js que estão disponíveis dentro do diretório `/tools`

```bash
$ cd tools/
$ npm install
```

### Git SubModules

> Este projeto utiliza sub módulos referenciando outro repositório GitHub, [[GitHub] erkobridee / cdn](https://github.com/erkobridee/cdn) onde estão as bibliotecas javascript utilizadas nesse projeto

* Iniciando e atualizando o sub módulo

```bash
git submodule init
git submodule update --remote
```

#### Git SubModules: referências

* [[GitHub] NebuPookins / git-submodule-tutorial](https://github.com/NebuPookins/git-submodule-tutorial) - A tutorial on how to use git submodule to share a model across multiple applications

* [Git SubModule Docs | Mac Developer Library](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/git-submodule.1.html)


## Grunt.js: tarefas disponíveis

> Executar os respectivos comandos dentro do diretório `/tools`

* `grunt` - executa jshint (por enquanto apenas no Gruntfile.js, falta ajustar os demais .js)

* `grunt dev` - levanta o servidor na porta 1337 disponibilizando o diretório `src`

* `grunt dist` - gera a versão que será publicada no `gh-pages` no diretório `dist` e levanta o servidor na porta 1337 apontando para este diretório


## Licença

MIT : [erkobridee.mit-license.org](http://erkobridee.mit-license.org)
