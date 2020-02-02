function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10

console.log(typeof (twice));

/*
Thinking about programs like this takes some practice. A good mental model
is to think of function values as containing both the code in their body and the
environment in which they are created. When called, the function body sees
the environment in which it was created, not the environment in which it is
called.
In the example, multiplier is called and creates an environment in which its
factor parameter is bound to 2. The function value it returns, which is stored
in twice, remembers this environment. So when that is called, it multiplies its
argument by 2.
*/