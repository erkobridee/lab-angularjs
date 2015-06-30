# Angular.js Directives : Basic : scope parameters

* Each scope parameter can be passed through HTML attributes:

```javascrit
scope: {
  param1: '=', // two-way binding    (reference)  : object
  param2: '@', // one-way expression (top down)   : text
  param3: '&'  // one-way behavior   (bottom up)  : function
}
```

  * Examples:

```html
<div my-directive
   param1="someVariable"
   param2="My name is {{theName}}, and I am {{theAge+10}}."
   param3="doSomething(theName)"
>
```

## links

* parameter types: @ | = | &

  * [[Slides] Scope Parameters : Deep Dive into Custom Directives](http://slides.com/djsmith/deep-dive-into-custom-directives#/21) - Each scope parameter can be passed through HTML attributes

  * [AngularJS Directives, Using Isolated Scope with Attributes | Umur](https://umur.io/angularjs-directives-using-isolated-scope-with-attributes/) - 2013/07/02


* get attributes value

* [[Slides] attrs : Deep Dive into Custom Directives](http://slides.com/djsmith/deep-dive-into-custom-directives#/24) - The attrs object gives read/write access to HTML attributes
