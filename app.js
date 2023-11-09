let gameseq=[];
let userseq=[];
let btns=["red","yellow","purple","green"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",()=>{
    
    if(started==false){
        started=true;
        console.log("game started");
    }
    levelUp();
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
 function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor =btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor)
    btnFlash(randBtn);
    
 }

 function checkans(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,250); 
        }
    }
    else{
        h2.innerHTML=`game over!your score is ${level}<br/> press any key to start `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },250);
        reset();
    }
 }
function btnPress(){
    let btn =this;
    btnFlash(btn);
    usercolor=btn.getAttribute("id");

    userseq.push(usercolor);
    
    checkans(userseq.length-1);
}



let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq =[];
    userseq=[];
    level =0;
}