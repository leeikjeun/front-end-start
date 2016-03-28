//start...


function GetDoc(id){
  return document.getElementById(id);
}



var ToString = document.getElementById('ToDoString');
var domlist = GetDoc("do_list");

 

ToString.addEventListener('keyup',Todo);
                          
                          function Todo(event){
    if(event.keyCode !==13){
    event.stopPropagation();//이벤트 정지
        return;
    }

      var newTodo = ToString.value;
      ToString.value = "";
      
      
      
      domlist.innerHTML += 
         '<li> \
      <button class="delete">×</button>\
      <input type="checkbox" class="toggle-checked">\
      <span class="text">' + newTodo +'</span>\
        </li>';
      
        
  }




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
