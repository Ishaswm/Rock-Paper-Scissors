let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const CompScore = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#reset-game");
const generateComChoice = () => {
    const options= ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx]; // computer's choice
}
const drawGame= () => {
    console.log("game draw!");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
}
const resetGame= () => {
    userScore.innerText = 0;
    CompScore.innerText = 0;
}
const showWinner = (userWin) => {
    if (userWin) {
        userscore++;
        userScore.innerText = userscore;
        console.log("you win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        CompScore.innerText = compscore;
        console.log("computer wins!");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice) => {
    
    // generate computer's choice
    const compChoice = generateComChoice();
    console.log("computer choice:", compChoice);
    if (userchoice==compChoice) {
        // draw
        drawGame();
    } else {
        let userWin = true;
        if (userchoice==="rock") {
            // comp choice either scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // comp choice either rock or scissor
            userWin = compChoice === "rock" ? true : false;
        } else { // user : scissor
            // comp choice either paper or rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        console.log("choice clicked:", userchoice);
        playGame(userchoice);
    });
});

resetBtn.addEventListener("click", resetGame);

