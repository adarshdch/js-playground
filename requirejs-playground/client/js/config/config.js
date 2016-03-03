// For any third party dependencies, like jQuery, place them in the vendor folder.

// Configure loading modules from the js directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({

		// Modules can read that config info by asking for the special dependency "module" and calling module.config().
		config: {
        'module': {
            configKey: 'configValue'
        }
    },

		//Base path of the files to be confired in requirejs. Note here that this path is relative to index.html file
    baseUrl: 'js',

    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    // These paths are checked when you write like require("alias");
    paths: {
    		//Note here that this path is relative to baseUrl i.e. js/vendor
        app: 'app',		//Application path =	js + app = js/app folder
        jquerylatest: 'vendor/jquery2.1.4',
        backbone: 'vendor/backbone1.2.3',
        underscore: 'vendor/underscore1.8.3',
        logger: 'vendor/logger',
        alias: 'actual/file/path'	//Given path does not exist but it won't throw error since we are not trying to use this alias in code.

    },

    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
    		"module": ["dependency1", "dependency2"],
        // Backbone
        "backbone":{
            // Depends on underscore/lodash and jQuery
            "deps":["underscore", "jquery"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
    },

    map: {
        '*': {
            'jquery': 'jquerylatest'
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/myApp']);