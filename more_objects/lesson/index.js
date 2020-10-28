var game = {
  randomNumber: undefined,
  rounds: [],
  roundWinner: undefined,
  winnerColor: undefined,
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
    $("#player-one-guess").text(playerOne.numberGuess);

    computer.numberGuess = Math.floor(Math.random() * 101);
    $("#computer-guess").text(computer.numberGuess);

    game.randomNumber = Math.floor(Math.random() * 101);
    $("#random-number").text(game.randomNumber);

    playerOne.difference = Math.abs(game.randomNumber - playerOne.numberGuess)
    computer.difference = Math.abs(game.randomNumber - computer.numberGuess)

    console.log(computer);
    console.log(playerOne);

    if(computer.difference < playerOne.difference){
      computer.score++;
      game.winner = "Computer";
      $("#computer-score").text(computer.score);
      game.winnerColor = "red";
    } else if (computer.difference > playerOne.difference){
      playerOne.score++;
      game.winner = "Player One";
      $("#player-one-score").text(playerOne.score);
      game.winnerColor = "blue";
    } else {
      game.ties++;
      game.winner = "Tie";
      $("#tie-score").text(game.ties);
      game.winnerColor = "black";
    }

    game.rounds.push(
      "<li>Random Number: <strong>" + game.randomNumber + "</strong>" +
      ", Player One Guess: <strong>" + playerOne.numberGuess + "</strong>" +
      ", Computer Guess: <strong>" + computer.numberGuess + "</strong>" +
      ", Player One Differential: <strong>" + playerOne.difference + "</strong>" +
      ", Computer Differential: <strong>" + computer.difference + "</strong>" +
      ", Winner: <strong style='color: " + game.winnerColor + "; font-size: 24px; border-style: solid;'>" + game.winner + "</strong></li>"
    );

    console.log(game)

    // $(".rounds-list").empty();

    // var htmlString = ""
    // for(var i = 0; i < game.rounds.length; i++){
    //   //i did have the other way that, but you can customize more with an html string
    //   htmlString += game.rounds[i];
    // }
    var htmlString = game.rounds.join("");
    console.log(htmlString);
    $(".rounds-list").html(htmlString);

  } else {
    alert("Please input a number between 0 and 100")
  }


});
