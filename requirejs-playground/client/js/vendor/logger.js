define(function () {
    logToConsole = function log(msg) {
        console.log(msg);
    }

    return {
    	log: logToConsole
    };
});