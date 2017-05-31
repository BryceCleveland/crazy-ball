//START - Variables
var ball = document.getElementById('ball');
var score = document.getElementById('score');
var timer = document.getElementById('timer');
var container = document.getElementById('container-container');
var seconds = 50;
var i = 1;
var size = 30;
var flag = true;
//END - Variables

    ball.onclick = function () {
        if (flag) {
        //START - Changing the ball location
            ball.style.top = (Math.floor(Math.random() * 60) + 20) + "vh";
            ball.style.left = (Math.floor(Math.random() * 60) + 20) + "vw";
        //END - Changing the ball location
         
        //START - Changing the ball size
            ball.style.height = ball.style.width = (size = size - 2) + "px";
        //END - Changing the ball size
         
        //START - Tracking the score
            score.innerHTML = i++;
        //END - Tracking the score
         
        //START - Time inecrementer
            timer.innerHTML = seconds = seconds + 6;
        //END - Time incrementer
    }
}
 
    //START - Time countdown and game end
        function countdown() {
            if (seconds == 1) {
                timer.innerHTML = "Game Over";
                lost();
            } 
            else {
                timer.innerHTML = seconds--;
            }
        }
        setInterval(countdown, 100);
    //END - Time countdown and game end
    
    //START - When the game ends
        function lost () {
            flag = false;
            ball.style.height = ball.style.width = "350px";
            ball.style.transitionDuration = "0.5s";
            ball.style.top = "10vh";
            ball.style.left = '35vw';
            ball.style.animationName = "ball";
            ball.style.animationDelay = "0.5s"
            ball.style.animationDuration = "200s";
            ball.style.animationIterationCount = "1";
            // ball.style.backgroundColor = "white";
            function innerBall() {
                ball.innerHTML = "<br><br><br><br><br><span class='ballInner'><h1>" + timer.innerHTML + "</h1><br>Score: " + i + "</span>";    
            }
            container.style.opacity = "0";
            container.style.transitionDuration= "0.2s";
            setTimeout(innerBall, 400);
            return;
        }
    //END - When the game ends
    
    countdown();