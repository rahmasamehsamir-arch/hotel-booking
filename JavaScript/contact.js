var emailContact = document.getElementById("email-contact");
var sendMe = document.getElementById("send");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");

send.addEventListener("click", function (element) {
    element.preventDefault()

    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
    if (pattern.test(emailContact.value)) {

        m1.style.display = "none";
        m2.style.display = "none";

    } else {

        m1.style.display = "block";
        m2.style.display = "block";

    }

});


/////////////////////////////////////////////////////////

var check = document.getElementById("checkform");


var nameValidation = (input) => {

    var inputValue = input.value.trim();

    if (inputValue.length < 3)
        handleError("namerror", "enter at least 3 characters");
    else
        handleError("namerror");

};


var emailValidation = (input) => {

    var inputValue = input.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    (emailRegex.test(inputValue))
        ? handleError("emailerror")
        : handleError("emailerror", "invalid email");

};


var handleError = (errorId, msg = "") => {

    document.getElementById(errorId).innerText = msg;

};


check.addEventListener("input", (e) => {

    switch (e.target.id) {

        case "name":
            nameValidation(e.target);
            break;

        case "email-contact":
            emailValidation(e.target);
            break;

    }

});
