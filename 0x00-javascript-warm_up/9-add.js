#!/usr/bin/node
const { argv } = require('process');

function add (a, b) {
  console.log(a + b);
}

add(Number(argv[2]), Number(argv[3]));
