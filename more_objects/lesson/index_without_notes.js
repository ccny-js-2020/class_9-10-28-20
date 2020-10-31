var game = {
  randomNumber: undefined,
  rounds: [],
  roundWinner: undefined,
  roundWinnerColor: undefined,
  ties: 0
}

var playerOne = {
  name: "Bob",
  score: 0,
  numberGuess: undefined,
  difference: undefined,
}

var computer = {
  score: 0,
  numberGuess: undefined,
  difference: undefined
}

$("#number-guess-button").click(function(){
  playerOne.numberGuess = parseInt($("#number-guess-input").val());

  if(playerOne.numberGuess < 101 && playerOne.numberGuess > -1){
    setGuesses(playerOne, computer, game);
    computeDifferences(playerOne, computer, game);
    setRoundResult(playerOne, computer, game);
    
    game.rounds.push(
      "<li>Random Number: <strong>" + game.randomNumber + "</strong>" +
      ", Player One Guess: <strong>" + playerOne.numberGuess + "</strong>" +
      ", Computer Guess: <strong>" + computer.numberGuess + "</strong>" +
      ", Player One Differential: <strong>" + playerOne.difference + "</strong>" +
      ", Computer Differential: <strong>" + computer.difference + "</strong>" +
      ", Winner: <strong style='color: " + game.roundWinnerColor + "; font-size: 24px; border-style: solid;'>" + game.roundWinner + "</strong></li>"
    );

    var htmlString = joinArrayAndReassignHtmlStringValue(game);
    $(".rounds-list").html(htmlString);

  } else {
    alert("Please input a number between 0 and 100")
  }

});

function loopThroughArrayAndReassignHtmlStringValue(game){
  var htmlString = ""
  for(var i = 0; i < game.rounds.length; i++){
    htmlString += game.rounds[i];
  }
  return htmlString;
}

function joinArrayAndReassignHtmlStringValue(game){
  return game.rounds.join("");
}

function setGuesses(playerOne, computer, game){
  $("#player-one-guess").text(playerOne.numberGuess);

  computer.numberGuess = Math.floor(Math.random() * 101);
  $("#computer-guess").text(computer.numberGuess);

  game.randomNumber = Math.floor(Math.random() * 101);
  $("#random-number").text(game.randomNumber);
}

function computeDifferences(playerOne, computer, game){
  playerOne.difference = Math.abs(game.randomNumber - playerOne.numberGuess);
  computer.difference = Math.abs(game.randomNumber - computer.numberGuess);
}

function setRoundResult(playerOne, computer, game){
  if(computer.difference < playerOne.difference){
    computer.score++;
    game.roundWinner = "Computer";
    $("#computer-score").text(computer.score);
    game.roundWinnerColor = "red";
  } else if (computer.difference > playerOne.difference){
    playerOne.score++;
    game.roundWinner = "Player One";
    $("#player-one-score").text(playerOne.score);
    game.roundWinnerColor = "blue";
  } else {
    game.ties++;
    game.roundWinner = "Tie";
    $("#tie-score").text(game.ties);
    game.roundWinnerColor = "black";
  }
}
