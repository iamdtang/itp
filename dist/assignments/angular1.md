Angular 1
=======

Take the previous assignment and rewrite it using Angular. Feel free to use Bootstrap for styling. To start, create an angular module called `music`. Also, create a controller called `MusicController`. This assignment uses AJAX, so it requires you to run a local server.

### 1. List all artists

* Using AJAX via the built in `$http` service, specifically the [$http.get()](https://docs.angularjs.org/api/ng/service/$http#get) method, fetch all artists from the following endpoint: [https://itp-api.herokuapp.com/artists](https://itp-api.herokuapp.com/artists)
* Render these artists in a left sidebar using the `ng-repeat` directive

### 2. Render songs for a selected artist

* Initially show a message to the user "Please select an artist"
* When a user clicks on one of the artists, make an AJAX call to: [https://itp-api.herokuapp.com/songs](https://itp-api.herokuapp.com/songs)
* Filter down this list to the set of songs that match the selected artist and render
  * the "id" property from the list of artists maps to the "artistId" property in the list of songs
* Once an artist is selected, the message "Please select an artist" should be removed

### Optional

* Move your artist API call to a dedicated service using the `.factory()` API and call it `artist`. Create a method called `all()` on it that makes the AJAX call.
* Similarly, do the same for songs
* Apply a unique style to the selected artist using the `ng-class` directive

### Submission

As always, send a zip file to the TA and myself.
