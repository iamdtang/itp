# Final Project
Create a final project on a topic of your choice using the technologies and techniques covered in this course. You can build your application as either a server-rendered application using Laravel, or a client-side application driven by an API. See below for the different requirements.

## Requirements (server-rendered application)
- Use of the Laravel framework
- Adheres to the MVC pattern
- Use of Eloquent ORM for database access
- At least 1 API call
- Caching
- Original MySQL database designed by you that has been populated with appropriate data for your application. You should have at least 3 tables. I will need to set up a mysql db for you unless you want to set up MySQL locally and then I can migrate it over to the remote server when you are finished.
- **Secure** database reading/writing (escaping of user input). If you are using Laravel, this is handled for you if you use the query builder or the ORM.
- Authenticated admin pages found at the path `/admin`. You must have a user account of `admin` with a password of `laravel`. I should be able to perform administrative actions such as adding new data, deleting data, editing data, creating new users, etc. Do what makes sense for your site.
- Flash messaging
- Blade templating and layouts. Your site should utilize only a couple layouts at most.
- At least 5 tests that are unique
- Travis CI integration
- Server-side data validation
- Site content (graphics, narrative text, etc.) beyond the database content
- General design that is consistent across site and sections
- Easy to use & styling

## Requirements (client-side application driven by an API)
- Use of Ember for the client-side application
- API in either Laravel or Node and makes use of controllers and models
- Use of an ORM (Eloquent or Sequelize)
- Original MySQL database designed by you that has been populated with appropriate data for your application. You should have at least 3 tables. I will need to set up a mysql db for you unless you want to set up MySQL locally and then I can migrate it over to the remote server when you are finished.
- **Secure** database reading/writing (escaping of user input). If you are using Laravel, this is handled for you if you use the query builder or the ORM.
- Authenticated admin pages found at the path `/admin`. You must have a user account of `admin` with a password of `laravel`. I should be able to perform administrative actions such as adding new data, deleting data, editing data, creating new users, etc. Do what makes sense for your site.
- Success and error messages when information is saved/deleted successfully or when it errors
- At least 5 tests that are unique. These tests can either be tests in Ember or for your API. If your API is in Node, use Mocha for your tests. Here are a few posts I've written that you might find useful:
  - [Testing in Ember with Ember CLI](https://www.codementor.io/ember-js/tutorial/testing-emberjs-with-ember-cli)
  - [Unit Testing & TDD in Node.js – Part 1](https://www.codementor.io/nodejs/tutorial/unit-testing-nodejs-tdd-mocha-sinon)
  - [Unit Testing & TDD in Node.js – Part 2](https://www.codementor.io/nodejs/tutorial/unit-testing-tdd-node-js-nockjs-part-2)
- Travis CI integration
- Server-side data validation. If you'd like an equivalent of Laravel's Validator class in Node, I've written a port:
  - [https://www.npmjs.com/package/validatorjs](https://www.npmjs.com/package/validatorjs)
- Site content (graphics, narrative text, etc.) beyond the database content
- General design that is consistent across site and sections
- Easy to use & styling

## Submission
- Final projects will be turned in on Github and Heroku
- Final projects may be turned in late by 1 week for 90% credit. You must notify the instructor if you opt for the later deadline before the due date.
- Students will create a short (less than 5 minute) screencast walking through and __explaining__ their project and where requirements were met. This gives you a chance to demonstrate all aspects of your application that I might miss when grading. Here are a few free screencast options:
  - [http://www.screenr.com/](http://www.screenr.com/) (in the browser)
  - quicktime on mac
  - Jing - [http://www.techsmith.com/jing.html](http://www.techsmith.com/jing.html)

Please post this screencast to Youtube or Vimeo, and include a link to this video on your project README.md.

## Grading

I will grade based on the above requirements as well as:

- application complexity and organization
- did you meet all the requirements?
- styling / html document structure (as opposed to pages not having an HTML document structure)
- does it work?
