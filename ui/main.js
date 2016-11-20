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
    //CREATE A REQUEST OBJECT
    var request =new xmlHttpRequest();
    request.onreadystatechange=function (){
    if(request.readystate===xmlHttpRequest.DONE){
        //TAKE ACTION
        if(request.status == 200){
            var counter = request.responsetext;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //NOT DONE YET
  };
   //MAKE THE REQUEST
   request.open('GET','http://manojduli.imad.hasura.app-io',true)
   request.send(null);
    
};