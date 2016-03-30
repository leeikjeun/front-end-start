var game_tile = document.getElementById("game_form");
var score_wrap = document.getElementById("score_form");
var score_form = document.getElementById("score");
var level_form = document.getElementById("level");
var miss_form = document.getElementById("miss");
var limit_form = document.getElementById("Limit");
var score = 0;
var level = 1;
var miss = 0;
var limit = 11;

var spead = 2000;

function positionChange() {
    var x = Math.random()*(document.body.scrollWidth-20);
    var y = Math.random()*(document.body.scrollHeight-score_wrap.scrollHeight-20)+score_wrap.scrollHeight;//scrollHeight는 창의 높이를 구해다줌 scrollWidth또한 똑같다
    target.setAttribute("id", "target");//set 은 엘리맨트 속성 정해줌 id값 타겟됨
    target.style.left = x+"px"; //margin left준다 
    target.style.top= y+"px";   //margin top을 준다
}

var target = document.createElement("div");


target.addEventListener("click", function() {
    ++score;
    target.setAttribute("id","click");
    if(score === 10){
        level++;
        score = 0;
        spead -= spead - 100;
    }
    score_form.innerHTML = score;
    level_form.innerHTML = level;
    miss_form.innerHTML = miss;
    limit_form.innerHTML = limit;
    
});

positionChange();
game_tile.appendChild(target);//게임타이틀에 만든 div을 넣음

setInterval(positionChange, spead); //일정시간 반복
 