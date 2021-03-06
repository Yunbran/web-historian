var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http-request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  fs.readFile( __dirname + '/../archives/sites.txt', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
};

exports.isUrlInList = function(){
};

exports.addUrlToList = function( url ){
  fs.appendFile( __dirname + '/../archives/sites.txt', url + "\n",'utf8', function (err, data) {
    if (err) { throw err; };
  });
};

exports.isURLArchived = function(){

};

exports.downloadUrls = function(){
  // save the response to file with a progress callback
http.get( {
  url: 'http://www.twitter.com',
  progress: function (current, total) {
    console.log('downloaded %d bytes from %d', current, total); }
  },

  '../archives/sites/twitter.txt',

  function (err, res) {
    if (err) {
      // console.error(err);
      // return;
    }
    console.log(res.code, res.headers, res.file);
  });

};
