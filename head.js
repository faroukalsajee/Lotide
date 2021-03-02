function head(array) {
  //const number = array[0]; //return the element itself, not as array
  return array[0]
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ❤: ${actual} === ${expected}`)
    return true;
  } else { //else runs if is false
    console.log(`Assertion Failed :no_entry:: ${actual} !== ${expected}`)
    return false;
  } 
};
// testing code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual("Bootcampp", "Bootcamp");
assertEqual(6, 6);