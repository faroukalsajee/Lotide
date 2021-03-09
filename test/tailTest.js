/* eslint-disable no-undef */
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

// assertEqual(tail([5, 6, 7]), [6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse", "Labs");
// assertEqual(tail([5]), 5);
// assertEqual(tail([]), undefined);