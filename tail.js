/* eslint-disable no-undef */
const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i ++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};


module.exports = tail;