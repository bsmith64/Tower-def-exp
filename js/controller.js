
var state;
var message;

var message_box = document.getElementById('message');

var start = document.getElementById('start');
var quit = document.getElementById('quit');

// OnLoad Function * * * * *

startG.onStart();


// Click Start Button
start.addEventListener("click",function(){
	startG.launchApp();
},false);


//Click Quit Function
quit.addEventListener("click",function(){
	endG.onQuit();
},false);


