/*
 *  This file registers the partials directory so that 
 *  Handlebars knows where to find custom partials
 */

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/resources/views/partials');

