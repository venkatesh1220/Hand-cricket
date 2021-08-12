var sc = 0;
var score = document.getElementById("score-num");
var imgR=["1-R.jpeg","2-R.jpeg","3-R.jpeg","4-R.jpg","5-R.jpeg"];
var imgL=["1-L.jpeg","2-L.jpg","3-L.jpeg","4-L.jpeg","5-L.jpeg"];
var choice1;
var choice2;
var x;
var y=0;
var sc2=0;
var run2=0;
var second=false;
var one=true;
var img = document.getElementById("mychoice");
var img2 = document.getElementById("compchoice"); 
var scoreHead=document.getElementById("scoreHead");
var scoreBox=document.getElementById("score");

// console.log(score);

function choice(x) {
    if(one){
    img.src=imgL[x-1];
    var run = x;
    if (x == y) {
        alert("You are out");
        sc = 0;
        score.innerHTML = 0;
        scoreHead.innerText="Comp Score :";
        // scoreBox.style.width+=10px;
        second=true;
        one=false;
        return;
    } 
    else {
        sc += run;
        score.innerHTML = sc;
    }
    y = Math.ceil((Math.random() * 10) % 6);

    img2.src=imgR[y-1];

    }


    if(second){
        img.src=imgL[x-1];
        run2 = x;
        if (x == y) {
            alert("You are out");
            sc2 = 0;
            scoreHead.innerText="Your Score :";
            second=false;
            one=true;
            score.innerHTML = sc2;
            return;
        } 
        else {
            sc2 += run2;
            score.innerHTML = sc2;
        }
        y = Math.ceil((Math.random() * 10) % 6);

        img2.src=imgR[y-1];
    }
}