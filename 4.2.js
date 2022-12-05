import { dayFour } from "./data/dayFour.js";
//27-66,26-65
const data = dayFour().split("\n").map((item) => {
    const pairs = item.split(",");
    const group1 = pairs[0].split("-")
    const group2 = pairs[1].split("-");
    return {
        group1: {from: parseInt(group1[0]), to: parseInt(group1[1])}, 
        group2: {from: parseInt(group2[0]), to: parseInt(group2[1])}};
});
const isInRange = data.map(({group1, group2}) => {
    if(group1.from <= group2.to && group2.from <= group1.to) 
        return true
    return false
})


console.log(isInRange.filter((item) => item).length);