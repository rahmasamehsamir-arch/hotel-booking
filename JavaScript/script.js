var tabs = document.querySelectorAll(".tab");
var contents = document.querySelectorAll(".content");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        tabs.forEach(function(item) {
            item.classList.remove("active");
        });

        contents.forEach(function(content) {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        var id = tab.getAttribute("data-tab");

        var selectedContent = document.getElementById(id);

        if (selectedContent) {
            selectedContent.classList.add("active");
        }

    });

});


var stars = document.querySelectorAll(".star");

stars.forEach(function(star) {

    star.addEventListener("click", function() {

        var value = star.getAttribute("data-value");

        stars.forEach(function(s) {
            s.classList.remove("active");
        });

        for (var i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }

    });

});


var submitReview = document.getElementById("submit-review");

if (submitReview) {

    submitReview.addEventListener("click", function() {

        var reviewText = document.getElementById("review-text").value;
        var reviewName = document.getElementById("review-name").value;

        if (reviewText == "" || reviewName == "") {
            alert("Please enter your name and review.");
            return;
        }

        var selectedStars =
            document.querySelectorAll(".star.active").length;

        var starsText = "";

        for (var i = 0; i < 5; i++) {

            if (i < selectedStars) {
                starsText += "★";
            } else {
                starsText += "☆";
            }

        }

        var result = document.getElementById("review-result");

        if (result) {

            result.innerHTML =
                "<div class='user-review'>" +
                "<h4>" + reviewName + "</h4>" +
                "<div class='review-stars'>" + starsText + "</div>" +
                "<p>" + reviewText + "</p>" +
                "</div>";

        }

    });

}


// ===============================
// Shop 2 → Single Product
// ===============================

var productButtons = document.querySelectorAll(".select-product");

console.log("Number of buttons:", productButtons.length);

productButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Button clicked");

        var product = button.getAttribute("data-product");

        console.log("Product:", product);

        window.location.href =
            "single-product.html?product=" + product;

    });

});


// ===============================
// Single Product Data
// ===============================

var products = {

    "Chalet": {

        name: "Chalet",
        price: "$30.50",
        image: "../images/square-03.jpg"

    },

    "double-room": {

        name: "Double Room",
        price: "$28.90",
        image: "../images/square-05.jpg"

    },

    "family-room": {

        name: "Family Room",
        price: "$34.80",
        image: "../images/square-07.jpg"

    },

    "garden-room": {

        name: "Garden Room",
        price: "$45.60",
        image: "../images/square-02.jpg"

    },

    "lake-view": {

        name: "Lake View",
        price: "$15.50",
        image: "../images/square-05.jpg"

    },

    "mini-apt": {

        name: "Mini Apt.",
        price: "$45.70",
        image: "../images/square-08.jpg"

    },

    "sea-room": {

        name: "Sea Room",
        price: "$37.20",
        image: "../images/square-01.jpg"

    },

    "vip-suite": {

        name: "VIP Suite",
        price: "$26.80",
        image: "../images/square-04.jpg"

    }

};


// ===============================
// Get Product From URL
// ===============================

var urlParams =
    new URLSearchParams(window.location.search);

var productId =
    urlParams.get("product");


// ===============================
// Change Single Product
// ===============================

if (productId && products[productId]) {

    var product = products[productId];

    var productName =
        document.getElementById("product-name");

    var productPrice =
        document.getElementById("product-price");

    var productImage =
        document.getElementById("product-image");


    if (productName) {

        productName.textContent =
            product.name;

    }


    if (productPrice) {

        productPrice.textContent =
            product.price;

    }


    if (productImage) {

        productImage.src =
            product.image;

        productImage.alt =
            product.name;

    }

}

var addToCartButton = document.querySelector(".cart-row button");
var cartMessage = document.getElementById("cart-message");

addToCartButton.addEventListener("click", function () {

    cartMessage.style.display = "flex";

});
