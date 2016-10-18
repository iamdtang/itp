Ember 4 - Updating and Deleting Artists
===

### Deleting an Artist

The artists API [http://itp-api.herokuapp.com/api/artists](http://itp-api.herokuapp.com/api/artists) now returns some extra data. The `canDelete` field, if `true`, means that you can make an AJAX request to delete the artist.

Update the list of artists so that a Delete button shows up next to the artist if `canDelete` is `true`. When the button is clicked, make an AJAX DELETE request to `http://itp-api.herokuapp.com/api/artists/:id`. Update the list of artists so that it doesn't contain the deleted artist anymore.

### Updating an Artist

Create the route `artists.update` with a path `:id/update`. This route will be used to show a form to update an artist's name.

Update the list of artists again with an Update link.

```
{{#link-to 'artists.update' artist.id}}Update{{/link-to}}
```

Only show this button if `canUpdate` is `true`.

On the `artists.update` route, display a form
