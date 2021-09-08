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

  //Since only two players, if not 1, means 2nd player
  if (currentPlayer == "1") {
    player1Dice = twoDiceRolls;
  } else {
    player2Dice = twoDiceRolls;
  }
  return twoDiceRolls;
};

//choosing dice 1 as first number
      var chooseDice1First = function(){
      player1Number = Number(player1Dice1Num) * 10 + Number(player1Dice2Num);
      console.log(`Choose dice 1, player1 number = ${player1Number}.`);
      currentPlayer == "2";
      currentGameMode == rollTwoDice;
      myOutputValue = `Player 1, you chose Dice 1 first.<br> Your number is ${player1Number}. <br> It is now Player 2's turn.`;
      }

//choosing dice 2 as first number
      var chooseDice2First = function(){
      player1Number = Number(player1Dice2Num) * 10 + Number(player1Dice1Num);
      console.log(`Choose dice 2, player1 number = ${player1Number}.`);
      currentPlayer == "2";
      currentGameMode == rollTwoDice;
      myOutputValue = `Player 1, you chose Dice 2 first.<br> Your number is ${player1Number}. <br> It is now Player 2's turn.`;
    }

var main = function (input) {
  if (currentPlayer == "1" && currentGameMode == rollTwoDice) {
    player1Dice = genDiceRolls();
    console.log(`${player1Dice}`);
    player1Dice1Num = player1Dice[0];
    player1Dice2Num = player1Dice[1];
    currentGameMode = chooseDiceOrder;
    myOutputValue = `Welcome Player 1.<br> You rolled ${player1Dice1Num} for Dice 1 and ${player1Dice2Num} for Dice 2. <br> Choose the order of the dice.`;
  };
  if (currentPlayer == "1" && currentGameMode == chooseDiceOrder) {
    if (input == "1") {
    myOutputValue = chooseDice1First();
  };
    else (input == "2"){
    myOutputValue = chooseDice2First();
    };
  };
  return myOutputValue;
};
