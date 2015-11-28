REST Design Principles
======================

### What is REST?

* A simple way to define interactions between applications / programs
* In terms of the web, our applications want to interact with API's like Instagram. Instagram has defined an API which tells us developers how we can interact with it. The way they have designed to organize their API is by using REST.
* REST makes use of simple URL's to identify the things we want to operate on.
* Each URL identifies a __resource__
* Resources are thought of as __nouns__
* REST makes use of the request type or HTTP verb to dictate how a request should be handled
* Request types / HTTP Verbs
	* GET - often used for __reading__ data
	* POST - often used for creating records/data
	* PUT - often used for updating records
	* DELETE - deleting records

HTML forms only support __GET__ and __POST__ requests. However, when interacting with 3rd party API's, we are typically doing this from either JavaScript or a server-side language like PHP or Node. In either of these technologies, we can make requests using these other HTTP verbs.

So let's look at a small example. Imagine we have a database that contains music, something like the iTunes library. We want to expose the list of artists through an API. I have left off the hostname in the examples below because the hostname is irrelevant in understanding how the API is organized but it is important to uniquely identify this resource over the web. When viewing API documentation, you will often see the hostname left off in examples of different resources.

__GET: /artists__ - return a collection of artists

__GET: /artists/7__ - return a single artist

__POST: /artists__ with data in the request body - create/store a song in the database

__PUT: /artists/7__ with data in the request body- update artist 7 with the data passed in the request

__DELETE: /artists/7__ - delete artist 7 from our library

In the above, 7 would be some type of unique identifier for a particular artist, like an `id` property.


### Extra Reading

* [Teach a dog to REST](http://vimeo.com/17785736) - Video
