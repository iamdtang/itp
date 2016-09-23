Installing Node.js and Ember CLI
===

To install Ember-CLI, you first need Node.js.

### Mac

If you have a previous installation of Node, uninstall it. Here are some directions for uninstalling: https://gist.github.com/TonyMtz/d75101d9bdf764c890ef

Visit https://nodejs.org/en/ and download the LTS version.

First, let's adjust the `npm` configuration so that you don't have to type `sudo npm ...` when you install global modules. Do the following:

```
mkdir ~/npm
npm config set prefix ~/npm
```

Check to see if you have `~/.bash_profile` created. If not, run `touch ~/.bash_profile`. Then, run the following:

```
echo 'export PATH=$HOME/npm/bin:$PATH' >>~/.bash_profile
source ~/.bash_profile
npm install -g ember-cli
```

Go to your command line and type `ember -v`. You should see the version of Ember CLI. Let me know if you have any questions!

### Windows

To be honest, I've never tried installing Node or Ember CLI for that matter on Windows, but I've heard it is as easy as visiting https://nodejs.org/en/ and going through the installer. Download the LTS version.
Once you've done that, I think you can open up your command line and run:

```
npm install -g ember-cli
```

Maybe this will help too: [https://www.youtube.com/watch?v=VPyA2spcibY](https://www.youtube.com/watch?v=VPyA2spcibY)

Once you've installed everything, you should be able to run `ember -v` from the command line and see the version number of Ember CLI.

Let me know if you have any questions and I'll find someone who can help.
