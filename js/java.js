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
});
contact2.addEventListener("mouseout", (e) =>{
    contact2.style.display = "none";
    contact1.style.display = "inline-flex";
});

var gameboy1 = document.getElementById('gameboy1');
var gameboy2 = document.getElementById('gameboy2');
gameboy2.style.display = "none";

gameboy1.addEventListener("mouseover", (e) =>{
    gameboy1.style.display = "none";
    gameboy2.style.display = "inline-flex";

    ComputerImage = "images/preview/TGWatchtower.gif";
    whitenoise();
});
gameboy2.addEventListener("mouseout", (e) =>{
    gameboy2.style.display = "none";
    gameboy1.style.display = "inline-flex";

    ComputerImage = "images/preview/standby.gif";
    whitenoise();
});

//HOVER + Click on BUTTONS CODE
var computer = document.getElementById('computer');
var buttons = document.querySelectorAll(".btn-sm");

//HOVER
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseout", (e) =>{
        ComputerImage = "images/preview/standby.gif";
        whitenoise();
    });
    buttons[0].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/gameshow.jpg";
        whitenoise();
    });
    buttons[1].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/8employeedirectory.jpg";
        whitenoise();
    });
    buttons[2].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/7dashboard.jpg";
        whitenoise();
    });
    buttons[3].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/5InteractivePhotoGallery.jpg";
        whitenoise();
    });
    buttons[4].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/webstyleguideproject4.jpg";
        whitenoise();
    });
    buttons[5].addEventListener("mouseover", (e) =>{
        ComputerImage = "images/preview/TGDefense.gif";
        whitenoise();
    });
}
