

/*** SLIDESHOW SCRIPT CODE ***/

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,7000);
var previous = document.getElementById("previous");
var next = document.getElementById("next");
const firstIcon = document.querySelector(".first-icon");
const secondIcon = document.querySelector(".second-icon");
const thirdIcon = document.querySelector(".third-icon");

/**Code for dropdown menus**/

// previous.onclick = function(){
//     previouSlide();
// }

// next.onclick = function(){
//     nextSlide();
// }

// function previouSlide(){
//     goToSlide(currentSlide - 1);
// }


// function nextSlide(){
//     goToSlide(currentSlide + 1);
// }

// function goToSlide(theValue){
//     slides[currentSlide].className = "slide";
//     currentSlide = (theValue + slides.length)%slides.length;
//     slides[currentSlide].className = "slide showing";
// }

/**Functions for the icons on contact us page**/

function appendIcons(iconsArray){
    const randomFirstIcon = Math.floor((Math.random() * 5));
    firstIcon.innerHTML = iconsArray[randomFirstIcon].icon;

    const randomSecondIcon = Math.floor((Math.random() * 5));
    secondIcon.innerHTML = iconsArray[randomSecondIcon].icon;

    const randomThirdIcon = Math.floor((Math.random() * 5));
    thirdIcon.innerHTML = iconsArray[randomThirdIcon].icon;
    
}

function setIcons(){
    const icons = [
        {
            icon : '<i class="fa fa-heart"></i>',
        },
        {
            icon : '<i class="fa fa-home"></i>',
        },
        {
            icon : '<i class="fa fa-fighter-jet"></i>',
        },
        {
            icon : '<i class="fa fa-car"></i>',
        },
        {
            icon : '<i class="fa fa-mug-hot"></i>'
        },
        {
            icon : '<i class="fa fa-fighter-jet"></i>',
        },
       
    ]

    appendIcons(icons);
}

setIcons();







