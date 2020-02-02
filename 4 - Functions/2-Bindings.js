let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
// → 40

const halve = function (n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(3));

let safeMode = true;
let launchMissiles = function () {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function () {
        /* do nothing */
    };
};

function square(x) {
    return x * x;
}
// This is a function declaration. The statement defines the binding square and
// points it at the given function. It is slightly easier to write and doesn’t require
// a semicolon after the function.
// There is one subtlety with this form of function definition.
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(8));

const square1 = (x) => {
    return x * x;
};
const square2 = x => x * x;
console.log(square1(10));
console.log(square2(10));

const horn = () => {
    console.log("Toot");
};
console.log(horn());

