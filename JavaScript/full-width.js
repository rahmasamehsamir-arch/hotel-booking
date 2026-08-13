
var buttons = document.querySelectorAll(".final-read-button");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("More information coming soon!");
    });
});
