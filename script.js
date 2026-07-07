function showMessage() {

    alert("Hello! Thank you for visiting my profile.");

}

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

const cards = document.querySelectorAll(".card, .project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function() {

        this.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function() {

        this.style.transform = "translateY(0px)";

    });

});

window.addEventListener("load", function(){

    document.body.style.opacity = "1";

});