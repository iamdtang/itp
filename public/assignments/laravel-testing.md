Testing in Laravel
==================

## Unit Testing

You will be writing 3 unit tests for the class `App\Services\BookSearch` for the `find()` method. Use the following array data in your unit tests.

```php
$books = [
  [ 'title' => 'Introduction to HTML and CSS', 'pages' => 432 ],
  [ 'title' => 'Learning JavaScript Design Patterns', 'pages' => 32 ],
  [ 'title' => 'Object Oriented JavaScript', 'pages' => 42 ],
  [ 'title' => 'JavaScript Web Applications', 'pages' => 99 ],
  [ 'title' => 'PHP Object Oriented Solutions', 'pages' => 80 ],
  [ 'title' => 'PHP Design Patterns', 'pages' => 300 ],
  [ 'title' => 'Head First Java', 'pages' => 200 ]
];
```

__Test 1:__

```php
$search = new \App\Services\BookSearch($books);
$results = $search->find('javascript');
```

Write a unit test to verify that $results is a subset of $books containing the following titles:

* Learning JavaScript Design Patterns
* Object Oriented JavaScript
* JavaScript Web Applications

Your unit test will have to search the array for titles containing 'javascript' and be case insensitive.

__Test 2:__

Let's build upon the find() method. It should take a 2nd parameter that denotes if it should search for an exact match, but again, case insensitive.

```php
$search = new \App\Services\BookSearch($books);

// returns [ 'title' => JavaScript Web Applications', 'pages' => 99 ]
$search->find('javascript web applications', true);
```

__Test 3:__

Let's pass the find method a book that doesn't exist. When we call `find()`, it should return `false`.

```php
$search = new \App\Services\BookSearch($books);
$search->find('The Definitive Guide to Symfony', true); // false
```

## Acceptance Testing

Write an acceptance for the dvd search and results pages. When the user fills out the form, verify they are taken to the /dvds page.
