//A for Rock, B for Paper, and C for "Scissors".
//X for Rock, Y for Paper, and Z for Scissors
//1 for Rock, 2 for Paper, and 3 for Scissors
//0 if you lost, 3 if the round was a draw, and 6 if you won
//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
import { dayTwo } from "./data/dayTwo.js";

const formattedMoves = (move) => {
  switch (move) {
    case "A":
      return "Rock";
    case "B":
      return "Paper";
    case "C":
      return "Scissors";
  }
};

const formattedStrategy = (strategy) => {
  switch (strategy) {
    case "X":
      return "loss";
    case "Z":
      return "win";
    case "Y":
      return "draw";
  }
};


const calculateMyMove = (myStrategy, enemyMove) => {
  if (myStrategy === "draw") return enemyMove;
  else if (
    (enemyMove === "Rock" && myStrategy === "win") |
    (enemyMove === "Scissors" && myStrategy === "loss")
  )
    return "Paper";
  else if (
    (enemyMove === "Scissors" && myStrategy === "win") |
    (enemyMove === "Paper" && myStrategy === "loss")
  )
    return "Rock";
  else if (
    (enemyMove === "Paper" && myStrategy === "win") |
    (enemyMove === "Rock" && myStrategy === "loss")
  )
    return "Scissors";
};

const calculateMyMovePoints = (myMove) => {
  switch (myMove) {
    case "Rock":
      return 1;
    case "Paper":
      return 2;
    case "Scissors":
      return 3;
  }
};

const calculateStrategyPoints = (myStrategy) => {
  switch (myStrategy) {
    case "win":
      return 6;
    case "draw":
      return 3;
    case "loss":
      return 0;
  }
};


const cleanData = dayTwo()
  .split("\n")
  .map((game) => {
    const moves = game.split(" ");
    return {
      enemyMove: formattedMoves(moves[0]),
      myStrategy: formattedStrategy(moves[1]),
    };
  });


  const result = cleanData.reduce((prev, {myStrategy, enemyMove}) => {
    const myMove = calculateMyMove(myStrategy, enemyMove);
    const gamePoints = calculateStrategyPoints(myStrategy);
    const movePoints = calculateMyMovePoints(myMove)
    return prev + gamePoints + movePoints;
    }, 0);

console.log(result)
