#!/usr/bin/node
/*
* Script that display the status code of a GET request.
* => The first argument is the URL to request (GET)
* => The status code must be printed like this: code: <status code>
* You must use the module request.
*/
const url = process.argv[2];
const request = require('request');
request(url, function (err, result, body) {
  console.log('code: ' + result.statusCode);
  if (err) {
    console.log(err);
  }
});
