

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
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');
    
      
    
      
      if(flag === 0){
        $target.attr('class', 'card open');
        temp = num;
        $temp = $target;
        flag ++;
        return false;
          
      }else{
          $target.attr('class', 'card open').delay(1000);
          
          
            if(temp !== num){
                $target.attr('class', 'card close');
                $temp.attr('class', 'card close');
                flag = 0;
                return false;
            }
          flag = 0;
      }
      
      debugger;
    console.log('click card!', num)
    


});
}

var flag = 0;
var temp = 0;
var $temp;
var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');



//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();