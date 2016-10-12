Ember 3 - CRUD Part 1 / Final Project Idea
===

For this homework, you will be using the application we started in class as a starting basis. Here is my copy if you don't want to use yours: https://bitbucket.org/skaterdav85/crud-in-class


### Creating an artist

On the list of artists page, create a link "Create Artist" using the `link-to` helper that navigates to the route `artists/new`, which is a nested route under the `artists` route. On this route, display a form for creating a new artist. This form should have a text field for the artist name. When the form is submitted, make a POST request to `http://itp-api.herokuapp.com/api/artists`.

The request payload should look like this:

```json
{
  "name": "unique artist name here"
}
```

A successful response will look like this:

```json
{
  "artist": {
    "id": 103,
    "name": "The Chainsmokers"
  }
}
```

When the AJAX request resolves, do the following:

* take the new artist object from the response and append it to the list of artists so it updates in the UI
* clear the form
* transition to the `/artists` route

__Hint:__ In the `artists.new` controller where your form submit action will be, you will need access to the model in the `artists` route (the list of artists), so that you can append the newly created artist to this list. To achieve this, set the model of the `artists.new` route to the model of the `artists` route using the [modelFor()](http://emberjs.com/api/classes/Ember.Route.html#method_modelFor) method on route objects. For example:

```js
// app/routes/artists/new.js
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // modelFor() will return the model for parent routes, in this case the `artists` route.
    // the model of the `artists.new` route will be the same as the `artists` route
    // this will be the model on the `artists.new` controller
    return this.modelFor('artists');
  }
});
```

The API will return an error if you try and create an artist that is already in the database. That is, an HTTP response with a status code of 400. When this happens, alert out to the user that the artist already exists. Remember, the second function passed to `then(success, fail)` handles when a promise rejects (fails). The jQuery AJAX functions will reject promises if a response has a 400-level or 500-level HTTP status code. For example:

```js
promise.then(function() {
  console.log('success');
}, {
  console.log('error');
});
```

### Final Project Idea

Start thinking about what you want to build for your final project and how you will meet the requirements. There is nothing to turn in here. If you have any questions or aren't sure what is possible, don't hesitate to reach out to me.

### Submission

Just push your code up to GitHub under a repository called __exactly__ "itp404-assignment6".
