import { dayOneData } from "./dataDayone.js";

const data = dayOneData();

console.log(
  data
    .split("\n\n")
    .map((x) => x.split("\n"))
    .map(
      (x) =>
        x.map((y) => parseInt(y)).reduce((acc, initValue) => acc + initValue),
      0
    )
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(0, 3)
    .reduce((acc, init) => acc + init, 0)
);
