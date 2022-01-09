#!/usr/bin/node
exports.esrever = function (list) {
  const myList = [];
  for (let i = 0; list[i]; i++) {
    myList.push(list[list.length - (i + 1)]);
  }
  return (myList);
};
