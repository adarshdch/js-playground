//This is entry point for application

define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:

    var parent = require('./parent');
    //Welcome the user
    parent.welcome("Mr. Developer");

    // Load library/vendor modules using
    // full IDs, like:
    var logger = require('logger');
    logger.log("Demo for using RequireJS is complete.");

    //Say Goodbye to the user
    parent.goodbye("Mr. Developer");

    $('body').append("<div>I have been appended by Jquery</div>");;
});