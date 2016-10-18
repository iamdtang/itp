Practice Midterm
=======


#### 1. Filter the list of songs where the price is less than or equal to $10 using Array.prototype.filter()

```js
var movies = [
  { id: 1, title: 'Fast and Furious', price: 14 },
  { id: 2, title: 'Bourne Identity', price: 7 },
  { id: 3, title: 'Triple X', price: 11 },
  { id: 4, title: 'Rush Hour', price: 8 },
  { id: 5, title: 'Happy Gilmore', price: 9 }
];
```

#### 2. Create the Comment class

```js
var comment = new Comment('Awesome pic!');
comment.save();
// save() should make a POST AJAX request to /api/comments and send the data under a field
// called 'text'. This endpoint doesn't exist so you won't be able to test it.
```


#### 3. Create a new movies array where movie 4 is replaced with the following:

```js
{ id: 4, title: 'Snowden', price: 6.99 }
```

#### 4. Create Array.prototype.sum(property)

The `sum()` method on arrays will loop through an array of object and create a sum by the attribute that is passed into `sum`.

```js
movies.sum('price') // 49
```

#### 5. Modify the store.getProducts() method so that it resolves with the array of products

```js
// returns a promise
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

var store = {
  getProducts: function() {
    pretendAjax();
  }
};

store.getProducts().then(function(products) {
  // products is the array
});
```


#### 6. Group the following IT support tickets by urgency using Array.prototype.reduce()

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
```

#### 7. More to come...


<style>
  h4 {
    margin-top: 50px;
  }
</style>
