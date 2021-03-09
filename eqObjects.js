/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqObjects = function(object1, object2){
if (Object.keys(object1).length === Object.keys(object2).length){
  for(let key of Object.keys(object1) ){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
          if (!eqArrays(object1[key],object2[key])){
           return false;       
          }
      }
      
  }
  return true;
}
return false;    
};
       
module.exports = eqObjects; 

// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1"};
// console.log(assertEqual(eqObjects(ab,ba),true));
// const abc = { a: "1", b: "2", c: "3"};
// console.log(assertEqual(eqObjects(ab,abc),false));
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertEqual(eqObjects(cd,dc),true));
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertEqual(eqObjects(cd,cd2),false));