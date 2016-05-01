var keyword = '';
var page = 1;
var apikey = "d5c6201c38da05dc26bce3b8cd665e85"

var txt = document.getElementById('txt');
var button = document.getElementById('find');
var list = document.getElementById('list');
var template = document.getElementById('ListTemplate').innerHTML;
var more_find = document.getElementById('more_find');

txt.addEventListener('keyup',enterEvent);
button.addEventListener('click',search);
more_find.addEventListener('click', more_search);

more_find.style.display = "none";

function search(event){
    keyword = txt.value;
    page = 1;
    var apiurl = 'https://apis.daum.net/search/vclip?q='+ keyword + '&apikey=' + apikey + '&pageno='+ page + '&output=json'
    
    getJSON(apiurl, function(res){
    console.log(res);

    render(template, res.channel.item);
    });
    
    more_find.style.display = "block";
    
}

function enterEvent(event){
    if(event.keyCode === 13 ){
        keyword = txt.value;
        page = 1;
        var apiurl = 'https://apis.daum.net/search/vclip?q='+ keyword + '&apikey=' + apikey + '&pageno='+ page + '&output=json'
    
        getJSON(apiurl, function(res){
        console.log(res);

        render(template, res.channel.item);
    });
    
    more_find.style.display = "block";
        
    }


}


function more_search(event){
    if(page !== 3){
    page++;
    var apiurl = 'https://apis.daum.net/search/vclip?q='+ keyword + '&apikey=' + apikey + '&pageno='+ page + '&output=json'

        getJSON(apiurl,function(res){
        
        renderplus(template, res.channel.item);
        });   
    }else{
        alert("더이상 페이지가 없습니다")
        
    }
}



function render(template, data){

  var html = tmpl(template, {list: data});
  list.innerHTML = html;
}

function renderplus(template, data){

    var html = tmpl(template, {list: data});
    list.innerHTML += html;
}

