
(function(app, $){

  var data = [];

  app.collection = {
    set: function(arr){
      data = arr;
      app.$wrap.trigger("addCollection", [data]);
    },
    toJSON: function() {
      return data;
    },
    add: function (todo) {
      data.push(todo);
      app.$wrap.trigger("addCollection", [data]);
    },
    remove: function (id) {

      for (var i = 0; i < data.length; i++) {

        if (data[i].id === id) {
          console.log('find', i)
          //data에서  todo를 지워야해
          data.splice(i, 1);
          break;
        }

      }//end for

      app.$wrap.trigger("removeCollection", [data]);
    },
      
    buttonSave : function(onoff,id){
        
        for(var i = 0; i <data.length; i++){
            if(data[i].id === id){
            data[i].complete = onoff;
            console.log(data);
            break;
            }
        }
        
        
        
    
        app.$wrap.trigger("setCollection",[data]);
    }

  };
})(Todo, jQuery);
