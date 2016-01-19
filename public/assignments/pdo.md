DVD Search with PDO
================

Create search and results pages using the dvd database and PDO. Name your search page __index.php__ and your results page __results.php__. Your file structure should look like this:

```
/itp405-FIRSTNAME-LASTNAME-a2
  * index.php
  * results.php
```

Replace FIRSTNAME and LASTNAME with your first and last name.

### index.php

* Your search page should have a search field for the dvd_title field using an HTML input of type 'text'.
* This page should submit to __results.php__ using the GET method

### results.php

Your results page should display what the user searched, like this:

"You searched for 'em':"

Display the following fields on the results page in divs or an HTML table

* title
* genre
* format
* rating

When joining tables in your query, use the INNER JOIN syntax. Also, be sure to use the LIKE operator so that if I type in "Die" in the search form, all movies that contain "Die" in the title will show up (like Die Hard). If no results are returned from the query, display a message to the user saying Nothing was found with a link back to the search page.

If a user navigates to results.php directly without any query string data, redirect back to the search page.

### Rating Page

Next, make each rating on the results page a link to __ratings.php__. This page should show all dvds for the particular rating clicked.

### Styling

Lastly, style your pages a little bit so that they are organized and somewhat presentable. Feel free to use something like [Bootstrap](http://getbootstrap.com/).

### Submission

Create a repository on Github or Bitbucket called the same as the folder name. For me, it would be __itp405-david-tang-a2__ in __all lowercase__ and push your code up to it. Email dtang@usc.edu and dongyanc@usc.edu the URL to your repository.
