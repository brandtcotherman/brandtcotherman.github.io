//Computer Whitenoise transition timed function
var ComputerImage ="images/preview/standby.gif";

function whitenoise(){
    computer.src = "images/preview/whitenoise.gif";
    computer.style ="width:450px";

    var delayInMilliseconds = 500; //0.5 second
    setTimeout(function() {//after timer set computer screen
        computer.src = ComputerImage;
        computer.style ="width:auto";
    }, delayInMilliseconds);
}

//HOVER on ICONS CODE
var contact1 = document.getElementById('contact1');
var contact2 = document.getElementById('contact2');
contact2.style.display = "none";

contact1.addEventListener("mouseover", (e) =>{
    contact1.style.display = "none";
    contact2.style.display = "inline-flex";

    ComputerImage = "images/preview/linkedin.png";
    whitenoise();
});
contact2.addEventListener("mouseout", (e) =>{
    contact2.style.display = "none";
    contact1.style.display = "inline-flex";

    ComputerImage = "images/preview/standby.gif";
    whitenoise();
});

var gameboy1 = document.getElementById('gameboy1');
var gameboy2 = document.getElementById('gameboy2');
gameboy2.style.display = "none";

gameboy1.addEventListener("mouseover", (e) =>{
    gameboy1.style.display = "none";
    gameboy2.style.display = "inline-flex";

    ComputerImage = "images/preview/TGDefense.jpg";
    whitenoise();
});
gameboy2.addEventListener("mouseout", (e) =>{
    gameboy2.style.display = "none";
    gameboy1.style.display = "inline-flex";

    ComputerImage = "images/preview/standby.gif";
    whitenoise();
});

//HOVER on BUTTONS CODE
var computer = document.getElementById('computer');
var buttons = document.querySelectorAll(".btn");

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseout", (e) =>{
        ComputerImage = "images/preview/standby.gif";
        whitenoise();
    });
    buttons[0].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/gameshow.png";
        whitenoise();
    });
    buttons[1].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/8employeedirectory.png";
        whitenoise();
    });
    buttons[2].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/7dashboard.png";
        whitenoise();
    });
    buttons[3].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/5InteractivePhotoGallery.png";
        whitenoise();
    });
    buttons[4].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/SOS.jpg";
        whitenoise();

    });
    buttons[5].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/Santana.jpg";
        whitenoise();
    });
}

//Poster img src updates every 5 seconds
var poster = document.getElementById('poster');
var count=0;
setInterval(updateIMG, 5000);
function updateIMG( )
{
    count+=1;//use an increasing counter
    if(count===0){
        poster.src = "images/art/DieterRams.jpg";
        //https://www.behance.net/gallery/85147885/Dieter-Rams-10-Principles-of-Good-Design
    } 
    if(count===1){
        poster.src = "images/art/Loewy.jpg";
        //https://www.behance.net/gallery/89539503/Raymond-Loewy
    } 
    if(count===2){
        poster.src = "images/art/BMW.jpg";
        //https://www.behance.net/gallery/55697803/BMW-528e-Couch
    } 
    if(count===3){
        poster.src = "images/art/BMWRider.jpg";
        //https://www.behance.net/gallery/55697731/BMW-Cafe-Racer
    } 
    if(count===4){//reset counter 
        count=0;
    } 
}
