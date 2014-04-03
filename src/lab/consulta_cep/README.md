# Consulta de CEP

Exemplo de consulta de uma api externa, com cabeçalho da reposta `Access-Control-Allow-Origin: *`

* Configuração necessária:

```javascript
// allow to access cross domain resource
$httpProvider.defaults.useXDomain = true;
```

* **API de CEP utilizada:** [Postmon](http://postmon.com.br/) - The Mongo Postman API

