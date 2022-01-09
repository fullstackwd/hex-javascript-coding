#!/usr/bin/node
const SquarePrimary = require('./5-square.js');

class Square extends SquarePrimary {
  charPrint (c) {
    if (!c) {
      this.print();
    } else {
      for (let i = 0; i < this.width; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}
module.exports = Square;
