function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

const JOURNAL = require("./Journal.js");
//console.log(JOURNAL);
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}
console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]

for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
// → carrot: 0.0140970969
// → exercise: 0.0685994341
// → weekend: 0.1371988681
// → bread: -0.0757554019
// → pudding: -0.0648203724
// and so on...

console.log("Events between 0.1 and -0.1");
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
// → weekend: 0.1371988681
// → brushed teeth: -0.3805211953
// → candy: 0.1296407447
// → work: -0.1371988681
// → spaghetti: 0.2425356250
// → reading: 0.1106828054
// → peanuts: 0.5902679812

let peanutTeethCount = 0;
for (let entry of JOURNAL) {
    if (entry.events.includes("peanut teeth"))
      peanutTeethCount++;
}
console.log(`Number of "peanut teeth" found: ${peanutTeethCount}`);

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1


peanutTeethCount = 0;
for (let entry of JOURNAL) {
    if (entry.events.includes("peanut teeth"))
      peanutTeethCount++;
}
console.log(`Number of "peanut teeth" found: ${peanutTeethCount}`);
