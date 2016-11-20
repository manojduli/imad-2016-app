console.log('Loaded!');

//Change the main-text
var element = document.getElementById('main-text');
element.innerHTML = 'HI! THIS IS MANOJ DULI';

//Move the Image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft= marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};    
//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick=function(){
    
    var request =new xmlHttpRequest();
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};