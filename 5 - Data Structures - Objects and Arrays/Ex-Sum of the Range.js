function range(start, end, step = 1) {
  let range = [];
  if (step === 0) return range;
  let i = 0;
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum(rangeOfNumbers) {
  let sum = 0;
  for (let number of rangeOfNumbers) {
    sum += parseInt(number);
  }
  return sum;
}

console.log(range(1, 10));
// console.log(range(-1, 10, 2));
// console.log(range(100, 10, -2));
// console.log(range(1, 10, 0));
//console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));