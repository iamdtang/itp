Angular - Routing and Directives
=========

In this assignment, you will create an app that lets the user search iTunes for albums of an artist and favorite them.

### Search page: /search

You will have a route `/search` that contains a search box. The user should be able to type in an artist and press a button "Search" that will __submit__ the form (ng-submit). A JSONP call should be made to a URL like: [https://itunes.apple.com/search?term=jack+johnson](https://itunes.apple.com/search?term=jack+johnson) (dont forget the callback). Select the first object in the `results` array and use the `artistId` property to redirect to a route `/artists/:artistId` using the `$location` service.

### Artist page: /artists/:artistId

In the resolve hook of this route, make a JSONP request to a URL like:

[https://itunes.apple.com/lookup?id={artistId}&entity=album](https://itunes.apple.com/lookup?id={artistId}&entity=album)

where `artistId` is replaced with the route parameter. If the request is unsuccessful, redirect back to `/search`.

If the request is successful, render all the albums. Note that the first item in `results` has `wrapperType` set to `artist` and all of the items after that have a `wrapperType` set to `collection` so filter out that first item.

### Directive

Create an isolate scoped directive that looks like the following:

```html
<itunes-album album="album" click="vm.favorite(album)"></itunes-album>
```

`album` is the variable in your `ng-repeat` when looping through all albums for display in your template. Inside of this directive, render the following properties and style it a little bit:

* artistName
* collectionName
* artworkUrl100
* trackCount
* primaryGenreName
* if an album is explicit (it has collectionExplicitness: "explicit"), show an image of the Parental Advisory Explicit Content stamp. If you search for Eminem, most of his albums have that property: [https://itunes.apple.com/search?term=eminem&entity=album](https://itunes.apple.com/search?term=eminem&entity=album)

Next, place a "Favorite" button somewhere within the directive. Hook up the `click` isolate scope property so that when the favorite button is clicked, it calls the passed in function. This function should be placed on the controller associated with the `/artists/:artistId` route. In this function definition, simply write out the associated album object to `window.localStorage` where the local storage key is `collectionId` and the value is a JSON string of the album object (Hint: use `JSON.stringify`).

### Submission

As always, send a zip file to the TA and myself.
