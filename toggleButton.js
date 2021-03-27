const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const mainMenu = document.querySelector(".mainMenu");

toggleButton.addEventListener("click" , function(){
    navbarLinks.classList.toggle("on-off");
    this.classList.toggle("on-off");
    mainMenu.classList.toggle("on-off");
})

