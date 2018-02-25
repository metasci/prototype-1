 
 /**
  * Middleware files must NOT be named index.js
  */

  const root = require('app-root-path');
  const builder = require(root + '/libs/filetree/builder');
  
  module.exports = builder(__dirname);