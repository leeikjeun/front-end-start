var nick = "my nick is \'aji\'";

console.log(nick);

var number=0;

for(var i = 1 ; i < 101; i++){
  number += i;
}

console.log("1부터 100까지 덧셈은 =" + number + "입니다");
//짝수 출력입니다
console.log("짝수 출력");
for(var i = 0 ; i < 101 ; i++){
  if(i%2 === 0){
    console.log(" "+ i+ " ");
  }
}
//홀수 출력입니다
console.log("홀수 출력");
for(var i = 0 ; i<101;i++){
  if(i%2 == 1){
    console.log(" " + i + ' ' )
  }
}
//구구단입니다
for(var i = 1 ; i < 10 ; i++){
    for(var j = 1 ; j < 10 ; j++){
      console.log(i*j);
    }
}


(function (){
      var num = 0;

      while(true){
        var x = prompt("정수를 입력하시오");
    if(x !== ""){
      num += parseInt(x);
    }else {
      console.log(num);
      break;
    }
  }
})();
