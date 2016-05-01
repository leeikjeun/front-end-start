var flag;
var moreBtControl;
var apiresult;

var manu_table = getDom('menu_tables');//메뉴 테이블
var template = getDom('ListTemplate').innerHTML;//템플릿
var input_data = getDom('find_list');//불러온값 넣는 상자
var search_bt = getDom('search_bt');//클릭 버튼
var input_text = getDom('input_text');// 텍스트 공간
var more_bt = getDom('more_bt');//더보기

    search_bt.addEventListener('click',bt_click);
    input_text.addEventListener('keyup',enter_event);
    manu_table.addEventListener('click',menu_click);
    more_bt.addEventListener('click',more_button);


    more_bt.style.display = "none";

    function simpleGetJSON(simFlag){

            getJSON(completion.apiurl,function(resource){        
                    render(template, resource.channel.item, simFlag);
                    moreBtControl = resource.channel.result;
                
                    console.log(resource);
                });

        }


    function getDom(id){
    return document.getElementById(id);
    }


    function render(template, data, flag){
        var html = tmpl(template, {list: data});
            html = html.replace(/&lt;/gi,"<").replace(/&gt;/gi,">");
        
        if(flag ===1){
            input_data.innerHTML = html;
        }else{
            input_data.innerHTML +=html;
        }
    }

    function apimake(api_type){
     completion.apiurl = api.apiurl + api_type + api.apikey + api.keyword + api.pageno +api.page + api.output;
    
    }
