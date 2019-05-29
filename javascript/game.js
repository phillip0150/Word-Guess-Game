var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var randomNumber = Math.floor(Math.random() * alphabet.length);
var theRandomLetter = alphabet[randomNumber];
var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var guesses = [];


console.log("Random letter is: " + theRandomLetter);

document.addEventListener('keydown', function(event) {
    var x = event.key;
    console.log(x);
    if(numberOfGuesses > 0) {
        if (x == theRandomLetter) {
            ++wins;
            guesses = "";
            numberOfGuesses = 10;

            document.getElementById("wins").innerHTML = "Wins: " + wins;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
            document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + guesses;


        }
        else {
            guesses.push(x);
            --numberOfGuesses;

            document.getElementById("wins").innerHTML = "Wins: " + wins;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
            document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + guesses;


        }
    }
    else if(numberOfGuesses == 0){
      
        losses++;
        guesses = [];
        numberOfGuesses = 10;

        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
        document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + guesses;
        
    }

});

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + guesses;



