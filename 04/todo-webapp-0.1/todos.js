//start...


function GetDoc(id){
  return document.getElementsById(id);
}



var ToString = document.getElementById('ToDoString');


ToString.addEventListener('keyup',function(event){
  if(event.keyCode ===13){
      console.log(ToString.value);

      var newTodo = ToString.value;
      ToString = "";

      console.log(newTodo);
  }

})



/*var list = document.createElement("li");
var input_text = document.getElementsByName('text');
var input_list = document.getElementsByTagName('ul');
var text_content = '';


    function Enter_event(){
          var node = document.createTextNode(input_text[0].value);
          return node;
    }
input_text[0].addEventListener('onkeydown',Enter_Check);

function Enter_Check(event){
        // 엔터키의 코드는 13입니다.
	if(event.keyCode == 13){
      text_content = Enter_event();
		return;
	}
}*/
