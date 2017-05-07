const debugConfig = require('configs_debug')

const printMessage = function (level, tag, message) {
    console.log('['+level+'] '+tag+' | '+message);
}

module.exports.debug = function (tag, message) {
    printMessage(debugConfig.log.levels.debug, tag, message)
}

module.exports.info = function (tag, message) {
    if (debugConfig.log.level === debugConfig.levels.info
    || debugConfig.log.level === debugConfig.levels.warn
    || debugConfig.log.level === debugConfig.levels.error) {
        printMessage(debugConfig.levels.info, tag, message)
    }
}

module.exports.warn = function (tag, message) {
    if (debugConfig.log.level === debugConfig.levels.warn
        || debugConfig.log.level === debugConfig.levels.error) {
        printMessage(debugConfig.levels.warn, tag, message)
    }
}

module.exports.error = function (tag, message) {
    if (debugConfig.log.level === debugConfig.levels.error) {
        printMessage(debugConfig.levels.error, tag, message)
    }
}