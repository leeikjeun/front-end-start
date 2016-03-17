function pro(){
  var num=0;
  var result=0;

  while(num !== ""){
    if(num !== null){
      num = prompt("더할 숫자를 입력해 주세요");
      num = parseInt(num);
      result+=num;
    }
  }
  alert(result);
}

pro();
