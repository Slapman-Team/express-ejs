/*
 * Name: Logger
 * Version: v1
 * Description: Make your console logs a bit prettier
 * Author: Ruben Uijtdewilligen <ruben.uijtdewilligen07@gmail.com> (donutlabs.dev)
 */

const colors = require('colors');

colors.setTheme({
    info: ['green', 'bold'],
    warn: ['yellow', 'bold'],
    error: ['red', 'bold'],
});


const log = (app, msg) => {
    console.log(`[${app}] ${msg}`);
}

const info = (app, msg) => {
    console.log(`${'[*]'.info} [${app}] ${msg}`);
}

const warn = (app, msg) => {
    console.log(`${'[!]'.warn} [${app}] ${msg}`);
}

const error = (app, msg) => {
    console.log(`${'[ERROR]'.error} [${app}] ${msg}`);
}

module.exports = {
  log,
  error,
  info,
  warn,
}
