const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener('click', function(){

    if(navbarLinks.style.display == "none" || navbarLinks.style.display == ""){
        navbarLinks.style.display = "block";
        toggleButton.style.backgroundColor = "black";
    }

    else{
        navbarLinks.style.display = "none";
        toggleButton.style.backgroundColor = "rgb(243, 67, 36)";
    }
});
