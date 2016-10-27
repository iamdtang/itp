Practice Midterm
=======

Feel free to use a new JSBin for each question. This way you can link me to it and ask questions.

#### 1. Filtering arrays with filter()

Filter the list of songs where the price is less than or equal to $10

```js
var movies = [
  { id: 1, title: 'Fast and Furious', price: 14 },
  { id: 2, title: 'Bourne Identity', price: 7 },
  { id: 3, title: 'Triple X', price: 11 },
  { id: 4, title: 'Rush Hour', price: 8 },
  { id: 5, title: 'Happy Gilmore', price: 9 }
];
```

#### 2. Create the Comment class / constructor function

```js
var comment = new Comment('Awesome pic!');
comment.save();
// save() should make a POST AJAX request to /api/comments and send the data under a field
// called 'text'. This endpoint doesn't exist so you won't be able to test it.
```


#### 3. Translating arrays with map()

Write the code that replaces the Rush Hour movie object with the Snowden object using `Array.prototype.map()`

```js
var movies = [
  { title: 'Fast and Furious', price: 14 },
  { title: 'Bourne Identity', price: 7 },
  { title: 'Triple X', price: 11 },
  { title: 'Rush Hour', price: 8 },
  { title: 'Happy Gilmore', price: 9 }
];
```

```js
{ title: 'Snowden', price: 6.99 }
```

<!-- #### 4. Create Array.prototype.sum(property)

The `sum()` method on arrays will loop through an array of object and create a sum by the attribute that is passed into `sum`.

```js
movies.sum('price') // 49
``` -->

#### 5. Modify the store.getProducts() method so that it resolves with the array of products

```js
// We haven't covered the Promise class but it creates a promise object.
// The data passed into resolve() is what the promise is resolved with.
// You don't need to modify this function.
function pretendAjax() {
  return new Promise(function(resolve, reject) {
    resolve({
      data: {
        products: [
          { name: 'Running shoes', price: 75 },
          { name: 'Golf shoes',    price: 85 },
          { name: 'Dress shoes',   price: 95 },
          { name: 'Walking shoes', price: 65 },
          { name: 'Sandals',       price: 55 }
        ]
      }
    });
  });
}

// modify this
var store = {
  getProducts: function() {
    pretendAjax();
  }
};

store.getProducts().then(function(products) {
  // products should be an array
});
```


<!-- #### 6. Group the following IT support tickets by urgency using Array.prototype.reduce()

Imagine you make an AJAX call and get the array of ticket data below:

```js
var tickets = [
  { title: 'reset password', urgency: 'high' },
  { title: 'install Windows', urgency: 'medium' },
  { title: 'VPN access', urgency: 'low' },
  { title: 'need WiFi password', urgency: 'high' }
];
```

In your UI, you want to display these tickets grouped by urgency. Group the following IT support tickets by urgency using Array.prototype.reduce(). The output should look like:

```js
{
  high: [
    { title: 'reset password', urgency: 'high' },
    { title: 'need WiFi password', urgency: 'high' }
  ],
  medium: [
    { title: 'install Windows', urgency: 'medium' }
  ],
  low: [
    { title: 'VPN access', urgency: 'low' }
  ]
}
``` -->

#### 8. Handlebars

Create a single Handlebars template that renders `user1` and `user2`. The template should show the user's name and an unordered list for their skills. If the user has no skills, show "No skills added".

```js
var user1 = {
  name: 'David Tang',
  skills: ['JavaScript', 'PHP', 'HTML']
};

var user2 = {
  name: 'John Doe',
  skills: []
};
```

#### 7. AJAX and Handlebars

Make an AJAX call to [http://itp-api.herokuapp.com/api/genres](http://itp-api.herokuapp.com/api/genres) and render the list of genres on the page using Handlebars.

<style>
  h4 {
    margin-top: 50px;
  }
</style>
