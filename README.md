# lab-angularjs

> Angular.js : test code lab

* Checkout angular.js [code examples](src/lab)

--

* Git Commit Guidelines

  * [angular/angular.js](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)

  * [angular/material](https://github.com/angular/material/blob/master/docs/guides/CONTRIBUTING.md#-git-commit-guidelines)

--

<!-- toc -->

* [Prerequisites](#prerequisites)
* [Installation Guide](#installation-guide)
* [Tools](#tools)
  * [Git submodule](#git-submodule)
  * [Dependencies](#dependencies)
  * [Commands](#commands)
* [License](#license)

<!-- toc stop -->



## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.0)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `[sudo] npm install -g gulp`


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/erkobridee/lab-angularjs.git
cd lab-angularjs
npm install
```


## Tools

### Git submodule

> [[GitHub] erkobridee / cdn](https://github.com/erkobridee/cdn) on gh-pages branch (3rd party libs)

* commands

  * init submodule

```bash
git submodule init
```

  * add submodule

```bash
git submodule add -b gh-pages https://github.com/erkobridee/cdn.git gitsubmodule/cdn
```

  * update submodule

```bash
git submodule update --remote
```

--

* [[GitHub] NebuPookins / git-submodule-tutorial](https://github.com/NebuPookins/git-submodule-tutorial) - A tutorial on how to use git submodule to share a model across multiple applications

* [Git SubModule Docs | Mac Developer Library](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/git-submodule.1.html)


### Dependencies

```bash
npm install \
  del \
  gulp \
  gulp-bump \
  gulp-cached \
  gulp-connect \
  gulp-jshint \
  gulp-lintspaces \
  gulp-load-plugins \
  gulp-print \
  gulp-shell \
  gulp-task-listing \
  gulp-util \
  jshint-stylish \
  lazypipe \
  open \
  run-sequence \
  yargs \
  --save-dev
```


### Commands

* `gulp` - development mode, prepare files, watch changes and start server on port 1337

* `gulp --release --preview` - generate deploy version on `dist` directory and start server on port 1337 looking to this directory

* `gulp --publish` - publish deploy version files on `gh-pages` branch

  * `gulp --init` - create local directory with github repository on gh-pages branch


## License

* MIT : [erkobridee.mit-license.org](http://erkobridee.mit-license.org/)
