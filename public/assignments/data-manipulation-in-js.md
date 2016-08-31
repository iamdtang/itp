Data Manipulation in JavaScript
===============================

### Task 1 - Mapping JSON:API to simple objects

Below is a variable `reviewsData` that contains a list of reviews in a specific API format called [JSON:API](http://jsonapi.org/) that we'll learn more about later in the semester. We are just simulating what we could get back from an API.

```js
var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    },
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    },
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    },
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    },
    {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};
```

Write a function called `extractReviews` that takes the `reviewData` variable and maps it (using `Array.prototype.map`) to the format below.

```js
[
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
]
```

Here's some starter code:

```js
function extractReviews(reviewData) {
  // your implementation
}

console.log(extractReviews(reviewsData));
```

### Task 2 - Filtering reviews that contain the word "good" in the title

Write a function that takes the following reviews:

```js
var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];
```

and filters them (using `Array.prototype.filter`) to a subset that only contains the ones where the word "good" is in the title, in any casing.

Here's some starter code:

```js
function findGoodReviews(reviews) {
  // your implementation
}

console.log(findGoodReviews(reviews));
```

### Task 3 - Classifying reviews by cost using reduce

Write a function that takes the following reviews:

```js
var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];
```

and reduces them (using `Array.prototype.reduce`) to a single object that displays the count for each value contained in `cost`. Here is some starter code:


```js
function classifyReviewsByCost(reviews) {
  // your implementation
}

console.log(classifyReviewsByCost(reviews));
```

Your implementation of `classifyReviewsByCost` should return the following:

```js
{
  'high': 2,
  'average': 2,
  'low-average': 1
}
```

## Submission

Create an account on [GitHub](https://github.com/). If you aren't familiar with Git and GitHub, see a TA after class to get set up. Send an email to <mailto:dtang@usc.edu>, <mailto:asrorov@usc.edu>, and <mailto:schheda@usc.edu> with your GitHub username.

Next, create a repository called __exactly__ "itp404-assignment1". Push up your code. If you can see your assignment on GitHub and you've emailed us your GitHub username, your assignment has been submitted.
