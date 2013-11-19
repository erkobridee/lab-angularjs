# Laboratório de testes do Angular.js

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


## Git SubModules

* update submodule

```bash
git submodule init
git submodule update --remote
```

* [[GitHub] NebuPookins / git-submodule-tutorial](https://github.com/NebuPookins/git-submodule-tutorial) - A tutorial on how to use git submodule to share a model across multiple applications

* [Git SubModule Docs | Mac Developer Library](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/git-submodule.1.html)


## Licença

MIT : [erkobridee.mit-license.org](http://erkobridee.mit-license.org)