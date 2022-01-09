#!/usr/bin/node

/* Write a script that prints
 * all characters of a Star Wars movie.
 */

const request = require('request');
const { argv } = require('process');

const url = 'https://swapi-api.hbtn.io/api/films/' + argv[2];

request(url, (err, response, body) => {
  if (err) console.log(err);
  const chars = JSON.parse(body).characters;
  printChars(chars, 0);
});

const printChars = (chars, index) => {
  request(chars[index], (err, response, body) => {
    if (err) console.log(err);
    console.log(JSON.parse(body).name);
    if (index + 1 < chars.length) {
      printChars(chars, index + 1);
    }
  });
};
