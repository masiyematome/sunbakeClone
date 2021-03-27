

/*** SLIDESHOW SCRIPT CODE ***/

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,7000);
var previous = document.getElementById("previous");
var next = document.getElementById("next");

/**Code for dropdown menus**/

previous.onclick = function(){
    previouSlide();
}

next.onclick = function(){
    nextSlide();
}

function previouSlide(){
    goToSlide(currentSlide - 1);
}


function nextSlide(){
    goToSlide(currentSlide + 1);
}

function goToSlide(theValue){
    slides[currentSlide].className = "slide";
    currentSlide = (theValue + slides.length)%slides.length;
    slides[currentSlide].className = "slide showing";
}

// navigationbar subMenu display//







