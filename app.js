let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("game is drawn");
    msg.innerText = "Game was drawn. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You loose!!!");
        msg.innerText = `You Loose!  your ${userChoice} beated by ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice is " ,userChoice);
    const compChoice=genComChoice();
    console.log("computer choice is ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            // scissors,paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice=="paper"){
            // rock , scissors
            userWin = compChoice==="rock" ? true : false;
        }
        else{
            // rock,paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});