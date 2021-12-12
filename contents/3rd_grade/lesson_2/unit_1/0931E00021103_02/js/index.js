'use strict';

function hideDiv() {
    if (document.getElementsByClassName("bg").style.backgroundImage) {
        document.getElementsByClassName("bg").style.backgroundImage = url('');
    }
    document.getElementsByClassName("title_box").style.display = 'none';
    console.log(':::::');
}
setTimeout(hideDiv(),  3000);

function toggleCard(i) {
    const element = document.getElementById("c_" + i);
    if (element.classList.contains("on")) {
        element.classList.remove("on");
        element.style.backgroundImage = "url('./images/card_back.jpg')";
    } else {
        element.classList.add("on");
        element.style.backgroundImage = "url('./images/card_front.jpg')";
    }
    console.log(element.classList);
}