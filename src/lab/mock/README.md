# Angular.js - MOCKS : httpBackEnd

A idéia é utilizar o $httpBackend disponível no suporte de Mock do Angular.js para criar o suporte do mock, onde seja possível realizar as requisições HTTP, através do $http ou $resource, sendo essas capturadas e processadas pelo $httpBackend


## Links de referência

* [$httpBackend | Angular.js Docs](http://docs.angularjs.org/api/ngMock.$httpBackend)

* [Prototype Angular UIs Without A Backend | OpenSource Connections](http://www.opensourceconnections.com/2013/09/16/prototype-angular-uis-without-a-backend/) | [[jsfiddle] example](http://jsfiddle.net/softwaredoug/pCMCQ/9/)


### Expressões Regulares

* [Regular Expressions Cheat Sheet by DaveChild](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)

* [Scriptular is a javascript regular expression editor](http://scriptular.com/) - online


## Projetos de exemplo

* 01 - Exemplo inicial, validando o funcionamento do $httpBackend conforme o proposto em _"Prototype Angular UIs Without A Backend"_

* 02 - Organizando o exemplo inicial e separando o javascript em arquivos. Evolução do 01.

* 03 - Separando o código javascript do Mock em outro diretório. Evolução do 02.

* 04 - Definido um novo módulo, onde estará a definição do Mock, sendo esse associado como dependência do módulo da aplicação, quando este for utilizado. Evolução do 03.

* 05 - Definido uma classe de serviço para gerenciar os mocks, onde nesta classe são adicionado os "recursos" e posteriormente estes são configurados para responder as requisições http que serão interceptadas. Evolução do 04.

* 06 - Associando a classe de serviço de suporte ao mock utilizando o httpBackend, ao namespace angular.mock do angular-mocks.js. Evolução do 05.

* 07 - O suporte para mock do Backend utilizando o httpBackend foi reestruturado em um módulo do angular, nomeado como "ngMockBackend". Testes de compabilidade executados com as versões do angular: 1.0.7 | 1.0.8 | 1.1.5 | 1.2.0-rc.2. Evolução do 06.

* 08 - Incluído o require.js para gerenciar as dependências de bibliotecas da aplicação e dependências entre os arquivos JavaScript, onde no arquivo de configuração para o require.js através de um flag, a aplicação é configurada ou não para utilizar o mock. Evolução do 07.

* 09 - Implementando um recurso "real", consumingo informações de usuários do GitHub e criando o respectivo mock do recurso. Evolução do 08.

* 10 - Alteração da estrutura de diretórios do projeto para uma estrutura modular. Foi criado um resource para o Users, no qual foi utilizado promises. A configuração de exemplo de como possibilitar que um recurso passe pelo mock foi colocado no inicio do mock dos usuários do GitHub. Também foi separado em outro arquivo require a configuração dos mocks. Evolução do 09.

* 11 - Utilizado uma estrutura de projeto modular e a codificação dos JavaScript foi utilizado o recurso e estilo de codificação modular do require.js. Evolução do 10.
