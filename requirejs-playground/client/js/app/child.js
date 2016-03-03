define(['logger', 'backbone'], function(logger) {
    //This function is called when parent.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    return function(options){


    	var User = Backbone.Model.extend({

    		initialize: function(){
    		},

    		defaults: {
			    "firstName":  "DefaultFirstName",
			    "lastName":     "DefaultLastName"
			  }
    	});

    	var obj = new User({firstName: 'Overriden First Name'});

    	this.welcome = function(name)
	    {
	    	logger.log("Welcome " + obj.get('firstName') + ". I am child.");
	    }

	    this.goodbye = function(name)
	    {
	    	logger.log("Goodbye " + obj.get('lastName') + ". I am child.");
	    }
	  }

});