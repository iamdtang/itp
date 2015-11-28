Continuous Integration with Travis CI
=====================================

* Push your project up to Github
* Head to [Travis CI](https://travis-ci.org) and sign in with Github.
* On the left next to "My Repositories", click the plus sign. Then, add your repository using the switch icon to the left of your repository name. You might have to click the "Sync" button first next to your name near the page title.
* Once you see the green check mark showing that Travis CI is enabled for your repo, click the gear icon. This will take you to the settings page for this repo.
* Create a `.travis.yml` file in your project root with the following contents:

```
language: node_js
node_js:
  - 0.12
```

Next, add the following contents to your `package.json`:

```json
{
  "scripts": {
    "test": "./node_modules/karma/bin/karma start --single-run --browsers PhantomJS"
  }
}
```

Adding this allows you to run `npm test` from the root of your project. Travis CI will execute this command.

* Commit and push and watch the results on the travis details page
* Add a Travis CI badge to your project by clicking on the badge and copying the markdown code and place it on your README.md file. Commit and push again.

### Resources

* [What is Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html)
* [Travis Status Image](http://docs.travis-ci.com/user/status-images/)
* [Travis CI and Node.js](https://docs.travis-ci.com/user/languages/javascript-with-nodejs)
