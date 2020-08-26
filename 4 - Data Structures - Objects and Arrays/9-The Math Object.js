function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}

console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335

for (let i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 10));
}
for (let i = 0; i < 100; i++) {
  console.log(Math.ceil(Math.random() * 10));
}
