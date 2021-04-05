

/*** SLIDESHOW SCRIPT CODE ***/


var slides = document.querySelectorAll(".slide");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
const firstIcon = document.querySelector(".first-icon");
const secondIcon = document.querySelector(".second-icon");
const thirdIcon = document.querySelector(".third-icon");
const iconName = document.querySelector(".icon-name");
const icons = document.querySelector(".icons");
const iconErrorText = document.querySelector(".icon-error-text");
const dropableLinks = document.querySelectorAll(".dropable");
const superDropableLinks = document.querySelectorAll(".first > li > a");
const subMenus = document.querySelectorAll(".subMenu");
const superSubMenus = document.querySelectorAll(".superSubMenu");

/**Make dropable links clickable**/

dropableLinks.forEach((dropableLink) => {

    dropableLink.addEventListener("click" , (e) => {
        e.preventDefault();
        
        if(dropableLink.innerText == "Product Range"){
            subMenus[0].classList.toggle("subMenu-displaying");
            
        }

        else if(dropableLink.innerText == "Competitions"){
            subMenus[1].classList.toggle("subMenu-displaying");
        }

    })
})

superDropableLinks.forEach((superDropableLink) => {
    superDropableLink.addEventListener("click" , (e) => {

        e.preventDefault();
        
        if(superDropableLink.innerText == "Bread"){
            superSubMenus[0].classList.toggle("superSubMenu-displaying");         
        }

        else if(superDropableLink.innerText == "Buns & Rolls"){
            superSubMenus[1].classList.toggle("superSubMenu-displaying");
        }

    })
})

/**Code for slideshow**/

/**Run this code only when at the index page**/

if(location.pathname == "/sunbakeClone/index.html"){
    
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 7000);

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
}

/**Run this code only when at the contact us page**/


else if(location.pathname == "/sunbakeClone/ContactUs.html"){

/**Functions for the icons on contact us page**/

function appendIcons(firstIconsArray, secondIconsArray, thirdIconsArray) {
    let randomFirstIcon = Math.floor((Math.random() * firstIconsArray.length));
    let randomSecondIcon = Math.floor((Math.random() * secondIconsArray.length));
    let randomThirdIcon = Math.floor((Math.random() * thirdIconsArray.length));

    firstIcon.innerHTML = firstIconsArray[randomFirstIcon].icon;
    const firstIconName = firstIconsArray[randomFirstIcon].nameOfIcon;

    secondIcon.innerHTML = secondIconsArray[randomSecondIcon].icon;
    const secondIconName = secondIconsArray[randomSecondIcon].nameOfIcon;

    thirdIcon.innerHTML = thirdIconsArray[randomThirdIcon].icon;
    const thirdIconName = thirdIconsArray[randomThirdIcon].nameOfIcon;

    const randomIconIndex = Math.floor((Math.random() * 3));
    const iconNamesArray = Array.from(icons.children);
    const selectedIcon = iconNamesArray[randomIconIndex];
    const indexOfSelectedIcon = iconNamesArray.indexOf(selectedIcon);

    if (indexOfSelectedIcon == 0) {
        iconName.innerText = firstIconName;
    }

    else if (indexOfSelectedIcon == 1) {
        iconName.innerText = secondIconName;
    }

    else {
        iconName.innerText = thirdIconName;
    }


    iconNamesArray.forEach((icon) => {

        icon.addEventListener("click", () => {
            const iconIndex = iconNamesArray.indexOf(icon);
            let iconNameOnIndex;

            if (iconIndex == 0) {
                iconNameOnIndex = firstIconName;
            }

            else if (iconIndex == 1) {
                iconNameOnIndex = secondIconName;
            }

            else {
                iconNameOnIndex = thirdIconName;
            }

            if (iconName.innerText == iconNameOnIndex) {

                iconErrorText.classList.add("displaying");
                iconErrorText.innerText = "You clicked on the correct icon";

                setTimeout(() => {
                    iconErrorText.classList.remove("displaying");
                }, 3000)
            }

            else {
                iconErrorText.classList.add("displaying");
                iconErrorText.innerText = "You clicked on the wrong icon,please try again";
            }

        })

    })

}

function setIcons() {

    const firstIconsArray = [
        {
            nameOfIcon: "heart",
            icon: '<i class="fa fa-heart"></i>',
        },
        {
            nameOfIcon: "house",
            icon: '<i class="fa fa-home"></i>',
        },
        {
            nameOfIcon: "tree",
            icon: '<i class="fa fa-tree"></i>',
        },
        {
            nameOfIcon: "star",
            icon: '<i class="fa fa-star"></i>',
        },
    ];

    const secondIconsArray = [
        {
            nameOfIcon: "fighter-jet",
            icon: '<i class="fa fa-fighter-jet"></i>',
        },
        {
            nameOfIcon: "car",
            icon: '<i class="fa fa-car"></i>',
        },
        {
            nameOfIcon: "flag",
            icon: '<i class="fa fa-flag"></i>',
        },
    ];

    const thirdIconsArray = [
        {
            nameOfIcon: "mug-hot",
            icon: '<i class="fa fa-mug-hot"></i>'
        },
        {
            nameOfIcon: "truck",
            icon: '<i class="fa fa-truck"></i>',
        },
        {
            nameOfIcon: "key",
            icon: '<i class="fa fa-key"></i>',
        },
    ];

    appendIcons(firstIconsArray, secondIconsArray, thirdIconsArray);

}

setIcons();

}









