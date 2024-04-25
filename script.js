let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
alert("Game Started!!");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const showWinner=(userWin,userChoice,compChoice)=>{
 if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win 🎉");
    msg.innerText=`you win 🎉 your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
 }else{
    computerScore++;
    computerScorePara.innerText=computerScore;
    console.log("you lose 😔");
    msg.innerText=`you lose 😔 ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor="red";
 }
}

const generateCompChoice=()=>{
 const option=["rock","paper","scissors"];
 const randomIndex=Math.floor(Math.random()*3);
 return option[randomIndex];
}

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="game was draw .play again";
    msg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=generateCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
        else{
            let userWin=true;
            if(userChoice==="rock") {
                //scissors,paper
          userWin= compChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                //rock,scissor
                userWin=compChoice==="scissors"? false:true;
            }
            else{
                //paper,rock
                userWin=compChoice==="rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
    };

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});


// function Hello()
// {
//     alert("hello");
// }