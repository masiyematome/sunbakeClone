



function formValidation(){   
  
    var firstValidationMessage = document.getElementById("firstValidationMessage");
    var secondValidationMessage = document.getElementById("secondValidationMessage");
    var nameInput = document.forms["contactform"]["guestName"].value;
    var emailAddress = document.forms["contactform"]["emailAddress"].value;

    if(nameInput == ""){
        firstValidationMessage.innerHTML = "The field is required";

        return false;
    }

    else if(emailAddress == ""){
        secondValidationMessage.innerHTML = "The field is required";

        return false;
    }

    else{

        return true;
    }

    
    
}