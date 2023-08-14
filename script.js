function makeBubble() {
    var bubble = "";
    const numBubble = window.innerWidth <= 620 ? 48 : 140;
    for(let i = 0; i<numBubble; i++){
        bubble += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    
    
    document.querySelector(".bubbles").innerHTML = bubble;
}

let hitValue;
function getNewHit (){
        hitValue =  Math.floor(Math.random()*10)
        document.querySelector("#hit").textContent = hitValue;
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}



function updateScore(){
    document.querySelector(".bubbles")
    .addEventListener("click",(data)=>{
       let bubbleVal =  Number(data.target.textContent);
       if(bubbleVal == hitValue){
            increaseScore();
            getNewHit()
            makeBubble();
       }
    })
}

var sec = 60;
function runTimer() {
    let timeInt = setInterval(()=> {
        if(sec > 0) {
            sec--;
            document.querySelector("#timer").textContent = sec;
        }
        else {
            clearInterval(timeInt);
        }
    }, 1000);
}

makeBubble();
getNewHit();
updateScore();
runTimer();






