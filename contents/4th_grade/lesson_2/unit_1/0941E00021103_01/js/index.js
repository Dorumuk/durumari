'use-strict';

function ViewLayer() {
    if (document.getElementById("pop").style.display==="none"){
       document.getElementById("pop").style.display='block';
    } else {
        console.log(document.getElementById("pop").style.display);
       document.getElementById("pop").style.display='none';
    }
 }