/*
 *  This file registers the partials directory so that 
 *  Handlebars knows where to find custom partials
 */
const root = require('app-root-path');
const hbs = require('hbs');

hbs.registerPartials(root + '/resources/views/partials');

