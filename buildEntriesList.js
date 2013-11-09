/**
 * This program lists the files present in the 'entries'
 * directory and writes the list as JSON to 'entriesList.json'.
 *
 * 'entriesList.json' drives the listing of entries shown.
 *
 * This program should be run every time a new entry is added,
 * so the listing of entries shown by the main app is up to date.
 *
 * This approach enables a simple serverless blog.
 *
 * By Curran Kelleher 11/9/2013
 */
var fs = require('fs');
fs.readdir('entries', function (err, files) {
  fs.writeFile('entriesList.json', JSON.stringify(files));
});
