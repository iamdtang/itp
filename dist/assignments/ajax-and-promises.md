AJAX and Promises
=================

In this assignment, you will utilize AJAX to create an application that allows a user to find songs for a handful of artists.

### 1. List all artists

* Using AJAX, fetch all artists from the following endpoint: [https://itp-api.herokuapp.com/artists](https://itp-api.herokuapp.com/artists)
* Render these artists in a left sidebar using client-side templating. Feel free to use Bootstrap

### 2. Render songs for a selected artist

* When a user clicks on one of the artists in the previous step, make another AJAX call to: [https://itp-api.herokuapp.com/songs](https://itp-api.herokuapp.com/songs)
* Filter down this list to the set of songs that match the selected artist
  * the "id" property from the list of artists maps to the "artistId" property in the list of songs
* Render this filtered list of songs using client-side templating

### Optional

If the above was too easy for you, you can optionally do the following:

* For each rendered song, also show the corresponding genre. A list of genres can be found: [https://itp-api.herokuapp.com/genres](https://itp-api.herokuapp.com/genres)
* Make another AJAX call to this endpoint and match each song with its corresponding genre. `song.genreId` matches up with `genre.id`


### Submit

Email a zip file of your assignment files to the TA and myself.
