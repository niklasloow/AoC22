import { dayOneData } from "./dataDayone.js";

const data = dayOneData();

console.log(
  Math.max(
    ...data
      .split("\n\n")
      .map((x) => x.split("\n"))
      .map(
        (x) =>
          x.map((y) => parseInt(y)).reduce((acc, initValue) => acc + initValue),
        0
      )
  )
);
