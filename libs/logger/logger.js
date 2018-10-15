const fs            = require('fs');
const path          = require('path');
const Logger = {};

/*
when a log needs to be written
- if the file named filename-year-month exists
    - append error to file
- else
    - create file named filename-year-month (where year and month reflect the current date)
    - append error to file
 */


Logger.info = function(msg) {
    let infoLogger = getFileLogger("INFO");
    infoLogger.log(msg);
};

Logger.debug = function(msg) {
    let debugLogger = getFileLogger("DEBUG");
    debugLogger.log(msg);
};

Logger.error = function(msg) {
    let errorLogger = getFileLogger("ERROR");
    errorLogger.log(msg);
};

function getCurrentMonthFilePath(logType) {
    let filePath = process.env.UCC_LOG_PATH;
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return path.join(filePath, `${logType}-${month}-${year}.log`);
}

function getFileLogger(logType) {
    let filePath = getCurrentMonthFilePath(logType);
    let stream = fs.createWriteStream(filePath, {flags: 'a', autoClose: true});
    stream.on('error', function(err){
        console.error("getFileLogger: " + err);
    });

    let log = function(msg) {
        let message = new Date().toISOString() + " : " + msg + "\n";
        stream.write(message);
    };

    return {
        log: log
    };
}





module.exports = Logger;