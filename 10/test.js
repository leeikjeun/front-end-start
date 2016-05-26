var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});


//사용방법 commend 창에 node test.js하면 실행됨

//var file = fs.writeFile('',)