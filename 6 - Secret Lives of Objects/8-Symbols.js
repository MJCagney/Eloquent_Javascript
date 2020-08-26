class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let blackRabbit = new Rabbit("black");

let sym = Symbol("name");
let sym2 = Symbol("name");
console.log(sym == Symbol("name"));
console.log(sym == sym2);
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
107;
// → 2 cm of blue yarn

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope
