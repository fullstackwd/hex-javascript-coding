#!/usr/bin/node
/*
* Script that prints the title of a Star Wars movie where
* the episode number matches a given integer.
* => You must use the Star wars API with the
* endpoint https://swapi-api.hbtn.io/api/films/:id
* => You must use the module request
* You must use the module request.
*/
const id = process.argv[2];
const request = require('request');
request('https://swapi-api.hbtn.io/api/films/' + id, function (err, result, body) {
  console.log(JSON.parse(body).title);
  if (err) {
    console.log(err);
  }
});
