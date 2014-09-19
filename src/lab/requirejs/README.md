# Angular.js with Require.js

## Code Style

* **AMD Style**

```javascript
define(['angular'], function() {  
    return {
        /* API for this module */
    };
});
```

* **CommonJS Style**

```javascript
define(function(require) {  
    var angular = require('angular');

    return {
        /* API for this module */
    };
});
```


## Examples

* [AMD Style](amd-style)

* [CommonJS Style](commonjs-style)


## Links

* [Require.js packages for building large scale angular applications | Jonathan Creamer](http://jonathancreamer.com/require-js-packages-for-building-large-scale-angular-applications/)
