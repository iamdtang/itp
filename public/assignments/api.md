Consume an API
===================

### The Basics

* Find an API you'd like to work with, and create a page with a dynamic route that displays information from that API using PHP.
* Cache the API call based on some dynamic data for 30 minutes, like how we cached SoundCloud API responses using a key made up of the SoundCloud URL. Use [Laravel's Cache class](http://laravel.com/docs/5.2/cache). Subsequent calls to the API for the same search term should be much faster.

### Refactor

Once you got the above working, refactor your code so that the API call and caching is in its own class under the namespace `App\Services`. Your namespace can be longer than that, but it must start with `App\Services`.


### Submission

To submit, push this code up to a repository named itp405-spring2016-laravel on the master branch and email myself and the TA (dongyanc@usc.edu). In your email, __specify the route we should grade along with an example (since there are dynamic segments)__. Please don't create different branches for each assignment. Also, include the commit ID for this assignment submission in your email.