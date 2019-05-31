
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

]

//Here I am creating a random number based on the range of the dic.
var randomNumber = Math.floor(Math.random() * wordDic.length);
console.log("The word is: " + wordDic[randomNumber]);
//Here i am using that random number to select a word from the array
 
var theRandomWord = wordDic[randomNumber].split("");
var theBlankWord = [];
var wins = 0;
var losses = 0;
var letterGuesses = [];
var numberOfGuesses = theRandomWord.length;
var img = document.getElementById('blinking_image');
var loseText = document.getElementById('hiddenLose');

for (var i = 0; i < theRandomWord.length; i++){
    theBlankWord.push("__");
}

function updateDisplay(){
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("left").innerHTML = "Guesses left: " + numberOfGuesses;
    document.getElementById("guesses").innerHTML = 'Your guesses so far: ' + letterGuesses;
    document.getElementById("word").innerHTML = 'The Word: ' + theBlankWord.join(" ");
}

updateDisplay();
document.addEventListener('keydown', function(event) {
    
    
    var x = event.key;
    var theIndex = theRandomWord.indexOf(x);
    img.style.display = 'none';
    loseText.style.display = "none";
    // loseText.style.display = 'none';
    if (theIndex != -1){
        for (i = 0; i<theRandomWord.length; i++){
           if (x == theRandomWord[i]) {
                document.getElementById('audio1').play();
                theBlankWord[i] = x
           }
        }
        theBlankWord[theIndex] = x;
        updateDisplay();
    }
    if(numberOfGuesses==0 && theBlankWord.indexOf("__")!=-1) {
        losses++;
        
        img.style.display = "block";
        loseText.style.display ="block";
        
        randomNumber = Math.floor(Math.random() * wordDic.length);
        console.log("The word is: " + wordDic[randomNumber]);
        theRandomWord = wordDic[randomNumber].split("");
        theBlankWord = [];
        letterGuesses = [];
        numberOfGuesses = theRandomWord.length;

        for (var i = 0; i < theRandomWord.length; i++){
            theBlankWord.push("__");
        }
        updateDisplay();
        
    }
    if(theIndex == -1) {
        letterGuesses.push(x);
        numberOfGuesses--;
        document.getElementById('audio2').play();
        updateDisplay();
    }
    
});









