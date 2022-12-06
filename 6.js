import { daySix } from "./data/daySix.js";
const startOfPackage = [];
const startOfMessage = [];
const data = daySix()
data.split("").forEach((char, index) => {
  const packageStart = data.substring(index, index + 4);
  if ([...new Set(packageStart)].length === 4 && index >= 3) startOfPackage.push(index + 4);
    
  const messageStart = data.substring(index, index + 14);
  if ([...new Set(messageStart)].length === 14) startOfMessage.push(index + 14);
})
console.log(startOfMessage[0])
console.log(startOfPackage[0]);