const allLetter = document.querySelectorAll(".letters");
const guessedLetters = document.querySelector(".guessed-letters");
const words = ["letter","word","world","name"];
let randomNumber = Math.floor(Math.random()*words.length);
//-------
while(randomNumber > words.length-1){
    randomNumber = Math.floor(Math.random()*words.length);
}
// ** this part is for showing the blanks in game
const choosedWord = words[randomNumber];
const splitedWord = choosedWord.split("");
let wrongGuessCount = 0;
let correctGuessCount = choosedWord.length;
splitedWord.forEach(function(item,index){
        const letterBox = document.createElement("span");
        const pLetterUp = document.createElement("p");
        const pLetterUnder = document.createElement("p");
        letterBox.className = "letter-box";
        guessedLetters.appendChild(letterBox);
        pLetterUp.className = "letter-up";
        letterBox.appendChild(pLetterUp);
        // ** if the saved words in const=words =>[array] have the blank fields this line prevent program to create new box
        if(item != " "){
        pLetterUnder.className = "letter-under" ;
        pLetterUnder.innerText = "_";
        letterBox.appendChild(pLetterUnder);
    }
});
//-----
// ** this part checks the letter if true put the letter
allLetter.forEach(function(item,index){
    item.addEventListener("click" , checkTheLetter);
});
function checkTheLetter(event){
    const checkClassUsed = event.target.classList.value.split(" ")
    if(!(checkClassUsed.includes("used-letter"))){
    if(wrongGuessCount<=6){
        if(correctGuessCount>0){
    const choosedLetter = event.target.innerText.toLowerCase();
    const allBlanks = document.querySelectorAll(".letter-up");
    const image = document.querySelector(".main-image");
    let wrongGuess = false;
    event.target.classList.add("used-letter");
    splitedWord.forEach(function(item,index){
        if(item.toLowerCase()==choosedLetter){
            allBlanks[index].innerText = item;
            correctGuessCount --;
        }
    });
    if(splitedWord.includes(choosedLetter)===false){
        wrongGuess = true ;
        wrongGuessCount ++;
        if(wrongGuessCount <= 6){
        image.src = `./assets/hangman${wrongGuessCount}.png`;
        }
        if(wrongGuessCount==6){
            allBlanks.forEach(function(item,index){
                item.innerText = splitedWord[index];
            });
        }
    }
    if(correctGuessCount==0){
        image.src = `./assets/winner.png`;
             }
         }
     }
    }
}
