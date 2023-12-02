var clutter="";
var timer=10;
var score=0;
var hit=0;
function makebubble(){
    for(var i=1;i<=144;i++)
{
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    document.querySelector(".panelbottom").innerHTML=clutter;
}

}

function getNewHit(){
     hit=Math.floor(Math.random()*10);
    document.querySelector("#hitter").textContent=hit;
}
function scorecounter(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

function time(){
    var timecal=setInterval(function (){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timecal);
            document.querySelector(".panelbottom").innerHTML=`<h1 id="lastpage">Game Over! Total points is${c*10} <\h1> `
            // document.querySelector("#refreshbtn").addEventListener("click",function(){makebubble();timer=3;timer();})
            // document.querySelector(".panelbottom").innerHTML=`<h1>Total points is${c*10}<\h1>`

            
        }
    },1000)
}
var c=0;
document.querySelector(".panelbottom").addEventListener("click",function(dets){
    var clicked=Number(dets.target.textContent);
    if(clicked==hit)
    {
        scorecounter();
         c++;
        makebubble();
        getNewHit();
    }
})
time();
getNewHit();
makebubble();
