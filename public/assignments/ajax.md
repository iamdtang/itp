AJAX and Client-side Templating with Handlebars.js
======================

Reddit has an API that supports unauthenticated, cross-domain AJAX requests. Here are a few sample endpoints:

* [https://www.reddit.com/r/javascript.json](https://www.reddit.com/r/javascript.json)
* [https://www.reddit.com/r/emberjs.json](https://www.reddit.com/r/emberjs.json)

It follows the format https://www.reddit.com/r/__{subreddit}__.json

For this assignment, you will build a search and results page where there is a search input box at the top that users can type a subreddit into (i.e. emberjs). When the form is submitted, make an AJAX call to the Reddit API substituting {subreddit} with the value from the search box. Display the results contained in `data.children` on the page using client-side templating with Handlebars.js in an organized way showing the following properties:

* `score`
* `title` as a link using the `url` property
* `num_comments`
* If `archived` is `true`, show "Archived". Otherwise, show "Not Archived".

If there are no items contained in `data.children`, display the message "Nothing found" using the Handlebars `else` helper in the `each` block.

Lastly, for each item in the list, have a button that says "Show description". When that button is clicked, display the `selftext` property.

### Code Requirements

You should have a function:

```js
function getSubreddits(subreddit) {
  // makes an AJAX call to the Reddit API using the subreddit argument and
  // returns a promise that resolves with an array of subreddits formatted like below
  // notice how num_comments is mapped to commentCount
}
```

```json
[
  { "score": 25, "title": "...", "commentCount": 4, "description": "...", "archived": true },
  { "score": 45, "title": "...", "commentCount": 7, "description": "...", "archived": true },
  { "score": 15, "title": "...", "commentCount": 4, "description": "...", "archived": false }
]
```

Then, in your template, you will work with the formatted JSON instead of the raw JSON from the API.

### Submission

Just push your code up to GitHub under a repository called __exactly__ "itp404-assignment3".
