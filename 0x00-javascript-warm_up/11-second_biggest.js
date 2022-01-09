#!/usr/bin/node
const args = process.argv.slice(2);
let argsInt = [];

function sortNum (a, b) {
  return a - b;
}

if (args[0] === undefined) {
  console.log(0);
} else if (args.length === 1) {
  console.log(0);
} else {
  argsInt = args.sort(sortNum);
  argsInt.pop();
  console.log(parseInt(argsInt[argsInt.length - 1]));
}
