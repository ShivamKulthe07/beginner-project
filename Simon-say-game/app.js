let gameSeq = [];
let userSeq = [];
let level = 0 ;
let start = false;
let h2 = document.querySelector("h2");
let btns = ["red" , "yellow" , "blue" , "green"];

document.addEventListener("keypress" , function(){
    if(start == false){
        console.log("Game Started");
        start = true;
        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = "Level "+level;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}

function checkAns(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length === gameSeq.length){
        
        setTimeout(levelUp,500);
       }
    }else{
        h2.innerText = "Game Over!!,Press Any Key to Restart";
        document.querySelector("body").style.color = "red";
        setTimeout(function(){
            document.querySelector("body").style.color = "white";
        },150);
        reset();

    }
}

function btnPress(){
    let btn = this;
    userflash(btn);
    
    let userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}