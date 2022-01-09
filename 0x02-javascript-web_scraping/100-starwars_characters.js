#!/usr/bin/node

/* Write a script that prints
 * all characters of a Star Wars movie.
 */

const request = require('request');
const { argv } = require('process');

const API_URL = 'https://swapi-api.hbtn.io/api/films/' + argv[2];

request(API_URL, (err, response, body) => {
  if (err) console.log(err);
  JSON.parse(body).characters.map((char) => {
    request(char, (err, response, body) => {
      if (err) console.log(err);
      console.log(JSON.parse(body).name);
    });
  });
});
