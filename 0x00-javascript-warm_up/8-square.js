#!/usr/bin/node
const { argv } = require('process');

let x = Number(argv[2]);
let line = '';
if (isNaN(x)) {
  console.log('Missing size');
} else {
  for (let i = x; i > 0; i--) {
    line = line + 'X';
  }
  while (x > 0) {
    console.log(line);
    x--;
  }
}
