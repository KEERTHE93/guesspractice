'use strict';
let secretnum=Math.trunc(Math.random()*20)+1;
//console.log(secretnum)
let score=20;
let highscore=0;
let displaymessage=function(message){
    document.querySelector(".message").textContent=message;
}


document.querySelector(".check").addEventListener("click",function(){
let guess=Number(document.querySelector(".guess").value);

if (!guess){
    document.querySelector(".message").textContent="no number"
}
else if(guess==secretnum){
    // document.querySelector(".message").textContent="correct number";
    displaymessage("correct number")
    document.querySelector('.number').textContent = secretnum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '10rem';
    if (score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent = highscore;
    }

}else if (guess !== secretnum) {
    if (score > 1){
        displaymessage(guess > secretnum ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector(".message").textContent="you lose the game";
        document.querySelector(".score").textContent=0;
 }

}})
///////////////////////////////////
///normal coding
// lse if(guess>secretnum){
//     if(score>1){
//     document.querySelector(".message").textContent="high number";
//     score--
//     document.querySelector(".score").textContent=score;}
//     else{
//         document.querySelector(".message").textContent="you lose the game";
//         document.querySelector(".score").textContent=0;
//     }

// }else if(guess<secretnum){
//     if(score>1){
//     document.querySelector(".message").textContent="low number";
//     score--
//     document.querySelector(".score").textContent=score;
//     }else{
//         document.querySelector(".message").textContent="you lose the game";
//         document.querySelector(".score").textContent=0;
//     }
// }})e

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".score").textContent=20;
    document.querySelector(".guess").value=" ";
 secretnum=Math.trunc(Math.random()*20)+1;
  document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent ="?"
    
    
})