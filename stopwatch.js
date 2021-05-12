var second=0;
var minute=0;
var hour=0;
var timer;
var watch=document.querySelector("#watch");
var startButton=document.querySelector("#startButton");
var pauseButton=document.querySelector("#pauseButton");
var stopButton=document.querySelector("#stopButton");
function currentTime(){
    second+=1;
    if(second==60){
        //clearInterval(timer);
        second=0;
      //  break;
    }
    startButton.disabled=true;
    pauseButton.disabled=false;
    stopButton.disabled=false;   
    watch.innerHTML=`${hour}:${minute}:${second}`;

}
function startTime(){
    timer=setInterval("currentTime()", 1000);
}

function pauseTime(){
    let flag=pauseButton.innerText;
    pauseButton.disabled=true;
    stopButton.disabled=true; 
//    if(flag==='pause'){
        clearInterval(timer);
        startButton.disabled=false;
        //pauseButton.innerText="continue";
  //  }
    // else{
    //     timer=timer=setInterval("currentTime()", 1000);
    //     pauseButton.innerText="pause";
    // }
}