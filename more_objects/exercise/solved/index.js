var playerOne = {
  name: "Terry",
  guess: undefined,
  winningPercentage: 0,
  wins: 0
}

var game = {
  randomWord: undefined,
  roundWinner: undefined,
  rounds: [],
  roundNumber: 0
}

var randomWords = ["cant", "buy", "me", "love", "say", "you", "dont", "need", "no", "diamond", "ring", "and", "ill", "be", "satisfied"];

$("#guess-text-button").click(function(){
  playerOne.guess = $("#guess-text-input").val().toLowerCase();
  runGame(playerOne, game);
});

function runGame(playerOneObject, gameObject){
  if(playerOne.guess.length == 1){
    $("#your-guess").text(playerOne.guess);

    setRandomWord(randomWords, gameObject);

    gameObject.roundNumber++;

    setRoundWinner(playerOneObject, gameObject);
    setWinningPercentage(playerOneObject, gameObject);
    setRoundsList(playerOneObject, gameObject);

    $("#guess-text-input").val("");
  } else {
    alert("Guess should be 1 letter");
  }
}

function setRoundWinner(playerOneObject, gameObject){
  if(gameObject.randomWord.indexOf(playerOneObject.guess) > -1){
    gameObject.roundWinner = "Player One";
    playerOneObject.wins++;
    $("#message-text").html("You Win. The letter <strong>'" + playerOneObject.guess + "'</strong> is in the word <strong>'" + gameObject.randomWord + "'</strong>.")
  } else {
    gameObject.roundWinner = "Computer";
    $("#message-text").html("You Lose. The letter <strong>'" + playerOneObject.guess + "'</strong> is not in the word <strong>'" + gameObject.randomWord + "'</strong>.")
  }
}

function setWinningPercentage(playerOneObject, gameObject){
  //2 decimal places - https://www.w3schools.com/jsref/jsref_tofixed.asp
  playerOneObject.winningPercentage = ((playerOneObject.wins/gameObject.roundNumber) * 100).toFixed(2);
  $("#winning-percentage").text(playerOneObject.winningPercentage + "%");
}

function setRoundsList(playerOneObject, gameObject){
  gameObject.rounds.push(
    "<li>Your Guess: <strong>" + playerOneObject.guess + "</strong>, " +
    "Random Word: <strong>" + gameObject.randomWord + "</strong>, " +
    "Your Winning Percentage: <span class='glow'>" + playerOneObject.winningPercentage + "%</span></li>"
  )

  var htmlString = "";
  for(var i = 0; i < game.rounds.length; i++){
    htmlString += game.rounds[i];
  }
  $(".rounds-list").html(htmlString);
}

function setRandomWord(array, object){
  object.randomWord = array[Math.floor(Math.random() * array.length)];
  $("#random-word").text(object.randomWord)
}
