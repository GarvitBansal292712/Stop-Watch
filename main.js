let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isrunning = false;


$('#contrlbtn').on("click", function (){
 if (!isrunning){
    console.log("Start button clicked!");

     startStopwatch();
      $("#contrlbtn").text("PAUSE");
      $("#indicator").css("background-color", "green");
 }
 else {
    console.log("Stop button clicked!");

     stopStopwatch();
     $("#contrlbtn").text("RESUME");
     $("#indicator").css("background-color", "yellow");
 }
})

$('#resetbtn').on("click", resetStopwatch)


function startStopwatch(){
    
    isrunning = true;
    timer = setInterval(updateTime, 10);
}

function stopStopwatch(){
    isrunning = false;
    clearInterval(timer);
}

function resetStopwatch(){
    isrunning = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();

    $("#contrlbtn").text("START");
    $("#indicator").css("background-color", "red");
}

function updateTime(){
    ++milliseconds;

    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;


        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    updateDisplay();

}

function updateDisplay(){
    const display = $("#display");
    display.text(
       // formatTime(seconds)+ '<span id="milliseconds">:' + formatMilliseconds(milliseconds) + '</span>' 
       formatTime(minutes) + ':' +
       formatTime(seconds) + ':' +
       formatMilliseconds(milliseconds)

    );
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function formatMilliseconds(milliseconds) {
    return milliseconds < 10 ? '0' + milliseconds : milliseconds;
}