import { dayThree } from "./data/dayThree.js"
const rucksacks = dayThree().split("\n").map((rucksack) => {
  return [
    rucksack.substring(0, rucksack.length / 2),
    rucksack.substring((rucksack.length / 2), rucksack.length),
  ];
})

const incorrectItem = rucksacks
  .map((rucksack) => {
    const compartmentOne = rucksack[0].split("");
    const compartmentTwo = rucksack[1].split("");
    const incorrectItem = compartmentOne.filter((item) =>
      compartmentTwo.includes(item)
    )[0];
  const isLowercase = incorrectItem.toLowerCase() === incorrectItem;
  return incorrectItem.charCodeAt(0) - (isLowercase ? 96 : 38);
  })
    console.log(incorrectItem.reduce((prev, init) => prev + init));
  

