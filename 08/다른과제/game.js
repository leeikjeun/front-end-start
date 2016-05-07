

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'" flag = "flase">\
    <div class="front">  </div> \
    <div class="back"> \
    <img src = ./'+img_tags[card] +' width = 100px height = 100px> </div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');
    
      
    
      if($target.attr('flag')==='flase'){
          if(flag === 0){
            $target.attr('class', 'card open');
            temp = num;
            $temp = $target;
            flag ++;
            return false;

          }else{
              $target.attr('class', 'card open');



                if(temp !== num){
                    setTimeout(function(){$target.attr('class', 'card close');},500);
                    setTimeout(function(){$temp.attr('class', 'card close');},500);
                    flag = 0;
                    return false;
                }else{
                    $target.attr('flag','true');
                    $temp.attr('flag','true');
                    
                }
              flag = 0;
          }
      }
          //debugger;
        console.log('click card!', num)
    
});
}



var flag = 0;
var temp = 0;
var $temp;
var cards = [0,1,2,3, 0,1,2,3];
var img_tags = ['img/sugi.jpg','img/iu.jpg','img/han.jpg','img/wmdnl.jpg']; 
var $wrap = $('.wrap');



//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();