#!/usr/bin/node
const { argv } = require('process');

function factorial (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const x = Number(argv[2]);
if (isNaN(x)) {
  console.log(1);
} else {
  console.log(factorial(x));
}
