/* eslint-disable no-undef */
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    cconsole.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
      }
    };

module.exports = assertArraysEqual;