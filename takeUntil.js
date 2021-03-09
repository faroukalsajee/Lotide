// (value, index, array).
// 1. The array to work with
// 2. The callback (which Lodash calls "predicate")


const takeUntil = function(newArr, callback) {
  newArr.forEach(function(item, index) {

  
    if (callback(item)) {
      newArr = newArr.slice(0, index);
    } return {
    }
  
});
return newArr;
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(` ❌ ❌ ❌ : Uh Oh! These arrays are NOT equal [${arr1}] !=== [${arr2}]`)
    }
    else {
        console.log(` ✅ ✅ ✅ : Congratulations! These arrays ARE equal [${arr1}] === [${arr2}]`)
    }
}
module.exports = takeUntil;

// const data1 = [1,2,5,7,2,-1,2,4,5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(assertArraysEqual(results1, [1,2,5,7,2]));

// console.log("---");

// const data2 = ["I've", "been", "to", "Hollywood",",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
