/*
** Module dependencies
*/
const Client = require('./lib/client');


/*
** Methods
*/
function wfs(url, options) {
  return new Client(url, options);
}


/*
** Exports
*/
module.exports = wfs;
