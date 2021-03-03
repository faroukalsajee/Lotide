import eqArrays from './eqArrays';


  const assertArraysEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log(`❌ ❌ ❌: Ops these are not equal `)
      }
      else {
          console.log(`✅ ✅ ✅ : Congratulations! These are equal`)
                  return eqArrays

      }
  }
  export default assertArraysEqual;

