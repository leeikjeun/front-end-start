//start...


function GetDoc(id){
    return document.getElementById(id);
}



var ToString = document.getElementById('ToDoString');
var domlist = GetDoc("do_list");
var check;
 

ToString.addEventListener('keyup',Todo);

domlist.innerHTML = loadData();
                          
function Todo(event){
    if(event.keyCode !==13){
        event.stopPropagation();//이벤트 정지
        return;
    }



    var newTodo = ToString.value;
    ToString.value = "";



    domlist.innerHTML += '<li> \
    <button class="delete" onclick="deletes(this)">×</button>\
    <input type="checkbox" class="toggle-checked" onclick = "check(this)">\
    <span class="text">' + newTodo +'</span>\
    </li>';

    saveData();
}


function check(event){
    if(event.checked){
        console.log("chage");
        event.className += " delete";
    }
}
    
function deletes(event){
    if(event.className !=="delete"){
    return;
    }

    var delect_bt = event;
    delect_bt.parentElement.remove();
    saveData();
    
}



function loadData(){
    return localStorage.getItem("todohtml");
}

function saveData(){
    localStorage.setItem("todohtml",domlist.innerHTML);
    console.log("save");
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
