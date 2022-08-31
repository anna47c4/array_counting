"use strict";
/* let counter = 0;
const arr = [];
console.log(arr);

start();

function start() {
  arr.unshift(counter);
  console.log(arr);
  counter++;
  if (arr.length > 8) {
    arr.pop();
  }
  setTimeout(start, 1000);
  console.log(counter);
} */

/* another way to solve it (this one is smarter, but both works) */
const array = [];
let counter = 0;

init();

function init() {
  counter += 1;
  array.unshift(counter);
  console.log(array.slice(0, 9));
  setTimeout(init, 700);
}
