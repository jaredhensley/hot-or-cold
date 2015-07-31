
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var randomNumberGenerator = function () {
  		return Math.floor((Math.random()* 100) + 1);
  	}

  	/*Global Variables and Functions */

  	var randomNumber;
  	var counter = 0;

  	var newGame = function () {
  		randomNumber = randomNumberGenerator();
  		counter = 0;
  		$('#count').text(counter);
  		$('#guessList').text('');
  		$("#feedback").text('Make your Guess!');
  	}

  	/*	Create New Game*/

  	newGame();
  	
  	$("#guessButton").on("click", function() {
  		event.preventDefault();
  		counter++;
  		var userGuess = Number(document.getElementById("userGuess").value);
  		$('#guessList').append(userGuess + " ");

  		if (userGuess == randomNumber) {
  			$("#feedback").text('winner!!');
	  		} else if (userGuess > (randomNumber + 50) || userGuess < (randomNumber - 50)) {
	  			$("#feedback").text('icecold');
	  			
	  		} else if (userGuess > (randomNumber + 30) || userGuess < (randomNumber - 30)) {
	  			$("#feedback").text('cold');
	  	
	  		} else if (userGuess > (randomNumber + 20) || userGuess < (randomNumber - 20)) {
	  			$("#feedback").text('warm');
	  			
	  		} else if (userGuess > (randomNumber + 10) || userGuess < (randomNumber - 10)) {
	  			$("#feedback").text('hot');
	  			
	  		} else if (userGuess > (randomNumber + 1) || userGuess < (randomNumber - 1)) {
	  			$("#feedback").text('very hot');
	  		}

	  		$('#userGuess').val(''); //resets input field
	  		$('#count').text(counter); //updates counter div

  	})
  	
  	$('.new').on("click", function () {  // calls newGame function on click event
  		newGame();

  	})


});


