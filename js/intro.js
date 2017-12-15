

var linkse = document.getElementById( 'deurlinks' );
var rechtse = document.getElementById( 'deurrechts' );
function animateDoors(){
    
    $(linkse).addClass("animate");
    $(rechtse).addClass("animate2");
}

function leftArrowPressed() {
    
    setTimeout(function(){
        window.location.href ='dromen.html';
    }, 50000);
    
 }
 
 function rightArrowPressed() {
    
    setTimeout(function(){
        window.location.href ='durven.html';
    }, 200000);
 }
 
 document.onkeydown = function(evt) {
     animateDoors();
     evt = evt || window.event;
     switch (evt.keyCode) {
         case 37:
             leftArrowPressed();
             break;
         case 39:
             rightArrowPressed();
             break;
     }
 };