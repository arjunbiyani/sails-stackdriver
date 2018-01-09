

var responseCodes = sails.config.responsecodes;
var _ = require('lodash');
const winston = require('winston');
const Logger = winston.Logger;
// -> uncomment this if you want to log via console const Console = winston.transports.Console;
// Imports the Google Cloud client library for Winston
const LoggingWinston = require('@google-cloud/logging-winston');
module.exports = {

    /**
    * For Log Testing
    **/
    logInfo: function(req, res) {
        
       // Creates a Winston Stackdriver Logging client
		const loggingWinston = new LoggingWinston({
		  projectId: 'licious-new',
		  keyFilename: process.cwd()+'/stack-gcp.json',
		  name: 'Licious-API-Test',
		});
    
     	 // Create a Winston logger that streams to Stackdriver Logging
		const logger = new Logger({
		  level: 'info', // log at 'info' and above
		  transports: [
		    // Log to the console
		  	 // -> un-comment if you want to log to console as well  new Console(),
		    // And log to Stackdriver Logging
		    loggingWinston,
		  ],
		});

		// Writes some log entries
		logger.error('Licious API - Error Log 2');
		logger.info('Licious API - INFO LOGs 2 ');
        res.send("TesAuto");
    }
}