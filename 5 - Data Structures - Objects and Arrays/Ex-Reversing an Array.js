function reverseArray(input) {
  let output = [];
  for (let value of input) {
    output.unshift(value);
  }
  return output;
}

// console.log(reverseArray([1,2,3,4,5,6]));
// console.log(reverseArray(["car","boat",true, false, 3, 5]));

function reverseArrayInPlace(input) {
  for (let i = 0; i < Math.floor(input.length / 2); i++) {
    let endValueIndex = input.length - (1 + i);
    let holdValue = input[i];
    input[i] = input[endValueIndex];
    input[endValueIndex] = holdValue;
  }
  return input;
}

// console.log([1,2,3,4,5,6, 7].length/2);
// console.log(Math.floor([1,2,3,4,5,6,7].length/2));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArrayInPlace(["car", "boat", true, false, 3, 5]));
