//A for Rock, B for Paper, and C for "Scissors".
//X for Rock, Y for Paper, and Z for Scissors
//1 for Rock, 2 for Paper, and 3 for Scissors
//0 if you lost, 3 if the round was a draw, and 6 if you won

import { dayTwo } from "./data/dayTwo.js";

const formattedMoves = (move) => {
  switch (move) {
    case "A":
    case "X":
      return "Rock";
    case "B":
    case "Y":
      return "Paper";
    case "C":
    case "Z":
      return "Scissors";
  }
};

const cleanData = dayTwo()
  .split("\n")
  .map((game) => {
    const moves = game.split(" ");
    return {
      enemyMove: formattedMoves(moves[0]),
      myMove: formattedMoves(moves[1]),
    };
  });

const calculateGameResultPoints = (myMove, enemyMove) => {
  if(myMove === enemyMove)
    return 3;
    else if (
      (myMove === "Paper" && enemyMove === "Rock") |
      (myMove === "Rock" && enemyMove === "Scissors") |
      (myMove === "Scissors" && enemyMove === "Paper")
    )
      return 6
      else return 0
};

const calculateMyMovePoints = (myMove) => {
  switch (myMove) {
    case "Rock":
      return 1
    case "Paper":
      return 2
    case "Scissors":
      return 3
  }
};


  const result = cleanData.reduce((prev, {myMove, enemyMove}) => {
    const gamePoints = calculateGameResultPoints(myMove,enemyMove);
    const movePoints = calculateMyMovePoints(myMove)
    return prev + gamePoints + movePoints;
    }, 0);

console.log(result)
