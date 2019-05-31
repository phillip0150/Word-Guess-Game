var wordDic = ["adonising",
    "adonize",
    "adonized",
    "adonizes",
    "adonizing",
    "chiton",
    "chitons",
    "chitosan",
    "chitosans",
    "chits",
    "chittagong",
    "chittagongs",
    "chitted",
    "chitter",
    'detrition',
    "detritions",
    "detritovore",
    "detritovores",
    "detritus",
    "detrude",
    "detruded",
    "detrudes",
    "gheraoed",
    "gheraoes",
    "gheraoing",
    "gheraos",
    "gherkin",
    "gherkins",
    "hilloaing",
    "hilloas",
    "hillock",
    "hillocked",
    "hillocks",
    "irrepleviable",
    "irreplevisable",
    "irreprehensible",
    "irreprehensibly",

];

//Here I am creating a random number based on the range of the dic.
var randomNumber = Math.floor(Math.random() * wordDic.length);
console.log("The word is: " + wordDic[randomNumber]);
//Here i am using that random number to select a word from the array

var gameData = {
    wins: 0,
    losses: 0,
    theRandomWord: wordDic[randomNumber].split(""),
    theBlankWord: [],
    letterGuesses: [],
    numberOfGuesses: 0,
    img: document.getElementById('blinking_image'),
    loseText: document.getElementById('hiddenLose'),

    updateDisplay: function() {
        document.getElementById("wins").innerHTML = "Wins: " + this.wins;
        document.getElementById("losses").innerHTML = "Losses: " + this.losses;
        document.getElementById("left").innerHTML = "Guesses left: " + this.numberOfGuesses;
        document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + this.letterGuesses;
        document.getElementById("word").innerHTML = 'The Word: ' + this.theBlankWord.join(" ");
    },

    updateWin: function(x) {
        this.wins = this.wins + x;
    },

    updateLose: function(x) {
        this.losses = this.losses + x;
    },

    newRandomWord: function() {
        randomNumber = Math.floor(Math.random() * wordDic.length);
    },

    rest: function() {
        this.theRandomWord = wordDic[randomNumber].split("");
        this.theBlankWord = [];
        this.letterGuesses = [];
        this.numberOfGuesses = gameData.theRandomWord.length;
    }

};

gameData.numberOfGuesses = gameData.theRandomWord.length;
console.log(gameData.theRandomWord.length);
console.log(gameData.theRandomWord);

for (var i = 0; i < gameData.theRandomWord.length; i++){
    gameData.theBlankWord.push("__");
}

gameData.updateDisplay();



document.addEventListener('keydown', function(event) {
    
    
    var x = event.key;
    var theIndex = gameData.theRandomWord.indexOf(x);
    gameData.img.style.display = 'none';
    gameData.loseText.style.display = "none";
  

    //If theIndex does not equal -1, the letter is in the word 
    //If gameData.letterGuesses length does not equal the gameData.Randomword length, we know that the user has guesses left
    //Use a for loop to push the letter in the correct spot on the screen (play a sound)
    //If numberOfGuess is > 0 and theBlackWord array doesn't have __ in the array, the user wins
    //If the letter is in letter guesses, 
    if(theIndex != -1 && gameData.letterGuesses.length != gameData.theRandomWord.length) {
        for (i = 0; i<gameData.theRandomWord.length; i++){
            if (x == gameData.theRandomWord[i]) {
                 document.getElementById('audio1').play();
                 gameData.theBlankWord[i] = x
            }
        }
        if(gameData.numberOfGuesses > 0 && gameData.theBlankWord.indexOf("__") === -1){
            gameData.updateWin(1);
            gameData.newRandomWord();
            gameData.rest();
            for (var i = 0; i < gameData.theRandomWord.length; i++){
                gameData.theBlankWord.push("__");
            }
            console.log("The word is: " + wordDic[randomNumber]);
            
        }

        gameData.updateDisplay();
    }
    //else we push the letter into letter guesses, take away a guess, play a wrong sound effect, and update the screen.
    else{
        gameData.letterGuesses.push(x);
        gameData.numberOfGuesses = gameData.numberOfGuesses -1;
        document.getElementById('audio2').play();
        gameData.updateDisplay();

        //if number guesses = 0 and the blank word array still has "__" means the user losses.
        //display loser image and text
        //create a new random word
        //rest some game data.
        if(gameData.numberOfGuesses==0 && gameData.theBlankWord.indexOf("__")!=-1){
            gameData.updateLose(1);
            gameData.img.style.display = "block";
            gameData.loseText.style.display ="block";
            gameData.newRandomWord();
            console.log("The word is: " + wordDic[randomNumber]);
            gameData.rest();
            //create a new blank word array based on the length of the word. 
            for (var i = 0; i < gameData.theRandomWord.length; i++){
                gameData.theBlankWord.push("__");
                }
            }
        
    }
    
});

