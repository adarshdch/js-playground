define(['logger', './child'], function(logger, Child) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    
    var myChild = new Child();

    var welcome = function(name)
    {
    	myChild.welcome("Bro");
    	logger.log("Welcome " + name + ". I am parent.");
    };

    var goodbye = function(name)
    {
    	myChild.goodbye("Bro");
    	logger.log("Goodbye " + name + ". I am parent.");
    };

    return {
    	welcome: welcome,
    	goodbye: goodbye
    };
});