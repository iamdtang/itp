Deploying to Heroku
===================

First, create a [Heroku account](http://heroku.com). Next, download the [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). The following assumes you are serving your project using Node.

Create a file called `Procfile` in your project root with the following contents:

```
web: node main.js
```

Substitute `main.js` with whatever file kicks off your node app. Head to the [Heroku dashboard](https://dashboard.heroku.com) and create an app. Follow the directions under "Create a new Git repository" and "Deploy your application".
