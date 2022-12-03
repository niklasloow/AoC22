import { dayThree } from "./data/dayThree.js";
const groups = dayThree()
  .split("\n")
    .reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / 3);
  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; 
  }
  resultArray[chunkIndex].push(item.split(""));
  return resultArray;
}, []);


const badges = groups.map((group) => {
  const badge = group[0].filter(
    (letter) => group[1].includes(letter) && group[2].includes(letter)
  )[0];


  const isLowercase = badge.toLowerCase() === badge;
  return badge.charCodeAt(0) - (isLowercase ? 96 : 38);

});
console.log(badges.reduce((prev, init) => prev + init));
