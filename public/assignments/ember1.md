Ember 1 - Router, Routes, and Templates
===

You will be creating a simple application using Ember that displays results for a given subreddit topic.

Create an `index` route. This route should list 5 subreddit topics. Each of these subreddit topics will link to a route called `subreddit` with the path `subreddits/{topic}` where `{topic}` is replaced with an actual value. For example, `subreddits/javascript` or `subreddits/emberjs`.

When the user visits this subreddit page, make an AJAX request using jQuery (Ember comes with jQuery) in the route's model hook, and display the results in the template for the given `{topic}` using the endpoints from the last assignment. The route's model hook should return a promise that resolves with the array contained in `data.children`.

As a reminder, Reddit has an API that supports unauthenticated, cross-domain AJAX requests. Here are a few sample endpoints:

* https://www.reddit.com/r/javascript.json
* https://www.reddit.com/r/emberjs.json

Display the results in an organized way showing the following properties:

 * `score`
 * `title` as an external link using the `url` property
 * `num_comments`
 * If `archived` is `true`, show "Archived". Otherwise, show "Not Archived".

 ### Submission

 Just push your code up to GitHub under a repository called __exactly__ "itp404-assignment4".
