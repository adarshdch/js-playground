# What's Karma?

Karma is a tool that enables the running of source code (i.e. JavaScript) against real browsers via the CLI. The fact that it runs against real browsers rather than "fakes" with a virtual DOM is extremely powerful. DOM implementations vary across browsers therefore the idea is to use the actual browsers for correctness.

#Installing Karma and plugins

The recommended approach is to install Karma (and all the plugins your project needs) locally in the project's directory.

# Install Karma:
$ npm install karma --save-dev

# Install plugins that your project needs:
$ npm install karma-jasmine karma-chrome-launcher --save-dev

This will install karma, karma-jasmine and karma-chrome-launcher packages into node_modules in your current working directory and also save these as devDependencies in package.json, so that any other developer working on the project will only have to do npm install in order to get all these dependencies installed.

# Run Karma:
$ ./node_modules/karma/bin/karma start

Typing ./node_modules/karma/bin/karma start sucks and so you might find it useful to install karma-cli globally.

$ npm install -g karma-cli

Then, you can run Karma simply by karma from anywhere and it will always run the local version.

$ karma start

# Configuration

# Initialize Karma

$npm init

# Update your package.json

 "scripts": {
    "test": "karma start karma.conf.js"
  },

# Using Mocha & Should

Install (and drop the jasmine dependencies from package.json if starting from the defaults):

npm install karma-mocha --save-dev
npm install karma-chai --save-dev

# Using a Headless Browser

The tests can become slower when targeting multiple browsers with lots of tests. I don't deem it necessary to run against all the browsers each time, so for speed I use PhantomJS which is a headless browser. I run against the full set of browsers at the end of a set of changes.

npm install karma-phantomjs-launcher --save-dev

# Setting up Test Coverage

npm install karma-coverage --save-dev







=======================================================================
Reference: http://www.bradoncode.com/blog/2015/02/27/karma-tutorial/