let guess;
let turns=10;
let allguesses=[];
let number=Math.round(Math.random()*100);
console.log(number);

function NumberSubmit(){
    allguesses.
    guess=document.getElementById("numberg").value;
    if(guess==number){
        window.alert("You guessed it correctly.");
        document.getElementById("submitb").disabled=true;
    }

    else if(guess<number){
        window.alert("Too low. Try again.");
        turns=turns-1;
        document.getElementById("guesses").innerHTML=turns;
    }

    else if(guess>number){
        window.alert("Too high. Try again.");
        turns=turns-1;
        document.getElementById("guesses").innerHTML=turns;
    }

    if (guess==""){
        window.alert("Please enter a number.");
    }

    if (turns==0){
        window.alert("You have lost the game.")
        document.getElementById("submitb").disabled=true;
    }    
}