'use strict';

function explanationClick() {
    const element = document.getElementById("explanation");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleContent() {
    // document.getElementsByClassName("answer").style.display = "block";
    // document.getElementsByClassName("question").style.display = "none";
}