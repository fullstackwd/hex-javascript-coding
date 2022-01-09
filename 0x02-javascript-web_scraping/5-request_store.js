#!/usr/bin/node
/*
 * Script that gets the contents of a webpage and stores it in a file.
 * => The first argument is the URL to request.
 * => The second argument the file path to store the body response.
 * => The file must be UTF-8 encoded.
 * You must use the module request.
 */
const url = process.argv[2];
const request = require('request');
request(url, function (err, result, body) {
  if (err) {
    console.log(err);
  } else {
    const fs = require('fs');
    const file = process.argv[3];
    fs.writeFile(file, body, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
