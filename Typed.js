// Initialize Typed.js
var options = {
    strings: ["Welcome to Your Website!", "Enjoy the Typing Animation."],
    typeSpeed: 50,
    backSpeed: 20,
    smartBackspace: true,
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
    onComplete: function () {
        document.querySelector(".typed-cursor").style.display = "none";
    }
};

var typed = new Typed("#typed-output", options);
