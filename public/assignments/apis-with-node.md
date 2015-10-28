APIs with Node
==============

Think about what API's you'd like to use in your final project. Once you've found one, create a simple Express application with 1 route. This route is going to grab data from the API you choose and return either all of the JSON or a subset of the JSON as the response.

Name the entry file to your Express app `app.js` so that we can run `node app.js` to run it.

Once you've got an Express route returning JSON, create a custom, reusable module so that all of the data fetching isn't happening directly in the route. For example, if you were using the iTunes API, you might have a module `itunes` with a method `search` so that from your route, you can call it like `itunes.search()`.

Lastly, place a comment above your route definition with a URL that we can test once we run `node app.js`.

### Submission

As always, send a zip file to the TA and myself.
