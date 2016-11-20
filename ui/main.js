//Counter code
var button = document.getElementById('counter');

button.onclick=function(){
    
    //CREATE A REQUEST OBJECT
    var request =new XMlHttpRequest();
    
    //CAPTURE THE REQUEST AND STORE IT IN A VARIABLE
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
   request.open('GET','http://manojduli.imad.hasura.app-io',true);
   request.send(null);
    
};