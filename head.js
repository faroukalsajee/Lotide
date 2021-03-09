/* eslint-disable no-undef */
const head = function(array) {
  return array[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

//this is used for other files, do not delete
module.exports = head;
