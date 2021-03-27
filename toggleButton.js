const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click" , function(){
    navbarLinks.classList.toggle("on-off");
    this.classList.toggle("on-off");
})

