function leftArrowPressed() {
    
    console.log("left");
    $(video).addClass("visible");

    setTimeout(function(){
        window.location.href ='pages/dromen.html';
    }, 3000);
    
 }
 
 document.onkeydown = function(evt) {
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