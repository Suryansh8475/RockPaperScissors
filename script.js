let allChoices = document.querySelectorAll(".choice");
let btn = document.querySelector(".btn");
let userScoreEL = document.querySelector(".user-score");
let computerScoreEL = document.querySelector(".computer-score");

let arr = ['Rock', 'Paper', 'Scissor'];

let computerChoice = '';
let userChoice = '';
let userWin = true;

let userScore = 0;       // number, not string
let computerScore = 0;
let hasUserPicked = false; // ✅ lock for single click per round

// user picks
allChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        if (hasUserPicked) return;   // ⛔ only 1 click allowed
        userChoice = choice.querySelector('p').innerText;
        console.log("User:", userChoice);
        hasUserPicked = true;        // ✅ lock after one choice
    });
});

// show winner
let showWinner = () => {
    if (userWin) {
        console.log("User Win");
        userScore++;
        userScoreEL.innerText = userScore;
        btn.innerText = "You Win ";
        btn.style.color = "white";
        btn.style.backgroundColor = "green";
    }
    else {
        console.log("You lose");
        computerScore++;
        computerScoreEL.innerText = computerScore;
        btn.innerText = "You Lose "
        btn.style.color = "white";
        btn.style.backgroundColor = "red";
    }
    // reset for next round
    hasUserPicked = false;
    userChoice = "";
};

// computer plays when button clicked
btn.addEventListener('click', () => {
    if (!hasUserPicked) {   // if user didn’t pick
        console.log("Pick first!");
        return;
    }

    computerChoice = arr[Math.floor(Math.random() * 3)];
    console.log("Computer:", computerChoice);

    if (userChoice === computerChoice) {
        console.log("Draw");
        btn.innerText = "Your game is Draw "
        btn.style.color = "white";
        btn.style.backgroundColor = "orange";
        // reset round after draw
        hasUserPicked = false;
        userChoice = "";
    }
    else {
        if (userChoice === 'Rock') {
            userWin = computerChoice === 'Paper' ? false : true;
        }
        else if (userChoice === 'Paper') {
            userWin = computerChoice === 'Scissor' ? false : true;
        }
        else {
            userWin = computerChoice === 'Rock' ? false : true;
        }
        showWinner();
    }
});
