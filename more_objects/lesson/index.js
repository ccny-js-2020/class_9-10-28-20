//setting my game object and giving it properties relative to the game, and not particular to the players
var game = {
  randomNumber: undefined,
  rounds: [],
  roundWinner: undefined,
  roundWinnerColor: undefined,
  ties: 0
}

//setting a player one object and only giving it properties that pertain to that object
var playerOne = {
  name: "Bob",
  score: 0,
  numberGuess: undefined,
  difference: undefined,
}

//setting a computer object and only giving it properties that pertain to that object
var computer = {
  score: 0,
  numberGuess: undefined,
  difference: undefined
}

//accessing the html element with an id of 'click button', and attaching a click event to it
$("#number-guess-button").click(function(){

  //assigning the playerOne object numberGuess property to equal the value that is in the input when clicked
  //parseInt is to turn a string into a number. Since the input value is always a string, parseInt has to be used in this situation
  playerOne.numberGuess = parseInt($("#number-guess-input").val());

  //setting logic in order to start the game
  //getting the numberGuess attribute value from the playerOne Object
  //checking to see if that number is less than 101 and greater than -1
  if(playerOne.numberGuess < 101 && playerOne.numberGuess > -1){
    //if playerOne's numberGuess is less than 101 and greater than -1
    //then

    //accessing the element in the html with an id of 'player-one-guess'
    //assigning that element the text value of playerOne object's numberGuess property value
    $("#player-one-guess").text(playerOne.numberGuess);

    //accessing the computer object's numberGuess property
    //and assigning it a value of a number between 0 and 100
    computer.numberGuess = Math.floor(Math.random() * 101);
    //accessing the element in the html with an id of 'computer-guess'
    //assigning that element the text value of computer object's numberGuess property value
    $("#computer-guess").text(computer.numberGuess);

    //accessing the game object's randomNumber property
    //and assigning it a value of a number between 0 and 100
    game.randomNumber = Math.floor(Math.random() * 101);
    //accessing the element in the html with an id of 'random-number'
    //assigning that element the text value of game object's randomNumber property value
    $("#random-number").text(game.randomNumber);

    //accessing the playerOne object difference property, and assigning it a value of the
    //difference between the game object's randomNumber property value and the playerOne object's numberGuess property value
    playerOne.difference = Math.abs(game.randomNumber - playerOne.numberGuess)
    //accessing the commputer object difference property, and assigning it a value of the
    //difference between the game object's randomNumber property value and the computer object's numberGuess property value
    computer.difference = Math.abs(game.randomNumber - computer.numberGuess)
    //Math.abs() here is used to convert a negative number to positive, which helps with our game logic

    //logging the current contents of the computer object
    console.log(computer);
    //logging the current contents of the playerOne object
    console.log(playerOne);

    //setting the logic here to see who won the round
    //remember, we set the value for the computer object difference and the playerOne difference above
    //now we're comparing them
    //if the computer's difference is less than playerOne's difference
    if(computer.difference < playerOne.difference){
      //meaning that the computer won the round

      //accessing the computer object score property and incrementing the integer by 1
      computer.score++;
      //accessing the game object roundWinner property and assigning it a value of "Computer"
      game.roundWinner = "Computer";
      //accessing the html element with an id of 'computer-score' and assigning its the text value of the updated computer score
      $("#computer-score").text(computer.score);
      //accessing the game object roundWinnerColor property and assigning it a value of "red"
      //meaning that when the computer wins, there will be something red somewhere
      game.roundWinnerColor = "red";
    } else if (computer.difference > playerOne.difference){
      //meaning that playerOne won the round

      //accessing the playerOne object score property and incrementing the integer by 1
      playerOne.score++;
      //accessing the game object roundWinner property and assigning it a value of "Player One"
      game.roundWinner = "Player One";
      //accessing the html element with an id of 'player-one-score' and assigning its the text value of the updated playerOne score
      $("#player-one-score").text(playerOne.score);
      //accessing the game object roundWinnerColor property and assigning it a value of "blue"
      //meaning that when playerOne wins, there will be something blue somewhere
      game.roundWinnerColor = "blue";
    } else {
      //meaning that the round ended in a tie

      //accessing the game object ties property and incrementing the integer by 1
      game.ties++;
      //accessing the game object roundWinner property and assigning it a value of "Tie"
      game.roundWinner = "Tie";
      //accessing the html element with an id of 'tie-score' and assigning its the text value of the updated tie score
      $("#tie-score").text(game.ties);
      //accessing the game object roundWinnerColor property and assigning it a value of "black"
      game.roundWinnerColor = "black";
    }

    //accessing the rounds array property from the game Object
    //pushing in an string ... that is comprised of html
    game.rounds.push(
      //starting my html string with an opening list tag and then ending the string with a closing list tag
      //From what you see, im creating this string as if it is html
      //with javascript, im able to customize the html and then send it to the dom
      //im inserting object property values into this string, i.e. game.randomNumber
      //when all is said and done, this is one string and is an opening and closing li tag
      //please view this on the ui and in the google inspect elements tab to see more whats going on
      "<li>Random Number: <strong>" + game.randomNumber + "</strong>" +
      ", Player One Guess: <strong>" + playerOne.numberGuess + "</strong>" +
      ", Computer Guess: <strong>" + computer.numberGuess + "</strong>" +
      ", Player One Differential: <strong>" + playerOne.difference + "</strong>" +
      ", Computer Differential: <strong>" + computer.difference + "</strong>" +
      ", Winner: <strong style='color: " + game.roundWinnerColor + "; font-size: 24px; border-style: solid;'>" + game.roundWinner + "</strong></li>"
    );

    //logging the current value of the game object
    console.log(game)

    //below, i am showing 2 ways to add the html string to the dom

    //here, i am declaring a variable and setting it to an empty string
    var htmlString = ""

    //creating a function that encapsulates one of the ways to append the appropriate html to the htmlString
    //in order to use this method, invoke it below
    function loopThroughArrayAndReassignHtmlStringValue(){

      //i am looping through game object's rounds array
      for(var i = 0; i < game.rounds.length; i++){
        //i am appending every string value index in the array to the html string
        //continuously reassigning the value of the htmlString by adding onto it/appending to it
        htmlString += game.rounds[i];
      }

      //logging the current value of htmlString
      console.log(htmlString)
    }

    //creating a function that encapsulates another way to append the appropriate html to the htmlString
    function joinArrayAndReassignHtmlStringValue(){
      //reassinging the value of the htmlString variable to the game object's rounds array join into a string by no spaces
      htmlString = game.rounds.join("");

      //logging the current value of htmlString
      console.log(htmlString)
    }

    //invoking the joinArrayAndReassignHtmlStringValue function
    joinArrayAndReassignHtmlStringValue();

    //accessing the html element with a class of 'rounds-list'
    //adding the html string to that ordered list
    $(".rounds-list").html(htmlString);

  } else {
    //if the number input is not between 0 and 100, alert the user
    alert("Please input a number between 0 and 100")
  }


});
