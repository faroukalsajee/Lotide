const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const bestBooksByGenre = {
  biography: "Elon Musk",
  fiction: "A Brave New World",
  nonFiction: "Outliers"
}


const findKeyByValue = function(obj, objVal) {
  for (let key in obj) {
    if (objVal === obj[key]) {
      console.log(key)
      return true;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
// console.log(assertEqual(findKeyByValue(bestBooksByGenre, "Outliers"), true));
// console.log(assertEqual(findKeyByValue(bestBooksByGenre, "A Brave Old World"), undefined));
// console.log(assertEqual(findKeyByValue(bestBooksByGenre, "Elon Musk"), "Biography"))
