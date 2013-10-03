# Angular.js - MOCKS : httpBackEnd

A idéia é utilizar o $httpBackend disponível no suporte de Mock do Angular.js para criar o suporte do mock, onde seja possível realizar as requisições HTTP, através do $http ou $resource, sendo essas capturadas e processadas pelo $httpBackend


## Links de referência

* [$httpBackend | Angular.js Docs](http://docs.angularjs.org/api/ngMock.$httpBackend)

* [Prototype Angular UIs Without A Backend | OpenSource Connections](http://www.opensourceconnections.com/2013/09/16/prototype-angular-uis-without-a-backend/) | [[jsfiddle] example](http://jsfiddle.net/softwaredoug/pCMCQ/9/)


## Projetos de exemplo

* 01 - Exemplo inicial, validando o funcionamento do $httpBackend conforme o proposto em _"Prototype Angular UIs Without A Backend"_

* 02 - Organizando o exemplo inicial e separando o javascript em arquivos. Evolução do 01.

* 03 - Separando o código javascript do Mock em outro diretório. Evolução do 02.

* 04 - Definido um novo módulo, onde estará a definição do Mock, sendo esse associado como dependência do módulo da aplicação, quando este for utilizado. Evolução do 03.

* 05 - Definido uma classe de serviço para gerenciar os mocks, onde nesta classe são adicionado os "recursos" e posteriormente estes são configurados para responder as requisições http que serão interceptadas. Evolução do 04.

* 06 - Associando a classe de serviço de suporte ao mock utilizando o httpBackend, ao namespace angular.mock do angular-mocks.js. Evolução do 05.


