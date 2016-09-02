Object Oriented JavaScript
=====

### 1. string object

Create an object called `string` (not to be confused with the built-in `String`), with a method called `pluralize`. Calling this method will look like the following:

```js
string.pluralize('baby'); // returns babies
string.pluralize('cat'); // returns cats
```

The `pluralize` method should accept any input that ends in a "y" and replace the "y" with "ies". Otherwise, it will just tack on an "s" to the end of the input.

### 2. Book and ShoppingCart constructor functions

Implement the `Book` constructor function so that the following code works:

```js
var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(oojsBook.title); // Object Oriented JavaScript
console.log(oojsBook.quantity); // 2
console.log(oojsBook.price); // 10
console.log(oojsBook.getSubtotal()); // 20
```

In your implementation,

* All of the book properties passed into `new Book` should be copied to the `Book` instance
* The `Book` constructor function should also have a method `getSubtotal()` on `Book.prototype` that returns the quantity multiplied by the price.

Next, implement the `ShoppingCart` constructor function so that the following code works:

```js
var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160
```

In your implementation,

* Make sure `add()` and `getTotal()` are stored on `ShoppingCart.prototype`
* The items in the cart are stored on a property called "items"
* The `getTotal()` method should use `Array.prototype.reduce()` AND the `getSubtotal()` method on each `Book` (`Book.prototype.getSubtotal()`).

### 3. Implementing Array.prototype.map2()

It is often considered a bad practice to add new methods to the prototype of built-in functions in JS like Array, because future browsers might implement it and your implementation might differ, which could lead to really difficult bugs. However, adding your own method to `Array.prototype` is a good learning exercise to better understand how it works.

Recreate the functionality of `Array.prototype.map` but named as `Array.prototype.map2`.

For example:

```js
var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
```
