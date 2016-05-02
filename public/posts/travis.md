Continuous Integration with Travis CI
====

__I will post a video on continuous integration and Travis CI this week.__

1. Push your Laravel project up to Github
2. Head to [Travis CI](https://travis-ci.org) and sign in with Github.
3. On the left next to "My Repositories", click the plus sign. Then, add your repository using the switch icon to the left of your repository name. You might have to click the "Sync" button first next to your name near the page title.
4. Once you see the green check mark showing that Travis CI is enabled for your repo, click the gear icon. This will take you to the settings page for this repo.
5. Create a `.travis.yml` file in your project root with the contents below:
6. Next, navigate to the Travis Settings page for this project and add the `APP_KEY` environment variable. If you can't find the settings page (menu on the right), the URL is https://travis-ci.org/username/repository/settings. Replace username and repository with your values. If your tests rely on your database, you'll need to add those environment variables as well. You may even need to enter all of the variables contained in .env depending on what you are using in your tests and application.
7. Commit and push and watch the results on the travis details page
8. Add a Travic CI badge to your project by clicking on the badge and copying the markdown code and place it on your readme.md file.

#### .travis.yml for PHP

```
language: php
php:
  - 5.5
  - 5.6

before_script:
  - composer install --no-interaction

script: vendor/bin/phpunit
```

#### .travis.yml for Node.js

```
language: node_js
node_js:
  - 0.10
```

### Resources

* [What is Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html)
* [Travis Status Image](http://docs.travis-ci.com/user/status-images/)
* [Travis CI: What, Why, How](http://code.tutsplus.com/tutorials/travis-ci-what-why-how--net-34771)
* [Travis CI and PHP](http://docs.travis-ci.com/user/languages/php/)
