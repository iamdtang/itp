Angular 1 - Part 1
=======

### What is Angular and why use it?

* framework for building data driven javascript apps
* provides structure to your applications
* 2 way data binding
* when data changes, your UI will automatically update to reflect those changes

### Modules

* A module is a group of related functionality bundled together in a 'package' (module)
* Typically you have 1 module for your application
* If you download 3rd party Angular libraries, these usually come in their own modules

### Controllers

* Controllers are a place to decorate our models with display logic and to respond to user actions. It __controls__ what data is bound into the view.
* There are two ways you can bind data to your views through controllers. The first is to use an object called `$scope`. The other approach is to use what is known as the "controller as" syntax. The controller-as syntax is preferred in preparation for Angular 2.
* $scope / the controller is also referred to as a view-model, taken from the MVVM design pattern. That is, a model specific for the view.
* Controllers should NOT contain any DOM manipulation code

### Directives

Directives "teach HTML new tricks" as you will commonly hear. Here is a list of directives that you will find yourself using a lot. Built-in angular directives start with ng

* ng-app - anything within this will be part of your angular app
* ng-repeat - used to loop over arrays or objects in your angular templates
* ng-src - used to set the src of an image that is from an expression
* ng-if - include in the DOM if the expression is truthy
* ng-class - apply a class to an element based on an expression
* ng-show - show an element based on an expression
* [ng-submit directive](http://docs.angularjs.org/api/ng.directive:ngSubmit)
* [ng-hide directive](http://docs.angularjs.org/api/ng.directive:ngHide)
* [ng-switch directive](http://docs.angularjs.org/api/ng.directive:ngSwitch)
* [ng-click directive](http://docs.angularjs.org/api/ng.directive:ngClick)

To pass HTML 5 validation, you can prefix any angular directive with 'data' as part of the HTML 5 data attributes, i.e. data-ng-app.

### Services

* built-in angular services start with a dollar sign
* $http is angular's function for making AJAX and JSONP requests, like $.ajax in jQuery
* $http also returns promise objects

### Defining a Custom Service

We can define custom services using the `.factory()` method. Here we are __adding__ a service called 'iTunes' to the module 'my-app' that we previously defined in our application.

```js
angular
	.module('my-app')
	.factory('iTunes', function() {
		return {
			get: function() {
				// implementation here
			}
		}
	});
```

Note, there are a few ways to create services in Angular but the `.factory()` approach will suffice for most scenarios.

### Other Resources

* [Angular Fundamentals in 60-ish Minutes](https://www.youtube.com/watch?v=i9MHigUZKEM)
* [Shaping up with Angular (CodeSchool)](https://www.codeschool.com/courses/shaping-up-with-angular-js)
* [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide)
