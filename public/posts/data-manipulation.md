Overview
========

* Code challenge
* The `prototype` property and `Array.prototype`
* forEach, reduce, filter, map

## Objects

* What are objects?
* Object literals and `Object`
* Dot notation and bracket notation

```js
var books = [
  { title: 'Introduction to HTML and CSS', pages: 432, price: 30 },
  { title: 'Learning JavaScript Design Patterns', pages: 32, price: 20 },
  { title: 'Object Oriented JavaScript', pages: 42, price: 10 },
  { title: 'JavaScript Web Applications', pages: 99, price: 15 },
  { title: 'PHP Object Oriented Solutions', pages: 80, price: 20 },
  { title: 'PHP Design Patterns', pages: 300, price: 30 },
  { title: 'Head First Java', pages: 200, price: 20 }
];
```

* JSON (JavaScript Object Notation)
* Example JSON: https://api.github.com/users/skaterdav85

## Filtering

* Find all books that contain "JavaScript" in any casing
* Find a book with a given title, in any casing

## Reducing

* Find the subtotal of all books
* Reduce isn't just good for working with numbers

## Mapping

```js
var genres = [
  { id: 1, name: 'Hip Hop' },
  { id: 2, name: 'Electronic' },
  { id: 3, name: 'Metal' }
];
```

```js
var songs = [
  { title: 'Airplanes', genre: 1 },
  { title: 'Psychosocial', genre: 3 },
  { title: 'Bring Back The Summer', genre: 2 },
  { title: 'Right Above It', genre: 1 }
];
```

Turn the above into the below:

```js
[
  { song: 'Airplanes', genre: 'Hip Hop' },
  { song: 'Psychosocial', genre: 'Metal' },
  { song: 'Bring Back The Summer', genre: 'Electronic' },
  { song: 'Right Above It', genre: 'Hip Hop' }
]
```
