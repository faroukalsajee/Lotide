/* eslint-disable no-undef */
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  } 
  return true;
};

module.exports = eqArrays;

// Tests

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);