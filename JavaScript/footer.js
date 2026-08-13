var email = document.getElementById("email");
var button = document.getElementById("subscribe");

var message1 = document.getElementById("msg1");
var message2 = document.getElementById("msg2");

button.addEventListener("click", function (element) {
    element.preventDefault()

    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
    if (pattern.test(email.value)) {

        message1.style.display = "none";
        message2.style.display = "none";

    } else {

        message1.style.display = "block";
        message2.style.display = "block";

    }

});
