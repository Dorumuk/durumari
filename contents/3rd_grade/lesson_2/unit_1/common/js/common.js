function resizeWindow() {
  var wd = window.innerWidth,
    wh = window.innerHeight,
    sw = 1,
    sh = 1,
    scaleValue = 1,
    defaultWindowWidthSize = 1280,
    defaultWindowHeightSize = 800,
    leftPosition,
    mainRoot = document.getElementById("root_container");

  sw = wd / defaultWindowWidthSize;
  sh = wh / defaultWindowHeightSize;

  scaleValue = (sw < sh) ? sw : sh;
  leftPosition = (wd - defaultWindowWidthSize * scaleValue) / 2;

  mainRoot.style.left = leftPosition + "px";
  mainRoot.style.transform = "scale(" + scaleValue + ")";
}


window.onresize = function () {
  resizeWindow();
};

window.onload = function () {
  resizeWindow();
};
