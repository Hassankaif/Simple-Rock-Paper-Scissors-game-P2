
let userscore=0;
let compscore=0;

const option=document.querySelectorAll(".option");
const msg1=document.querySelector(".msg");
const usersc=document.querySelector("#userscore");
const compsc=document.querySelector("#compscore");
// --------------------------------------------
const playgame= (userchoice) =>{
    //generate comp choice
    const compchoice= gencompchoice();
    console.log("COMPUTER CHOICE : ",compchoice);
    //set game logic
    if( userchoice=== compchoice){
        drawgame();
        msg1.innerText ="GAME IS DRAW ";
        msg1.style.backgroundColor="black";
    }
    else{
        let userwin=true;
        if(userchoice =='rock')
            { //scissor,paper
             userwin= compchoice==='scissor' ?true:false;
        }
        else if(userchoice==='paper')
            { //rock,scissor
                userwin= compchoice==='rock'?true:false;
        }
        else{ //user=scissor , comp=rock,paper
            userwin=compchoice==='paper'?true:false;
        }
        showwinner(userwin);
    }   
}
// ------------------------------------------------
const showwinner= (userwin) => {
    if(userwin){
        console.log("YOU WIN !!!");
        userscore++;
        msg1.innerText ="CONGRATS,YOU WON !!! ";
        msg1.style.backgroundColor="green";
        usersc.innerText=userscore;

    }
    else{
        console.log("YOU LOSE !!!");
        compscore++;
        msg1.innerText ="OOPS , YOU LOSE !!! ";
        msg1.style.backgroundColor="red";

        compsc.innerText=compscore;

    }
}
// -----------------------------------------------
const gencompchoice = () => {
    let ch=['rock','paper','scissor'];
    let index= Math.floor(Math.random()*3);
    return  ch[index];

}

const drawgame = ()=>{
    console.log("game was draw");
}
// ----------------------------------------------------
option.forEach((opt)=>{
    // console.log(opt);
    opt.addEventListener('click', ()=>{
        let userchoice =opt.getAttribute("id");
        console.log("USER CHOICE : ",userchoice); //user choice is known
        playgame(userchoice); // generate comp choice using userchoice as input
        
    })
})