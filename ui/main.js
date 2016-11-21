console.log('Loaded!');

//Change the main-text
var element = document.getElementById('main-text');
element.innerHTML = 'It is FUN';

//Move the Image
//var img = document.getElementById('imad');
//var marginLeft = 0;
//function moveRight(){
//    marginLeft= marginLeft+10;
//    img.style.marginLeft= marginLeft+'px';
//}
//img.onclick=function(){
//    var interval=setInterval(moveRight,10);
//};

//Counter code
var button = document.getElementById('counter');
button.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    //Captuer the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
   //Make a request
   request.open('GET','http://jairamdesik.imad.hasura-app.io/counter',true);
   request.send(null);
};

//Submit name
var submit = document.getElementById('submit-name');
submit.onclick = function(){
    //Create a request Object
    var request = new XMLHttpRequest();
    //Captuer the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
             //Take some action
            if(request.status === 200){
                //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++){
                    list+= '<li>' + names[i] + '</li>'; 
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            
            }
        }
    };
    //Make the Request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://jairamdesik.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};