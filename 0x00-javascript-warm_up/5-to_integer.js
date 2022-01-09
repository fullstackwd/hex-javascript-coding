#!/usr/bin/node
const { argv } = require('process');

const number = Number(argv[2]);
if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}
