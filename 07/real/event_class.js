    function menu_click(event){//봐꿔주기
        
          var test = manu_table.getElementsByTagName('li');
          for(var i = 0; i < test.length;i++){
            if(test[i].getAttribute("class")==="active"){
              test[i].className = "";
            }
          }
            event.target.parentNode.className = "active";
            switch(event.target.parentNode.getAttribute('id')){
                case "board" : 
                    apiresult = api.board;
                    flag = 1;
                    simpleGetJSON(flag);
    
                    break;
                case "vclip" : 
                    apiresult = api.vclip;
                    flag = 1;
                    simpleGetJSON(flag);
                    
                    break;
                case "image" : 
                    apiresult = api.image;
                    flag = 1;
                    simpleGetJSON(flag);
                    
                    break;
                case "knowledge" : 
                    apiresult = api.knowledge;
                    flag = 1;
                    simpleGetJSON(flag);
                    
                    break;
                case "blog" : 
                    apiresult = api.blog;
                    flag = 1;
                    simpleGetJSON(flag);
                    
                    break;
                case "cafe" : 
                    apiresult = api.cafe;
                    flag = 1;
                    simpleGetJSON(flag);            
                    break;
            }
            apimake(apiresult);
   }


    function enter_event(event){
     
        if(event.keyCode === 13){
        
            api.keyword = input_text.value;
            api.page = 1;
            if(api.keyword !== ""){
                apiresult = api.board;
                apimake(apiresult);
                
                var flag = 1;
                
                simpleGetJSON(flag);
                if(moreBtControl === "10"){
                        more_bt.style.display = "block";
                }
            }else{
            window.alert("검색어 입력하세요");
            }

        }
    }

    function bt_click(event){
        
        api.keyword = input_text.value;
        api.page = 1;
        if(api.keyword !== ""){
            apiresult = api.board;
            apimake(apiresult);
            
            var flag = 1;
            simpleGetJSON(flag);
            if(moreBtControl === "10"){
                        more_bt.style.display = "block";
            }
        }else{
        window.alert("검색어 입력하세요");
        }
        
    }


    function more_button(event){
        flag = 2;
        var endpage = 3;
        api.page++;
        apimake(apiresult);
        
        getJSON(completion.apiurl,function(resource){
            moreBtControl = resource.channel.result;
        });
        
        if(api.page !== endpage && moreBtControl !== "0" ){
            simpleGetJSON(flag);
        }else{
            more_bt.style.display = "none";
        }
    }