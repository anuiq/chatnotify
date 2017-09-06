var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({'timestamp':true})
    ]
});

logger.level = process.env.LOG_LEVEL || 'info';
logger.debug ("Debug logging enabled");

module.exports = logger;