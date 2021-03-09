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

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log("Something seems not working with the Array");
    }
    else {
        console.log("Congrats! Looking good");
    }
}


const without = function(source,itemsToRemove){
let newArr = [...source];
for(let i = 0; i <= newArr.length;i++) {
  for (let values of itemsToRemove){
    if(source[i] === values){
      let removedItem = newArr.indexOf(values);
      newArr.splice(removedItem,1);
    }
  }
}
return newArr;
} 
// modules.export = without;
// let source = [1,2,3,4,5,6,7,8];
// let itemsToRemove = [8];
// console.log(without(source,itemsToRemove));




// Test cases to ensure proper functioning of the code
// const words = ["hello","world","lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]);
// assertArraysEqual(words,["hello", "world", "lighthouse"]);
// // ******************************************************
// console.log(without([1,2,3],[1])) // => [2,3] 
// console.log(without(["1","2","3"],[1,2,"3"])) // => ["1","2"]
