let userScore = 0;
let compScore = 0;
let draw = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawPara = document.querySelector("#draw");

const gencompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
    draw++;
    drawPara.innerText = draw;
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else
    {
        console.log("you lose.");
        msg.innerText = `you lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) =>{
    console.log("userChoice is", userChoice);
    
    //Generated Computer Choice
    const compChoice = gencompChoice();
    console.log("compChoice is", compChoice);

    //  Draw Game
    if (userChoice === compChoice){
        drawGame();
    }else
    {
        let userWin = true;
        if (userChoice === "rock")
            {
                userWin = compChoice === "paper"? false: true;
            }
            else if(userChoice === "paper")
            {
                  userWin = compChoice === "scissors"? false: true;
            }  
        else
        {
            userWin = compChoice === "rock"? false: true;

        }  
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
})