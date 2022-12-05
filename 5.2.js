import { dayFive } from "./data/dayFive.js";

const moves = dayFive().moves.split("\n").map((move) => {
    const cleaned = move.replace("move ", "").replace(" from", "").replace("to ", "").split(" ")
    return {amount: cleaned[0], from: cleaned[1], to: cleaned[2]}
})
const stacks = dayFive().stacks;
moves.forEach(move => {
    const crates = stacks[move.from].splice(-move.amount);
    
    crates.forEach((crate) => {
      stacks[move.to].push(crate);
    });
});

const getTopCrate = (stack) => {
    return stack.splice(-1)
}
let topLayer = ""
Object.keys(stacks).forEach(function (key) {
  topLayer = topLayer + getTopCrate(stacks[key]);
});

console.log(topLayer);