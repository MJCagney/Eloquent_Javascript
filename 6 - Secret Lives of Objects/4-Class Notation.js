class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
Rabbit.prototype.color = "brown";
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
blackRabbit.color = "midnight black";

killerRabbit.speak("Hello");
console.log(killerRabbit.color);
console.log(blackRabbit.color);


let object = new (class { getWord() { return "hello"; } })
console.log(object.getWord());
// → hello
