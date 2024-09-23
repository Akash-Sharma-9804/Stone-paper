let userScore = 0;
let compScore = 0;
const msg= document.querySelector("#msg");
const cChoice= document.querySelector("#msg-comp");
const choices =document.querySelectorAll(".choice");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const result =document.querySelector("#result");
const resetbtn= document.querySelector("#reset");
const gam= document.querySelector("#gam");


const gencompChoice = ()=>{
    const options= ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
  
}

// const compmsg=()=>{
//     cmsg.innerText = ;
// };



const drawGame=()=>{
    console.log("The Game was draw.....")
    msg.innerText ="The Game was draw.....";
    msg.style.backgroundColor ="blue";
    result.innerText= `The Game was Draw...`;
};
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("Congratulations, You Win......");
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText =`Congratulations, You Win...`;
        msg.style.backgroundColor ="green";
        result.innerText= `Because ${userChoice} beats ${compChoice}`;
        // result.style.backgroundColor ="green";
    }
    else{

        console.log("You Lost....");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText ="You Lost...";
        msg.style.backgroundColor ="red";
        result.innerText= `Because ${compChoice} beats ${userChoice}`;
        // result.style.backgroundColor ="red";
    }
}
const playGame= (userChoice)=>{
    console.log("user Choice is = ", userChoice);
    const compChoice = gencompChoice();
    if(compChoice==="rock"){
        cChoice.innerHTML = `<img src=rock.png>`;
    }else if(compChoice==="paper"){
        cChoice.innerHTML = `<img src=paper.png>`;
    }
    else if(compChoice==="scissors"){
        cChoice.innerHTML = `<img src=scissors.png>`;
    }
// user choice display
    if(userChoice==="rock"){
        gam.innerHTML = `<img src=rock.png>`;
    }else if(userChoice==="paper"){
        gam.innerHTML = `<img src=paper.png>`;
    }
    else if(userChoice==="scissors"){
        gam.innerHTML = `<img src=scissors.png>`;
    }


    console.log("Computer choice = ", compChoice );
   
    if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice, compChoice);
}

};



choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        let userChoice= choice.getAttribute("id");
        // console.log("i was clicked", userChoice);
        playGame(userChoice);
    })
});
// let resetscr=((userScore,compScore)=>{
//     return 0;
// })

// let reset=(()=>{
//     userScore = 0;
//     compScore = 0;
//     userScorePara.innerText = userScore;
//     compScorePara.innerText = compScore;
//     cChoice.innerText="";
//     msg.innerText="Play your move";
//     result.innerText="Result";
// });



resetbtn.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    cChoice.innerText="";
    msg.innerText="Play your move";
    result.innerText="Result";
    gam.innerHTML="";
    // reset();
});

