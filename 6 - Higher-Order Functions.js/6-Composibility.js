const SCRIPTS = require("./scripts.js");

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(biggest);
// → {name: "Han", …}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
console.log(
  Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))
);
// → 1165
console.log(
  Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))
);
// → 204
