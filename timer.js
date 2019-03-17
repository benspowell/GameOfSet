var sec = 0;
var min = 0;
var hour = 0;
var timer;


//!!!!!!!!!!!!!!!!!!! CSS!!!!!!!!!!!!!!!!!!!!!!!!!
//helper method for displaying control button for users
function User_control_button(num) {
    document.writeln('<div class="User_button">');
    
    for (var i = 0; i < num; i++) {
        document.write('<button id="User' + i + '"> User' + i + '</button>');
        var user = document.getElementById("User" + i);
        user.addEventListener("click", function () {
            timer = clearInterval(timer);
            reset.disabled = false;
            pause.disabled = true;
            start.disabled = false;
        });
    }
    document.writeln("</div>");
}



//helper method for calculating time correctly 
function TimerHandler() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hour++;
    }
    DisplayTime();
}




//helper method for displaying correct time 
function DisplayTime() {

    var display_sec = sec;
    var display_min = min;
    var display_hour = hour;
    var timer_element = document.getElementById("timer");

    if (sec < 10) {
        display_sec = "0" + sec;
    }
    if (min < 10) {
        display_min = "0" + min;
    }
    if (hour < 10) {
        display_hour = "0" + hour;
    }
    timer_element.innerHTML = display_hour + " : " + display_min + " : " + display_sec;
}



// deal with start, pause and reest button 
function setup() {
    
    //display buttons for users
    User_control_button(4);
    
    var start = document.getElementById("start");
    var pause = document.getElementById("pause");
    var reset = document.getElementById("reset");
    start.addEventListener("click", function () {
        timer = setInterval(TimerHandler, 100);
        start.disabled = true;
        pause.disabled = false;
        reset.disabled = false;

    });
    pause.addEventListener("click", function () {
        timer = clearInterval(timer);
        reset.disabled = false;
        pause.disabled = true;
        start.disabled = false;

    });
    reset.addEventListener("click", function () {
        var indicator = document.getElementById("indicator");
        indicator.innerHTML= "The total time spent for this time is " + hour + " h " + min + " m " + sec + " s ";
        timer = clearInterval(timer);
        reset.disabled = true;
        pause.disabled = true;
        start.disabled = false;
        sec = 0, min = 0;
        hour = 0;
        DisplayTime();

    });

  
}




//***************main method for setup timer********************
setup()
//***************main method for setup timer********************
