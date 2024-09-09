let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreValue=document.querySelector("#user-score");
const compScoreValue=document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options =["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random()*3);//strings random genrate not possible but random index or number can be//
    //math.random() * n gerate number between 0 to n-1//
    //Math.floor remove decimal digits//

    return options[randIdx];

};

const drawGame=()=>{
    msg.innerText="Draw!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore = userScore + 1;
        userScoreValue.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore = compScore + 1 ;
        compScoreValue.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false :true;
        }
        else if( userChoice === "paper"){
            userwin = compChoice==="scissors"?false:true;
        }
        else{
            userwin = compChoice==="rock"? false:true;
        }

        showWinner(userwin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});