#!/usr/bin/node
/*
* Script that prints the number of movies where
* the character "Wedge Antilles" is present.
* => The first argument is the API URL of the
* Star Wars API https://swapi-api.hbtn.io/api/films/
* => Wedge Antilles is character ID 18 - your script must use
* this ID for filtering the result of the API.
* => You must use the module request.
*/
const url = process.argv[2];
let count = 0;
const request = require('request');
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response && response.statusCode === 200) {
    const films = JSON.parse(body).results;
    for (let i = 0; i < films.length; i++) {
      for (let j = 0; j < films[i].characters.length; j++) {
        if (films[i].characters[j].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
