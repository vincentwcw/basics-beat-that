// game modes
var rollTwoDice = "roll dice mode";
var chooseDiceOrder = "choose dice order";

//initialise game mode
var currentGameMode = rollTwoDice;

//player mode
var currentPlayer = "1";

//track two players dice rolls
var player1Dice = [];
var player2Dice = [];

//track two player's chosen number from two dice
var player1Number;
var player2Number;

//roll dice
var diceRoll = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  console.log(`rollnumber is ${diceNumber}`);
  return diceNumber;
};

//setting up two rolls in an array
var genDiceRolls = function () {
  var twoDiceRolls = [diceRoll(), diceRoll()];
  return twoDiceRolls;
};

//choosing dice 1 as first number
var chooseDice1First = function () {
  player1Number = Number(player1Dice1Num) * 10 + Number(player1Dice2Num);
  console.log(`Choose dice 1, player1 number = ${player1Number}.`);
  currentPlayer == "2";
  currentGameMode == rollTwoDice;
  return (myOutputValue = `Player 1, you chose Dice 1 first.<br> Your number is ${player1Number}. <br> It is now Player 2's turn.`);
};

//choosing dice 2 as first number
var chooseDice2First = function () {
  player1Number = Number(player1Dice2Num) * 10 + Number(player1Dice1Num);
  console.log(`Choose dice 2, player1 number = ${player1Number}.`);
  currentPlayer == "2";
  currentGameMode == rollTwoDice;
  return (myOutputValue = `Player 1, you chose Dice 2 first.<br> Your number is ${player1Number}. <br> It is now Player 2's turn.`);
};

var main = function (input) {
  if (currentPlayer == "1" && currentGameMode == rollTwoDice) {
    player1Dice = genDiceRolls();
    console.log(`This is player 1 dice roll ${player1Dice}`);
    player1Dice1Num = player1Dice[0];
    player1Dice2Num = player1Dice[1];
    currentGameMode = chooseDiceOrder;
    return (myOutputValue = `Welcome Player 1.<br> You rolled ${player1Dice1Num} for Dice 1 and ${player1Dice2Num} for Dice 2. <br> Choose the order of the dice.`);
  }
  if (currentPlayer == "1" && currentGameMode == chooseDiceOrder) {
    if (input == "1") {
      return (myOutputValue = chooseDice1First());
    }
    if (input == "2") {
      return (myOutputValue = chooseDice2First());
    }
  }
  if (currentPlayer == "2" && currentGameMode == rollTwoDice) {
    player2Dice = genDiceRolls();
    console.log(`${player2Dice}`);
    player2Dice1Num = player2Dice[0];
    player2Dice2Num = player2Dice[1];
    currentPlayer = "1";
    if (Number(player2Dice1Num) >= Number(player2Dice2Num)) {
      player2Number = Number(player2Dice1Num) * 10 + Number(player2Dice2Num);
      console.log(
        `This is when dice 1 is bigger or equal than dice 2 ${player2Number}.`
      );
      return (myOutputValue = `Player 2 has rolled ${player2Dice1Num} for Dice 1 and ${player2Dice2Num} for Dice 2. He chosen the number ${player2Number}.`);
    } else {
      player2Number = Number(player2Dice2Num) * 10 + Number(player2Dice1Num);
      return (myOutputValue = `Player 2 has rolled ${player2Dice1Num} for Dice 1 and ${player2Dice2Num} for Dice 2. He chosen the number ${player2Number}.`);
    }
  }
};
