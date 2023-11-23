const s1 = document.querySelector("#screen1");
const s2 = document.querySelector("#screen2");
function guessnum(count) {
    // console.log(`Player ${count} Guess a Number between 0-10`);
    // this.guessNum = prompt("Enter your guess: ");
    let guessNum=-1;
    if(count==1){
    guessNum = document.getElementById('guess1').value;
    }
    if(count==2){
    guessNum = document.getElementById('guess2').value;
    }
    if(count==3){
        guessNum= document.getElementById('guess3').value;
    }
    if (guessNum >= 0 && guessNum <= 10) {
        return guessNum;
    }
    else {
        alert(`Try Again and give input in the given range Player ${count}`);
    }
}
function compare() {
        const guessNum = Math.floor(Math.random() * 11);
        // const numPlayer1 = document.getElementById('guess1').value;
        // const numPlayer2 = document.getElementById('guess2').value;
        // const numPlayer3 = document.getElementById('guess3').value;
        const numPlayer1 = guessnum(1);
        const numPlayer2 = guessnum(2);
        const numPlayer3 = guessnum(3);

        
        if (guessNum == numPlayer1) {
            if (guessNum == numPlayer2 && guessNum == numPlayer3) {
                s1.innerHTML="Game Tie. Try Again";
            } else if (guessNum == numPlayer2) {
                s1.innerHTML="Player 1 and Player 2 are winners!";
            } else if (guessNum == numPlayer3) {
                s1.innerHTML="Player 1 and Player 3 are winners!";
            } else {
                s1.innerHTML="Player 1 is the winner!";
            }
        } 
        else if (guessNum == numPlayer2) {
            if (guessNum == numPlayer3) {
                s1.innerHTML="Player 2 and Player 3 are winners!";
            } else {
                s1.innerHTML="Player 2 is the winner!";
            }
        } 
        else if (guessNum == numPlayer3) {
            s1.innerHTML="Player 3 is the winner!";
        } 
        else {
            s1.innerHTML="No one wins. Try again.";
        }
        s2.innerHTML=guessNum;
    };


// Launch the game


const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})