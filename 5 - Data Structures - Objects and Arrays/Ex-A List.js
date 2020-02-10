function arrayToList(inputArray) {
  if (Array.isArray(inputArray) == false || inputArray.length == 0) return null;

  let list = { value: inputArray[inputArray.length - 1], rest: null };
  for (let i = inputArray.length - 2; i >= 0; i--) {
    list = { value: inputArray[i], rest: list };
  }
  return list;
}

let list = arrayToList([1, 2, 3, 4, 5, 6]);
console.log(list);

function listToArray(list) {
  let result = [];
  for (let node = list; node; node = node.rest) {
    result.push(node.value);
  }
  return result;
}

console.log(listToArray(list));
