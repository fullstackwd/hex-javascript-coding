#!/usr/bin/node
/*
* Script that computes the number of tasks completed by user id.
* the character "Wedge Antilles" is present.
* => The first argument is the
* API https://jsonplaceholder.typicode.com/todos
* => Only print users with completed task
* => You must use the module request.
*/
const url = process.argv[2];
const request = require('request');

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    const dict = {};
    const stuff = JSON.parse(body);
    for (let i = 0; i < stuff.length; i++) {
      if (stuff[i].completed === true) {
        if (dict[stuff[i].userId] === undefined) {
          dict[stuff[i].userId] = 1;
        } else {
          dict[stuff[i].userId] += 1;
        }
      }
    }
    console.log(dict);
  }
});
