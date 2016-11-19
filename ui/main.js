console.log('Loaded!');


//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML='HAI THIS IS MANOJ DULI ';

//move the image
var img = document.getElementById('imadi');
var marginleft=0;
function moveright () {
    marginleft = marginleft + 1;
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};